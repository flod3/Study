import React from 'react';
import './login.css';
import 'antd/dist/antd.css';
import {Row,Col,Button,Form,Input,Icon} from 'antd';
import {regExpConfig} from '../../config/regular.config.js'
import QueueAnim from 'rc-queue-anim';

const FormItem = Form.Item;

export default class Login extends React.Component{
   
    constructor(props){
        super(props);
       this.state={
           show : true
       }
     
    }

     onChange() {
        this.setState({
            show : !this.state.show
        })
    }


    loginCol(){

      const { getFieldDecorator } = this.props.form;
      return(
        <Col className="login-content-a" span={6} offset={9} key ="login">
        Username
        <QueueAnim type="bottom">
        <FormItem hasFeedback key="1">
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
      <Button size="large" className="login-btn">login</Button>
           
           <Button type="dashed" className="login-btn" onClick={this.onChange.bind(this)}>Create an account</Button> 
         
            
           
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