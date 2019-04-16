<template>
  <footer class="footer">
    <p>
      &copy;2019&nbsp;
      <span class="heart">♥</span> &nbsp;
      Coolyang
    </p>
    <p>
      Powered by
      <a class="link" href="https://vuepress.vuejs.org/">Vuepress</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      Theme
      <a class="link" href="/">Eugeo</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
};
</script>

<style lang="stylus" scoped>
.footer {
  position: relative;
  z-index: 16;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: $widgetBgColor;
  text-align: center;
  font(14px);
  shadow();

  .link {
    color: $accentColor;
  }

  .heart {
    color: red;
  }
}
</style>
