<template>
  <div>
      <div class="content">
          <header>
             <mt-header title="long long long long title">
               <router-link to="/" slot="left">
                    <mt-button icon="back">back</mt-button>
               </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
              </mt-header>
          </header>
          <mt-swipe :auto="4000">
              <mt-swipe-item>1</mt-swipe-item>

          </mt-swipe>
      </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
export default {
  name:"hongmi",
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">

</style>

