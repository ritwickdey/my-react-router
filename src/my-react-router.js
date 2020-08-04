/*eslint-disable react-hooks/exhaustive-deps*/
import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useEffect,
} from 'react';

const __RouterContext = createContext(null);

const RouterConectProvider = __RouterContext.Provider;

const history = createBrowserHistory();

export function BrowserRouter(props) {
  const [location, setLocation] = useState(() => ({ ...window.location }));
  const [ctxValue, setCtxValue] = useState(null);

  useEffect(() => history.listen(setLocation), []);

  useEffect(() => setCtxValue({ history, location }), [location]);

  const matchedChild = useMemo(() => {
    if (!ctxValue) return null;
    const path = ctxValue.location.pathname.toUpperCase();
    const child = props.children.find(
      (child) => child.props.path.toUpperCase() === path
    );

    return child || null;
  }, [ctxValue]);

  return (
    <RouterConectProvider value={ctxValue}>{matchedChild}</RouterConectProvider>
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
export function Redirect(props) {
  const { to } = props;
  const route = useContext(__RouterContext);

  useEffect(() => {
    route.history.push(to);
  }, []);

  return null;
}

function createBrowserHistory() {
  const listeners = [];

  function popstateLister() {
    const pathname = window.location.pathname;
    broadcastToListers(pathname);
  }

  window.addEventListener('popstate', popstateLister);

  function broadcastToListers(pathname) {
    const newLocation = { ...window.location, pathname };
    listeners.forEach((listen) => {
      listen(newLocation);
    });
  }

  return {
    push: (pathname) => {
      window.history.pushState(null, null, pathname);
      broadcastToListers(pathname);
    },

    listen: (listener) => {
      listeners.push(listener);
      return () => listeners.filter((l) => l !== listener);
    },

    destroy: () => {
      window.removeEventListener('popstate', popstateLister);
    },
  };
}
