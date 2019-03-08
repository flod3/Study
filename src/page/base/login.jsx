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
           show : false
       }
    }

     onChange() {
        this.setState({
            show : !this.state.show
        })
    }

    render(){

        const { getFieldDecorator } = this.props.form;
        
        return(
            <div className="LoginContainer">
                
           
                <div className='content'>
                    <Row>
                    <Button type="primary" onClick={this.onChange.bind(this)}>show</Button>
                     <QueueAnim className="demo-content" type={['left','right']} 
                      ease={['easeOutQuart', 'easeInOutQuart']}
                      leaveReverse
                   >
                    {
                        this.state.show?[  
                        <Col className="login-content-a" span={6} offset={9} key ="main">
                        
                        Username
                        <QueueAnim className="demo-content" type={['left','right']} 
                      ease={['easeOutQuart', 'easeInOutQuart']}
                   >{
                    this.state.show?[  
                  
                      <FormItem hasFeedback >
                                {getFieldDecorator('username', {
                                  rules: [
                                    { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="user" />}  type="text" />)}
                      </FormItem>
                    ] : null
                       }
                      </QueueAnim>
                      Password
                     <FormItem hasFeedback key = 'b'>
                                {getFieldDecorator('password', {
                                  rules: [
                                    { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="lock" />} type="text" />)}
                      </FormItem>
                      <Button size="large" className="login-btn">sign in</Button>
               
                     </Col>
                         ] : null
                    }
                     </QueueAnim>
                     <Col className="login-content-b"  span={6} offset={9}>
                            Don't have account? <br/>
                            <Button className="login-btn">Sign up!</Button> 
                     </Col>
      
                   </Row>
                </div>
               
            </div>
        )
    }
}