import { defineStore } from 'pinia'

interface State {
  playLearnDropdownOpenedIndicator: boolean;
  learnEarnDropdownOpenedIndicator: boolean;
  notificationsDropdownOpenedIndicator: boolean;
  profileDropdownOpenedIndicator: boolean;
}

export const useBaseStore = defineStore({
  id: 'baseStore',  

  state: (): State => ({
    playLearnDropdownOpenedIndicator: false,
    learnEarnDropdownOpenedIndicator: false,
    notificationsDropdownOpenedIndicator: false,
    profileDropdownOpenedIndicator: false,
  }),

  actions: {
    // CHECK IF DEVICE IS TOUCH TYPE OR MOUSE TYPE
    isTouchDevice(): boolean {
      return (('ontouchstart' in window) ||  
        (navigator.maxTouchPoints > 0));
    },
    togglePlayLearnDropdown(): void {
      this.$state.playLearnDropdownOpenedIndicator = !this.$state.playLearnDropdownOpenedIndicator;
    },
    closePlayLearnDropdown(): void {
      this.$state.playLearnDropdownOpenedIndicator = false;
    },
    toggleLearnEarnDropdown(): void {
      this.$state.learnEarnDropdownOpenedIndicator = !this.$state.learnEarnDropdownOpenedIndicator;
    },
    closeLearnEarnDropdown(): void {
      this.$state.learnEarnDropdownOpenedIndicator = false;
    },
    toggleNotificationsDropdown(): void {
      this.$state.notificationsDropdownOpenedIndicator = !this.$state.notificationsDropdownOpenedIndicator;
    },
    closeNotificationsDropdown(): void {
      this.$state.notificationsDropdownOpenedIndicator = false;
    },
    toggleProfileDropdown(): void {
      this.$state.profileDropdownOpenedIndicator = !this.$state.profileDropdownOpenedIndicator;
    },
    closeProfileDropdown(): void {
      this.$state.profileDropdownOpenedIndicator = false;
    },
  }
});
