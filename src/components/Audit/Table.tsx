import { Button, Popconfirm, Spin, Table } from 'antd';
import { connect } from 'dva';
import { useEffect, useState } from 'react';
const TableList: React.FC = (props: any) => {
  const { loading, dispatch, aduitList = [] } = props || {};
  const [dataList, setDataList] = useState([]);
  const isLoading = loading['userListInfo/getAuthList'];
  const [allKey, setRowKey] = useState([]);
  const [ids, setId] = useState('');
  // const [selectedRowKeys,setSelectedRowKeys] =useState([])
  const confirmOk = () => {
    //确认通过
    dispatch({
      type: 'userListInfo/pass',
      payload: {
        id: ids, //通过的项id
      },
    });
  };
  const passAll = () => {
    dispatch({
      type: 'userListInfo/pass',
      payload: {
        id: allKey, //通过的项id
      },
    });
  };
  const confirmRefuse = () => {
    dispatch({
      type: 'userListInfo/confirmRefuse',
      payload: {
        id: ids, //拒绝的项id
      },
    });
  };
  const refuseAll = () => {
    dispatch({
      type: 'userListInfo/confirmRefuse',
      payload: {
        id: allKey, //拒绝的项id
      },
    });
  };

  const refuseUser = () => {
    dispatch({
      type: 'userListInfo/refuseUser',
      payload: {
        id: window.location.search.replace('?', '') || '',
      },
    });
  };
  const nextTask = () => {
    dispatch({
      type: 'userListInfo/getAuthInfo',
      payload: {
        searchParams: {
          id: ids + 1,
        },
      },
    });
    dispatch({
      type: 'userListInfo/getAuthList',
      payload: {
        searchParams: {
          id: ids + 1,
        },
      },
    });

    setRowKey([]);
  };
  const wait = () => {
    dispatch({
      type: 'userListInfo/refuseUser',
      payload: {
        id: allKey || [],
      },
    });
    nextTask();
  };

  const changeData = (data, field) => {
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
        var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
        if (!item[`${field}rowSpan`]) {
            item[`${field}rowSpan`] = 1;//初始化为1
        }
        if (item[field] === data[indexCount][field]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
            item[`${field}rowSpan`]++;
            data[indexCount][`${field}rowSpan`] = 0;
        } else {
            count = indexCount;
        }
        indexCount++;
    }
    return data
}
 const changeDataReference = (data, field, reference) => {
  let count = 0;//重复项的第一项
  let indexCount = 1;//下一项
  while (indexCount < data.length) {
      var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
      if (!item[`${field}rowSpan`]) {
          item[`${field}rowSpan`] = 1;//初始化为1
      }
      if (item[field] === data[indexCount][field] && item[reference] === data[indexCount][reference]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
          item[`${field}rowSpan`]++;
          data[indexCount][`${field}rowSpan`] = 0;
      } else {
          count = indexCount;
      }
      indexCount++;
  }
  return data
}


  const init = () => {
    setTimeout(() => {
      dispatch({
        type: 'userListInfo/getAuthList',
      });
    }, 0);
    setDataList(changeData(aduitList, 'page'));
  };
  useEffect(() => {
    init();
  }, []);

  const renderBtnGroup = () => {
    return (
      <div className="btn-group">
        <Button className="btn-item" onClick={passAll}>
          通过所选
        </Button>
        <Button className="btn-item" onClick={refuseAll}>
          拒绝所选
        </Button>
        <Button className="btn-item" onClick={refuseUser}>
          拒绝账户
        </Button>
        <Button className="btn-item" onClick={wait}>
          搁置
        </Button>
        <Button className="btn-item" onClick={nextTask}>
          下一个任务
        </Button>
      </div>
    );
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowKey(selectedRowKeys);
    },
  };
  const renderTable = () => {
    const column = [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',
        width: 100,
      },
      {
        title: '描述',
        dataIndex: 'discrabe',
        align: 'center',
        width: 100,

      },
      {
        title: '图片',
        dataIndex: 'image',
        align: 'center',
        width: 100,

        render: (_, record) => {
          return (
            <img
              style={{ width: 50, height: 50 }}
              src={require(`/src/assets/static/img/img (${record.id + 1}).png`)}
            />
          );
        },
      },

      {
        title: '操作',
        align: 'center',
        width: 200,

        render: (_: any, _record: any) => (
          <>
            <Popconfirm
              title="确认通过吗?"
              description={`id:${_record.id}`}
              okText={'确定'}
              cancelText={'取消'}
              onConfirm={confirmOk}
            >
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  setId(_record.id);
                }}
              >
                通过
              </Button>
            </Popconfirm>
            <Popconfirm
              description={`id:${_record.id}`}
              title="确认拒绝吗?"
              okText={'确定'}
              cancelText={'取消'}
              onConfirm={confirmRefuse}
            >
              <Button
                type="primary"
                size="small"
                style={{ marginLeft: 20 }}
                onClick={() => {
                  setId(_record.id);
                }}
              >
                拒绝
              </Button>
            </Popconfirm>
          </>
        ),
      },
      {
        title: '落地页',
        // align: 'center',
        dataIndex: 'page',
        // width: 300,
        render: (value, row, index) => {
          const obj = {
            children:<> <a >{value.url}</a><img src={`${value.img}`}></img></>,
            props: {
              rowSpan:0
            },
          };
          if(index===0){
            obj.props.rowSpan = 10;
          }
          return obj;
        
        },
      },
    ];
    return (
      <>
        {renderBtnGroup()}
        <Spin spinning={isLoading}>
          <Table
          scroll={{y:500,x:600}}
            rowSelection={{
              selectedRowKeys: allKey,
              type: 'checkbox',
              ...rowSelection,
            }}
            rowKey={(record:any) => record.id}
            dataSource={aduitList}
            columns={column as any}
          ></Table>
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
