import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    Switch: false
  }),
  actions: {
    toggleSwitchTheme() {
      this.Switch = !this.Switch
    }
  }
})
