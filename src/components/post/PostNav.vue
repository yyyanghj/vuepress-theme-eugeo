<template>
  <section class="post-nav">
    <router-link :to="$prev.path" v-if="$prev" class="item">
      <v-icon name="arrow-left"/>&nbsp;
      <h3 class="title">{{$prev.title}}</h3>
    </router-link>
    <span class="spacer"></span>
    <router-link :to="$next.path" v-if="$next" class="item">
      <h3 class="title">{{$next.title}}</h3>&nbsp;
      <v-icon name="arrow-right"/>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'post-nav'
};
</script>

<style lang="stylus" scoped>
.post-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: spacer(2);
  border-top: 1px dashed $borderColor;

  .spacer {
    flex: 1 0 auto;
    min-width: spacer(2);
  }

  .item {
    display: flex;
    align-items: center;
    max-width: 50%;
    color: $accentColor;
    font(14px);

    &:hover {
      text-decoration: underline;
    }

    .v-icon {
      margin-top: -4px;
    }
  }
}
</style>
