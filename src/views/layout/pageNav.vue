<script setup lang="ts">
// import HelloWorld from './../../components/HelloWorld.vue'
import type { Router } from 'vue-router'

// vue3获取全局变量router
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router

// 获取vue2中的router与route
import { useRouter, useRoute } from 'vue-router'
const vue2Router = useRouter()
const vue2Route = useRoute()

console.log(router, vue2Router, {
  ...vue2Route
})

import menuItem from './menuItem.vue'

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}



const jump = (url: any) => {
  if (!url || !router) return
//   router.push(url)
}
</script>

<template>
  <nav class="menu">
    <el-menu
      :default-active="vue2Route.fullPath"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      router
    >
      <menuItem></menuItem>
      <el-menu-item index="/home" @click="jump('/home')">
        <el-icon><HomeFilled /></el-icon>
        <span> Home </span>
      </el-menu-item>
      <el-menu-item index="/about" @click="jump('/about')">
        <el-icon><Menu /></el-icon>
        <span> About </span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  flex-shrink: 0;
  font-size: 12px;
  text-align: left;
  padding: 1rem 0;
  user-select: none;
  .el-menu {
    height: 100%;
    overflow: auto;
  }

  .el-menu-item.is-active {
    // a{
    color: var(--el-menu-active-color);
    // }
  }
  .el-sub-menu.is-active ::v-deep {
    .el-sub-menu__title {
      color: var(--el-menu-active-color);
    }
  }
  // a{
  //   text-decoration: none;
  //   color: #000;
  // }
  // a:hover{
  //   color:var(--el-menu-active-color)
  // }
}
</style>
