<template>
  <div class="technology-page">
    <el-row>
      <m-breadcrumb />
    </el-row>
    <el-row>
      <m-content :articleList="articleList" />
    </el-row>
  </div>
</template>

<script>
import MContent from '@/components/index/content.vue';
import MBreadcrumb from '@/components/content/breadcrumb.vue';
import Api from '@/api/contentApi';

export default {
  data() {
    return {
      articleList: [],
      path: '',
    };
  },
  components: {
    MContent,
    MBreadcrumb,
  },
  created() {
    Api.getContent().then(
      (res) => {
        this.articleList = res.data.filter((item) => {
          if (item.name === 'content') {
            return true;
          }
          return false;
        });
      },
      (error) => {
        console.log(error);
      },
    );
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/index/content.less");
</style>
