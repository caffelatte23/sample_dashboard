<template>
    <div v-for="(val, index) in data" :key="val">
        <div class="job">
            <span style="text-align: left"><strong>{{status[index]}} : {{val.length}}</strong></span>    
            <el-card class="jobcard">
                <el-button v-if="index === 0" type="text" @click="AddJob">課題を追加</el-button>
                <el-scrollbar max-height="500px" :style="index === 0 ? '' : 'margin-top: 40px;'">
                <draggable v-model="data[index]" style="margin-top: 10px; height: 480px" item-key="id" group="items" handle=".handle" @add="UpdateTask">
                    <template #item="{element}">
                        <div class="drag-item" style="margin: 5px">
                            <el-card class="handle" >
                                <span style="float: left">{{ element.id }}</span>
                                <p>{{element.content}}</p>
                                <p style="float: right; font-size: 12px">
                                    <span style="margin-right: 10px">{{element.line}}</span>
                                    {{element.manager}}
                                </p>
                            </el-card>
                        </div>
                    </template>
                </draggable>
                </el-scrollbar>
            </el-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import draggable from "vuedraggable"
import { useStore } from 'vuex'

export default {
    name: 'TaskBox',
    props: ["task"],
    emits: ['taskUpdated'],
    components: {draggable},
    setup(props, context){
        const store = useStore()
        const status = ref([
            '未対応',
            '処理中',
            '処理済み',
            '完了'
        ])
        let data = ref(props.task)

        const AddJob = ()=>{
            data.value[0].push({
                id: store.state.taskData.slice(-1)[0].id + 1,
                content: "テスト3",
                manager: 'A',
                line: '2021/09/11',
                status: 0
            })
            UpdateTask();
        }

        const UpdateTask = ()=>{
            let newData = []
            for( let i = 0; i < data.value.length; i++){
                for(let j = 0; j < data.value[i].length; j++){
                    data.value[i][j].status = i;
                    newData.push(data.value[i][j])
                }
            }
            newData.sort((a,b)=>{
                if(a.id < b.id){ return -1;}
                if(a.id > b.id){ return 1;}
            })
            context.emit('taskUpdated', newData)
        }
        return {
            data,
            status,
            AddJob,
            UpdateTask
        }
    }

}
</script>

<style>
    .jobcard{
        margin: 1%;
        margin-top: 3%;
        height: 600px;
        width: 300px;
    }
    .handle {
        width: 240px;
        height: 120px;
    }
    
</style>