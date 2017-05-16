<template>
    <div id="app"> 
        <input v-model.number="a" />
        <Star :total="8" v-model="a"></Star>    
    </div> 

</template>

<script>
import Star from '../components/Star'

export default {
    data(){
        return{
            a:2
        }
	},
    components:{
        Star
    }
}
</script>

<style>

</style>
