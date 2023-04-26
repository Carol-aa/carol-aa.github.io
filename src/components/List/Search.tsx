import { Button, DatePicker, Form, Input } from 'antd';
import React from 'react';
import{connect } from 'dva';
import './index.less';
// interface IQuery {
//     data?: object,
//     dispatch():void
// }
const Search: React.FC = (props:any) => {
  const { data, dispatch,listInfo } = props||{};
  const [form] = Form.useForm();
  const { Item } = Form;
  const { RangePicker } = DatePicker;
  const FormIemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 10 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 15 } },
  };
  const searchInfo = () => {
    const value = form.getFieldsValue();
    dispatch({
      type: 'userListInfo/upDateState',
      payload:value
    });
    dispatch({
      type:"userListInfo/searchListInfo"
    })
   
    
  };
  const renderForm = () => (
    <Form form={form} layout="inline" className="listForm">
      <Item {...FormIemLayout} name="username" label="用户名">
        <Input></Input>
      </Item>
      <Item {...FormIemLayout} name="product_id" label="产品线">
        <Input></Input>
      </Item>
      <Item {...FormIemLayout} name="industry" label="行业">
        <Input></Input>
      </Item>
      <Item {...FormIemLayout} name="create_time" label="任务创建时间">
        <RangePicker showTime />
      </Item>
    </Form>
  );
  return (
    <div className="basicInfo list-search ">
      {renderForm()}
      <div className="btn-group">
        <Button type="primary" onClick={searchInfo} style={{ marginRight: 40 }}>
          查询
        </Button>
      </div>
    </div>
  );
};
// export default Search;
const mapStateToProps = (state) =>({
    ...state.userListInfo,
    loading:state.loading.effects
})
export default connect(mapStateToProps)(Search)
