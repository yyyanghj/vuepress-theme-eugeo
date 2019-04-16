<template>
  <div class="category-page">
    <PostList :postList="postList"/>
  </div>
</template>

<script>
import PostList from '../components/post-list/PostList';
export default {
  name: 'Category',
  components: {
    PostList
  },
  computed: {
    postList() {
      return this.$category.posts.filter(p => !p.frontmatter.private);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
