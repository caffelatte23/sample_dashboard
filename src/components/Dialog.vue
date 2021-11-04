<template>
  <el-dialog
        v-model="visible"
        :title="setting.title"
        width="30%"
        destroy-on-close
        center
    >
    <el-row justify="center">開始：<el-time-picker  v-model="setting.range.start" /></el-row>
    <el-row justify="center">終了：<el-time-picker v-model="setting.range.end" /></el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="visible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
    name: 'Dialog',
    props:['setting', 'visible'],
    setup(props){

    }
}
</script>

<style>

</style>