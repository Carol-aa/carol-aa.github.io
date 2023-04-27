import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { connect } from 'dva';
import { Button, Descriptions, Table } from 'antd';
import { useEffect } from 'react';
import TableList from '@/components/Audit/Table';
import "./index.less"
const HomePage: React.FC = (props: any) => {
  const { aduitInfo = {}, dispatch, loading } = props || {}
  console.log(window.location.replace("/"))
  const init = () => {
    dispatch({
      type: 'userListInfo/upDateState',
      payload: {
        searchParams: {}
      }
    })//清空入参
    dispatch({
      type: 'userListInfo/getAuthInfo',
    });
  }
  useEffect(() => {
    init()
  }, [])
  const renderDetails = () => {
    const { username, id, url, type, land, other, industry1, industry2, } = aduitInfo || {};
    return (
      <>
        <Descriptions bordered >
          <Descriptions.Item label="用户名:">{username}</Descriptions.Item>
          <Descriptions.Item label="用户id:">{id}</Descriptions.Item>
          <Descriptions.Item label="公司网站">{url}</Descriptions.Item>
          <Descriptions.Item label="资质">{land}</Descriptions.Item>
          <Descriptions.Item label="一级行业">{industry1}</Descriptions.Item>
          <Descriptions.Item label="二级行业">{industry2}</Descriptions.Item>
          <Descriptions.Item label="用户类型">{type}</Descriptions.Item>
          <Descriptions.Item label="批注">{other} </Descriptions.Item>
        </Descriptions>
      </>
    );
  };
  const renderBtnGroup = () => {
    return <div className='btn-group'>
      <Button className='btn-item'>通过所选</Button>
      <Button className='btn-item'>拒绝所选</Button>
      <Button className='btn-item'>拒绝账户</Button>
      <Button className='btn-item'>搁置</Button>
      <Button className='btn-item'>下一个任务</Button></div>
  }
  return <PageContainer ghost>
    {renderDetails()}
    {renderBtnGroup()}
    <TableList></TableList>
  </PageContainer>;
};


const mapStateToProps = (state: { userListInfo: any; loading: { effects: any; }; }) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(HomePage);
