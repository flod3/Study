import React from 'react';
import {Menu,Col,Row,Icon,message, Button,Affix} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {sidebar} from '../../json/menu.js';
import './component.css';
import {titleSvg}  from 'images/svgs.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook,faUser,faHome,faThLarge,faSearch,faBath} from  '@fortawesome/fontawesome-free-solid'
const SubMenu = Menu.SubMenu;


export class SideBar extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            collapsed : false
        })
    }

    Menu_Collapsed=()=>{
        this.setState({
            collapsed : !this.state.collapsed
        })
    }

    getNodes(sidebar){
        return(
              sidebar.map((side)=>{
                if(side.child==null){
                    console.log(side.value)
                  return(
                      <Menu.Item key = {side.key} ><span><Icon><FontAwesomeIcon icon={side.icon} /></Icon><span>{side.title}</span></span></Menu.Item>
                  )
                }else{
                    let childmenu=side.child;
                    return(
                      <SubMenu key = {side.key}  title={<span><Icon><FontAwesomeIcon icon={side.icon} /></Icon><span>{side.title}</span></span>}>
                           {childmenu.map((child)=>{
                              return(
                                      <Menu.Item key={child.key} >
                                         <Link to={child.key} >  
                                             <span><Icon><FontAwesomeIcon icon={child.icon} /></Icon><span>{child.title}</span></span>
                                          </Link>
                                      </Menu.Item>
                              ) 
                           })}
                      </SubMenu>
                    )
                }
              })
        
        )
    }

    render(){
        return(

            <div>
                
                {/* <Button type="primary" className="CollapseBtn"  onClick={this.Menu_Collapsed}></Button> */}
                <Affix >
                
                 <Menu
                    defaultOpenKeys={[this.props.defaultOpenKey]}
                    defaultSelectedKeys={[this.props.defaultSelectedKey]}
                    inlineCollapsed = {this.state.collapsed}
                    mode ="inline"
                >
                    {this.getNodes(sidebar)}

                </Menu> 
              
                </Affix>
            </div>
        )
    }
}