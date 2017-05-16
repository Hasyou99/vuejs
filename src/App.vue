
<!--
	.vue文件是vue项目中的组件文件，一个.vue文件就是一个组件
	.vue文件内容分为三大部分，template,script,style。
	template表示组件的模板，
	script中需要导出组件对象，
	style中是组件的css样式。
-->

<template>
  <div id="app">
  	
  	<div class="tab-bar clear-fix">
  		<div class="tab-item">
  			<router-link to="/">首页</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/friends">好友</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/star">动态</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/slider">设置</router-link>
  		</div>
  	</div>
    
    <router-view></router-view>
    
    
  </div>
</template>

<script>
	
export default {
  
}
</script>

<style scoped>

.tab-bar{
	position: fixed;
	bottom: 0;
	width: 100%;
}
.tab-item{
	height: 57px;
	width:25%;
	border:solid 1px black;
	text-align:center;
	line-height:57px;
	float:left;
}

</style>
