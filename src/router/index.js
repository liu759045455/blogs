import Vue from 'vue';
import VueRouter from 'vue-router';
import MyDefault from '@/fixedpage/default.vue';
import Index from '@/page/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MyDefault',
    component: MyDefault,
    redirect: { name: 'index' },
    children: [{
      path: 'index',
      name: 'index',
      component: Index,
      meta: {
        title: '首页',
      },
    }, {
      path: 'about',
      name: 'about',
      meta: {
        title: '博客简介',
      },
      component: () => import('@/page/about'),
    }, {
      path: 'technology',
      name: 'technology',
      meta: {
        title: '技术闲聊',
      },
      component: () => import('@/page/technology'),

    },
    {
      path: 'technology/:id',
      name: 'content',
      meta: {
        title: '技术闲聊',
      },
      component: () => import('@/components/technology/content.vue'),
    },
    {
      path: 'learning',
      name: 'learning',
      meta: {
        title: '学习笔记',
      },
      component: () => import('@/page/learning'),

    }, {
      path: 'learning/:id',
      name: 'notes',
      meta: {
        title: '学习笔记',
      },
      component: () => import('@/components/notes/notes.vue'),
    }, {
      path: 'message',
      name: 'message',
      meta: {
        title: '留言板',
      },
      component: () => import('@/page/message'),
    }],
  },

];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 200 };
  },
});

export default router;
