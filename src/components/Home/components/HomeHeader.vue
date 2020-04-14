<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont">&#xe606;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe612;</span>
      上海海沧海洋公园</div>
    <div class="header-city">北京
      <span class="iconfont">&#xe658;</span>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.header {
  display: flex;
  line-height: 0.88rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  .header-back {
    width: 0.8rem;
  }
  .header-search {
    flex: 1;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.02rem 0.02rem #ccc;
  }
  .header-city {
    width: 1.5rem;
  }
}
</style>