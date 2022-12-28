import { defineStore } from 'pinia';
import type NotificationInfo from '@/interfaces/notification';
import type User from '@/interfaces/user';

interface State {
  notifications: NotificationInfo[];
  isLoggedIn: boolean;
  user: User;
}

export const useUserStore = defineStore({
  id: 'userStore',

  state: (): State => ({
    notifications: [
        {
            icon: '/svg/staking.svg',
            title: 'Staking',
            description: 'New refill for',
            importantDescription: '300 USDT'
        },
        {
            icon: '/svg/staking.svg',
            title: 'Staking',
            description: 'New refill for',
            importantDescription: '300 USDT'
        },
        {
            icon: '/svg/staking.svg',
            title: 'Staking',
            description: 'New refill for',
            importantDescription: '300 USDT'
        },
    ],
    isLoggedIn: false,
    user: {
      id: 'karnaval',
      username: 'Karna.Val',
      status: 'Ambassador',
      balance: 1000,
      avatar: '/img/user/avatar.png',
      profileBanner: '/img/user/profileBanner.jpg',
    }
  }),

  actions: {
    
  }
});
