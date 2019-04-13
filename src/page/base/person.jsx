import React from 'react';
import { TopBar } from 'component/topbar.jsx'
import { SideBar } from 'component/sidebar.jsx'
import { Table, Button, Modal, Input, Form, Icon, DatePicker, Row, Col } from 'antd';
import { PersonDatas, Columns } from '../../json/person.js'
import createBrowserHistory from "history/createBrowserHistory";
import { regExpConfig } from '../../config/regular.config.js';
import moment from 'moment';
import './base.css';
const FormItem = Form.Item;
const customHistory = createBrowserHistory();
const dateFormat = 'YYYY-MM-DD';
//只有选择了一行才允许进行修改,获取此行的数据
var selecedata = {};

class Person extends React.Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    getAddInput(key, rules, message) {

        const { getFieldDecorator } = this.props.form;
        console.log(rules);
        return (
            <FormItem hasFeedback key={key}>
                {
                    getFieldDecorator(key, {
                        rules: [
                            { pattern: rules, message: message },
                        ],
                    })(<Input type="text" />)
                }
            </FormItem>
        )
    }

    getEditInput(key, rules, message, init) {

        const { getFieldDecorator } = this.props.form;
        console.log(rules);
        return (
            <FormItem hasFeedback key={key}>
                {
                    getFieldDecorator(key, {
                        rules: [
                            { pattern: rules, message: message },
                        ],
                        initialValue: init
                    })(<Input type="text" />)
                }
            </FormItem>
        )
    }




    AddModel() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="新增人员"
                visible={this.state.add_visible}
                onOk={this.handleAddOK}
                onCancel={this.handleAddCancel}
            >

                <Form>
                    姓名
            {this.getAddInput("name", regExpConfig.isText_20, "姓名不得大于20个字符")}
                    年龄
            {this.getAddInput("age", regExpConfig.isInt, "姓名必须为整数")}
                    地址
            {this.getAddInput("address", regExpConfig.isText_100, "地址不得大于100个字符")}
                    爱好
            {this.getAddInput("hobbit", regExpConfig.isText_30, "爱好..")}
                    生日
            <DatePicker format={dateFormat} />

                </Form>

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


                <Form>
                    姓名
            {this.getEditInput("e_name", regExpConfig.isText_20, "姓名不得大于20个字符", selecedata.name)}
                    年龄
            {this.getEditInput("e_age", regExpConfig.isInt, "姓名必须为整数", selecedata.age)}
                    地址
            {this.getEditInput("e_address", regExpConfig.isText_100, "地址不得大于100个字符", selecedata.address)}
                    爱好
            {this.getEditInput("e_hobbit", regExpConfig.isText_30, "爱好..", selecedata.hobbit)}
                    生日
            <DatePicker format={dateFormat} defaultValue={moment(selecedata.birthdate, dateFormat)} />

                </Form>

            </Modal>
        )
    }

    render() {

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                if (selectedRows.length > 0 && selectedRows.length < 2) {
                    selecedata = record;
                }
                this.setState({
                    editBtn_enable: (selectedRows.length > 0 && selectedRows.length < 2),
                    delBtn_enable: (selectedRows.length > 0)
                })
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
                this.setState({
                    editBtn_enable: (selectedRows.length > 0 && selectedRows.length < 2),
                    delBtn_enable: (selectedRows.length > 0)
                })
            },
        };





        return (
            <div >
                <TopBar />
                <Row>
                    <Col span={3}>
                        <SideBar history={customHistory} defaultOpenKey="datas" defaultSelectedKey="person" />
                    </Col>
                    <Col span={21}>
                        <div className="home_content">
                            <div className="pserson_table">
                                <Button type="primary" onClick={this.handleAddClick}>新增</Button>
                                <Button type="primary" onClick={this.handleEditClick} disabled={!this.state.editBtn_enable}>修改</Button>
                                <Button type="primary" disabled={!this.state.delBtn_enable}>删除</Button>
                                {this.AddModel()}
                                {this.EditModal()}
                                <Table dataSource={PersonDatas} rowSelection={rowSelection} columns={Columns} />
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Person = Form.create()(Person);