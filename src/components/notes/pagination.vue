<template>
  <div class="pagination-page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="page"
      @current-change="currentChange"
      :current-page="current"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'pageSize', 'total'],
  data() {
    return {};
  },
  computed: {
    current() {
      return this.currentPage;
    },
    page() {
      return this.pageSize;
    },
  },
  methods: {
    currentChange(page) {
      this.$emit('currentChange', {
        current: page,
        pageSize: this.page,
      });
    },
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/notes/pagination.less');
</style>
