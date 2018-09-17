import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { List, Avatar, Icon } from 'antd';
import { Link } from 'dva/router';
import listData from './listData';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function IndexPage() {
  return (
    <div style={{'width':'1200px','margin':'0 auto' }}>
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={listData}
        // footer={<div><b>ant design</b> footer part</div>}
        renderItem={item => (
          <List.Item
            key={item.title}
            // extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Link to={item.href}>{item.title}</Link>}
              description={item.description}
            />
            { item.content.substr(0,100)+'...' }
            <Link to='./login'  >
            <span style={{ 'color':'red' }}>(付费)</span>
            -[详情]</Link>
          </List.Item>
        )}
      />,
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
