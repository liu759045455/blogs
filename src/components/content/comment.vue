<template>
  <div class="comment-page">
    <h2>评论区</h2>
    <a-comment v-for="comments in $store.state.comments" :key="comments.id">
      <span slot="actions" key="comment-nested-reply-to">==评论==</span>
      <a slot="author">{{ comments.name }}</a>
      <a-avatar slot="avatar" :src="comments.src" :alt="comments.name" />
      <p slot="content">
        {{ comments.pContent }}
      </p>
    </a-comment>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${
        comments.length > 1 ? 'replies' : 'reply'
      }`"
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </a-list>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="@/assets/image/sc3.jpg"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      comments: [],
      submitting: false,
      value: '',
      moment,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: '小不懂',
            avatar: 'http://127.0.0.1:5500/public/sc3.jpg',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/content/comment.less");
</style>
