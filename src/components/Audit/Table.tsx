import { Link } from '@umijs/max';
import { Button, Modal, Table } from 'antd';
import { connect } from 'dva';
import { useEffect, useState } from 'react';
const TableList: React.FC = (props: any) => {

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
            <Link to="./audit">
              <Button type="primary" size="small">
                审核
              </Button>
            </Link>
            <Button type="primary" size="small" style={{ marginLeft: 20 }}>
              删除
            </Button>
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
        <Table columns={column as any}></Table>
      </>
    );
  };
  return (
    <div className="basicInfo list-table">
     {renderTable()}
    </div>
  );
};

const mapStateToProps = (state: { userListInfo: any; loading: { effects: any; }; }) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(TableList);
