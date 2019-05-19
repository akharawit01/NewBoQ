import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Router, Route } from 'react-router-dom';

import BoqList from '../../pages/boq/BoqListing';
import BoqDetail from '../../pages/boq/BoqDetail';

const MainRoute = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <>Dashboardsx Akharawit Aryakom</>;
          }}
        />
        <Route exact path="/boq" component={BoqList} />
        <Route exact path="/boq/:id" component={BoqDetail} />
        <Route exact path="/projects" component={page404} />
        <Route component={page404} />
      </Switch>
    </Router>
  );
};

const page404 = () => <div>Coming soon....</div>;

export default withRouter(MainRoute);
