<template>
  <div class="site-trunk header">
    <Logo class="header__logo" />
    <Accordion>
      <template #header>
        <span>Click meeee</span>
      </template>
      <template #body>
        <span>Hello</span>
      </template>
    </Accordion>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo.vue';
import Accordion from '@/components/Accordion.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Logo,
    Accordion,
  },
});
</script>

<style lang="scss" scoped>
.header__logo {
  width: 200px;
  height: 100px;
}
</style>
