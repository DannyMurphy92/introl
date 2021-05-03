<template>
  <div class="home-page">
    <div class="home-page__intro">
      <div class="site-trunk">
        <div class="home-page__intro__heading">
          <span>Managed IT Infrastructure</span>
        </div>
        <div class="home-page__intro__sub-heading">
          <span>Deploy your systems quickly and efficiently</span>
        </div>
        <div class="home-page__intro__blurb">
          <span>Integer varius, lectus ut scelerisque porttitor, nulla justo egestas odio, et tempor lectus elit non quam.
            Morbi feugiat est bibendum, auctor risus eu, pellentesque augue. Fusce posuere dolor at metus malesuada,
            eget ornare leo commodo. Etiam suscipit tristique dolor a tincidunt.</span>
        </div>
      </div>
    </div>
    <div class="site-trunk">
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
          body="Vivamus ut gravida nisl. In hac habitasse platea dictumst. Nullam et sollicitudin ligula. Maecenas vel dignissim urna. Nulla pharetra facilisis elit, non facilisis velit tristique eget. Integer lacus dui, suscipit nec est sit amet, venenatis pulvinar purus. Pellentesque dapibus risus enim, at hendrerit arcu mattis non. Sed vel mollis felis. Vivamus tincidunt fermentum nunc. Donec tincidunt neque vel sagittis porta. Donec porta sapien ipsum, a cursus erat pulvinar quis. Pellentesque placerat lobortis sem eu blandit. Vivamus sit amet consectetur libero, id feugiat magna. Fusce lorem purus, pellentesque quis libero in, tincidunt feugiat velit. Proin in felis nec nisl bibendum pretium."
          :icon="faServer"
        />
        <InfoCard
          class="home-page__services__item"
          header="Over 10 years experience"
          body="Nunc porta tortor eu ante finibus, vitae malesuada nisl lobortis. In hac habitasse platea dictumst. Fusce quam mauris, iaculis in tempor in, aliquam blandit orci. Sed sit amet orci at mi imperdiet dictum. Maecenas tristique varius finibus. Nunc convallis id ipsum eu aliquet. In id magna pellentesque, rutrum purus vitae, vehicula sem. Aliquam hendrerit tortor sit amet ante sodales, id volutpat nibh varius."
          :icon="faWrench"
        />
      </div>
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
  &__intro {
    margin-bottom: 25px;
    padding: 15px 25px;
    color: $color-white;
    background: $color-secondary;

    &__heading {
      font-size: 22px;
      margin-bottom: 10px;
    }

    &__sub-heading {
      font-size: 24px;
      font-weight: $font-weight-bold;
      margin-bottom: 10px;
    }
  }

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
