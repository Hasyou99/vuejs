<template>
    <div id="app">
        
        <slider :volumn="volumn" @volchange="volchange"></slider>
        
        <p>当前音量：{{volumn}}</p>
        
        <input v-model.number="volumn" />
        
    </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
    data(){
        return{volumn:0.7}
    },
    methods:{
        volchange:function(e){
            this.volumn = e;
        }
    },
    components:{
        Slider
    }

}
</script>

<style>

</style>
