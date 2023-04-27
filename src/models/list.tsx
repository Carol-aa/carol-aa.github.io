import { message } from 'antd';
import * as service from '../services/list';

export default {
  namespace: 'userListInfo',
  state: {
    listInfo: [], //审核列表信息
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
      const { data, errno, errmsg } = yield call(
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
        console.log(yield select((state) => state.userListInfo));
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
      console.log(data);
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
      console.log(state, payload);
      return {
        ...state,
        ...payload,
      };
    },
  },
};
