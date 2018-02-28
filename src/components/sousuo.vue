<template>
  <div>
      <div class="title" >
            <div class="titile_left" @click="fanhui"><</div>
            <div class="titile_center"><input type="text" placeholder="搜索"></div>
            <div class="titile_right">
                <i class="iconfont icon-sousuo"></i>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "sousuo",
  data() {
    return {};
  },
  methods:{
      fanhui:function(){
       this.$router.go(-1)
      }
  }
};
</script>
<style>
.title {
  width: 100%;
 height: 1rem;
 background: #f2f2f2;
 position: fixed;
 text-align: left;
 display: flex;
 align-items:center;
 justify-content:space-around;
}
.title div{
   
    
}
.titile_center{
  width: 6rem;
   margin-left: 0.3rem;  
   
}
.titile_center input{
    width: 100%;
}
</style>
