import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';


import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';

import './less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !window.location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (window.location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }

  }

  render() {
    return (
      <div className="templates-wrapper">
        <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>,
      </div>
    );
  }
}
