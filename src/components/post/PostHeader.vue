<template>
  <header class="post-header">
    <section v-if="image" class="banner">
      <v-loading></v-loading>
      <img class="image" :src="image">
    </section>

    <transition name="fade" appear>
      <section class="meta">
        <h1 class="title">{{ title }}</h1>
        <div class="time">
          {{ $frontmatter.date | dateFormat($themeConfig.dataFormat) }}
          &nbsp;/&nbsp;
          {{ readingTime }} min read
        </div>
      </section>
    </transition>
  </header>
</template>

<script>
import dayjs from 'dayjs';
import { arrRandom } from '@eugeo/utils/tool';
export default {
  name: 'PostHeader',
  computed: {
    image() {
      const images = this.$frontmatter.banner;
      return (Array.isArray(images) ? arrRandom(images) : images) || '';
    },
    title() {
      return this.$frontmatter.title || this.$page.title || '';
    },
    readingTime() {
      return Math.ceil(this.$page.readingTime.minutes);
    }
  },
  filters: {
    dateFormat(val, format = 'MMM D, YYYY') {
      return dayjs(val).format(format);
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-header {
  .banner {
    position: relative;
    padding-bottom: 50%;
    background-size: cover;

    .v-loading {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      margin: auto;
      width: 30px;
      height: 30px;
    }

    .image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta {
    margin-top: spacer(2);
    padding: spacer(2);
    text-align: center;

    .title {
      color: $titleColor;
      font(26px);
      font-weight: 600;
    }

    .time {
      margin-top: spacer();
      font-size: 14px;
      opacity: 0.8;
    }
  }

  .fade-enter-active {
    opacity: 0;
    animation: fade 450ms ease-in-out 450ms;
  }

  @media (max-width: $MQMobile) {
    .meta {
      text-align: left;
    }
  }
}
</style>
