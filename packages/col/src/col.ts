import { computed, defineComponent, h, inject } from "vue"

export default defineComponent({
    name: 'ZCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0,
        },
        size: {
            type: Number,
            default: 0
        }
    },
    setup(props, { slots }) {
        const gutter = inject('ZRow', 0)
        const classs = computed(() => {
            const ret: string[] = [];
            const pos = ['span', 'offset'] as const;
            pos.forEach(item => {
                const size = props[item];
                if (typeof size == 'number' && size > 0) {
                    ret.push(`zy-col-${item}-${props[item]}`);
                }
            })
            const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
            sizes.forEach(size => {
                if (typeof props[size] === 'number') {
                    ret.push(`zy-col-${size}-${props[size]}`)
                }
            })
            return [
                'zy-col',
                ...ret
            ]
        })
        const style = computed(() => { // 设置间距
            if (gutter !== 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
            return {}
        })
        
        return () => h(props.tag, {
            class: classs.value,
            style: style.value
        }, slots.default?.())
    }
})