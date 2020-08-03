import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useEffect,
} from "react";

const __RouterContext = createContext(null);

const RouterConectProvider = __RouterContext.Provider;

const history = createBrowserHistory();

export function BrowserRouter(props) {
  const [location, setLocation] = useState(() => ({ ...window.location }));

  useEffect(() => {
    const unsubscibe = history.listen((location) => setLocation(location));
    return () => unsubscibe();
  }, []);

  const values = useMemo(() => {
    return {
      history,
      location,
    };
  }, [location]);

  const matchedChild = useMemo(() => {
    const child = props.children.find(
      (child) => child.props.path === values.location.pathname
    );

    return child || null;
  }, [values]);

  return (
    <RouterConectProvider value={values}>{matchedChild}</RouterConectProvider>
  );
}

export function Route(props) {
  const route = useContext(__RouterContext);
  const { component: Component } = props;
  return <Component {...route} />;
}

export function Link(props) {
  const { to, ...rest } = props;
  const route = useContext(__RouterContext);

  function doNavigate(e) {
    e.preventDefault();
    route.history.push(to);
  }
  return (
    <a href={to} onClick={doNavigate} {...rest}>
      {props.children}
    </a>
  );
}

function createBrowserHistory() {
  const listeners = [];

  window.addEventListener("popstate", () => {
    const pathname = window.location.pathname;
    tellAllListerThatRouteChanged(pathname);
  });

  function tellAllListerThatRouteChanged(pathname) {
    const newLocation = { ...window.location, pathname };
    listeners.forEach((listen) => {
      listen(newLocation);
    });
  }

  return {
    push: (pathname) => {
      window.history.pushState(null, null, pathname);
      tellAllListerThatRouteChanged(pathname);
    },

    listen: (listener) => {
      listeners.push(listener);
      return () => listeners.filter((l) => l !== listener);
    },
  };
}
