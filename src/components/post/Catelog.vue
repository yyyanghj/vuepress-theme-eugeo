<template>
  <TOC class="catelog" list-type="ul" :includeLevel="[2,3]"></TOC>
</template>

<script>
export default {
  name: 'Catelog'
};
</script>

<style lang="stylus">
.catelog {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 12;
  overflow-y: auto;
  padding: spacer(6) spacer(1.5);
  width: 250px;
  height: 100%;
  background-color: rgba($black, 0.7);
  color: $white;
  transition: transform 450ms ease;
  transform: translateX(300px);
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  ul {
    padding-left: spacer(1.5);
    list-style: none;

    li {
      margin-bottom: spacer(0.5);
    }

    .router-link-active {
      color: $accentColor;
    }
  }
}
</style>
