<template>
  <div class="home">
    <home-header class="header"></home-header>
    <home-swiper class="swiper"></home-swiper>
    <home-catelog class="swiper"></home-catelog>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCatelog from './components/HomeCatelog.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeCatelog
  }
}
</script>
<style lang="less">
.home {
  position: relative;
  .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>