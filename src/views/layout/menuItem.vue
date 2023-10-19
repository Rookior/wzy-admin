<script setup lang="ts">

import { useRouteStore } from '@/stores/route'
const route = useRouteStore()
const { list } = route


// 获取vue2中的router与route
import { useRouter } from 'vue-router'
const router = useRouter()

const jump = (url:any) => {
  if (!url || !router) return
//   router.push(url)
}
</script>

<template>
  
  <el-sub-menu v-for="(parent,parentIndex) in list" :key="parentIndex" :index="parent.path">
    <template #title>
      <el-icon><component :is="parent.meta.icon" /></el-icon>
      <span>{{ parent.meta.title }}</span>
    </template>
    <el-menu-item v-for="(child,childIndex) in parent.children" :key="parentIndex +  '-' + childIndex" :index="parent.path +  '/' + child.path" @click="jump(parent.path +  '/' + child.path)">
      <span> {{ child.meta.title }} </span>
    </el-menu-item>
  </el-sub-menu>

 
</template>

<style lang="scss" scoped></style>
