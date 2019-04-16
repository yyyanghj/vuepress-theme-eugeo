<template>
  <div class="home-page">
    <PostList :postList="postList" :showPagination="false"/>
    <v-btn flat @click.native="goPosts">READ MORE</v-btn>
  </div>
</template>

<script>
/* global PER_PAGE */
import PostList from '../components/post-list/PostList';

export default {
  name: 'home',
  components: {
    PostList
  },
  computed: {
    postList() {
      return this.$posts.slice(0, PER_PAGE);
    }
  },
  methods: {
    goPosts() {
      this.$router.push({ path: '/posts/' });
    }
  }
};
</script>

<style lang="stylus" scoped>
.home-page {
  .v-btn {
    display: block;
    margin: spacer(3) auto 0;
    color: $accentColor;
  }
}
</style>
