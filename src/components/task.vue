<template>
  <div class="hello">
      <el-row>
        <TaskBox :job_status="0" />
      </el-row>
    </div>
</template>

<script>
import TaskBox from "./taskBox.vue";

export default {
    name: "Task",
    components: {TaskBox},
}
</script>

<style>

</style>