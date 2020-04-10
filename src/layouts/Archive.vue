<template>
  <div class="archive-page">
    <section class="timeline">
      <div :key="year" class="line" v-for="(posts, year) of archiveMap">
        <h3 class="year">{{year}}</h3>
        <ul>
          <router-link
            :key="post.key"
            :to="post.path"
            class="post"
            tag="li"
            v-for="post of posts"
          >
            <span class="date">{{post.frontmatter.date | formatDate}}</span>
            <span class="title">{{post.title}}</span>
          </router-link>
        </ul>
      </div>
      <h2 class="headline">ARCHIVE</h2>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'Archive',
  computed: {
    archiveMap() {
      return this.$posts
        .sort((a, b) => {
          const dateA = new Date(a.frontmatter.date);
          const dateB = new Date(b.frontmatter.date);
          return dateB - dateA;
        })
        .reduce((map, post) => {
          const { date } = post.frontmatter;
          const year = dayjs(date).year();
          if (!map[year]) {
            map[year] = [];
          }
          map[year].push(post);
          return map;
        }, {});
    }
  },
  filters: {
    formatDate(date) {
      return dayjs(date).format('MMM D');
    }
  }
};
</script>

<style lang="stylus" scoped>
.archive-page {
  max-width: 650px;

  .headline {
    margin-bottom: spacer();
  }

  .timeline {
    display: flex;
    flex-direction: column-reverse;
    padding: spacer(1.5) spacer(3);
    widget();

    .line {
      border-left: 2px solid $accentColor;
    }

    .year, .post {
      position: relative;
      left: -1px;
      padding: spacer() spacer(3);

      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 12px;
        height: 12px;
        border: 2px solid $accentColor;
        border-radius: 50%;
        background-color: $white;
        content: '';
        transform: translate(-50%, -50%);
      }
    }

    .year {
      color: $titleColor;
      font-size: 24px;

      &::before {
        width: 16px;
        height: 16px;
      }
    }

    .post {
      display: block;
      font-size: 16px;
      cursorPointer();

      .date {
        display: inline-block;
        margin-right: spacer(1.5);
      }
    }
  }
}
</style>
