<template>
  <div class="learning-page">
    <el-row>
      <m-breadcrumb />
    </el-row>
    <el-row>
      <m-learning :learnList="learnList" />
    </el-row>
    <el-row>
      <m-pagination
        @currentChange="currentChange"
        :pageSize="pageSize"
        :currentPage="currentPage"
        :total="total"
      />
    </el-row>
  </div>
</template>

<script>
import MBreadcrumb from '@/components/content/breadcrumb.vue';
import MLearning from '@/components/notes/learning.vue';
import MPagination from '@/components/notes/pagination.vue';
import Api from '@/api/learnlistApi';

export default {
  components: {
    MBreadcrumb,
    MLearning,
    MPagination,
  },
  data() {
    return {
      learnList: [],
      pageSize: 5,
      currentPage: 1,
      total: 0,
    };
  },
  created() {
    Api.getLearnList({
      page: this.currentPage,
      limit: this.pageSize,
    }).then(
      (res) => {
        this.learnList = res.data;
        this.total = res.total;
      },
      (error) => {
        console.log(error);
      },
    );
  },
  methods: {
    currentChange({ current, pageSize }) {
      Api.getLearnList({
        page: current,
        limit: pageSize,
      }).then((res) => {
        this.learnList = res.data;
        return true;
      });
    },
  },
};
</script>
