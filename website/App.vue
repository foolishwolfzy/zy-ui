<template>
	<div>
		<z-button :loading="btnLoading" type="success" round @click="btnClick">按钮</z-button>
		<z-button :loading="btnLoading" type="primary" round @click="btnClick">按钮</z-button>
		<z-button :loading="btnLoading" type="warning" round @click="btnClick">按钮</z-button>
		<hr />
		<z-button-group>
			<z-button type="primary" icon="zy-ui-icon-caret-left">上一页</z-button>
			<z-button type="primary">
				下一页
				<i class="zy-ui-icon-caret-right"></i
			></z-button>
		</z-button-group>
		<hr />
		<z-icon name="car"></z-icon>
		<hr />
			<z-row>
				<z-col :span="6"><div style="background: red">111</div></z-col>
				<z-col :span="6" :offset="6"
					><div style="background: yellow">222</div></z-col
				>
				<z-col :span="6"><div style="background: pink">333</div></z-col>
			</z-row>
			<div style="border: 3px purple solid; width: 80%; margin: 0 auto">
				<z-row :gutter="20">
					<z-col :span="8"><div style="background: red">111</div></z-col>
					<z-col :span="8"><div style="background: yellow">222</div></z-col>
					<z-col :span="8"><div style="background: pink">333</div></z-col>
				</z-row>
			</div>
			<div style="border: 3px purple solid; width: 80%; margin: 0 auto">
				<z-row justify="space-around">
					<z-col :span="2"><div style="background: red">111</div></z-col>
					<z-col :span="2"><div style="background: yellow">222</div></z-col>
					<z-col :span="2"><div style="background: pink">333</div></z-col>
				</z-row>
			</div>
		<hr />
		{{ checkVal }}
		<z-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</z-checkbox>
		<z-checkbox-group v-model="checkVal" @change="checkboxChange">
			<z-checkbox v-for="c in checks" :key="c" :label="c"></z-checkbox>
		</z-checkbox-group>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useButton } from "./hook/useButton";
import { useCheckbox } from './hook/useCheckbox'
export default defineComponent({
	setup() {
		return {
			...useButton(),
			...useCheckbox()
		}
	}
})
</script>

<style lang="scss" scoped>

</style>