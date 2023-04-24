import { Button, DatePicker, Form, Input, Table } from 'antd';
import React, { useRef, useState } from 'react';
// import{connect } from 'dva';
import './index.less'
interface IQuery {
    data?: object,
    dispatch():void
}

const Search = (props: IQuery) => {
    const { data,dispatch } = props;
    const [form] = Form.useForm()
    const { Item } = Form;
    const { RangePicker } = DatePicker;
    const FormIemLayout = {
        labelCol: { xs: { span: 24 }, sm: { span: 6 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 15 } },
    }
  const searchInfo = () => {
    const value = form.getFieldsValue();
    dispatch
    console.log(value)
  }
    const renderForm = () => (

        <Form
            form={form}
            layout='inline'
            className='listForm'>
            <Item {...FormIemLayout} name="username" label="用户名">
                <Input></Input>
            </Item>
            <Item {...FormIemLayout} name="product_id" label="产品线">
                <Input></Input>
            </Item>
            <Item {...FormIemLayout} name="industry" label="行业">
                <Input></Input>
            </Item>
            <Item {...FormIemLayout} name="create_time" label="任务创建时间" >
                <RangePicker showTime />
            </Item>
        </Form>
    )
    return (
        <div className="basicInfo list-search ">
            {renderForm()}
            <div className='btn-group'> 
             <Button type="primary" onClick={searchInfo} style={{ marginRight: 30 }}>anniu</Button></div>

        </div>
    )
}
export default Search;
// export default connect(function(state: { loading: { global: any; }; searchParams: any; }) {
//     let loading = state.loading.global;
//     return{
//         ...state.searchParams,
//         loading
//     }
// })