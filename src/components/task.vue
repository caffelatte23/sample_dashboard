<template>
  <div class="hello">
      <el-row>
        <TaskBox :task="taskData" />
      </el-row>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import TaskBox from "./taskBox.vue";

export default {
    name: "Task",
    components: {TaskBox},
    setup(){
      const store = useStore();
      const taskData = computed(()=>{
        const data = store.state.taskData;

        return [
          data.filter((el)=>el.status === 0),
          data.filter((el)=>el.status === 1),
          data.filter((el)=>el.status === 2),
          data.filter((el)=>el.status === 3)
        ]
      })

      return {taskData}
    }
}
</script>

<style>

</style>