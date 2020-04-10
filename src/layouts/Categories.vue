<template>
  <div class="categories-page">
    <section class="categories">
      <h2 class="headline">CATEGORIES</h2>
      <ul class="cate-list">
        <router-link
          :key="name"
          :to="map.path"
          class="cate-item"
          tag="li"
          v-for="(map, name) of $category._metaMap"
        >
          <span class="name">{{ name }}</span>
          <span class="count">{{ map.pages.length }}</span>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Categories'
};
</script>

<style lang="stylus" scoped>
.categories-page {
  max-width: 450px;

  .categories {
    padding: spacer(1.5) spacer(3);
    widget();

    .cate-list {
      margin-top: spacer();
    }

    .cate-item {
      display: flex;
      justify-content: space-between;
      padding: spacer(0.5) spacer();
      border-radius: $baseRadius * 0.5;
      font(14px);
      cursorPointer();

      &:hover {
        background-color: $bgColor;
      }
    }
  }
}
</style>
