import React from 'react';
import Content4 from '../home/Content4';
import Nav from '../home/Nav';
class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Nav hideNav={true}/>
        <Content4 />
      </div>
    );
  }
}
export default LoginPage;
