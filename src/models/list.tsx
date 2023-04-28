import { message } from 'antd';
import * as service from '../services/list';
const audithList = () => {
  let res: any = [];
  for (let i = 0; i < 20; i++) {
    res.push({
      title: '标题' + i,
      id: i,
      discrabe: '描述' + i,
      page: {
        url: 'https://waidu.com',
        img: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      },
    });
  }
  return res;
};
const datasource = () => {
  let res: any = [];
  for (let i = 0; i < 100; i++) {
    res.push({
      id: i,
      username: '初始化用户名' + i,
      create_time: '创建时间' + i,
      product_id: '2',
      industry: '行业',
    });
  }
  return res;
};
const aduitInfo ={
  username: '审核用户名',
  id: 2,
  url: 'http://',
  type: 'userType',
  land: 'land',
  other: 'othksjhfliashflaskdfdklsfsler',
  industry1: '一级行业',
  industry2: '二级行业',
}
export default {
  namespace: 'userListInfo',
  state: {
    listInfo: datasource(),
    aduitInfo:aduitInfo, //审核列表信息
    audithList:audithList,
    searchParams: {
      create_time: '',
      industry: '',
      product_id: '',
      username: '',
    }, //查询列表信息入参：username...
  },

  effects: {
    //获取列表信息
    *getListInfo({}, { call, put, select }) {
      const { searchParams = {} } = yield select((state) => state.userListInfo);
      let { data, errno, errmsg } = yield call(
        service.searchListInfo,
        searchParams,
      );
      if (errno === 0) {
        yield put({
          type: 'upDateState',
          payload: {
            listInfo: data,
          },
        });
      } else {
        yield put({
          type: 'upDateState',
          payload: {
            listInfo: data,
          },
        });
        message.error(errmsg);
      }
    },
    //获取列表信息
    *searchListInfo({}, { call, put, select }) {
      const { searchParams = {} } = yield select((state) => state.userListInfo);
      const { data, errno, errmsg } = yield call(
        service.searchInfo,
        searchParams,
      );
      if (errno === 0) {
        message.success('查询成功');
        yield put({
          type: 'upDateState',
          payload: {
            listInfo: data,
          },
        });
      } else {
        message.error(errmsg);
      }
    },
    *getAuthInfo({}, { call, put, select }) {
      const { searchParams = {} } = yield select((state) => state.userListInfo);
      const { data, errno, errmsg } = yield call(
        service.getAuthInfo,
        searchParams,
      );
      if (errno === 0) {
        message.success('成功');
        yield put({
          type: 'upDateState',
          payload: {
            aduitInfo: data,
          },
        });
      } else {
        message.error(errmsg);
      }
    },
    *getAuthList({}, { call, put, select }) {
      const { searchParams = {} } = yield select((state) => state.userListInfo);
      const { data, errno, errmsg } = yield call(
        service.getAuthList,
        searchParams,
      );
      if (errno === 0) {
        yield put({
          type: 'upDateState',
          payload: {
            aduitList: data,
          },
        });
      } else {
        message.error(errmsg);
      }
    },
  },

  reducers: {
    upDateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
