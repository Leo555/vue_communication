// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Input, Table, TableColumn } from 'element-ui'

Vue.config.productionTip = false

const components = [Button, Input, Table, TableColumn]

components.forEach(item => Vue.component(item.name, item))
import 'element-ui/lib/theme-default/index.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
