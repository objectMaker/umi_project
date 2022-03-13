import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/indexPage' },
    { path: '/otherPage', component: '@/pages/otherPage/otherPage' },
    {path:'*',component: '@/pages/404/404'}
  ],
  fastRefresh: {},
});
