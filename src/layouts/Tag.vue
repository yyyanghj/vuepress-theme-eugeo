<template>
  <div class="tag-page">
    <PostList :postList="$tag.posts"/>
  </div>
</template>

<script>
import PostList from '../components/post-list/PostList';
export default {
  name: 'Tag',
  components: {
    PostList
  }
};
</script>

<style lang="stylus" scoped></style>
