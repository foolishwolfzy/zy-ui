import { App } from 'vue';
import Button from '@zy-ui/button';
import Icon from '@zy-ui/icon';

const components = [
	Button,
	Icon
]

const install = (app: App): void =>{
	components.forEach(component => {
		app.component(component.name, component)
	})
}

export default {
	install
}