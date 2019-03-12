import React from 'react';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import {sidebar} from '../../menu.js';

const SubMenu = Menu.SubMenu;



export class Home extends React.Component{

    constructor(props){
        super(props);

    }

    getNodes(sidebar){
        return(
              sidebar.map((side)=>{
                if(side.child==null){
                    console.log(side.value)
                  return(
                      <Menu.Item key = {side.key}>{side.value}</Menu.Item>
                  )
                }else{
                    let childmenu=side.child;
                    return(
                      <SubMenu key = {side.key} title={side.value} >
                            {this.getNodes(childmenu)}
                      </SubMenu>
                    )
                }
              })
        
        )
    }

    render(){
        return(
            <div>
               <Menu
               style={{width:'200px'}}
           
               >
                 {
                     sidebar.map((side)=>{
                    if(side.child==null){
                    console.log(side.value)
                      return(
                      <Menu.Item key = {side.key}>{side.value}</Menu.Item>
                          )
                      }else{
                    let childmenu=side.child;
                    return(
                      <SubMenu key = {side.key} title={side.value} >
                            {this.getNodes(childmenu)}
                      </SubMenu>
                    )
                       }
                     })
                 }  
               </Menu>
            </div>
        )
    }
}