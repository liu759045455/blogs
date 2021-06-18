<template>
    <div class="header">
        <el-row>
            <div class="header-images"></div>
        </el-row>
        <el-row>
            <m-menu />
        </el-row>
    </div>
</template>

<script>
import MMenu from './menu.vue';

export default {
  components: {
    MMenu,
  },

};
</script>

<style lang="less">
@import url('~@/assets/css/header/index.less');
</style>
