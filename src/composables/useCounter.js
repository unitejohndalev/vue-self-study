import { ref } from "vue";

export const useCounter = () => {
    const count = ref(0)

    const increment = () => count.value++
    const decrement = () => {
        // count.value > 0 && count.value--
        if (count.value > 0) count.value--
    }
    const toggleVisible = () => {
        isVisible.value = !isVisible.value
    }
    const isVisible =ref(true)
    const show = () => {isVisible.value = true}
    const hide = () => {isVisible.value = false}

    return {
        count,
        increment,
        decrement,
        isVisible,
        toggleVisible,
        show,
        hide
    }

}