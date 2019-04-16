<template>
  <section class="pagination" v-if="total">
    <v-btn class="flat" @click="handlePrev" :disabled="canPrev">PREV</v-btn>
    <div class="pages">
      <a
        class="item"
        v-for="pageNum of showItems"
        :class="{current: currentPage === pageNum}"
        :key="pageNum"
        @click="handleSelect(pageNum)"
      >{{pageNum}}</a>
    </div>
    <v-btn flat @click="handleNext" :disabled="canNext">NEXT</v-btn>
  </section>
</template>

<script>
export default {
  name: 'pagintion',
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 6
    },
    showCount: {
      type: Number,
      default: 5
    }
  },
  data: () => ({
    currentPage: 1
  }),
  computed: {
    pagintionItems() {
      const counts = Math.ceil(this.total / this.perPage);
      return Array(counts)
        .fill(0)
        .map((v, i) => i + 1);
    },
    canPrev() {
      return this.currentPage <= 1;
    },
    canNext() {
      return this.currentPage >= this.pagintionItems.length;
    },
    showItems() {
      const current = this.currentPage;
      const showCount = this.showCount;
      const pagintionItems = this.pagintionItems;

      const half = showCount / 2;
      const startIndex = current > half ? current - Math.ceil(half) : 0;
      const endIndex = startIndex + showCount;

      return endIndex > pagintionItems.length
        ? pagintionItems.slice(-showCount)
        : pagintionItems.slice(startIndex, endIndex);
    }
  },
  methods: {
    handlePrev() {
      if (this.currentPage > 1) {
        this.onPageChange(--this.currentPage);
      }
    },
    handleNext() {
      if (this.currentPage < this.pagintionItems.length) {
        this.onPageChange(++this.currentPage);
      }
    },
    handleSelect(pageNum) {
      this.currentPage = pageNum;
      this.onPageChange(pageNum);
    },
    onPageChange(pageNum) {
      this.$emit('change', pageNum);
    },
    refresh() {
      this.currentPage = 1;
      this.onPageChange(this.currentPage);
    }
  }
};
</script>

<style lang="stylus" scoped>
.pagination {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  .v-btn {
    color: $accentColor;
  }

  .pages {
    display: flex;
    justify-content: space-between;

    .item {
      widget();
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 spacer();
      width: 24px;
      height: 24px;
      border-radius: $baseRadius * 0.5;
      transition: background-color 300ms ease;
      font(14px);

      &:hover {
        background-color: $bgColor;
      }

      &.current {
        background-color: $accentColor;
        color: $white;
      }
    }
  }
}
</style>
