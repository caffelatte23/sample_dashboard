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
    MonitorData: []
}
let mutations = {
    setShedules(state, obj){
        state.schedules = obj.schedules
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