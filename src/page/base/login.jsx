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
                {/* <Button type="primary" onClick={this.onChange.bind(this)}>show</Button>
                <QueueAnim className="demo-content" type={['left','right']} 
                ease={['easeOutQuart', 'easeInOutQuart']}
                >
                </QueueAnim> */}
           
                <div className='content'>
                    <Row>
                      <Col className="login-content" span={6} offset={9}>
                      <div><svg height="48" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="48" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </div>
                        Username
                      <FormItem hasFeedback>
                                {getFieldDecorator('username', {
                                  rules: [
                                    { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="user" />}  type="text" />)}
                      </FormItem>
                      Password
                     <FormItem hasFeedback>
                                {getFieldDecorator('password', {
                                  rules: [
                                    { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="lock" />} type="text" />)}
                      </FormItem>
                      <Button size="large" className="login-btn">sign in</Button>
               
                     </Col>
                   </Row>
                </div>
               
            </div>
        )
    }
}