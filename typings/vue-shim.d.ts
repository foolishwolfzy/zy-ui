// 定义所有.vue文件结尾的类型
declare module '*.vue' {
	import {App, defineComponent} from 'vue'
	const component: ReturnType<typeof defineComponent> & {
		install(app: App): void
	}
	export default component
}