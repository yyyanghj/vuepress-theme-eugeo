<template>
  <section class="post-list">
    <transition-group tag="div" name="fade">
      <PostCard :post="post" v-for="post of currentPosts" :key="post.key"/>
    </transition-group>
    <Pagination :total="postList.length" :perPage="perPage" @change="handlePageChange" ref="pagination"/>
  </section>
</template>

<script>
/* global PER_PAGE */
import PostCard from './PostCard';
import Pagination from './Pagination';
export default {
  name: 'post-list',
  components: {
    PostCard,
    Pagination
  },
  props: {
    postList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentPage: 1,
    perPage: +PER_PAGE
  }),
  computed: {
    currentPosts() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.postList.slice(start, start + this.perPage);
    }
  },
  watch: {
    postList() {
      this.$refs.pagination.refresh();
    }
  },
  methods: {
    handlePageChange(current) {
      this.currentPage = current;
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-list {
  position: relative;
  margin: 0 auto;
  max-width: 560px;

  .post-card {
    margin-bottom: spacer(3);
  }

  .pagination {
    margin-top: spacer(3);
  }

  .fade {
    &-enter-active {
      animation: fade 450ms ease-in-out;
    }

    &-leave-active {
      display: none;
    }
  }
}
</style>
