<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>

<style lang="scss">
.homepage {
  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 750px;
    }

    &-container {
      padding-top: 20px;
    }
  }
}
</style>
