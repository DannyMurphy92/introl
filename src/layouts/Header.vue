<template>
  <Logo />
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Logo,
  },
});
</script>
