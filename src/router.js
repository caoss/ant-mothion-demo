import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import Home from './routes/IndexPage';
import IndexPage from './routes/home';
import Nav from './routes/home/Nav';
class App2 extends React.Component {//es6
  render(){
      return(
          <div>
              <Nav />
             {this.props.children}
          </div>
      );
  }
}
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <App2>
          <Route path="/" exact component={IndexPage} />
          <Route path="/home" exact component={Home} />
          </App2>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
