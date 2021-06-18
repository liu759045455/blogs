<template>
  <div class="message-page">
    <el-row>
      <el-col :xs="24" :sm="24" :lg="17">
        <div id="SOHUCS" sid="999" class="changyan"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="7">
        <el-row>
          <m-introduce :articleList="articleList"/>
        </el-row>
        <el-row>
          <m-date />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MIntroduce from '@/components/index/introduce.vue';
// import MComment from "@/components/content/comment.vue";
import MDate from '@/components/index/date.vue';
import changyanApi from '@/api/changyanApi';
import Api from '@/api/contentApi';

export default {
  components: {
    // MComment,
    MDate,
    MIntroduce,
  },
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    changyanApi(this.$);
    this.articleList = Api.getContent().then((res) => {
      this.articleList = res.data.filter((item) => {
        if (item.name === 'content') {
          return true;
        }
        return false;
      });
    });
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/content/changyan.less');
</style>
