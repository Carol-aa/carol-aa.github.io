import { defineConfig } from '@umijs/max';
import getRoute from './src/route/menu.js'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva:{},
  outputPath: 'docs',
  layout: {
    title: 'xx权限平台',
  },
  routes:getRoute,
  npmClient: 'yarn',
  mock:{}
});
