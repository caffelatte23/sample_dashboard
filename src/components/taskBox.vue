<template>
    <div v-for="(val, index) in data" :key="val">
        <div class="job">
            <span style="text-align: left"><strong>{{status[index]}} : {{data[index].length}}</strong></span>    
            <el-card class="jobcard">
                <el-button v-if="index === 0" type="text" @click="AddJob">課題を追加</el-button>
                <el-scrollbar max-height="500px">
                <draggable v-model="data[index]" :style="index === 0 ? 'margin-top: 10px' : 'margin-top: 50px'" :itemKey="id" group="people" handle=".handle">
                    <template #item="{element}">
                        <div class="drag-item" style="margin: 5px">
                            <el-card class="handle" >
                                <span >{{ element.id }}</span>
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

export default {
    name: 'TaskBox',
    props: ["job_status"],
    components: {draggable},
    setup(props){
        const status = ref([
            '未対応',
            '処理中',
            '処理済み',
            '完了'
        ])
        let data = ref([
            [
                {
                    id: 1,
                    content: "テスト1",
                },
                {
                    id: 2,
                    content: "テスト2",
                },
                {
                    id: 3,
                    content: "テスト3",
                },
            ],
            [
                {
                    id: 4,
                    content: "テスト1",
                },
                {
                    id: 5,
                    content: "テスト2",
                },
                {
                    id: 6,
                    content: "テスト3",
                },
            ],
            [
                {
                    id: 7,
                    content: "テスト1",
                },
                {
                    id: 8,
                    content: "テスト2",
                },
                {
                    id: 9,
                    content: "テスト3",
                },
            ],
            [
                {
                    id: 10,
                    content: "テスト1",
                },
                {
                    id: 11,
                    content: "テスト2",
                },
                {
                    id: 12,
                    content: "テスト3",
                },
            ],
        ])

        const AddJob = ()=>{
            data.value[0].push({
                id: 13,
                content: "テスト3",
            })
            console.log(data.value)
        }
        return {
            data,
            status,
            AddJob
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