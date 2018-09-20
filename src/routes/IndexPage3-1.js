import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { List, Avatar, Icon,Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import listData from './listData3';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function IndexPage() {
  return (
    <div style={{'width':'1200px','margin':'0 auto','minHeight':'600px' }}>
        <Breadcrumb style={{'padding':'20px 0', }}>
          <Breadcrumb.Item><Link to="home">主页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>市场报告</Breadcrumb.Item>
        </Breadcrumb>
        <h2 style={{'marginBottom':'20px','textAlign':'center'}}>
          {listData[0].title}
        </h2>
        <p>
          {listData[0].content}
        </p>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
