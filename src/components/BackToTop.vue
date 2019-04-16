<template>
  <div class="back-to-top" :class="{hidden: isHidden}" @click="backToTop">
    <v-icon name="top"></v-icon>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    isHidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.back-to-top {
  position: fixed;
  right: 36px;
  bottom: 36px;
  z-index: 24;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: $accentColor;
  color: $white;
  font-size: 24px;
  opacity: 1;
  transition: transform 300ms cubic-bezier(0.77, 0.2, 0.05, 1), opacity 450ms ease;
  shadow();
  cursorPointer();

  &.hidden {
    opacity: 0;
    transform: scale(0.2);
  }
}
</style>
