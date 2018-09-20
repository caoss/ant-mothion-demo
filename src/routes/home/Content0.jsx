import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import logo from './logo.png';
import { NavLink,Link } from 'dva/router';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="100%" src={ logo } />
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            企业行业解决方案，因为专一，所以专业
          </p>
          <div id={`${props.id}-button`}>
            <Button type="ghost" key="button"  style={{ 'margin':'30px 15px'}}>
              <Link to='./hyfa'>
                  行业方案
              </Link>
            </Button>
            <Button type="ghost1" key="button" style={{ 'margin':'30px 15px'}}>
              <Link to='./zyfw'>
                  专业服务
              </Link>
            </Button>
            <Button type="ghost2" key="button"  style={{ 'margin':'30px 15px'}}>
              <Link to='./scbg'>
                  市场报告
              </Link>
            </Button>
            <Button type="ghost3" key="button"  style={{ 'margin':'30px 15px'}}>
              <Link to='./about_us'>
                  联系我们
              </Link>
            </Button>
          </div>
        </QueueAnim>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
