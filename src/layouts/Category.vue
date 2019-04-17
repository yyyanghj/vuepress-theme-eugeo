<template>
  <div class="category-page">
    <PostList :postList="$category.posts"/>
  </div>
</template>

<script>
import PostList from '../components/post-list/PostList';
export default {
  name: 'Category',
  components: {
    PostList
  }
};
</script>

<style lang="stylus" scoped></style>
