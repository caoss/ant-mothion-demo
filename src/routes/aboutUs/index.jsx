import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';


// import Content0 from './Content0';
import Content0 from '../home/Content2';

import './less/antMotion_style.less';
import './index.css';
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
    const children = [
      <Content0 id="content_8_0" key="content_8_0" isMobile={this.state.isMobile}/>,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
