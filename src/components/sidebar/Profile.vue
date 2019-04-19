<template>
  <section class="profile" v-if="profile">
    <img :src="profile.avatar" alt="avatar" class="avatar">

    <h3 v-if="profile.nickname" class="nickname">{{ profile.nickname }}</h3>

    <div v-if="profile.bio" class="bio">{{ profile.bio }}</div>

    <div class="location" v-if="profile.location">
      <v-icon name="location"></v-icon>
      <span class="text">{{ profile.location }}</span>
    </div>

    <div class="email" v-if="profile.email">
      <v-icon name="email"></v-icon>
      <span class="text">{{ profile.email }}</span>
    </div>

    <div class="sns">
      <a :href="link" class="item" v-for="(link, name) in sns" :key="name" target="_blank" rel="noopener noreferrer">
        <v-icon class="icon" :name="name"></v-icon>
        <span class="tip">{{ name }}</span>
      </a>
    </div>

    <div class="post-info">
      <router-link class="item" to="/archive/">
        <h4 class="label">Archive</h4>
        <span class="text">{{ $posts.length }}</span>
      </router-link>

      <router-link class="item" to="/category/">
        <h4 class="label">Categories</h4>
        <span class="text">{{ Object.keys($categories._metaMap).length }}</span>
      </router-link>

      <router-link class="item" to="/tag/">
        <h4 class="label">Tags</h4>
        <span class="text">{{ Object.keys($tags._metaMap).length }}</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    profile() {
      return this.$themeConfig.profile;
    },
    sns() {
      return this.$themeConfig.sns || {};
    }
  }
};
</script>

<style lang="stylus" scoped>
.profile {
  padding: spacer(2);
  text-align: center;
  widget();

  .avatar {
    display: block;
    margin: 0 auto;
    padding: 2px;
    width: 100px;
    height: 100px;
    border: 1px dashed $borderColor;
    border-radius: 50%;

    &:hover {
      animation: heartBeat 1s both;
    }
  }

  .nickname {
    margin-top: spacer(2);
    font(24px);
    color: $titleColor;
  }

  .bio {
    margin: spacer(1.5);
    font(16px);
  }

  .location, .email {
    margin-top: spacer(0.5);
    font(14px);
  }

  .sns {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: spacer();

    .item {
      position: relative;
      display: block;
      padding: spacer(0.25) spacer(0.5);
      color: rgba($black, 0.8);

      .icon {
        font-size: 24px;
        line-height: 24px;
      }

      .tip {
        position: absolute;
        top: 0;
        left: 50%;
        display: none;
        background: $black;
        color: $white;
        transform: translate(-50%, -35px);
        font(13px);
        padding: 0 spacer(2);
        border-radius: $baseRadius * 0.5;

        &:after {
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          border-top: 6px solid $black;
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
          content: '';
          transform: translate(-50%, 0);
        }
      }

      &:hover {
        color: $accentColor;

        .tip {
          display: block;
        }
      }
    }
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    margin-top: spacer(1.5);
    text-align: center;

    .item {
      display: block;
      flex: 1;
    }

    .label {
      font(14px);
      margin-bottom: spacer(0.5);
    }

    .text {
      font(16px);
    }
  }
}
</style>
