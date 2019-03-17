import React from "react" 
import {Table} from 'antd';
import {PersonDatas,Columns} from '../../json/person.js'

export class Hello extends React.Component{
    render(){
        return(
            <div>
               <Table  dataSource={PersonDatas} columns = {Columns}/>
           </div>
        )
    }
}