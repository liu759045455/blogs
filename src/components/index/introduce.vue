<template>
  <div class="introduce">
    <div class="introduce-card">
      <el-card :body-style="{ padding: '0px' }">
        <img src="@/assets/image/sc.jpg" class="image" />
        <router-link :to="{ name: 'about' }">
          <img src="@/assets/image/sc2.jpg" class="image-logo" />
        </router-link>
        <div class="card-infor">
          <div class="name">
            <h3>小不懂</h3>
            <span class="autlv aut-1">V</span>
            <span class="autlv aut-1">管理员</span>
          </div>
          <div class="desc-article">
            文章 {{ contentLen }} 篇
            <i>|</i>
            评论0次
          </div>
          <div class="new-article">
            <span>最新文章</span>
          </div>
          <ul class="article-list">
              <li
                v-for="article in articleList"
                :key="article.id"
              >
                <div class="article-list-text">
                  <router-link
                    :to="{ name: 'content', params: { id: article.id } }"
                  >
                    {{ article.title }}
                  </router-link>
                  <div class="article-list-meta">
                    <i>{{ article.time }}</i>
                  </div>
                </div>
              </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Api from '@/api/contentApi';

export default {
  props: ['articleList'],
  data() {
    return {
      contentLen: 0,
    };
  },
  created() {
    Api.getContent().then((res) => {
      this.contentLen = res.total;
    }, (err) => {
      console.log(err);
    });
  },
  components: {
  },
};
</script>
