import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userName = ref("zhangsan")
  const age = ref(18)
  const isAdult = computed(() => age.value >= 18)
  function setName(value: string) {
    userName.value = value
  }

  return { userName, age, isAdult, setName }
})
