
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
}
export default {

  // 返回值可以是数组形式
  'Post /api/getListInfo': {
    errno: 0,
    errmsg: "null",
    data: datasource()
  },
  'Post /api/getListInfo/:id': {
    errno: 0,
    errmsg: "null",
    data: [{
      id: 1,
      username: '初始化用户名',
      create_time: '创建时间',
      product_id: '2',
      industry: '行业',
    }]
  },
  'Post  /api/getAuthInfo':
  {
    errno: 0,
    errmsg: "null",
    data: {
      username: "审核用户名", id: 2, url: "http://", type: "userType", land: "land", other: "othksjhfliashflaskdfdklsfsler", industry1: "一级行业", industry2: "二级行业",
    }
  },

}