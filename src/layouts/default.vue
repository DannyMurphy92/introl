<template>
  <div class="layout">
    <Header />
    <Nuxt />
    <Footer class="layout__footer" />
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default Vue.extend({
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
html {
  font-family: $font-family-primary;
  font-size: $font-size-base;
  color: $font-color;
  word-spacing: 1px;
  box-sizing: border-box;

  a {
    color: $font-color;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  padding-bottom: $footer-height + $footer-vertical-padding * 2;

  &__footer {
    bottom: 0;
    position: absolute;
  }
}
</style>
