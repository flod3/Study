import React, { Component } from "react"
import {Frame} from 'component/frame.jsx';
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

export class Chart extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
              <Frame history={customHistory} defaultOpenKey="workstation" defaultSelectedKey="chart"/>
               <div className="home_content">
                    法可油
                </div>                
            </div>
        )
    }
}

