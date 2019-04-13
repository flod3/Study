import React from 'react';
import { TopBar } from 'component/topbar.jsx'
import { SideBar } from 'component/sidebar.jsx'
import { Table, Button, Modal, Row, Col } from 'antd';
import { MatarialDatas, Columns } from '../../json/matarial.js'
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();



export class Matarial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editBtn_enable: false,
            delBtn_enable: false,
            add_visible: false,
            edit_visible: false,
            del_visible: false

        }

    }

    handleAddClick = () => {
        this.setState({
            add_visible: true
        })
        //handle
    }

    handleAddOK = () => {
        this.setState({
            add_visible: false
        })
        //handle
    }

    handleAddCancel = () => {
        this.setState({
            add_visible: false
        })
        //handle
    }

    AddModel() {
        return (
            <Modal
                title="新增人员"
                visible={this.state.add_visible}
                onOk={this.handleAddOK}
                onCancel={this.handleAddCancel}
            >
                <h3>TODO</h3>
            </Modal>
        )
    }


    handleEditClick = () => {
        this.setState({
            edit_visible: true
        })
        //handle
    }

    handleEditOK = () => {
        this.setState({
            edit_visible: false
        })
        //handle
    }

    handleEditCancel = () => {
        this.setState({
            edit_visible: false
        })
        //handle
    }

    EditModal() {
        return (
            <Modal
                title="修改"
                visible={this.state.edit_visible}
                onOk={this.handleEditOK}
                onCancel={this.handleEditCancel}
            >
                <h3>TODO</h3>
            </Modal>
        )
    }

    render() {

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(selectedRows);
                this.setState({
                    editBtn_enable: (selectedRows.length > 0),
                    delBtn_enable: (selectedRows.length > 0)
                })
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
                this.setState({
                    editBtn_enable: (selectedRows.length > 0),
                    delBtn_enable: (selectedRows.length > 0)
                })
            },
        };





        return (
            <div >
                 <TopBar/>
                <Row>
                    <Col span={3}>
                        <SideBar history={customHistory} defaultOpenKey="datas" defaultSelectedKey="matarial" />
                    </Col>
                    <Col span={21}>
                        <div className="home_content">
                            <div className="pserson_table">
                                <Button type="primary" onClick={this.handleAddClick}>新增</Button>
                                <Button type="primary" onClick={this.handleEditClick} disabled={!this.state.editBtn_enable}>修改</Button>
                                <Button type="primary" disabled={!this.state.delBtn_enable}>删除</Button>
                                {this.AddModel()}
                                {this.EditModal()}
                                <Table dataSource={MatarialDatas} rowSelection={rowSelection} columns={Columns} />
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}