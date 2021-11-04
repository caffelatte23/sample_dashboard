<template>
  <div id="graphRef"/>
</template>

<script>
export default {
    name: 'Graph',
    data(){
        return {
            Gdata: {
                x: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul'],
                y:  [65, 59, 80, 81, 56, 55, 40],
                mode: 'lines'
            },
            layout: {
                width: 1200,
                height: 600,
            }
        }
    },
    created(){
        this.$nextTick(()=>{
            Plotly.newPlot('graphRef', this.Gdata)
        })
    }
}
</script>

<style>

</style>