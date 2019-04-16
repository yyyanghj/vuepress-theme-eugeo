<template>
  <section class="reward" v-if="enabled">
    <div class="text">{{reward.text}}</div>
    <div class="methods">
      <a
        class="item"
        v-for="(imgUrl, name) of reward.methods"
        :key="name"
        @click="handleEnter(name, imgUrl)"
        @mouseenter="handleEnter(name, imgUrl)"
        @mouseleave="handleLeave"
      >
        <v-icon :name="name"></v-icon>
      </a>
    </div>

    <div v-show="showModal" class="modal">
      <v-loading></v-loading>
      <img class="qrcode-img" v-show="qrcodeImg" :src="qrcodeImg" alt>
    </div>
  </section>
</template>

<script>
import { isObject } from 'lodash';

export default {
  name: 'Reward',
  data: () => ({
    showModal: false,
    qrcodeImg: ''
  }),
  computed: {
    enabled() {
      if (!this.$frontmatter.reward) {
        return false;
      }

      if (!isObject(this.$themeConfig.reward)) {
        return false;
      }

      return true;
    },
    reward() {
      return this.$themeConfig.reward;
    }
  },
  methods: {
    handleEnter(name, imgUrl) {
      this.qrcodeImg = imgUrl;
      this.showModal = true;
    },
    handleLeave() {
      this.qrcodeImg = '';
      this.showModal = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.reward {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: spacer(2) 0;

  .modal {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -100%);
    widget();

    .v-loading {
      color: $accentColor;
    }

    .qrcode-img {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  }

  .methods {
    display: flex;
    margin: spacer() auto 0;
    padding: 0 spacer();
    height: 38px;
    border: 1px solid $borderColor;
    border-radius: 36px;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 36px;
      font-size: 24px;

      &:hover {
        color: $accentColor;
      }

      &:not(:last-child) {
        border-right: 1px solid $borderColor;
      }
    }
  }
}
</style>
