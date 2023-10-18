<script setup lang="ts">

import { RouterView } from 'vue-router'
// import HelloWorld from './../../components/HelloWorld.vue'
import type { Router } from 'vue-router'


// vue3获取全局变量router
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router

// 获取vue2中的router与route
import { useRouter,useRoute } from 'vue-router'
const vue2Router = useRouter()
const vue2Route = useRoute()

console.log(router,vue2Router,{
  ...vue2Route
})

import {
  HomeFilled,
  Menu as IconMenu,
  Odometer,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


const jump = (url:any) => {
  if (!url || !router) return
  router.push(url)
}

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
      <nav class="menu">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Odometer /></el-icon>
              <span>Dashboard</span>
            </template>
            <el-menu-item index="1-1" @click="jump('/')">
              <span> 首页 </span>
            </el-menu-item>
                
          </el-sub-menu>
          <el-menu-item index="2" @click="jump('/home')">
            <el-icon><HomeFilled /></el-icon>
            <span> Home </span>
          </el-menu-item>
          <el-menu-item index="3" @click="jump('/about')">
            <el-icon><icon-menu /></el-icon>
            <span> About </span>
          </el-menu-item>
        </el-menu>
      </nav>
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
    .menu{
      flex-shrink: 0;
      font-size: 12px;
      text-align: left;
      padding: 1rem 0;
      user-select: none;
      .el-menu{
        height: 100%;
        overflow: auto;
      }

      .el-menu-item.is-active{
        // a{
          color:var(--el-menu-active-color)
        // }
      }
      .el-sub-menu.is-active ::v-deep{
        .el-sub-menu__title{
          color:var(--el-menu-active-color)
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
    .content {
      flex: 1;
      padding: 1rem;
    }
  }
}
</style>
