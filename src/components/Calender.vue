<template>
   <el-calendar v-model="value" style="width: 80%">
       <template #dateCell="{data}">
           <div  style="height: 100%" @click="openDialog(null)">
            <span :class="schedule[data.day] ? 'date-valid' : 'date-non'">{{parseInt(data.day.slice(-2))}}</span>
            <div v-if="schedule[data.day]">
                <div v-for="(item, index) in schedule[data.day]" :key="item">
                    <el-button type='text' @click="openDialog(item, data.day, index)">{{getSchedule(data.day)}}</el-button>
                </div>
            </div>
           </div>
       </template>
    </el-calendar>
    <Dialog :visible="dialogVisible" :setting="dialog_setting" @closeDialog="updateSchedules"/>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import Dialog from './Dialog.vue'
export default {
    name: 'Calender',
    components: {Dialog},
    setup(){
        const value = ref(new Date());
        const store = useStore();
        
        let dialogVisible = ref(false);
        let schedule_id = ref({ date: '', id: 0 })
        let schedule = ref(store.state.schedules)
        let dialog_setting = ref({
            title: '',
            range: {
                    start: '',
                    end: ''
                }
        })

        const updateSchedules = (data) =>{
            dialogVisible.value = false
            schedule.value[schedule_id.value.date][schedule_id.value.id] = data
        }
        const openDialog = (data, date, index)=>{
            dialogVisible.value = true
            if(data !== null){
                schedule_id.value = { date: date, id: index }
                dialog_setting.value = data
            }
            
        }
        const getSchedule = (date, index)=>{
            return store.getters.schedulesTitle(date, index)
        }
        const test = (date)=>{
            console.log(date)
        }
        return {
            value,
            dialogVisible,
            schedule,
            updateSchedules,
            getSchedule,
            dialog_setting,
            openDialog,
            test
        }
    }
}
</script>

<style>
    .date-valid{
        border-radius: 50%;
        background-color: aqua;
    }
</style>