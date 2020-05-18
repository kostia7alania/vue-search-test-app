import VuexPersistence from "vuex-persist";

const vuexPersistence = new VuexPersistence({
  key: "test-search-component",
  storage: window.localStorage,
  reducer: state => {
    const data = {
      // modules
      locale: state.locale
    };
    return data;
  }
});

export default vuexPersistence.plugin;
