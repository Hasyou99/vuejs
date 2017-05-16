<template>
    <div class="star-box">
        <div class="star-back">
            <img class="star-img" v-for="n in total" src="../assets/star-n.png" @click="starClick(n)"/>
        </div>
        <div class="star-front" :style="frontStyle">
            <img class="star-img" v-for="n in total" src="../assets/star-h.png" @click="starClick(n)"/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        total:{
            default:5,
            type:Number
        },
        value:{
            type:Number
        }
    },
    computed:{
        frontStyle:function(){
            var w = 50*this.value;
            return {
                width:w+"px"
            }
        }
    },
    methods:{
        starClick:function(n){
            this.$emit("input",n);
        }
    }
}
</script>

<style scoped>
    .star-box{
        position: relative;
    }
    .star-back{
        position: absolute;
    }
    .star-front{
        position: absolute;
        
        white-space: nowrap;
        overflow: hidden;
    }
    .star-img{
        width:50px;
        height:50px;
        -moz-user-select: none;
        cursor: pointer;
    }
</style>

