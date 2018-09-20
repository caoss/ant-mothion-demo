import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import Home from './routes/IndexPage';
import Home2 from './routes/IndexPage2';
import Home3 from './routes/IndexPage3';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import IndexPage from './routes/home';
import AboutUs from './routes/home/aboutUs';
import Nav from './routes/home/Nav';
import Footer from './routes/home/Footer';
class App2 extends React.Component {//es6
  render(){
      return(
          <div>
              <Nav />
             {this.props.children}
             <Footer />
          </div>
      );
  }
}
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" exact component={Register} />
        <App2>
          <Route path="/" exact component={IndexPage} />
          <Route path="/index" exact component={IndexPage} />
          <Route path="/hyfa" exact component={Home} />
          <Route path="/zyfw" exact component={Home2} />
          <Route path="/scbg" exact component={Home3} />
          <Route path="/about_us" exact component={AboutUs} />
        </App2>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
