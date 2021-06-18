export default {
  updateContent(Api, id, reading) {
    Api.updateContent(id, {
      read: reading,
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
    );
  },
};
