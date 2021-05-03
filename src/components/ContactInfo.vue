<template>
  <div class="contact-info">
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
  data() {
    return {
      email: 'info@introl.com',
      faEnvelope,
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-info__email {
  font-weight: $font-weight-semi-bold;

  &__icon {
    margin-right: 3px;
  }
}
</style>
