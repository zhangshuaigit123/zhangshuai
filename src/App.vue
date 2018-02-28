<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from "./rem/rem.js";
export default {
  name: "app"
};
</script>

<style>
@import "./font/iconfont.css";
#app {
  font-family: "Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.14rem;
}
ul,
li {
  list-style: none;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clearfix:after {
  /*最简方式*/
  content: "";
  display: block;
  clear: both;
}
</style>
