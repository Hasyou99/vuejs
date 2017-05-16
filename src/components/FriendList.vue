<template>
<div>
    <ListSection 
        v-for="group in friends" 
        :group="group"
    ></ListSection>
</div>
</template>

<script>

import ListSection from "./ListSection.vue";

export default {
    props:["friends"],
    components:{
        ListSection
    }
}
</script>

<style>

</style>
