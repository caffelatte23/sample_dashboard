<template>
   <el-calendar v-model="value">
       <template #dateCell="{data}">
           <div style="height: 100%" @click="test(data.day)">
            {{parseInt(data.day.slice(-2))}}
            <div v-if="schedule[data.day]">
                <div v-for="(item, index) in schedule[data.day]" :key="item">
                    <el-button type='text' @click="openDialog(item)">{{getSchedule(data.day, index)}}</el-button>
                </div>
            </div>
           </div>
       </template>
    </el-calendar>
    <Dialog :visible="dialogVisible" :setting="dialog_setting"/>
</template>

<script>
import {ref } from 'vue'
import Dialog from './Dialog.vue'
export default {
    name: 'Calender',
    components: {Dialog},
    setup(){
        const value = ref(new Date());
        let dialogVisible = ref(false);
        let schedule = ref({
            '2021-11-21': [{
                title: 'work',
                range: {
                    start: new Date('2021-11-21 12:00'),
                    end: new Date('2021-11-21 18:00')
                }
            }]
        })
        let dialog_setting = ref({
            title: '',
            range: {
                    start: '',
                    end: ''
                }
        })
        const openDialog = (data)=>{
            dialogVisible.value = true
            dialog_setting.value = data
        }
        const getSchedule = (date, index)=>{
            return schedule.value[date][index].title
        }
        const test = (date)=>{
            console.log(date)
        }
        return {
            value,
            dialogVisible,
            schedule,
            getSchedule,
            dialog_setting,
            openDialog,
            test
        }
    }
}
</script>

<style>

</style>