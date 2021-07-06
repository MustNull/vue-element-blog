<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/article">文章浏览</el-menu-item>
    <el-submenu index="3">
      <template slot="title">创作中心</template>
      <el-menu-item index="3-1" disabled>我的文章</el-menu-item>
      <el-menu-item index="3-2" disabled>发布文章</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" disabled>后台管理</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(key, keyPath);
    },
  },
};
</script>