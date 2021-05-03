<template>
  <div class="footer">
    <div class="site-trunk footer_container">
      <ContactInfo class="footer__contact" />
      <div class="footer__legal">
        <span>Copyright &copy; Introl {{ currentYear }}. All rights reserved.</span>
      </div>
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
  computed: {
    currentYear() {
      return new Date(Date.now()).getFullYear();
    },
  },
});
</script>

<style lang="scss">
.footer {
  background: $color-grey;
  padding: $footer-vertical-padding 0;
  width: 100%;
  height: $footer-height;
}
</style>
