<template>
    <el-container class="fixed-default">
      <el-header height="">
        <m-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer  height="">
        <m-footer />
      </el-footer>
    </el-container>
</template>

<script>
import MHeader from '@/components/header/index.vue';
import MFooter from '@/components/footer/index.vue';

export default {
  components: {
    MHeader,
    MFooter,
  },

};
</script>

<style lang="less">
@import url('~@/assets/css/default/index.less');
</style>
