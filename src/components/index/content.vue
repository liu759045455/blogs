<template>
  <div class="content-page">
    <div class="content-card">
      <el-card
        class="box-card"
        v-for="article in articleList"
        :key="article.id"
      >
        <div slot="header" class="clearfix">
          <span>
            <router-link
              :to="{
                name: 'content',
                params: {
                  id: article.id,
                  read: nums(article.read)
                },
              }"
            >
            {{ article.title }}
            </router-link>
          </span>
        </div>
        <div class="card-content">
          <router-link
            :to="{
              name: 'content',
              params: {
                id: article.id,
                read: nums(article.read)
              },
            }"
          >
            <img class="image" :src="article.src" alt="" />
          </router-link>
          <router-link
            :to="{
              name: 'content',
              params: {
                id: article.id,
                read: nums(article.read)
              },
            }"
          >
            <div class="card-text">
              {{ article.desc }}
            </div>
          </router-link>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleList'],
  methods: {
    nums(num) {
      const digital = +num + 1;
      return digital;
    },
  },
  computed: {

  },
};
</script>
