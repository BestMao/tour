<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiperImg"
             :src="item.imgURL">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperList: [{
        id: 0,
        imgURL: 'http://img.zcool.cn/community/018a5f5be2a7c6a801209252fefabb.jpg@2o.jpg'
      },
      {
        id: 1,
        imgURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586864853568&di=5a0ebd117d1213c1204e4670b2445e42&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F19%2F81%2F92582d1915e733b.jpg%2521%2Fwatermark%2Ftext%2FOTDorr7orqE%3D%2Ffont%2Fsimkai%2Falign%2Fsoutheast%2Fopacity%2F20%2Fsize%2F50'
      }],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          loop: true
        },
        // Some Swiper option/callback...
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiperImg {
  width: 100%;
}
</style>