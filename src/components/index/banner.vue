<template>
  <div class="block banner">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="item in imageList" :key="item.id">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Api from '@/api/bannerApi';

export default {
  data() {
    return {
      imageList: [],
    };
  },
  created() {
    Api.getImage().then((res) => {
      this.imageList = res;
    }, (err) => {
      console.log(err);
    });
  },

};
</script>
