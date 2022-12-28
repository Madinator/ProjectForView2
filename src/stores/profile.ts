import { defineStore } from 'pinia';
import type NotificationInfo from '@/interfaces/notification';
import type User from '@/interfaces/user';

type NavigationT = {
    name: string,
    active: boolean,
    to: string,
}
type WalletNavigationT = {
    name: string,
    active: boolean,
    to: string
}

interface State {
 navigation: NavigationT[],
 walletNavigation: WalletNavigationT[]
}

export const useProfileStore = defineStore({
  id: 'profileStore',

  state: (): State => ({
    navigation: [
        {
            name: 'Blog & News',
            active: true,
            to: 'blogAndNews'
        },
        {
            name: 'Wallet',
            active: false,
            to: 'wallet'
        },
        {
            name: 'Tournaments',
            active: false,
            to: 'p-tournaments'
        },
    ],
    walletNavigation: [
        {
            name: 'Fix Staiking',
            active: true,
            to: 'fixStaiking'
        },
        {
            name: 'DeFi Staiking',
            active: false,
            to: 'defiStaiking'
        },
        {
            name: 'Launchpad',
            active: false,
            to: 'launchpad'
        },
    ]
  }),
  actions: {
    toggleTab(to: string): void {
        this.$state.navigation.map((item: NavigationT) => {
            if(item.to === to) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        })
    },
    toggleWalletTab(to: any): void {
        this.$state.walletNavigation.map((item: WalletNavigationT) => {
            if(item.to === to) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        })
    },
    getActiveTab(): string {
        return this.$state.walletNavigation
        .filter(nav => nav.name === this.$state.walletNavigation
        .filter(item=> item.active === true)[0].name)[0].name;
    }
  }
});
