import React from 'react';
import {Router, Route,Link,Switch} from 'react-router-dom';
import {Form} from 'antd';
import Login from '../page/base/login.jsx';
import {Home} from "base/home.jsx";
import {Hello} from "base/haha.js";
import {Matarial} from "base/matarial.jsx";
import {Chart} from "base/chart.jsx";
import Editor from 'base/editor.jsx'
import Person from 'base/person.jsx';
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
              <Route path="/home" component={Home}/>
              <Route path="/person" component={Person}/>
              <Route path="/haha" component={Hello}/>
              <Route path="/chart" component={Chart}/>
              <Route path="/login" component={WrappedLogin}/>
              <Route path="/matarial" component={Matarial}/>
              <Route path="/editor" component={Editor}/>
          </div>
             
         </Router>
         
     </div>
        )
    }
}
   
