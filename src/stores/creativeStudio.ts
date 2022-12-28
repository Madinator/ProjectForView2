import { defineStore } from 'pinia';

type Navigation = {
    name: string,
    to: string,
    active: boolean
}
interface State {
    navigation: Navigation[],
    analyticsNav: Navigation[]
}

export const useCreativeStudioStore = defineStore({
  id: 'creativeStudioStore',  

  state: (): State => ({
    navigation: [
        {
            name: 'My Content',
            to: '/creativeStudio/myContent',
            active: true
        },
        {
            name: 'Analytics',
            to: '/creativeStudio/analytics',
            active: false
        },
        {
            name: 'Monetization',
            to: '/creativeStudio/monetization',
            active: false
        },
        {
            name: 'Profile Settings',
            to: '/creativeStudio/profileSettings',
            active: false
        },
    ],
    analyticsNav: [
        {
            name: 'Review',
            to: 'review',
            active: true
        },
        {
            name: 'Сontent',
            to: 'content',
            active: false
        },
        {
            name: 'Audience',
            to: 'Audience',
            active: false
        },
    ]
  }),

  actions: {
    toggleTab(to: string): void {
        this.$state.navigation.map((item: Navigation) => {
            if(item.to === to) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        })
    },
    toggleAnalyticsTab(to: string): void {
        this.$state.analyticsNav.map((item: Navigation) => {
            if(item.to === to) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        })
    }
  }
});
