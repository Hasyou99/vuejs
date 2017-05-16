// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//vue项目中的静态文件（如图片，css文件等），可以放在项目
//根目录下的static中，也可以放在src下的assets中。
//如果放在static中，则在html中通过标签导入，如果放在了
//assets中，则在js文件中通过import导入。

//通过import导入的如果是css文件，webpack会自动将样式插入
//到页面中，如果导入的是一个图片，会得到这个图片的url地址
//或base64代码。

// import style from "./assets/style.css"

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
