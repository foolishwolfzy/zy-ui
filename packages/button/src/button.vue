<template>
	<button
  :class="classs"
  :disabled="disabled"
  @click="handleClick">
    <i v-if="loading" class="zy-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue"
type IButtonType =
  | "primary"
  | "warning"
  | "danger"
  | "default"
  | "info"
  | "success";
export default defineComponent({
	name: "ZButton",
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: "primary",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info"
        ].includes(val)
      }
    },
    size:{
      type: String as PropType<ComponentSize>
    },
    icon:{
      type: String,
      default: ""
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
  },
  emits: ["click"],
  setup(props, ctx) {
    const classs = computed(() => [
      "zy-button",
      "zy-button--" + props.type,
      props.size ? "zy-button--" + props.size : "",
      {
        "is-disabled" : props.disabled,
        "is-loading" : props.loading,
        "is-round" : props.round,
      }
    ])

    const handleClick = (e:any) => {
      console.log('click inner')
      ctx.emit('click', e)
    }
    return {
      classs,
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>

</style>