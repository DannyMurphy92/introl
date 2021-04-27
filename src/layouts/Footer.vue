<template>
  <Logo />
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    Logo,
  },
});
</script>
