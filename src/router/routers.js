import React from 'react';
import {Router, Route,Link,Switch} from 'react-router-dom';
import {Form} from 'antd';
import Login from '../page/base/login.jsx';
import {SideBar} from "component/sidebar.jsx"
import createBrowserHistory from "history/createBrowserHistory";
// // 用户管理
// const login = (location, cb) => {
//     require.ensure([], (require) => {
//       cb(null, require('../pages/base/login').default)
//     }, 'login')
//   }


const customHistory = createBrowserHistory();

export class Routers extends React.Component{


    render(){
        const WrappedLogin = Form.create({ name: 'login' })(Login);
        return(
     <div>
         <Router history={customHistory}>
          <div>
              <Route path="/" component={SideBar}/>
              
              <Route path="/login" component={WrappedLogin}/>
          </div>
             
         </Router>
         
     </div>
        )
    }
}
   
