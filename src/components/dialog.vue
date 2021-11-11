<template>
  <el-dialog
        v-model="visible"
        :title="(setting.title === '')? '予定を追加' : '予定を編集'"
        width="30%"
        destroy-on-close
        :show-close = "false"
        center
    >
    <el-form>
      <el-row justify="center">
        <el-form-item label="タスク名:">
          <el-input style="width: 220px"  v-model="setting.title" />
        </el-form-item>
      </el-row>
      <el-row justify="center">
        <el-form-item label="開始:">
          <el-time-picker  v-model="setting.range.start" />
        </el-form-item>
      </el-row>
      <el-row justify="center">
        <el-form-item label="終了:">
          <el-time-picker v-model="setting.range.end" />
        </el-form-item>
      </el-row>
      <el-row justify="center">
        <el-form-item label="詳細:">
          <el-input style="width: 220px" :placeholder="setting.desc" v-model="setting.desc" type="textarea"></el-input>
        </el-form-item>
      </el-row>
    </el-form>
    
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="CloseDialog(null)">Cancel</el-button>
        <el-button type="primary" @click="CloseDialog(setting)">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
    name: 'Dialog',
    props:['setting', 'visible'],
    emits: ['closeDialog'],
    setup(props, context){
        const CloseDialog = (data)=>{
          context.emit('closeDialog',data)
        }
        return {
          CloseDialog,
        }
    }
}
</script>

<style>

</style>