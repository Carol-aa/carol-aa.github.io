import { Button, Popconfirm, Spin, Table } from 'antd';
import { connect } from 'dva';
import { useEffect } from 'react';
const TableList: React.FC = (props: any) => {
  const { loading, dispatch, aduitList = [] } = props || {};
  const isLoading = loading['userListInfo/getAuthList'];

  const confirmOk =() => {
    //确认通过
    dispatch({
      type:"userListInfo/pass"
    })
   }
   const confirmRefuse =( ) => {
    dispatch({
      type:"userListInfo/confirmRefuse"
    })
    }
  const init = () => {
    dispatch({
      type: 'userListInfo/getAuthList',
    });
  };
  useEffect(() => {
    init();
  }, []);

  const renderTable = () => {
    const column = [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',
      },
      {
        title: '描述',
        dataIndex: 'discrabe',
        align: 'center',
      },
      {
        title: '图片',
        dataIndex: 'image',
        align: 'center',
      },

      {
        title: '操作',
        align: 'center',
        render: (_: any, _record: any) => (
          <>
            <Popconfirm
              title="确认通过吗?"
              okText={"确定"}
              cancelText={"取消"}
              onConfirm={confirmOk}
            >
              <Button type="primary" size="small">
                通过
              </Button>
            </Popconfirm>
            <Popconfirm
              title="确认拒绝吗?"
              okText={"确定"}
              cancelText={"取消"}
              onConfirm={confirmRefuse}
            >
              <Button type="primary" size="small" style={{ marginLeft: 20 }}>
              拒绝
            </Button>
            </Popconfirm>
          
          </>
        ),
      },
      {
        title: '落地页',
        align: 'center',
      },
    ];
    return (
      <>
        <Spin spinning={isLoading}>
          <Table dataSource={aduitList} columns={column as any}></Table>
        </Spin>
      </>
    );
  };
  return <div className="basicInfo list-table">{renderTable()}</div>;
};

const mapStateToProps = (state: {
  userListInfo: any;
  loading: { effects: any };
}) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(TableList);
