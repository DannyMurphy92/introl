<template>
  <div class="home-page site-trunk">
    <div class="home-page__services">
      <InfoCard
        class="home-page__services__item"
        header="Best in class delivery"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet feugiat massa, a ultrices quam.
            Cras in ornare risus. Phasellus erat odio, finibus vitae mollis et, maximus imperdiet augue. Aliquam nec
            tempor velit. Maecenas aliquam porttitor ligula et dignissim. Maecenas hendrerit rutrum vulputate. In hac
            habitasse platea dictumst. Etiam malesuada elit felis, in suscipit lacus convallis ut. Aliquam at enim
            sapien. Sed bibendum malesuada libero, at vehicula tellus rhoncus nec. Donec gravida ex id ex interdum
            iaculis. Quisque sed sapien justo. Etiam quam elit, hendrerit ac lectus eget, consequat gravida
            libero."
        :icon="faUsers"
      />
      <InfoCard
        class="home-page__services__item"
        header="GCP & AWS certified"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet feugiat massa, a ultrices quam.
            Cras in ornare risus. Phasellus erat odio, finibus vitae mollis et, maximus imperdiet augue. Aliquam nec
            tempor velit. Maecenas aliquam porttitor ligula et dignissim. Maecenas hendrerit rutrum vulputate. In hac
            habitasse platea dictumst. Etiam malesuada elit felis, in suscipit lacus convallis ut. Aliquam at enim
            sapien. Sed bibendum malesuada libero, at vehicula tellus rhoncus nec. Donec gravida ex id ex interdum
            iaculis. Quisque sed sapien justo. Etiam quam elit, hendrerit ac lectus eget, consequat gravida
            libero."
        :icon="faServer"
      />
      <InfoCard
        class="home-page__services__item"
        header="Over 10 years experience"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet feugiat massa, a ultrices quam.
            Cras in ornare risus. Phasellus erat odio, finibus vitae mollis et, maximus imperdiet augue. Aliquam nec
            tempor velit. Maecenas aliquam porttitor ligula et dignissim. Maecenas hendrerit rutrum vulputate. In hac
            habitasse platea dictumst. Etiam malesuada elit felis, in suscipit lacus convallis ut. Aliquam at enim
            sapien. Sed bibendum malesuada libero, at vehicula tellus rhoncus nec. Donec gravida ex id ex interdum
            iaculis. Quisque sed sapien justo. Etiam quam elit, hendrerit ac lectus eget, consequat gravida
            libero."
        :icon="faWrench"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import { faUsers, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';

export default Vue.extend({
  components: {
    InfoCard,
  },

  data() {
    return { faUsers, faServer, faWrench };
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 50px;

  &__services {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-query-min($mq-md) {
      flex-direction: row;
    }

    &__item {
      margin-bottom: 20px;

      @include media-query-min($mq-md) {
        margin: 0 12px;
      }
    }
  }
}
</style>
