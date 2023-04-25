import { PageContainer } from '@ant-design/pro-components';
import { Link, useModel } from '@umijs/max';
import { Button, Descriptions, Table } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const renderDetails = () => {
    return (
      <>
        <Descriptions  bordered >
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </>
    );
  };
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
  return <PageContainer ghost>
    {renderDetails()}
    {renderTable()}</PageContainer>;
};

export default HomePage;
