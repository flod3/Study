import React from 'react';
import {TopBar} from 'component/topbar.jsx'
import {SideBar} from 'component/sidebar.jsx'
import createBrowserHistory from "history/createBrowserHistory";
import {Row,Col} from 'antd'
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
                <TopBar/>
                <Row>
                    <Col span={6}>
                       <SideBar/>
                    </Col>
                    <Col span={18}>
                        <div className="bgimg">
                        dd
                    </div>      
                    </Col>
                </Row>
                
                   
            </div>
        )
    }
}