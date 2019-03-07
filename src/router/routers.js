import React from 'react';
import {Router, Route,Link} from 'react-router-dom';
import Login from '../page/base/login.jsx';
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
        return(
     <div>
         <Router history={customHistory}>
    
         <Route path="/" component={Login}/>
         </Router>
         
     </div>
        )
    }
}
   
