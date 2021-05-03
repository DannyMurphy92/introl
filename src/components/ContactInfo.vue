<template>
  <div
    class="contact-info"
    :class="[{ 'contact-info--light': light }]"
  >
    <a
      class="contact-info__email"
      :href="`mailto:${email}`"
    ><FontAwesomeIcon
      class="contact-info__email__icon"
      :icon="faEnvelope"
    />{{ email }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default Vue.extend({
  name: 'ContactInfo',
  components: {
    FontAwesomeIcon,
  },
  props: {
    light: Boolean,
  },
  data() {
    return {
      email: 'info@introl.com',
      faEnvelope,
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-info {
  color: $color-black;

  a {
    color: $color-black;
  }

  &--light {
    color: $color-white;

    a {
      color: $color-white;
    }
  }

  &__email {
    @include media-query-min($mq-md) {
      font-weight: $font-weight-semi-bold;
    }

    &__icon {
      margin-right: 3px;
    }
  }
}
</style>
