<template>
  <div class="contact-info">
    <a
      class="contact-info__email"
      :href="`mailto:${email}`"
    >{{ email }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactInfo',
  data() {
    return {
      email: 'info@introl.com',
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-info__email {
  font-weight: $font-weight-semi-bold;
}
</style>
