<template>
  <div class="switch-select">
    <label class="switch-select__label" :for="'check'+_uid" :class="{'text-muted': model, 'underline--dotted': !model}" >{{prefix}}</label>
    <label class="switch">
      <input type="checkbox" name="check" :id="'check'+_uid" v-model="model" />
      <span class="slider round"></span>
    </label>
    <label class="switch-select__label" :for="'check'+_uid" :class="{'text-muted': !model, 'underline--dotted': model }">{{postfix}}</label>
  </div>
</template>
<script>
export default {
  props: {
    prefix: null,
    postfix: null,
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
$passive: #ccc;

.switch-select {
  &__label {
    cursor: pointer;
    transition: 0.2s;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
    margin: 0 5px 0 5px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: $active;
      }
      &:focus + .slider {
        box-shadow: 0 0 1px $active;
      }
      &:checked + .slider:before {
        transform: translateX(16px);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $passive;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
    }
    /* Rounded sliders */
    &.round {
      border-radius: 18px;
      &:before {
        border-radius: 18px;
      }
    }
  }
}
.underline--dotted {
  border-bottom: 1px dashed;
  line-height: 0.85;
}
</style>