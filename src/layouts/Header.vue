<template>
  <div class="header">
    <div class="site-trunk header__container">
      <div class="header__logo__container">
        <img
          class="header__logo"
          src="@/static/logo.png"
          alt="logo"
        >
      </div>
      <div>
        <Accordion class="header__contact">
          <template #header>
            <span class="header__contact__header">Contact us</span>
          </template>
          <template #body>
            <ContactInfo class="header__contact__body" />
          </template>
        </Accordion>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Accordion from '@/components/Accordion.vue';
import ContactInfo from '@/components/ContactInfo.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Accordion,
    ContactInfo,
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: $color-white;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &__logo {
    width: 100px;

    @include media-query-min($mq-md) {
      width: 200px;
    }
  }

  &__contact {
    &__header {
      @include media-query-min($mq-md) {
        font-size: 26px;
      }
    }

    &__body {
      text-align: center;
    }
  }
}
</style>
