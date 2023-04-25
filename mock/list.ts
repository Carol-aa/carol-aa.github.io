import mockjs from 'mockjs';

export default {

    // 返回值可以是数组形式
    'Post /api/getListInfo': [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' }
    ],

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