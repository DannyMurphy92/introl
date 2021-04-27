<template>
  <Logo />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Logo,
  },
});
</script>
