<template>
  <div class="footer">
    <div class="site-trunk">
      <div class="footer__container">
        <ContactInfo class="footer__contact" />
        <div class="footer__legal">
          <span>Copyright &copy; Introl {{ currentYear }}. All rights reserved.</span>
        </div>
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
  background: $color-secondary;
  padding: 20px 0;
  width: 100%;
  text-align: center;

  &__contact {
    margin-bottom: 10px;

    @include media-query-min($mq-md) {
      margin-bottom: 0;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-query-min($mq-md) {
      flex-direction: row;
    }
  }
}
</style>
