import React from 'react';
import './login.css';
import 'antd/dist/antd.css';
import {Row,Col,Button,Form,Input,Icon,message} from 'antd';
import {regExpConfig} from '../../config/regular.config.js'
import QueueAnim from 'rc-queue-anim';
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();
const FormItem = Form.Item;
export default class Login extends React.Component{
   
    constructor(props){
        super(props);
       this.state={
           show : true,
           l_username : null,
           l_password : null
       }
     
    }

     onChange() {
        this.setState({
            show : !this.state.show
        })
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err&&values.username!=undefined&&values.password!=undefined) {
          window.location.href = 'http://47.101.57.84:3000/home';
        }else{
         message.warn('请输入正确的用户名和密码');
        }
      });
    }



    loginCol(){

      const { getFieldDecorator } = this.props.form;
      return(
        <Col className="login-content-a" span={6} offset={9} key ="login">
        Username
         <Form onSubmit = {this.onSubmit} method="GET" >
        <QueueAnim type="bottom">
        
        <FormItem hasFeedback key="1" >
                {getFieldDecorator('username', {
                  rules: [
                    { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                  ],
                })(<Input addonBefore={<Icon type="user" />}  type="text" />)}
      </FormItem>
     
      Password
    
     <FormItem hasFeedback key = '2'>
                {getFieldDecorator('password', {
                  rules: [
                    { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },
                  ],
                })(<Input addonBefore={<Icon type="lock" />} type="text" />)}
      </FormItem>
      
      </QueueAnim>
      <Button size="large" className="login-btn" htmlType="submit" >login</Button>
           
           <Button type="dashed" className="login-btn" onClick={this.onChange.bind(this)}>Create an account</Button> 
         </Form>
            
           
     </Col>
      )
    }

    signinCol(){

      const { getFieldDecorator } = this.props.form;
      return(
        <Col className="login-content-a" span={6} offset={9} key ="sigin">
     <QueueAnim type="bottom">
        Username
      <FormItem hasFeedback key="1">
                {getFieldDecorator('s_username', {
                  rules: [
                    { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                  ],
                })(<Input addonBefore={<Icon type="user" />}  type="text" />)}
      </FormItem>

      EMail address
    
    <FormItem hasFeedback key="2">
               {getFieldDecorator('s_email', {
                 rules: [
                   { pattern: regExpConfig.isEmial, message: '输入正确邮箱格式' },
                 ],
               })(<Input addonBefore={<Icon type="mail" />} type="email" />)}
     </FormItem>
  
      Password
    
     <FormItem hasFeedback key="3">
                {getFieldDecorator('s_password', {
                  rules: [
                    { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },
                  ],
                })(<Input addonBefore={<Icon type="lock" />} type="text" />)}
        </FormItem>
        </QueueAnim>
       <Button size="large" className="login-btn">sign up</Button>
       
       <Button type="dashed" className="login-btn" onClick={this.onChange.bind(this)}>aleady have an account</Button> 
            
     </Col>
      )
    }

    render(){

        return(
            <div className="LoginContainer">
                <div className='content'>
                    <Row>
                     <QueueAnim className="demo-content" type={['left','right']} 
                      ease={['easeOutQuart', 'easeInOutQuart']}
                      
                   >
                    {
                        this.state.show?[  
                          this.loginCol()
                         ] : null
                    }
                     </QueueAnim> 
                     <QueueAnim className="demo-content" type={['left','right']} 
                      ease={['easeOutQuart', 'easeInOutQuart']}
                      
                   >
                    {
                        this.state.show?[  
                          null
                         ] : this.signinCol()
                    }  
                     </QueueAnim> 
                     
                   </Row>
                </div>
               
            </div>
        )
    }
}

