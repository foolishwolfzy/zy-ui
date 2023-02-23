import { ref } from "vue";

export const useButton = () => {
	const btnLoading = ref(true);
	setTimeout(() => {
		btnLoading.value = false
	}, 2000);
	
	const btnClick = () => {
		// alert('点击按钮')
		console.log('点击按钮')
	}

	return {
		btnLoading,
		btnClick
	}
}