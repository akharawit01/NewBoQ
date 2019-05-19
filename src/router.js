import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

import Layout from './components/layouts';
import Login from './pages/login';

const AppRoute = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Layout} />
      </Switch>
    </Router>
  );
};

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  );
}

export default withRouter(AppRoute);
