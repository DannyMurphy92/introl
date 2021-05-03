<template>
  <div class="layout">
    <Header />
    <main class="layout__body">
      <Nuxt />
    </main>
    <Footer />
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
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  position: relative;

  &__body {
    display: flex;
    flex: 1 0 auto;
    padding-bottom: 50px;
  }
}
</style>
