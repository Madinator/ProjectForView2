import { defineStore } from 'pinia'

interface guildInfo {
    id: number,
    guildName: string,
    victories: number,
    TVL: number,
    revenue: number,
    isChoosen: boolean,
}

export const useGuildList = defineStore({
    id: 'guildList',

    state: (): guildInfo[] => ([
        {
            id: 0,
            guildName: "Gamers Guild",
            victories: 100,
            TVL: 100,
            revenue: 10000,
            isChoosen: true,
        },
        {
            id: 1,
            guildName: "Pirate Guild",
            victories: 100,
            TVL: 20003,
            revenue: 10000,
            isChoosen: false,
        },
        {
            id: 2,
            guildName: "The best Guild",
            victories: 100,
            TVL: 100,
            revenue: 13242,
            isChoosen: false,
        },
        {
            id: 3,
            guildName: "Silent Hill",
            victories: 1234,
            TVL: 100,
            revenue: 10000,
            isChoosen: false,
        },
        {
            id: 4,
            guildName: "Metal Gamers",
            victories: 230,
            TVL: 100,
            revenue: 10000,
            isChoosen: false,
        },
        {
            id: 5,
            guildName: "Some Gamers",
            victories: 100,
            TVL: 100,
            revenue: 10000,
            isChoosen: false,
        },
        {
            id: 6,
            guildName: "Gamers Guild",
            victories: 100,
            TVL: 100,
            revenue: 10000,
            isChoosen: false,
        },
    ]),
    actions: {
        setIsChoosen(id: Number): void {
            this.$state.map(item => item.id === id ? item.isChoosen = true : item.isChoosen = false);
        },

        getGuildListByName(guildName: string): guildInfo[] {
            return this.$state.filter(item => item.guildName.toLowerCase().includes(guildName.toLowerCase()));
        }
    },
});
