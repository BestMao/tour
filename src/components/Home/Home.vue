<template>
  <div class="home">
    <home-header class="header"></home-header>
    <home-swiper class="swiper"></home-swiper>
    <home-catelog class="catelog"></home-catelog>
    <home-hot class="hot"></home-hot>
    <home-weekend class="weekend"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCatelog from './components/HomeCatelog.vue'
import HomeHot from './components/HomeHot.vue'
import HomeWeekend from './components/HomeWeekend.vue'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeCatelog,
    HomeHot,
    HomeWeekend
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