<template>
  <div class="m-menu">
    <ul class="menu-nav">
      <li v-for="(menu, index) in menuList" :key="index">
        <router-link :to="{ name: menu.name }">
            <i :class="menu.icon"></i>
            {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      menuList: [
        {
          title: '首页',
          name: 'index',
          icon: 'iconfont icon-shouye',
        },
        {
          title: '博客简介',
          name: 'about',
          icon: 'iconfont icon-guanyuwomen',
        },
        {
          title: '技术闲聊',
          name: 'technology',
          icon: 'iconfont icon-crew_tech',
        },
        {
          title: '学习笔记',
          name: 'learning',
          icon: 'iconfont icon-icon_huabanfuben',
        },
        {
          title: '留言板',
          name: 'message',
          icon: 'iconfont icon-icon-test',
        },
      ],
    };
  },
};
</script>
