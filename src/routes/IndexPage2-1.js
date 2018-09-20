import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { List, Avatar, Icon,Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import listData from './listData2';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function IndexPage(data) {
  let id = data.match.params.id;
  return (
    <div style={{'width':'1200px','margin':'0 auto','minHeight':'600px' }}>
        <Breadcrumb style={{'padding':'20px 0', }}>
          <Breadcrumb.Item><Link to="/home">主页</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/zyfw">专业服务</Link></Breadcrumb.Item>
        </Breadcrumb>
        <h2 style={{'marginBottom':'20px','textAlign':'center'}}>
          {listData[id].title}
        </h2>
        <div style={{'textIndent':'2em','lineHeight':'30px'}} dangerouslySetInnerHTML={{__html: listData[id].content }} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
