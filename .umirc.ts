import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva:{},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      name: 'xx审核平台-列表页',
      path: '/list',
      component: './List',
   
    },
    {
      name: 'xx审核平台- CRUD 示例',
      path: '/table',
      component: './Table',
      routes:[
           // routes: [
        {
          name: 'xx审核平台-权限演示',
          path: '/table/access',
          component: './Access/index.tsx',
        },
      // ],
      ]
    },
  ],
  npmClient: 'yarn',
});
