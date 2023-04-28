import TableList from '@/components/Audit/Table';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Descriptions } from 'antd';
import { connect } from 'dva';
import { useEffect } from 'react';
import './index.less';
const HomePage: React.FC = (props: any) => {
  const { aduitInfo = {}, dispatch, loading } = props || {};
  const init = () => {
    dispatch({
      type: 'userListInfo/upDateState',
      payload: {
        searchParams: {
          id:window.location.search.replace('?', '')
        },
      },
    }); //入参为用户id
    dispatch({
      type: 'userListInfo/getAuthInfo',
    });
  };
  useEffect(() => {
    init();
  }, []);
  const renderDetails = () => {
    const { username, id, url, type, land, other, industry1, industry2 } =
      aduitInfo || {};
    return (
      <>
        <Descriptions bordered>
          <Descriptions.Item label="用户名:">
            {username || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="用户id:">{id || '-'}</Descriptions.Item>
          <Descriptions.Item label="公司网站">{url || '-'}</Descriptions.Item>
          <Descriptions.Item label="资质">{land || '-'}</Descriptions.Item>
          <Descriptions.Item label="一级行业">
            {industry1 || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="二级行业">
            {industry2 || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="用户类型">{type || '-'}</Descriptions.Item>
          <Descriptions.Item label="批注">{other || '-'} </Descriptions.Item>
        </Descriptions>
      </>
    );
  };

  return (
    <PageContainer ghost>
      {renderDetails()}
      <TableList  ></TableList>
    </PageContainer>
  );
};

const mapStateToProps = (state: {
  userListInfo: any;
  loading: { effects: any };
}) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(HomePage);
