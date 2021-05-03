<template>
  <div class="info-card">
    <div class="info-card__header">
      <span>{{ header }}</span>
    </div>
    <div class="info-card__body">
      <span>{{ body }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InfoCard',

  props: {
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
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
