<template>
  <div class="v-loading">
    <span class="loading"></span>
  </div>
</template>

<script>
export default {
  name: 'vLoading'
};
</script>

<style lang="stylus" scoped>
.v-loading {
  color: $white;

  .loading {
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    border: 1px currentColor solid;
    border-radius: 50%;
    animation: rotation 1s ease-in-out infinite;

    &:after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: currentColor;
      content: '';
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
