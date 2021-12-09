<template>
  <el-container>
    <el-header>
        <strong class="AppTitle">DashBoard</strong>
        <el-menu class="topmenu" mode="horizontal" @select="test">
          <el-menu-item index="1">DashBoard</el-menu-item>
          <el-menu-item index="2">Projects</el-menu-item>
          <el-menu-item index="3">Calender</el-menu-item>
        </el-menu>
        <!-- <el-button class="userButton" type="primary" icon="el-icon-user" circle /> -->
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu style="background-color: #d3dce6;">
          <router-link to="/app/graph">
            <el-menu-item index="graph">Graph</el-menu-item>
          </router-link>
          <router-link to="/app/calender">
            <el-menu-item index="calender">
              <i class="el-icon-date"/>
                Calender
            </el-menu-item>
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
    height: 60px;
  }

  .AppTitle{
    float: left;
    font-size: 24px;
    margin: 15px;
  }

  .userButton{
    position: fixed;
    float: right;
    text-align: center;
    font-size: 30px;
  }

  .topmenu {
    float: right;
    background-color: #b3c0d1;
    height: 60px;
    width: 400px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }
  .el-aside a {
    text-decoration: none;
  }
</style>
