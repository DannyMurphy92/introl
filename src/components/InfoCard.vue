<template>
  <div class="info-card">
    <div class="info-card__header">
      <span>{{ header }}</span>
    </div>
    <div class="info-card__body">
      <div
        v-if="icon"
        class="info-card__body__icon-container"
      >
        <FontAwesomeIcon
          class="info-card__body__icon"
          :icon="icon"
          size="lg"
        />
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

<style lang="scss" scoped>
$border-radius: 5px;

.info-card {
  width: 100%;

  @include media-query-min($mq-lg) {
    width: 350px;
  }

  &__header {
    text-align: center;
    font-size: 18px;
    font-weight: $font-weight-bold;
    background: $color-secondary;
    padding: 5px;
    border-radius: $border-radius $border-radius 0 0;
    color: $color-white;

    @include media-query-min($mq-lg) {
      padding: 10px;
      font-size: 24px;
    }
  }

  &__body {
    padding: 10px;
    text-align: center;
    border-color: $color-primary;
    border-width: 2px;
    border-top-width: 0;
    border-style: solid;
    border-radius: 0 0 $border-radius $border-radius;

    &__icon-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 5px;
    }

    &__icon {
      color: $color-primary;
    }
  }
}
</style>
