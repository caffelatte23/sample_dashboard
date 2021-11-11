<template>
   <el-calendar v-model="value" style="width: 80%">
       <template #dateCell="{data}">
           <div  style="height: 100%" @click="openDialog(null, data.day, 0)">
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
import Dialog from './dialog.vue'
export default {
    name: 'Calender',
    components: {Dialog},
    setup(){
        const value = ref(new Date());
        const store = useStore();
        
        let dialogVisible = ref(false);
        let schedule_id = {data: null, date: '', id: 0 }
        let schedule = ref(store.state.schedules)
        let dialog_setting = ref(store.state.schedule_temp)

        const updateSchedules = (data) =>{
            dialogVisible.value = false
            if(data !== null){
                if(data.title === ""){
                    data.title = "No title"
                }
                
                if(Object.keys(schedule).includes(schedule_id.date)){
                    if(dialog_setting.value.data.title === ""){
                        schedule.value[schedule_id.date].push(data)
                    }
                    else{
                        schedule.value[schedule_id.date][schedule_id.id]= data
                    }
                }
                else{
                    schedule.value[schedule_id.date] = [data]
                }
            }
            store.commit({type: 'setSchedules', schedules: schedule})
        }
        const openDialog = (data, date, index)=>{
            if(dialogVisible.value){
                return;
            }
            dialogVisible.value = true
            dialog_setting.value = (data === null) ? store.state.schedule_temp : data
            schedule_id = {data: dialog_setting.value, date: date, id: index }
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