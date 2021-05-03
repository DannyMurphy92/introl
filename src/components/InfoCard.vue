<template>
  <div class="info-card">
    <div class="info-card__header">
      <span>{{ header }}</span>
    </div>
    <div class="info-card__body">
      <div
        v-if="icon"
        class="info-card__body__icon"
      >
        <FontAwesomeIcon :icon="icon" />
      </div>
      <span>{{ body }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export default Vue.extend({
  name: 'InfoCard',
  components: {
    FontAwesomeIcon,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    icon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: undefined,
    },
  },
});
</script>

<style lang="scss">
.info-card {
  width: 300px;

  &__header {
    font-size: 24px;
    font-weight: $font-weight-bold;
    background: $color-grey;
    border-radius: 3px;
    padding: 10px 0;
    margin-bottom: 15px;
  }
}
</style>
