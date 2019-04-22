import Vue from "vue";
import Vuex from "vuex";
import i18n from "./modules/i18n";
import app from "./modules/app";
import test from "./modules/test";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n,
    app,
    test
  }
});
