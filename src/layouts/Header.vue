<template>
  <div class="site-trunk header">
    <Logo class="header__logo" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
  },
});
</script>

<style lang="scss" scoped>
.header__logo {
  width: 100px;
  height: 50px;
}
</style>
