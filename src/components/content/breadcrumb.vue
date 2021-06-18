<template>
  <div class="content-breadcrumb">
    <el-breadcrumb separator="/" v-if="currentRoute.length > 1">
      <el-breadcrumb-item :to="{ path: '/' }">
        <i class="iconfont icon-shouye"></i>
        首页
      </el-breadcrumb-item>
      <template v-if="article.length">
        <el-breadcrumb-item
          :to="{
            name:
              this.$router.currentRoute.name === 'content' || 'notes'
                ? pathStr
                : this.$router.currentRoute.name,
          }"
        >
          <i class="iconfont icon-crew_tech"></i>
          {{ currentRoute[1] ? currentRoute[1].meta.title : "" }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ article[0].title }}
        </el-breadcrumb-item>
      </template>
      <template v-else>
        <el-breadcrumb-item>
          <i class="iconfont icon-crew_tech"></i>
          {{ currentRoute[1] ? currentRoute[1].meta.title : "" }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
import Api from '@/api/contentApi';

export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
      article: {},
      id: 0,
      pathlen: 0,
      idlen: 0,
      path: '',
      pathStr: '',
    };
  },
  created() {
    const { id } = this.$router.currentRoute.params;
    const { path } = this.$router.currentRoute;
    const pa = path.substr(1, path.length);
    const pathIndex = pa.indexOf('/');
    this.pathStr = pa.substr(0, pathIndex);
    this.id = id;
    this.path = path;
    Api.getContent().then((res) => {
      this.article = res.data.filter((item) => {
        if (item.id === +id) {
          return true;
        }
        return false;
      });
    });
  },
  watch: {
    path() {
      const { id } = this.$router.currentRoute.params;
      const { path } = this.$router.currentRoute;
      const pa = path.substr(1, path.length);
      const pathIndex = pa.indexOf('/');
      this.pathStr = pa.substr(0, pathIndex);
      this.id = id;
      this.path = path;
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/content/breadcrumb.less");
</style>
