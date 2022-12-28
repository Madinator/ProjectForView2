import { defineStore } from 'pinia'

interface gameStanding {
    playerID: number,
    participant: string,
    matches: number,
    time: string,
    deaths: number,
    isPastWinner: boolean
}

export const useGameStanding = defineStore({
    id: 'gameStanding',

    state: (): gameStanding[] => ([
        {
            playerID: 0,
            participant: "Mr. Niceguy",
            matches: 5,
            time: "12:47",
            deaths: 0,
            isPastWinner: false,
        },
        {
            playerID: 1,
            participant: "Mr. Niceguy",
            matches: 2,
            time: "12:47",
            deaths: 4,
            isPastWinner: false,
        },
        {
            playerID: 2,
            participant: "Mr. Niceguy",
            matches: 6,
            time: "12:47",
            deaths: 13,
            isPastWinner: false,
        },
        {
            playerID: 3,
            participant: "Mr. Niceguy",
            matches: 7,
            time: "12:48",
            deaths: 23,
            isPastWinner: true,
        },
        {
            playerID: 4,
            participant: "Mr. Niceguy",
            matches: 5,
            time: "12:48",
            deaths: 3,
            isPastWinner: false,
        },
        {
            playerID: 5,
            participant: "Mr. Niceguy",
            matches: 5,
            time: "12:48",
            deaths: 0,
            isPastWinner: false,
        },
        {
            playerID: 6,
            participant: "Mr. Niceguy",
            matches: 5,
            time: "12:48",
            deaths: 0,
            isPastWinner: false,
        },
    ]),

    actions: {
        addAPlayer(info: gameStanding): void {
            this.$state = [...this.$state, info];
        }
    }
});
