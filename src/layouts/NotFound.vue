<template>
  <section class="not-found">
    <svg viewBox="0 0 200 100">
      <!-- Symbol -->
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy="0.35em">404</text>
      </symbol>

      <!-- Duplicate symbols -->
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
    </svg>
    <router-link to="/">o(ﾟДﾟ)っ Take Me Home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style lang="stylus" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: spacer(3);
  padding: spacer(3);
  widget();

  a {
    color: $accentColor;
    text-decoration: underline;
    font-size: 20px;
  }

  svg {
    margin-bottom: spacer(3);
    height: 200px;
  }

  .text {
    font-size: 100px;
    animation: stroke 6s infinite linear;
    fill: none;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
  }

  .text:nth-child(5n + 1) {
    animation-delay: -1.2s;
    stroke: #F2385A;
  }

  .text:nth-child(5n + 2) {
    animation-delay: -2.4s;
    stroke: #F5A503;
  }

  .text:nth-child(5n + 3) {
    animation-delay: -3.6s;
    stroke: #E9F1DF;
  }

  .text:nth-child(5n + 4) {
    animation-delay: -4.8s;
    stroke: #56D9CD;
  }

  .text:nth-child(5n + 5) {
    animation-delay: -6s;
    stroke: #3AA1BF;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
}
</style>
