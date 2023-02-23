import { ref } from "vue";

export function useCheckbox() {
    const checkVal = ref(['上海','深圳']);
    const checks = ref(['上海','北京','广州','深圳']);
		let isIndeterminate = ref(false)
		let checkAll = ref(false)
    const checkboxChange = (val) =>{
      console.log(val)
      let checkedCount = val.length;
      checkAll.value = checkedCount === checks.value.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < checks.value.length;
    }
		const handleCheckAllChange = (val:boolean) => {
			isIndeterminate.value = false
      checkVal.value = val ? checks.value : []
		}
    return {
      checkVal,
      checkAll,
      checkboxChange,
      checks,
			isIndeterminate,
			handleCheckAllChange
    }
  }