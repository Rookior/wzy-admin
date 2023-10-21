<script setup lang="ts">
const props = defineProps({
  menuData: {
    type: Object //类型字符串
  },
  parentPath: {
    type: String, //类型字符串
    default: ''
  },
  mapLevel: {
    type: Number,
    default: 1
  }
})

const { menuData, parentPath } = props
</script>

<template>
  <el-sub-menu
    :index="parentPath ? parentPath + '/' + menuData!.path : menuData!.path"
    v-if="menuData!.children && menuData!.children.length > 0"
  >
    <template #title>
      <el-icon v-show="parentPath === ''"><component :is="menuData!.meta.icon" /></el-icon>
      <span>{{ menuData!.meta.title }}</span>
    </template>
    <menuItem
      :menuData="child"
      :parentPath="parentPath ? parentPath + '/' + menuData!.path : menuData!.path"
      :mapLevel="mapLevel + 1"
      v-for="(child, childIndex) in menuData!.children"
      :key="childIndex"
    ></menuItem>
  </el-sub-menu>

  <el-menu-item v-else-if="mapLevel === 1" :index="menuData!.path">
    <el-icon><component :is="menuData!.meta.icon" /></el-icon>
    <span> {{ menuData!.meta.title }} </span>
  </el-menu-item>

  <el-menu-item v-else :index="parentPath ? parentPath + '/' + menuData!.path : menuData!.path">
    <span> {{ menuData!.meta.title }} </span>
  </el-menu-item>
</template>

<style lang="scss" scoped></style>
