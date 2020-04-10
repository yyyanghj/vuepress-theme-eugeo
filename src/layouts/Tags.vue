<template>
  <div class="tags-page">
    <section class="tags">
      <h2 class="headline">TAGS</h2>
      <ul class="tag-list">
        <router-link
          :count="map.pages.length"
          :key="name"
          :to="map.path"
          class="tag-item"
          tag="li"
          v-for="(map, name) of $tag._metaMap"
        >{{ name }}</router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tags'
};
</script>

<style lang="stylus" scoped>
.tags-page {
  max-width: 450px;

  .tag-list {
    display: flex;
    flex-flow: row wrap;
  }

  .tags {
    padding: spacer(1.5) spacer(3);
    widget();

    .tag-item {
      display: flex;
      align-items: center;
      margin-top: spacer(1.5);
      margin-right: spacer(2);
      padding: 0 spacer(0.5);
      height: 32px;
      border-radius: $baseRadius * 0.5;
      background-color: $bgColor;
      font(15px);
      cursorPointer();

      &::before, &::after {
        display: block;
        margin: 0 spacer();
      }

      &::before {
        content: '#';
      }

      &::after {
        content: attr(count);
      }
    }
  }
}
</style>
