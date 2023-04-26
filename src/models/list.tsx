import { message } from 'antd';
import * as service from '../services/list';

export default {
  namespace: 'userListInfo',
  state: {
    listInfo: [],
    searchParams: {},
  },

  effects: {
    *getListInfo({}, { call, put, select }) {
      const { searchParams = {} } = yield select((state) => state.userListInfo);
      const { data, errno, errmsg } = yield call(
        service.searchListInfo,
        searchParams,
      );
      console.log(data);
      if (errno === 0) {
        message.success("查询成功")
        console.log((yield select((state) => state.userListInfo)))
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
  },

  reducers: {
    upDateState(state: any, { payload }: any) {
      return {
        ...state,
       ...payload,
      };
    },
  },

  //   test(state) {
  //     console.log('test');
  //     return state;
  //   },
};
