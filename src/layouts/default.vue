<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default defineComponent({
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
