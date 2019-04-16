<template>
  <button class="v-btn" v-ripple :class="{flat}" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vBtn',
  props: {
    flat: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus" scoped>
.v-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  min-width: 88px;
  height: 36px;
  outline: none;
  border: none;
  border-radius: $baseRadius * 0.5;
  background-color: #f5f5f5;
  transition: all 300ms ease;
  user-select: none;
  cursorPointer();
  font(14px);

  &.flat {
    background-color: transparent;
  }

  &:not(.flat) {
    shadow();
  }

  &:disabled {
    color: rgba($black, 0.26) !important;

    &:not(.flat) {
      background-color: rgba($black, 0.12) !important;
    }
  }

  &:active, &:hover:not(:disabled) {
    &::before {
      background-color: currentColor;
    }
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    color: inherit;
    content: '';
    opacity: 0.12;
    transition: background-color 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
  }
}
</style>
