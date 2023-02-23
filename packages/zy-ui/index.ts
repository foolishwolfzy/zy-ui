import { App } from 'vue';
import Button from '@zy-ui/button';
import Icon from '@zy-ui/icon';
import ButtonGroup from '@zy-ui/button-group';
import Row from '@zy-ui/row';
import Col from '@zy-ui/col';
import Checkbox from '@zy-ui/checkbox';
import CheckboxGroup from '@zy-ui/checkbox-group';
const components = [
	Button,
	Icon,
	ButtonGroup,
	Row,
	Col,
	Checkbox,
	CheckboxGroup
]

const install = (app: App): void =>{
	components.forEach(component => {
		app.component(component.name, component)
	})
}

export default {
	install
}