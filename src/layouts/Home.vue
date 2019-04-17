<template>
  <div class="home-page">
    <PostList :postList="$posts"/>
  </div>
</template>

<script>
/* global PER_PAGE */
import PostList from '../components/post-list/PostList';

export default {
  name: 'home',
  components: {
    PostList
  }
};
</script>

<style lang="stylus" scoped>
.home-page {
}
</style>
