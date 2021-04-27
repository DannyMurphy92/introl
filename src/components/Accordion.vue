<template>
  <div class="accordion">
    <div
      class="accordion__header"
      @click="toggleAccordian()"
    >
      <slot name="header" />
    </div>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        v-show="isOpen"
        class="accordion__body"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Accordion',

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordian() {
      this.isOpen = !this.isOpen;
    },
    beforeEnter(el: HTMLElement) {
      el.style.height = '0';
    },
    enter(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el: HTMLElement) {
      el.style.height = '0';
    },
  },
});
</script>

<style lang="scss" scoped>
.accordion {
  height: 0;

  &__header {
    cursor: pointer;
  }

  &__body {
    overflow: hidden;
    transition: 150ms ease-out;
  }
}
</style>
