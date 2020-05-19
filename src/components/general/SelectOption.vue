<template>
  <select class="select-option" v-model="model">
    <option v-for="({ value, text }) in options" :key="text" :value="value">{{text}}</option>
  </select>
</template>
<script>
export default {
  props: {
    options: Array,
    value: null
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(state) {
        this.$emit("input", state);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .select-option {
    border: 0;
    width: 100%;
    cursor: pointer;
  }
</style>