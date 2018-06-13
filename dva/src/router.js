import React from 'react';
import { Router ,Switch, Route} from 'dva/router';
import App from './routes/App/index';
import Home from './routes/App/home';
import Skill from './routes/Skill';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/skill"  exact component={Skill}/>
        </Switch>
      </App>
    </Router>
  );
  // const routes = [
  //   {
  //     path:'',
  //     component:App,
  //   }
  // ]
  // console.log(routes)
  // return (<Router history={history} routes={routes} />)
}

export default RouterConfig;
