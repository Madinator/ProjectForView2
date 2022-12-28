import { defineStore } from 'pinia';

interface leaderboardInfo {
    guildName: string,
    playerName: string
}

interface leaderboardSection {
    ActiveGuild: leaderboardInfo[],
    FormingGuilds: leaderboardInfo[],
    closedGuilds: leaderboardInfo[],
}

export const useLeaderboardGuild = defineStore({
    id: 'leaderboardGuild',

    state: (): leaderboardSection => ({
        ActiveGuild: [
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
            {
                guildName: 'DOWHATYOUWANT',
                playerName: 'Mr. Niceguy'
            },
        ],
        FormingGuilds: [
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            {
                guildName: 'Random Guild',
                playerName: 'Mr. Player'
            },
            
        ],
        closedGuilds: [
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
            {
                guildName: 'Guild',
                playerName: 'Player'
            },
        ],
    }),

    actions: {
        getActiveGuildInfo(): leaderboardInfo[] {
            return this.$state.ActiveGuild;
        },
        getFormingGuildsInfo(): leaderboardInfo[] {
            return this.$state.FormingGuilds;
        },
        getClosedGuildsInfo(): leaderboardInfo[] {
            return this.$state.closedGuilds;
        },   
    },
});
