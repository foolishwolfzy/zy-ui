import { computed, defineComponent, h, provide } from "vue";
export default defineComponent({
    name: 'ZRow',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
				gutter: {
					type: Number,
					default: 0
				},
				justify: {
					type: String,
					default: 'start'
				}
    },
    setup(props, { slots }) {
			provide('ZRow',props.gutter);
			const classs = computed(() => [
					'zy-row',
					props.justify !== 'start' ? `is-justify-${props.justify}` :''
			])
			const style = computed(() => {
					const ret = {
							marginLeft: '',
							marginRight: '',
					}
					if (props.gutter) { // 放大宽度
							ret.marginLeft = `-${props.gutter / 2}px`
							ret.marginRight = ret.marginLeft
					}
					return ret
			})
			return () => h(props.tag, {
					class: classs.value,
					style: style.value
			}, slots.default?.())
    }
});