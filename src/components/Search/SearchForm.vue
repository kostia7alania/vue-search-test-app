<template>
  <form class="search-form" @submit.prevent="submitHandler">
    <input type="text" v-model.trim="form.searchString" /> 
  </form>
</template>

<script>
export default {
  name: "search-form",
  data() {
    return {
        form: {
            searchString: "search String"
        }
    };
  },
  methods: {
    submitHandler() {
      console.log("Submit =>", this.form);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-form {
  border: green 1px solid;
}
</style>
