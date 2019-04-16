<template>
  <svg class="v-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'vIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.v-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
