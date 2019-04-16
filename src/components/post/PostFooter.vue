<template>
  <footer class="post-footer">
    <Copyright/>
    <Reward/>
    <div class="post-tags">
      <router-link :to="`/tag/${tag}`" class="tag" v-for="tag of $frontmatter.tags" :key="tag">{{tag}}</router-link>
    </div>
    <PostNav/>
  </footer>
</template>

<script>
import PostNav from './PostNav';
import Copyright from './Copyright';
import Reward from './Reward';

export default {
  name: 'PostFooter',
  components: {
    Copyright,
    Reward,
    PostNav
  }
};
</script>

<style lang="stylus" scoped>
.post-footer {
  padding-top: spacer(3);
  padding-bottom: spacer(3);

  & > :not(:first-child) {
    margin-top: spacer();
  }

  .post-tags {
    padding: spacer(2) 0;

    .tag {
      display: inline-flex;
      align-items: center;
      margin-right: spacer(2);
      padding: 0 spacer(1.5);
      height: 32px;
      border-radius: $baseRadius * 0.5;
      background-color: $bgColor;
      font(15px);
      cursorPointer();

      &::before {
        display: block;
        margin-right: spacer();
        content: '#';
      }
    }
  }
}
</style>
