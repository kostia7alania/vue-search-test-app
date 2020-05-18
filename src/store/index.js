import Vue from "vue";
import Vuex from "vuex";
import localStoragePlugin from "@/store/plugins/localStorage";

Vue.use(Vuex);

const isDevMode = process.env.NODE_ENV !== "production";

const store = {
  state: {
    locale: {
        code: "en"
    }
  },
  mutations: {
    setLocale(state, locale) {
      Vue.set(state, "locale", locale);
    }
  },
  modules: {},
  plugins: [localStoragePlugin],
  strict: isDevMode
};

export default new Vuex.Store(store);
