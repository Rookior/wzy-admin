import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  persist: true,
  state: () => {
    return {
      token: ''
    }
  },
  actions: {
    setToken(str: string) {
      this.token = str
    }
  }
})
