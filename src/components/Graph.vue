<template>
    <el-card style="width: 800px; height: 400px;">
        <div id="graphRef"/>
    </el-card>
</template>

<script>
import { nextTick, onMounted } from 'vue'
export default {
    name: 'Graph',
    setup(){
        let Gdata = {
            x: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul'],
            y:  [65, 59, 80, 81, 56, 55, 40],
            mode: 'lines'
        }
        
        const layout = {
            width: 800,
            height: 400,
            xaxis: {showline: true},
            yaxis: {showline: true}
        }

        const PlotGraph = async ()=>{
            await nextTick();
            Plotly.newPlot('graphRef', [Gdata], layout)
        }

        onMounted(()=>{
            PlotGraph();
        })
    }
}
</script>

<style>

</style>