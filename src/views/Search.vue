<template>
  <div>
    <h1>{{$t('views.search.title')}}</h1>
    <b-container>
        <SearchForm @submit="submitHandler"/>
    </b-container>
    <div v-if="form">
      <div v-for="({key, value}) in formComputed" :key="key">
        {{key}}: {{value}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    SearchForm: () => import(/* webpackChunkName: "SearchForm" */ "@/components/search/SearchForm")
  },
  data () {
    return {
      form: null
    }
  },
  computed: {
    formComputed () {
      return Object.entries(this.form).reduce((acc, [key, value]) => [...acc, {key, value: value || 'default'}], [])
    }
  },
  methods: {
    submitHandler (form) {
      this.form = {}
      this.timeout = setTimeout(() => (this.form = form), 100)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
};
</script>
