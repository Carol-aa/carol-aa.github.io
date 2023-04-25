
export default {
    namespace :"listInfo",
  state: {
    ListInfo:[],
    searchParams:{},
  },
 
  effects: {
    *getListInfo({ payload  }, { call, put,select }):Iquery {
        const {searchParams={}} = yield select((state)=> state.listInfo);
        const { data } = yield call(queryUser, payload);
        yield put({ type: 'upDateState', payload: data });
      },
  },
 
  reducers: {
    upDateState(state: any, { payload }: any) {
      return {
        ...state,
        user: payload,
      };
    },
  },
 
//   test(state) {
//     console.log('test');
//     return state;
//   },
};