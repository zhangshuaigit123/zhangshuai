<template>
  <div>
       <v-head></v-head>
       <!-- 导航选项卡切换 -->
       <div class="content_box">
          
        <mt-navbar v-model="selected" >
                <mt-tab-item id="1">推荐</mt-tab-item>
                <mt-tab-item id="2">手机</mt-tab-item>
                <mt-tab-item id="3">智能</mt-tab-item>
                <mt-tab-item id="4">电视</mt-tab-item>
                <mt-tab-item id="5">电脑</mt-tab-item>
                <mt-tab-item id="6">全面屏</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected" >
            <mt-tab-container-item id="1" class="lunbo">
             
                  <mt-swipe :auto="4000" >
                       <mt-swipe-item v-for="(item,index) in lunbo" :key="item.id">
                         
                          <img v-bind:src="item.imgurl" alt="" @click="tiaozhuan(index)">
                         
                          </mt-swipe-item>
                  </mt-swipe>
             
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
             <div>2</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
            <div>3</div>
           </mt-tab-container-item>
           <mt-tab-container-item id="4">
            <div>4</div>
           </mt-tab-container-item>
        
       </mt-tab-container>
       

       </div>
       <!-- 轮播下面导航 -->
       <div class="mifen">
        <mt-navbar  >
                <mt-tab-item id="ka1"><img src="../assets/ka1.jpg" alt=""></mt-tab-item>
                <mt-tab-item id="ka2"><img src="../assets/ka2.jpg" alt=""></mt-tab-item>
                <mt-tab-item id="ka3"><img src="../assets/ka3.jpg" alt=""></mt-tab-item>
                <mt-tab-item id="ka4"><img src="../assets/ka4.jpg" alt=""></mt-tab-item>
                
        </mt-navbar>
       </div>
       <!-- 音箱体温计 -->
       <div class="yinxiang clearfix">
           <div class="yixiang_left left">
               <img src="../assets/yin1.jpg" alt="">
           </div>
           <div class="yixiang_right left">
               <div class="top"><img src="../assets/yin2.jpg" alt=""></div>
               <div class="bottom"><img src="../assets/yin3.jpg" alt=""></div>
           </div>
       </div>
        <!-- 底部 -->
        <v-bottom></v-bottom>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import header_ui from "@/components/head";
import bottom from "@/components/bottom";
export default {
  name: "Content",
  data() {
    return {
      selected: "1",
      lunbo:[
        { imgurl: require("../assets/lun1.jpg") },
        { imgurl: require("../assets/lun2.jpg") },
        { imgurl: require("../assets/lun3.jpg") },
        { imgurl: require("../assets/lun4.jpg")}
      ]
    };
  },
  components: {
    "v-head": header_ui,
    "v-bottom": bottom
  },
  methods:{
    tiaozhuan:function(id){
 
          this.$router.push({path:"hongmi",query:{id:id}})
    }
  }
};
</script>
<style scoped lang="less">
.swipe {
  height: 1.87rem;
}
.lunbo {
  width: 100%;
  height: 1.87rem;
  img {
    width: 100%;
    height: auto;
  }
}
.mifen {
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
  a {
    padding: 0;
  }
}

.yinxiang {
  width: 100%;
  height: auto;
  background-color: rgb(245, 245, 245);
  .yixiang_left {
    width: 1.86rem;
    height: 2.64rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .yixiang_right {
    margin-left: 0.02rem;
    .top {
      width: 1.86rem;
      height: 1.31rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      width: 1.86rem;
      height: 1.31rem;
      margin-top: 0.03rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

