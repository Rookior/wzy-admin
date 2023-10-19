<script setup lang="ts">
import { RouterView } from 'vue-router'
import pageNav from './pageNav.vue'
</script>

<template>
  <div class="app">
    <header>
      <a class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
        <h1>wzy-admin</h1>
      </a>
      <!-- <HelloWorld msg="You did it!" /> -->
    </header>
    <div class="main">
      <pageNav></pageNav>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  header{
    height: 48px;
    line-height: 48px;
    width: 100%;
    z-index: 100;
    background-color: #001529;
    padding: 0 16px;
    .logo{
      display: flex;
      align-items: center;
      height: 100%;
      img{
        height: 28px;
      }
      h1{
        height: 32px;
        margin: 0 0 0 12px;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
  .main {
    display: flex;
    height:calc(100% - 48px);
    .content {
      flex: 1;
      padding: 1rem;
    }
  }
}
</style>
