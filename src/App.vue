<template>
  <div id="app">
    <NavBar/>
    <div>
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar: () => import("@/components/Navbar")
  },
  created() {
    this.initLocale();
  },
  computed: {
    ...mapState(['locale'])
  },
  methods: {
    initLocale () {
      this.$i18n.locale = this.locale.code
    }
  }
};
</script>

<style>
#app {
  font-family: 'Myriad Pro', 'PT Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
