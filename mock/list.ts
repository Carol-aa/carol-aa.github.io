
const datasource  =() =>{
    let res:any = [];
    for (let i = 0; i < 100; i++) {
      res.push({
        id: i,
        username: '张si' + i,
        create_time: '创建时间' + i,
        product_id: '2',
        industry: '行业',
      });
    }
    return res;
}
export default {

    // 返回值可以是数组形式
    'Post /api/getListInfo':{
        errno:0,
        errmsg:"null",
        data:datasource()
    },

    // 返回值也可以是对象形式
    'Post /api/getDetails':
         {
            statue: 'success',
            data: [
                { id: 1, name: '小刚', age: '22' },
                { id: 2, name: '小美', age: '22' }
            ]
        }
}