<template>
  <div class="about-page">
    <el-row>
      <el-col :xl="17" :lg="15" :sm="24" :xs="24">
        <el-row class="row-class">
          <el-row>
            <m-abstract />
          </el-row>
          <el-row>
            <m-divider />
          </el-row>
          <el-row>
            <el-col :span="24">
              <m-copyimage />
            </el-col>
            <el-col :span="24">
              <m-copytext />
            </el-col>
          </el-row>
        </el-row>
      </el-col>
      <el-col :xl="7" :lg="9" :sm="24" :xs="24">
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
import MIntroduce from '@/components/index/introduce.vue';
import MDate from '@/components/index/date.vue';
import MAbstract from '@/components/about/abstract.vue';
import MDivider from '@/components/about/divider.vue';
import MCopyimage from '@/components/about/copyimage.vue';
import MCopytext from '@/components/about/copytext.vue';
import Api from '@/api/contentApi';

export default {
  components: {
    MIntroduce,
    MDate,
    MAbstract,
    MDivider,
    MCopyimage,
    MCopytext,
  },
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    Api.getContent().then((res) => {
      this.articleList = res.data.filter((item) => {
        if (item.name === 'content') {
          return true;
        }
        return false;
      });
    }, (error) => {
      console.log(error);
    });
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/about/index.less");
</style>
