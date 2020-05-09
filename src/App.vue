<template>
  <div id="App" style="height: 100%;">
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>

    export default {
        name: 'App'
    }
</script>

<style>
    body {
        margin: 0px;
        padding: 0px;
        font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        height: 100%;
    }
*{
    margin: 0;
    padding: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
