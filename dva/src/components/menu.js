/**
 * @author tanzhiling 
 * @function 头部菜单栏
 * @reducer app
 */
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Divider, Modal, Checkbox, Form, Icon, Input, } from 'antd';
import './menu.less';
const FormItem = Form.Item;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false
    }
  }
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
    return (
      <div className="menu">
        <div className="menu-content">
          <div className="menu-content-left">
            <img src={require('../assets/logo.jpg')} alt="" />
          </div>
          <div className="menu-content-center">
            {
              this.props.menuList.map((v, index) => {
                return (
                  <li key={index}>
                    <Link to={v.path}>
                      <span>{v.title_CN}</span>
                      <span>{v.title_US}</span>
                    </Link>
                  </li>
                )
              })
            }
          </div>
          <div className="menu-content-right">
            <div className="loginregister">
              <Button type="primary" onClick={() => {
                this.setState({
                  loginModal:!this.state.loginModal
                })
              }}>登录</Button>
              <Divider type="vertical" />
              <Button type="primary" onClick={() => {
                this.setState({
                  registerModal:!this.state.registerModal
                })
              }}>注册</Button>
            </div>
          </div>
          <Modal
            width="320px"
            style={{ 'top': 240 }}
            title="登录"
            visible={this.state.loginModal}
            footer={null}
            onCancel={() => {
              this.setState({
                loginModal:!this.state.loginModal
              })
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '手机号不能为空!' }],
                })(
                  <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <a href="" style={{float:'right'}}>忘记密码</a>
                <Button type="primary" htmlType="submit"style={{width:'100%'}}>
                  登录
                </Button>
                Or <a onClick={() => {
                this.setState({
                  loginModal:!this.state.loginModal,
                  registerModal:!this.state.registerModal
                })
              }}>注册!</a>
              </FormItem>
            </Form>
          </Modal>
          <Modal
            width="320px"
            style={{ 'top': 240 }}
            title="注册"
            visible={this.state.registerModal}
            footer={null}
            onCancel={() => {
              this.setState({
                registerModal:!this.state.registerModal
              })
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '用户名不能为空!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '手机号不能为空!' }],
                })(
                  <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit"style={{width:'100%'}}>
                  注册
                </Button>
                Or 已有账号<a onClick={() => {
                this.setState({
                  loginModal:!this.state.loginModal,
                  registerModal:!this.state.registerModal
                })
              }}>去登录</a>
              </FormItem>
            </Form>
          </Modal>
        </div>

      </div>
    )
  }
}
Menu = Form.create({})(Menu);
export default connect(({ app }) => (app), (dispatch, own) => {
  return { dispatch, own }
})(Menu);