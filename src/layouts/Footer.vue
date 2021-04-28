<template>
  <div class="footer">
    <div class="site-trunk footer_container">
      <ContactInfo class="footer__contact" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ContactInfo from '@/components/ContactInfo.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    ContactInfo,
  },
});
</script>

<style lang="scss">
.footer {
  background: $color-grey;
  padding-top: 50px;
  padding-bottom: 50px;

  &__contact {
    // color: $color-white;
  }
}
</style>
