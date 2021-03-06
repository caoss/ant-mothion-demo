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

function IndexPage() {
  return (
    <div style={{'width':'1200px','margin':'0 auto','minHeight':'600px'  }}>
      <Breadcrumb style={{'padding':'20px 0', }}>
          <Breadcrumb.Item><Link to="/home">主页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>专业服务</Breadcrumb.Item>
        </Breadcrumb>
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
            <Link to={ `./zy/${item.id}` }   >
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
