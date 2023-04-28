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
export default {
  // 返回值可以是数组形式
  'Post /api/getListInfo': {
    errno: 0,
    errmsg: 'null',
    data: datasource(),
  },
  'Post /api/getListInfo/:id': {
    errno: 0,
    errmsg: 'null',
    data: [
      {
        id: 1,
        username: '初始化用户名',
        create_time: '创建时间',
        product_id: '2',
        industry: '行业',
      },
    ],
  },
  'Post  /api/getAuthInfo': {
    errno: 0,
    errmsg: 'null',
    data: {
      username: '审核用户名',
      id: 2,
      url: 'http://',
      type: 'userType',
      land: 'land',
      other: 'othksjhfliashflaskdfdklsfsler',
      industry1: '一级行业',
      industry2: '二级行业',
    },
  },
  'Post  /api/getAuthList': {
    errno: 0,
    errmsg: 'null',
    data: audithList(),
  },
};
