<template>
  <div class="notes-page">
    <el-row>
      <m-breadcrumb />
    </el-row>
    <el-row>
      <m-article :key="key"/>
    </el-row>
  </div>
</template>

<script>
import MBreadcrumb from '@/components/content/breadcrumb.vue';
import MArticle from '@/components/content/article.vue';
import Api from '@/api/contentApi';
import update from '@/util/updateContent';

export default {
  components: {
    MBreadcrumb,
    MArticle,
  },

  data() {
    return {
      key: new Date().getTime(),
      path: '',
    };
  },

  methods: {
    nums(num) {
      const digital = +num + 1;
      return digital;
    },
  },

  created() {
    const { id, read, reading } = this.$router.currentRoute.params;
    const { path, name } = this.$router.currentRoute;
    this.path = path;
    if (read && name === 'content') {
      update.updateContent(Api, id, read);
    } if (reading && name === 'notes') {
      const reads = this.nums(reading.read);
      update.updateContent(Api, id, reads);
    }
  },

  watch: {
    $route() {
      const { id, read } = this.$router.currentRoute.params;
      const { path } = this.$router.currentRoute;
      this.path = path;
      update.updateContent(Api, id, read);
      this.key = new Date().getTime();
    },

    path() {
      const { id, read } = this.$router.currentRoute.params;
      const { path } = this.$router.currentRoute;
      this.path = path;
      update.updateContent(Api, id, read);
    },
  },

};
</script>
