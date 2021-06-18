<template>
  <div class="date-page">
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/index/date.less');
</style>
