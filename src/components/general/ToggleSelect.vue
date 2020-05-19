<template>
  <label class="toggle-select">
    <input
      class="toggle-select__checkbox"
      type="checkbox"
      name="check"
      :id="'check'+_uid"
      v-model="model"
    />
    <svg
      class="toggle-select__icon bi bi-x-circle"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
        clip-rule="evenodd"
      />
    </svg>
    <span class="toggle-select__text" :class="{'text-muted': model}">{{text}}</span>
  </label>
</template>

<script>
export default {
  props: {
    text: null,
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
$active: #28a745;
$passive: #6c757d;

.toggle-select {
  cursor: pointer;
  &__text {
    transition: 0.4s;
  }
  &__icon {
    transition: 0.4s;
    margin-right: 10px;
    transform: rotate(45deg);
  }
  &__checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .toggle-select__icon {
      transform: rotate(0deg);
      color: $passive;
    }
  }
}
</style>