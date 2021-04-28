<template>
  <div class="accordion">
    <div
      class="accordion__header"
      @click="toggleAccordian()"
    >
      <slot name="header" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="accordion__header__icon"
        :class="[{ 'accordion__header__icon--open': isOpen }]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
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
  &__header {
    cursor: pointer;

    &__icon {
      &--open {
        transform: rotate(180deg);
      }
    }
  }

  &__body {
    overflow: hidden;
    transition: 150ms ease-out;
  }
}
</style>
