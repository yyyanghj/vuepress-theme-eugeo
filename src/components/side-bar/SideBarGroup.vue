<template>
  <ul class="sidebar-group">
    <li class="item" v-for="(item, index) of items" :key="index">
      <router-link active-class="active" class="header-anchor" :to="{hash: item.value.slug}">{{item.value.title}}</router-link>
      <SideBarGroup v-if="item.children.length" :items="item.children"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SideBarGroup',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus" scoped>
.sidebar-group {
  padding-left: spacer();
  font-size: 0.85em;

  .item {
    display: block;
    margin: spacer() spacer() 0 0;
    line-height: 24px;
  }

  .header-anchor {
    cursorPointer();

    &.active {
      color: $accentColor;
    }
  }
}
</style>
