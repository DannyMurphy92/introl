<template>
  <div class="container">
    <div>
      <InfoCard
        header="Best in class delivery"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet feugiat massa, a ultrices quam.
            Cras in ornare risus. Phasellus erat odio, finibus vitae mollis et, maximus imperdiet augue. Aliquam nec
            tempor velit. Maecenas aliquam porttitor ligula et dignissim. Maecenas hendrerit rutrum vulputate. In hac
            habitasse platea dictumst. Etiam malesuada elit felis, in suscipit lacus convallis ut. Aliquam at enim
            sapien. Sed bibendum malesuada libero, at vehicula tellus rhoncus nec. Donec gravida ex id ex interdum
            iaculis. Quisque sed sapien justo. Etiam quam elit, hendrerit ac lectus eget, consequat gravida
            libero."
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InfoCard from '@/components/InfoCard.vue';

export default Vue.extend({
  components: {
    InfoCard,
  },
});
</script>

<style lang="scss">
.container {
  background: $color-white;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $font-family-primary;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
