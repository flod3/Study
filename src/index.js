import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import {Routers} from './router/routers.js';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Gate extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <Routers/>

            </div>
        )
    }
}



ReactDOM.render(<Gate />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
