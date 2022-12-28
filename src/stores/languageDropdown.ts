import { defineStore } from 'pinia';

interface languageDropdown {
    isLanguageDropdownOpen: boolean,
    language: String
}

export const useLanguageDropdown = defineStore({
    id: 'languageDropdown',

    state: (): languageDropdown => ({
        isLanguageDropdownOpen: false,
        language: 'English'
    }),

    actions: {
        changeStatus(): void {
            this.$state.isLanguageDropdownOpen = !this.$state.isLanguageDropdownOpen;
        },
        closeDropdown(): void {
            this.$state.isLanguageDropdownOpen = false;
        },
        changeLanguage(language: String): void {
            this.$state.language = language;
        }
    },
});
