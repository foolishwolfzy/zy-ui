import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from 'vue';

var script$1 = defineComponent({
    name: "ZButton",
    props: {
        type: {
            type: String,
            default: "primary",
            validator: (val) => {
                return [
                    "default",
                    "primary",
                    "success",
                    "warning",
                    "danger",
                    "info"
                ].includes(val);
            }
        },
        size: {
            type: String
        },
        icon: {
            type: String,
            default: ""
        },
        loading: Boolean,
        disabled: Boolean,
        round: Boolean,
    },
    emits: ["click"],
    setup(props, ctx) {
        console.log('setup-button---==');
        const classs = computed(() => [
            "zy-button",
            "zy-button--" + props.type,
            props.size ? "zy-button--" + props.size : "",
            {
                "is-disabled": props.disabled,
                "is-loading": props.loading,
                "is-round": props.round,
            }
        ]);
        const handleClick = (e) => {
            console.log('click inner');
            ctx.emit('click', e);
        };
        return {
            classs,
            handleClick
        };
    }
});

const _hoisted_1 = ["disabled"];
const _hoisted_2 = {
  key: 0,
  class: "zy-icon-loading"
};
const _hoisted_3 = { key: 2 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_2))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const _Button = script$1;

var script = defineComponent({
    name: "ZIcon",
    props: {
        name: {
            type: String,
            default: "",
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`zy-ui-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Icon = script;

const components = [
    _Button,
    _Icon
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export { index as default };
