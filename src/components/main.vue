<template>
  <el-container>
    <el-header>
      <strong class="AppTitle">DashBoard</strong>
      <el-button class="userButton" type="primary" icon="el-icon-user" round >user</el-button>
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
          <router-link to="/app/task">
            <el-menu-item index="task">Task</el-menu-item>
          </router-link>
          <router-link to="/app/backlog">
            <el-menu-item index="backlog">backlog</el-menu-item>
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
import { ref } from 'vue'

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
    float: left;
    font-size: 24px;
    margin: 2%;
  }

  .userButton{
    float: right;
    text-align: center;
    margin-top: 2%;
    font-size: 20px;
    /* width: 120px; */
    height: 30px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }
</style>
