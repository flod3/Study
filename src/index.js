import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
// import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Home extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <Button type="primary" >hhhhhhh</Button>
            </div>
        )
    }
}



ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
