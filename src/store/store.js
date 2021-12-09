import axios from "axios";
import { createStore } from "vuex";

let state = {
    userId: 'test_user',
    schedules : {
        '2021-11-21': [{
            title: 'work',
            range: {
                start: new Date('2021-11-21 12:00'),
                end: new Date('2021-11-21 18:00')
            },
            desc: "sample text"
        }]
    },
    schedule_temp: {
        title: '',
        range: {
            start: new Date(),
            end: new Date()
        },
        desc: "sample text"
    },
    taskData: [],
    MonitorData: []
}
let mutations = {
    setSchedules(state, obj){
        state.schedules = obj.schedules
    },
    AddNewTask(state){
        state.taskData.push({
            id: state.taskData.slice(-1)[0].id + 1,
            content: "テスト3",
            manager: 'A',
            line: '2021/09/11',
            status: 0
        })
        console.log(state.taskData)
    },
    setTaskData(state, obj){
        state.taskData = obj.TaskData
    }
}
let getters = {
    schedulesTitle: (state) => (date, index)=>{
        return state.schedules[date][0].title
    }
}
let actions = {
    getTaskData: async(context)=>{ 
        const params = {project_id: 0}
        const res = await axios.get('http://127.0.0.1:8000/task',{params});
        context.commit({
            type: "setTaskData",
            TaskData: res.data
        })
    }
}

export const store = createStore({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})