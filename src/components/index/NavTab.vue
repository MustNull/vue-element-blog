<template>
  <el-submenu :index="index" v-if="children.length">
    <template slot="title">{{title}}</template>
    <el-menu-item v-for="nav in children" :key="nav.key" :index="nav.index">{{nav.title}}</el-menu-item>
  </el-submenu>
  <el-menu-item v-else :index="index">{{title}}</el-menu-item>
</template>

<script>
export default {
  props: {
    title: String,
    index: String,
    children: Array
  }
}
</script>

<style>

</style>