<template>
  <router-view></router-view>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { onMounted } from 'vue';

export default {
  name: 'App',
  setup(){
    const store = useStore();
    const router = useRouter();

    const push = (name)=>{
      router.push({name: name})
    }
    
    onMounted(()=>{
      let name = (store.state.userId === '') ? 'login': 'main'
      router.push({name: name})
      store.dispatch('getData');
    })

    return {
      push
    }
  }
}
</script>
<style>
  body{
    margin: 0px;
  }
  
</style>