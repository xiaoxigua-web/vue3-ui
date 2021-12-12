<template>
  <button
    :class="classs"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

export default defineComponent({
  name: "ElButton",
  props: {
    type: {
      type: String as PropType<
        "primary" | "success" | "warning" | "danger" | "info" | "default"
      >,
      default: "primary",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(val);
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
  },

  emits: ["click"],  //这里写了 click  外面想监听到这个事件必须通过emit触发
  setup(props, ctx) {
    const classs = computed(() => [
      "el-button",
      "el-button--" + props.type,
      props.size ? "el-button--" + props.size : "",
      {
        "is-disabled": props.disabled, // 状态全部以 is-开头
        "is-loading": props.loading,
        "is-round": props.round,
      },
    ]);
    const handleClick = (e) => {
      console.log('innerclick')
        ctx.emit("click", e);
    };
    return {
      classs,
      handleClick,
    };
  },
});
</script>