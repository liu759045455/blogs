<template>
  <div class="learning-page" v-if="contentList">
    <el-card class="box-card" v-for="(learn, index) in learnList" :key="learn.id">
      <el-col :span="5">
        <div class="image">
          <router-link
            :to="{
              name: 'notes',
              params: {
                id: learn.id,
                reading: contentList[index]
              },
            }"
          >
            <img
              :src="learn.src"
              :alt="learn.title"
            />
          </router-link>
        </div>
      </el-col>
      <el-col class="learning-content" :span="19">
        <div class="learning-title">
          <router-link
            :to="{
              name: 'notes',
              params: {
                id: learn.id,
                aaa: contentList[index]
              },
            }"
          >
            <span>推荐</span>
              {{ learn.title }}
          </router-link>
        </div>
        <div class="learning-content">
          <router-link
            :to="{
              name: 'notes',
              params: {
                id: learn.id,
                reading: contentList[index]
              },
            }"
          >
            <p>
              {{ learn.desc }}
            </p>
          </router-link>
        </div>
        <div class="learning-footer">
          <router-link :to="{ name: 'about' }">
            <img
              src="@/assets/image/sc2.jpg"
              class="footer-img"
              alt=""
              height="25"
              width="25"
            />
            小不懂的博客
            <span class="separator">/</span>
          </router-link>
          <router-link :to="{ name: 'learning' }">
            学习笔记
            <span class="separator">/</span>
          </router-link>
          <div class="time">
            {{ learn.time }}
            <span class="separator">/</span>
          </div>
          <router-link
            :to="{
              name: 'notes',
              params: {
                id: learn.id,
                reading: contentList[index]
              },
            }"
          >
            {{ learn.coms }}评论
            <span class="separator">/</span>
          </router-link>
          <span class="read">{{ readList[index] }}阅读</span>
        </div>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import Api from '@/api/contentApi';

export default {
  props: ['learnList'],
  data() {
    return {
      contentList: [],
      readList: [],
    };
  },
  created() {
    Api.getContent().then((res) => {
      this.contentList = res.data.filter((item) => {
        if (item.name === 'notes') {
          this.readList.push(item.read);
          return true;
        }
        return false;
      });
    }, (err) => {
      console.log(err);
    });
  },

};
</script>

<style lang="less">
@import url("~@/assets/css/notes/learing.less");
</style>
