<template>
  <el-container>
    <el-header>
      <h1 class="AppTitle">DashBoard</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <router-link to="/app/graph">
            <el-menu-item index="graph">Graph</el-menu-item>
          </router-link>
          <router-link to="/app/calender">
            <el-menu-item index="calender">Calender</el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'Main',
  setup(){
    let count = ref(0)
    let name = ref(null)
    return {
      count,
      name,
    }
  }
}
</script>

<style>
  header.el-header {
    background-color: #b3c0d1;
    left: 0px;
    right: 0px;
    height: 90px;
  }

  .AppTitle{
    margin: 0px;
    padding: 20px;
    text-align: left;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }
</style>
