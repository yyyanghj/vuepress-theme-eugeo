<template>
  <section class="search-box">
    <label for="search">
      <v-icon class="search-icon" name="search"></v-icon>
    </label>
    <input
      id="search"
      class="search-input"
      type="text"
      autocomplete="off"
      v-model.trim="query"
      @input="handleInput"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >

    <ul class="suggestions">
      <li
        class="item"
        :class="{focus: focusIndex === index}"
        v-for="(item, index) of results"
        :key="item.key"
        @mousedown="go(index)"
        @mouseenter="focusIndex = index"
      >
        <span class="title">{{ item.title }}</span>
        <span class="head" v-if="item.header">{{ item.header }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
/* global MAX_SUGGESTIONS */
import debounce from 'lodash/debounce';
let debounceSearch = null;

export default {
  name: 'SearchBox',
  data: () => ({
    query: '',
    results: [],
    focusIndex: 0
  }),

  mounted() {
    debounceSearch = debounce(this.search, 300);
  },

  watch: {
    results() {
      this.focusIndex = 0;
    }
  },

  methods: {
    handleInput() {
      debounceSearch();
    },
    search() {
      const query = this.query.toLowerCase();
      if (!query) {
        return (this.results = []);
      }

      const results = [];
      const matches = item =>
        item.title && item.title.toLowerCase().includes(query);
      for (const post of this.$posts) {
        if (results.length >= MAX_SUGGESTIONS) {
          break;
        }

        if (matches(post)) {
          const { path, title } = post;
          results.push({ path, title });
        }

        if (post.headers) {
          for (const header of post.headers) {
            if (results.length >= MAX_SUGGESTIONS) {
              break;
            }

            if (matches(header)) {
              results.push({
                path: `${post.path}#${header.slug}`,
                title: `${post.title}`,
                header: `${header.title}`
              });
            }
          }
        }
      }
      this.results = results;
    },
    go(index) {
      const path = this.results[index].path;
      this.$router.push(path);
      this.query = '';
      this.results = [];
    },
    onUp() {
      if (this.focusIndex > 0) {
        this.focusIndex--;
      }
    },
    onDown() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.search-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible !important;
  padding: 0 spacer(3);
  height: 36px;
  widget();

  label {
    display: block;
    height: 20px;
    cursorPointer();
  }

  .search-icon {
    font-size: 16px;
  }

  .search-input {
    display: block;
    flex: 1;
    margin-left: spacer(2);
    height: 28px;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;
    appearance: none;

    &:focus {
      & + .suggestions {
        opacity: 1;
      }
    }
  }

  .suggestions {
    position: absolute;
    top: 36px;
    left: 50%;
    z-index: 1;
    width: 240px;
    opacity: 0;
    transition: opacity 300ms;
    transform: translateX(-50%);
    widget();

    .item {
      display: block;
      overflow: hidden;
      margin: spacer(0.5) 0;
      padding: 0 spacer(2);
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      line-height: 28px;
      cursorPointer();

      &.focus {
        background-color: $accentColor;
        color: $white;
      }

      .title {
        font-weight: 600;
      }

      .head {
        &:before {
          display: inline-block;
          margin: 0 spacer(0.5);
          content: '>';
        }
      }
    }
  }
}
</style>
