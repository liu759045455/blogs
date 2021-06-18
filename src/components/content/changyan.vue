<template>
  <div id="SOHUCS" :sid="'pic-'+$store.state.comId"></div>
</template>

<script>
import $ from 'jquery';

window.changyan = undefined;
window.cyan = undefined;
$.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
  window.changyan.api.config({
    appid: 'cyvbzQHPW',
    conf: 'prod_be94f1b804739510e63a980d7f384161',
  });
});
export default {

  created() {
    console.log(this.$store.state.comId);
  },
  watch: {
    $route() {
      console.log(this.$store.state.comId);
    },
  },
};
</script>
