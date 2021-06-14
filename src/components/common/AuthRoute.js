import { Route, Redirect } from 'react-router-dom';

const AuthRoute = (props) => {
  const { path, component: Component, exact, endPoint, redirect, propObject } = props;
  
  return (
    <Route 
      path={path}
      exact={exact}
      render={
        (props) => {
          const propInsert = () => {
            if (propObject !== null && propObject !== undefined) {
              const keys = Object.keys(propObject);
              const values = Object.values(propObject);
              keys.map((v, i) => {
                props[v] = values[i]
              });
            }
            return props;
          };
          return (
            endPoint 
            ? <Component {...propInsert()} />
            : <Redirect to={redirect} {...props} />
          )
        }
      }
    />
  )
}

export default AuthRoute;