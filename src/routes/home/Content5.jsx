import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;


class Content extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
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
         <div style={{ 'width':'500px','border':'1px solid #fff','padding':'50px','paddingTop':'80px','margin':'0 auto','borderRadius':'2px','boxShadow': '0 0 10px rgba(50, 250, 255, 0.75)' }}>
        <Form onSubmit={this.handleSubmit} className="login_form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style = {{ 'color': 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style = {{ 'color': 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password2', {
              rules: [{ required: true, message: '重复密码' }],
            })(
              <Input prefix={<Icon type="lock" style = {{ 'color': 'rgba(0,0,0,.25)' }} />} type="password2" placeholder="重复密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
              或者
            <Link to='./login'>登录</Link>
          </FormItem>
        </Form>
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

const WrappedHorizontalLoginForm = Form.create()(Content);

export default WrappedHorizontalLoginForm;
