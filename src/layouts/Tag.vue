<template>
  <div class="tag-page">
    <PostList :postList="postList"/>
  </div>
</template>

<script>
import PostList from '../components/post-list/PostList';
export default {
  name: 'Tag',
  components: {
    PostList
  },
  computed: {
    postList() {
      return this.$tag.posts.filter(p => !p.frontmatter.private);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
