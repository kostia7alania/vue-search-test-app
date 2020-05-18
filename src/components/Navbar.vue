<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>{{$t('navbar.brand')}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="({name, nameTranslated}) in navMenu" :to="{ name }" :key="name" :disabled="name === $route.name" :active="name === $route.name">
            {{nameTranslated}}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="activeLocale" right>
            <b-dropdown-item v-for="loc in locales" @click="setLang(loc)" :key="loc.name" :active="loc.code === locale.code">
                <Flag :flag="loc.flag" />
                {{ loc.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SUPPORTED_LOCALES } from "@/constants/locale";
import routes from "@/router/routes";

export default {
  components: {
      Flag: () => import('@/components/Flag')
  },
  data() {
    return {
      locales: SUPPORTED_LOCALES
    };
  },
  computed: {
    ...mapState({ locale: state => state.locale }),

    activeLocale() {
      return this.locale.code.toUpperCase(); // this.$i18n.locale && this.$i18n.locale.toUpperCase();
    },
    navMenu () {
        return routes.filter(({inMenu})=>inMenu).map(({ name }) => ({ name, nameTranslated: this.$t("components.navbar." + name)}))
    },
  },
  methods: {
    ...mapMutations(["setLocale"]),
    setLang(lang) {
      this.setLocale(lang);
      this.$i18n.locale = lang.code
    }
  }
};
</script>
