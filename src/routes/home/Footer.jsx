import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          {/* Copyright © 2017 The Project by <a href="#">Ant Motion</a>. All Rights Reserved */}
          Copyright 苏州尼特数据科技有限公司 版权所有. 地址：苏州工业园区东长路88号2.5产业园N1幢903室 0512-50391969
          <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target='_blank' style={{'marginLeft':'10px'}}>苏ICP备18045936号-1</a>
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
