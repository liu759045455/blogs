<template>
  <div class="article-content" v-if="article">
    <div class="title">
      <h2>{{ article[0].title }}</h2>
    </div>
    <ul class="blogInfo">
      <li class="collect">
        收藏
        <i class="el-icon-plus"></i>
      </li>
      <li class="time">{{ article[0].times }}</li>
      <li class="readNum">
        <span>{{ article[0].read }}</span
        >人已阅读
      </li>
    </ul>
    <div class="content-text">
      <img :src="article[0].src" alt="src" />
      <div class="content-text-pLabel" v-html="content"></div>
    </div>
    <div class="switchTo">
      <div class="switch" v-for="item in switchPage" :key="item.id">
        <span :class="item.type">
          {{ item.type === "prev" ? "上一篇：" : "下一篇：" }}
          <router-link
            :to="{
              name: item.name,
              params: {
                id: item.id,
                read: item.read
              },
            }"
            >{{ item.title }}</router-link
          >
        </span>
      </div>
    </div>
    <div id="SOHUCS" :sid="$store.state.comId"></div>
  </div>
</template>

<script>
import changyanApi from '@/api/changyanApi';
import Api from '@/api/contentApi';

export default {
  data() {
    return {
      article: null,
      content: '',
    };
  },

  created() {
    const { id } = this.$router.currentRoute.params;
    Api.getContent().then((res) => {
      this.article = res.data.filter((item) => {
        if (item.id === +id) {
          this.content = item.pLabel;
          this.$store.state.comId = item.id;
          changyanApi(this.$);
          return true;
        }
        return false;
      });
    });
  },

  watch: {
    $route: {
      handler() {
        const { id } = this.$router.currentRoute.params;
        Api.getContent().then((res) => {
          this.article = res.data.filter((item) => {
            if (item.id === +id) {
              if (item.name === 'content') {
                this.content = item.pLabel;
                this.$store.state.comId = item.id;
                changyanApi(this.$);
              } else {
                this.$store.state.comId = item.id;
                changyanApi(this.$);
              }
              return true;
            }
            return false;
          });
          return true;
        });
      },
      immediate: true,
    },
  },

  methods: {
    nums(num) {
      const digital = +num + 1;
      return digital;
    },
  },

  computed: {
    switchPage() {
      const arr = [];
      if (this.article[0].prev) {
        const {
          prev, prevId, read, name,
        } = this.article[0];
        arr.push({
          type: 'prev',
          id: prev,
          title: prevId,
          read: this.nums(read),
          name,
        });
      }

      if (this.article[0].next) {
        const {
          next, nextId, read, name,
        } = this.article[0];
        arr.push({
          type: 'next',
          id: next,
          title: nextId,
          read: this.nums(read),
          name,
        });
      }
      return arr;
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/content/article.less");
</style>
