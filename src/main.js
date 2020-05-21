import Vue from 'vue'
import AccuTermGUI from './App.vue'

Vue.config.productionTip = false

const AccuTermGUIComponent = {
  install: function(Vue) {
    Vue.component("accuterm-gui", AccuTermGUI);
  },
};

export default AccuTermGUIComponent;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
