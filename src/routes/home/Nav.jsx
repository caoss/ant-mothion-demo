import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import { Menu, Icon } from "antd";
import { NavLink,Link } from 'dva/router';
const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen
    });
  };
  render() {
    let self = this;
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const navData =[
        {
          'menu':'首页',
          'path':'/index',
        },
        {
          'menu':'产品',
          'path':'/home',
        },
        {
          'menu':'联系我们',
          'path':'/about_us',
        },
        {
          'menu':'登录',
          'path':'/login',
        },
        {
          'menu':'注册',
          'path':'/register',
        },
      ];

    const navChildren =navData.map((item, i) => (
        <Item key={i}>
            <NavLink to={item.path}>{item.menu}</NavLink>
        </Item>
    ));


    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: "from" }}
        {...props}
      >
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
          id={`${this.props.id}-logo`}
        >
        <Link to='./'>
            <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt=''/>
        </Link>
        </TweenOne>


        {isMobile ?

        (
          <div
            className={`${this.props.className}-phone-nav${
              this.state.phoneOpen ? " open" : ""
            }`}
            id={`${this.props.id}-menu`}
          >
            <div
              className={`${this.props.className}-phone-nav-bar`}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
            <div className={`${this.props.className}-phone-nav-text`}>
              <Menu
                mode="inline"
                theme="dark"
                selectedKeys={[this.state.current]}
              >
              {
                this.props.hideNav?
                ''
                :
                navChildren
              }
              </Menu>
            </div>
          </div>
        )
        :
        (
          <TweenOne
            className={`${this.props.className}-nav`}
            animation={{ x: 30, type: "from", ease: "easeOutQuad" }}
          >
            <Menu
              mode="horizontal"
              theme="dark"
              selectedKeys={[this.state.current]}
            >
              {
                this.props.hideNav?
                <Link to='./'>返回首页</Link>
                :
                navChildren
              }
            </Menu>
          </TweenOne>
        )}
        </TweenOne>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string
};

Header.defaultProps = {
  className: "header0"
};

export default Header;
