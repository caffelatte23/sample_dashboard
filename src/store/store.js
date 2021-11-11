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
    taskData: [
        {
            id: 1,
            content: "テスト1",
            manager: 'A',
            line: '2021/09/11',
            status: 0
        },
        {
            id: 2,
            content: "テスト2",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 3,
            content: "テスト3",
            manager: 'A',
            line: '2021/09/11',
            status: 3
        },
        {
            id: 4,
            content: "テスト1",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 5,
            content: "テスト2",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 6,
            content: "テスト3",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 7,
            content: "テスト1",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 8,
            content: "テスト2",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 9,
            content: "テスト3",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 10,
            content: "テスト1",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 11,
            content: "テスト2",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
        {
            id: 12,
            content: "テスト3",
            manager: 'A',
            line: '2021/09/11',
            status: 1
        },
    ],
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
    getData: async()=>{
        let params = { date_from: '2021-09-10 12:00', date_to: '2021-09-10 18:00'}
        axios.post('http://localhost:8000/monitoring', params)
            .then((res)=>{
                console.log(res)
            })
            .catch(()=>{})
    }
}

export const store = createStore({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})