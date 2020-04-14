<template>
  <div class="catelog">
    <div class="iocn_item"
         v-for="item of iconList"
         :key="item.id">
      <div class="iocn_img"
           :style="{background:item.color}">
        <img :src="item.imgUrl">
      </div>
      <span>{{item.desc}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: "https://pic5.40017.cn/01/000/84/4f/rBLkBVmLtaiAcmRaAAAEH9JbM6g234.png",
          desc: "本地热推",
          color: "#fd6266"
        },
        {
          id: "0002",
          imgUrl: "https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png",
          desc: "亲子游",
          color: "#6dcf16"

        },
        {
          id: "0003",
          imgUrl: "https://pic5.40017.cn/02/001/6d/db/rBLkCVmEGfeAVI4FAAAEXdabEDE534.png",
          desc: "温泉预售",
          color: "#41a9f2"
        },
        {
          id: "0004",
          imgUrl: "https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png",
          desc: "自然风光",
          color: "#fda424"
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.catelog {
  display: flex;
  .iocn_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iocn_img {
      margin: 0.4rem 0 0.2rem 0;
      width: 1rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>