<template>
    <div 
        class="slider-box" 
        @mousedown="mousedown"
    >
        <div class="slider-line"></div>
        <div 
            class="slider-point" 
            :style="pointStyle"
        ></div>
    </div>
</template>

<script>
export default {
    props:{
        volumn:{
            default:0.5,
            type:Number,
        }
    },
    data:function(){
        return{
            isdown:false,
        }
    },
    computed:{
        pointStyle:function(){
            var left = 360*this.volumn+20;
            left = left<20?20:left;
            left = left>380?380:left;
            return {
                left:left-10+"px"
            }
        }
    },
    methods:{
        mousedown:function(e){
            //组件对象的$el属性表示组件的根元素。
//					console.log(this.$el);
            var x = e.pageX-this.$el.offsetLeft;
            var value = (x-20)/360;
            this.$emit("volchange",value);
            this.isdown = true;
        },
        mousemove:function(e){
            if(this.isdown){
                var x = e.pageX-this.$el.offsetLeft;
                var value = (x-20)/360;
                this.$emit("volchange",value);
            }
        },
        mouseup:function(){
            this.isdown = false;
        }
    },
    mounted:function(){
        window.addEventListener("mousemove",this.mousemove.bind(this));
        window.addEventListener("mouseup",this.mouseup.bind(this));
    }
}
</script>

<style scoped>
    .slider-box{
        border: solid 1px black;
        position: relative;
        height: 40px;
        width: 400px;
    }
    .slider-line{
        position: absolute;
        width: 360px;
        height: 6px;
        background-color: grey;
        left: 20px;
        top: 17px;
    }
    .slider-point{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background:radial-gradient(white,black);
        top: 10px;
    }
</style>
