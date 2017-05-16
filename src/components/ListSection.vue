<template>
<div>
    <button @click="isOpen=!isOpen" class="title-btn">{{group.title}}</button>
    
    <transition name="slide">
        <ul 
            v-show="isOpen"
            :style="ulStyle"
        >
            <li v-for="f in group.list">{{f}}</li>
        </ul>
    </transition>
    
</div>
</template>

<script>
export default {
    props:["group"],
    data:function(){
        return {
            isOpen:true
        }
    },
    computed:{
        ulStyle:function(){
            var h = this.group.list.length*22+"px";
            return {
                height:h
            }
        }
    }
}
</script>

<style scoped>
    ul{
        background-color: red;
        margin: 0;
    }
    
    .title-btn{
        width: 100%;
        height: 50px;
    }
    
    .slide-enter{
        height: 0 !important;
    }
    
    .slide-enter-active{
        transition: all 0.7s linear;
        overflow: hidden;
    }
    
    .slide-leave{
        
    }
    .slide-leave-active{
        height: 0 !important;
        transition: all 0.7s linear;
        overflow: hidden;
    }
</style>
