import Vue from "vue";
import UserPop from "./UserPop.vue";

const previewComponent = {
  install: function(Vue, options) {
    Vue.component("user-pop", UserPop);
  },
};

export default previewComponent;
