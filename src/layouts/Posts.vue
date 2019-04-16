<template>
  <div class="posts-page">
    <PostList :postList="$posts"/>
  </div>
</template>

<script>
import PostList from '../components/post-list/PostList';

export default {
  name: 'Posts',
  components: {
    PostList
  }
};
</script>

<style lang="stylus" scoped></style>
