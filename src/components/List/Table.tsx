import { Link } from '@umijs/max';
import { Button, Table } from 'antd';
import { connect } from 'dva';
const TableList: React.FC = (props: any) => {
  const { data,listInfo=[] } = props;
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
      render: (_: any, _record: any) => (
        <>
          {/* <Button type="primary" size="small">
            审核
          </Button> */}
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
  ];
  // const dataSoru = () => {
  //   let res = [];
  //   for (let i = 0; i < 100; i++) {
  //     res.push({
  //       username: '张三' + i,
  //       create_time: '创建时间' + i,
  //       product_id: '2',
  //       industry: '行业',
  //     });
  //   }
  //   return res;
  // };

  return (
    <div className="basicInfo list-table">
      <Table
        columns={getColumn() as any}
        dataSource={listInfo}
        rowKey={(record: any) => record.username}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.userListInfo,
  loading: state.loading.effects,
});
export default connect(mapStateToProps)(TableList);
