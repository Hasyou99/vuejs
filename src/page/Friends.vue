<template>
<div>
    <FriendList :friends="friends"></FriendList>
</div>
</template>

<script>

//在一个组件文件中，要使用用另外一个组件，要先导入，再注册

import FriendList from "../components/FriendList.vue";

export default {
    data:function(){
        return {
            friends:[
                {
                    title:"家人",
                    list:["爸爸","妈妈","爷爷","奶奶"]
                },
                {
                    title:"同学",
                    list:["李磊","韩梅梅","林涛"]
                },
                {
                    title:"朋友",
                    list:["王思聪","习近平","马云"]
                },
            ]
        }
    },
    components:{
        FriendList
    }

}
</script>

<style>

</style>

