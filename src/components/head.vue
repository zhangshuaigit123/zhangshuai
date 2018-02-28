<template>
  <div>
      <div class="headcontent ">
          <div class="head_left">
               <img src="../assets/logo1.png" alt="">
          </div>
          <div class="head_center">
              <router-link to="sousuo">
              <i class="iconfont icon-sousuo"></i>
               搜索商品名称
               </router-link>
          </div>
          <div class="head_right">
              <i class="iconfont icon-ren"></i>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "header_ui",
  data() {
    return {};
  }
};
</script>
<style>

.headcontent {
  display: flex;
  align-items: center;
  padding-top:0.06rem;
  
}
.head_left {
  width: 0.3rem;
  margin-left: 0.2rem;
  
}
.head_left img {
  width: 100%;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.head_center{
    width: 2.5rem;
    height: 0.3rem;
    border: 1px solid #ccc;
    margin-left: 0.2rem;
    text-align: left;
    line-height: 0.3rem;
    padding-bottom:0.1rem;
}
.head_right{
    margin-left: 0.2rem;
}
</style>

