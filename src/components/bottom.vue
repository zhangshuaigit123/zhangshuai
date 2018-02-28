<template>
  <div class="bottom">
        <mt-navbar  >
                <mt-tab-item :class="{ hover: isActive==index }"  v-for="(item,index) in dibu" @click="bianse(index)" :key="item.id"><i class="iconfont" :class="item.icon" @click="bianse(index)"></i><span>{{item.text}}</span></mt-tab-item>
        </mt-navbar>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  name: "bottom",
  data() {
    return {
      isActive:0,
      dibu:[
        {
          icon:"icon-home",
          text:"首页"
        },
         {
          icon:"icon-fenlei",
          text:"分类"
        },
         {
          icon:"icon-chabangtongzhuanyongfenlei_gouwuche",
          text:"购物车"
        },
         {
          icon:"icon-ren",
          text:"我的"
        },
        
      ]
        
      
    };
  },
  methods:{
      bianse:function(index){
        
       this.isActive=index;
      }
  }
};
</script>
<style scoped lang="less">
.bottom {
    a{
        color: #999!important;
    }
    .mint-navbar .mint-tab-item.is-selected {
    
   border-bottom: none;
    margin-bottom: -1px;
    padding-bottom: 0.1rem;
}
  span{
      display: block;
      margin-top:0.05rem;
  }
  .hover{
      color: #ff6700!important;
  }
}
</style>
