<template>
    <el-row justify="left">
        <el-select-v2
            v-model="selected"
            size="medium"
            style="width: 370px"
            :options="status_val"
            multiple
        />
    </el-row>
    <el-card style="margin: 1%">
        <el-table :data="data" max-height="500px">
            <el-table-column prop="id" width="60px" label="id"/>
            <el-table-column prop="content" label="件名"/>
            <el-table-column prop="manager" width="60px" label="担当"/>
            <el-table-column prop="line" width="120px" label="期限"/>
            <el-table-column prop="status" width="120px" label="状態">
                <template #default="scope">
                    <el-tag :type="status[scope.row.status].type" style="width: 80px; text-align: center" effect="dark">
                    {{status[scope.row.status].label}}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    name: 'Backlog',
    data(){
        return {
            status: [
                {label: '未対応', type: "danger"},
                {label: '処理中', type: ""},
                {label: '処理済み', type: "success"},
                {label: '完了', type: "success"}
            ],
            status_val: [],
            selected: []
        }
    },
    created(){
        this.status_val = this.status.map((el, idx)=>{
            return {label: el.label, value: idx}
        })
        this.selected = this.status.map((el, idx)=>{
            return idx
        })
    },
    computed: {
        data : function(){
            return this.$store.state.taskData.filter((el)=>{
                return this.selected.includes(el.status)
            })
        }
    },

}
</script>

<style>


</style>