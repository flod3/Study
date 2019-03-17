import React from 'react';
import {Frame} from 'component/frame.jsx'

import createBrowserHistory from "history/createBrowserHistory";
import './base.css'
const customHistory = createBrowserHistory();
export class Home extends React.Component{
    constructor(props){
        super(props);
    }


    // font-awecome 使用的时候，记得加入如下几个模块
    // @fortawesome/fontawesome
    //  @fortawesome/react-fontawesome
    // @fortawesome/fontawesome-free-solid
    render(){
        return (
            <div>
                <Frame history={customHistory}/>
                <div className="bgimg">
                dd
                    </div>          
            </div>
        )
    }
}