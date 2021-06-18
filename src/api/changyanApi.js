export default function changyanApi($) {
  window.changyan = undefined;
  window.cyan = undefined;
  $.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
    window.changyan.api.config({
      appid: 'cyvbzQHPW',
      conf: 'prod_be94f1b804739510e63a980d7f384161',
    });
  });
}
