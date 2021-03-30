import { Route, Switch } from 'react-router-dom';

import Form from './Form/Form';
import Recipes from './Recipes/Recipes';
import Page404 from './Page404/Page404';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/form' component={Form} />
        <Route exact path='/' component={Recipes} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default Routes;
