import { defineStore } from 'pinia'

interface guildInfo {
    id: number,
    courseName: string,
    duration: string,
    cost: string,
    isChoosen: boolean,
}

export const useCoursesList = defineStore({
    id: 'coursesList',

    state: (): guildInfo[] => ([
        {
            id: 0,
            courseName: "Web 3.0 Developer",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: true,
        },
        {
            id: 1,
            courseName: "Gameplay Training",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
        {
            id: 2,
            courseName: "Gameplay Training",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
        {
            id: 3,
            courseName: "Silent Hill",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
        {
            id: 4,
            courseName: "Metal Gamers",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
        {
            id: 5,
            courseName: "Some Gamers",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
        {
            id: 6,
            courseName: "Gamers Guild",
            duration: "1 year",
            cost: "1000 $",
            isChoosen: false,
        },
    ]),
    actions: {
        setIsChoosen(id: Number): void {
            this.$state.map(item => item.id === id ? item.isChoosen = true : item.isChoosen = false);
        },

        getGuildListByName(courseName: string): guildInfo[] {
            return this.$state.filter(item => item.courseName.toLowerCase().includes(courseName.toLowerCase()));
        }
    },
});
