import { Link } from '@umijs/max';
import { Button, Modal, Spin, Table } from 'antd';
import { connect } from 'dva';
import { useEffect, useState } from 'react';
const TableList: React.FC = (props: any) => {
  const { listInfo = {}, dispatch, loading } = props || {};
  const [visible, setVisible] = useState(false);
  const isLoading = loading['userListInfo/getListInfo'];
  const getColumn = () => [
    {
      title: '用户名',
      dataIndex: 'username',
      align: 'center',
    },
    {
      title: '任务创建时间',
      dataIndex: 'create_time',
      align: 'center',
    },
    {
      title: '产品线',
      dataIndex: 'product_id',
      align: 'center',
    },
    {
      title: '行业',
      dataIndex: 'industry',
      align: 'center',
    },
    {
      title: '操作',
      align: 'center',
      render: (_: any, record: any) => (
        <>
          <Link to={`./audit?${record.id}`}>
            <Button
              type="primary"
              size="small"
            >
              审核
            </Button>
          </Link>
          <Button
            type="primary"
            size="small"
            style={{ marginLeft: 20 }}
            onClick={() => {
              setVisible(true);
            }}
          >
            删除
          </Button>
        </>
      ),
    },
  ];
  //初始化
  const init = () => {
    dispatch({
      type: 'userListInfo/upDateState',
      payload: {
        searchParams: {},
      },
    }); //清空入参
    dispatch({
      type: 'userListInfo/getListInfo',
    });
  };
  const handleOk = () => {
    setVisible(false);
    //调用删除接口，
    init(); //重新请求全部数据
  };
  const handleCancel = () => {
    setVisible(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="basicInfo list-table">
      <Spin spinning={isLoading}>
        <Table
          columns={getColumn() as any}
          dataSource={listInfo}
          rowKey={(record: any) => record.username}
        />
      </Spin>
      <Modal
        title="确认删除吗？"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

const mapStateToProps = (state: {
  userListInfo: any;
  loading: { effects: any };
}) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(TableList);
