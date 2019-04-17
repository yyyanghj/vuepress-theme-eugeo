<template>
  <article class="post-card" @click="handleClick">
    <figure class="head" v-if="headImage">
      <v-loading></v-loading>
      <img v-lazy="headImage" :title="post.title" alt class="image">
    </figure>
    <div class="wrapper">
      <h2 class="title">{{ post.title }}</h2>
      <div class="summary" v-html="summary"></div>
      <div class="meta">
        <span class="item">
          <v-icon name="date" class="icon"></v-icon>
          <span>{{ frontmatter.date | relativeTime }}</span>
        </span>

        <span class="spacer"></span>

        <span class="item" v-if="frontmatter.tags.length">
          <v-icon name="label" class="icon"></v-icon>
          <span v-for="tag of frontmatter.tags" :key="tag" @click.stop="go('tag', tag)">&nbsp;{{ tag }}&nbsp;</span>
        </span>

        <span class="item" v-if="frontmatter.category">
          <v-icon name="folder" class="icon"></v-icon>
          <span @click.stop="go('category', frontmatter.category)">&nbsp;{{ frontmatter.category }}&nbsp;</span>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import { arrRandom } from '@eugeo/utils/tool';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default {
  name: 'post-card',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    frontmatter() {
      return this.post.frontmatter;
    },

    headImage() {
      const image = this.frontmatter.banner;
      if (Array.isArray(this.frontmatter.banner)) {
        return arrRandom(image);
      }
      return image;
    },

    summary() {
      return this.post.excerpt || this.frontmatter.description || '暂无摘要';
    }
  },
  methods: {
    handleClick() {
      this.$router.push(this.post.path);
    },
    go(type, name) {
      this.$router.push({
        path: `/${type}/${name}`
      });
    }
  },
  filters: {
    relativeTime(val) {
      return dayjs(val).fromNow();
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-card {
  transition: box-shadow 300ms ease, transform 300ms ease;
  cursorPointer();
  widget();

  &:hover {
    shadow(2);
    transform: scale(1.02, 1.02);
  }

  for $color, $index in #f2849e #7ecaf6 #7bd0c1 #c75b9b #ae85ca #e9c763 {
    &:nth-child({$index}) {
      .head {
        background-color: rgba($color, 0.8);
      }
    }
  }

  .head {
    position: relative;
    padding-bottom: 50%;

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

  .wrapper {
    padding: spacer(2) spacer(3);
  }

  .title {
    font(20px);
    color: $titleColor;
  }

  .summary {
    margin-top: spacer();
    font(14px);
    text-elip(3);

    & > :not(:last-child) {
      margin-bottom: spacer();
    }

    >>> ul, ol {
      padding-left: spacer(2);
    }
  }

  .meta {
    display: flex;
    margin-top: spacer(1.5);
    padding-top: spacer(1.5);
    border-top: 1px dashed $borderColor;
    font-size: 13px;
    opacity: 0.8;

    .item {
      display: flex;
      align-items: center;
      margin-right: spacer(2.5);

      &:last-child {
        margin-right: 0;
      }
    }

    .spacer {
      flex: 1;
    }

    .icon {
      margin-right: spacer(0.5);
    }
  }
}
</style>
