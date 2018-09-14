import React from 'react';
import Content5 from '../home/Content5';
import Nav from '../home/Nav';
class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Nav hideNav={true}/>
        <Content5 />
      </div>
    );
  }
}
export default LoginPage;
