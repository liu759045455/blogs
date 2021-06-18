<template>
  <div class="index-page">
    <el-row>
      <el-col :xl="17" :lg="15" :xs="24">
        <el-row>
          <m-banner />
        </el-row>
        <el-row>
          <m-content :articleList="articleList" />
        </el-row>
      </el-col>
      <el-col :xl="7" :lg="9" :xs="24">
        <el-row>
          <m-introduce :articleList="articleList" />
        </el-row>
        <el-row>
          <m-date />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MBanner from '@/components/index/banner.vue';
import MIntroduce from '@/components/index/introduce.vue';
import MContent from '@/components/index/content.vue';
import MDate from '@/components/index/date.vue';
import Api from '@/api/contentApi';

export default {
  components: {
    MBanner,
    MContent,
    MIntroduce,
    MDate,
  },

  data() {
    return {
      articleList: [],
    };
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
@import url("~@/assets/css/index/index.less");
</style>
