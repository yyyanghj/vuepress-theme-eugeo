<template>
  <section class="post-info">
    <router-link class="item" to="/archive/">
      <h4 class="label">Archive</h4>
      <span class="text">{{ $posts.length }}</span>
    </router-link>

    <router-link class="item" to="/category/">
      <h4 class="label">Categories</h4>
      <span class="text">{{ Object.keys($categories._metaMap).length }}</span>
    </router-link>

    <router-link class="item" to="/tag/">
      <h4 class="label">Tags</h4>
      <span class="text">{{ Object.keys($tags._metaMap).length }}</span>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'PostInfo'
};
</script>

<style lang="stylus" scoped>
.post-info {
  display: flex;
  justify-content: space-around;
  padding: spacer();
  text-align: center;
  widget();

  .item {
    display: block;
    flex: 1;
  }

  .label {
    font(14px);
    margin-bottom: spacer(0.5);
  }

  .text {
    font(16px);
  }
}
</style>
