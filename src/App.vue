<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
</style>
