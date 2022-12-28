import { defineStore } from 'pinia';

type Navigation = {
    id: number,
    to: string,
    isActive: boolean
}
interface State {
  navigation: Navigation[],
  isModalOpen: boolean,
}

export const useStakingStore = defineStore({
  id: 'stakingStore',

  state: (): State => ({
    navigation: [
        {   id: 1,
            to: 'fix-staking',
            isActive: true,
        },
        {   id: 2,
            to: 'defi-staking',
            isActive: false,
        },
    ],
    isModalOpen: false,
  }),

  actions: {
    setActiveTab(id: number): void {
        this.$state.navigation.map((item:Navigation) => {
            if(item.id === id) {
                item.isActive = true;
            }
            else {
                item.isActive = false;
            }
        });
    },
    openModal(): void {
        this.$state.isModalOpen = true;
    },
    closeModal(): void {
        this.$state.isModalOpen = false;
    }
  }
});
