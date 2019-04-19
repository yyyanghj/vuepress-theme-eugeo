<template>
  <footer class="footer">
    <p>
      &copy;2019
      <span class="heart">♥</span>
      Coolyang
    </p>
    <p>
      Powered by
      <a class="link" href="https://vuepress.vuejs.org/">Vuepress</a>
      <span>| Theme</span>
      <a class="link" href="https://github.com/Coolyang1996/vuepress-theme-eugeo">Eugeo</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
};
</script>

<style lang="stylus" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $widgetBgColor;
  text-align: center;
  font(14px);
  shadow(0.5);

  p {
    margin-top: spacer();
  }

  span {
    display: inline-block;
    margin: 0 4px;
  }

  .link {
    color: $accentColor;
  }

  .heart {
    color: red;
  }
}
</style>
