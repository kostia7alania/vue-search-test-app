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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
