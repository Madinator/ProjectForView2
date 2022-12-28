import { defineStore } from 'pinia';

interface leaderboardInfo {
    img: string,
    name: string,
    number: number,
    text: string
}

interface leaderboardSection {
    Players: leaderboardInfo[],
    Guilds: leaderboardInfo[],
    NFTs: leaderboardInfo[],
    Academy: leaderboardInfo[],
}

export const useLeaderboardProfile = defineStore({
    id: 'leaderboardProfile',

    state: (): leaderboardSection => ({
        Players: [
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            },
            {
                img: '/img/Leaderboard/profile-pic.jpg',
                name: "Mr. Niceguy",
                number: 3988,
                text: 'Earned'
            }
        ],
        Guilds: [
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild1",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild2",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild3",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild4",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild5",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild5",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild5",
                number: 4353,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/guild.jpg',
                name: "Guild5",
                number: 4353,
                text: 'Members'
            }
        ],
        NFTs: [
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie A",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie B",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie C",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie D",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie E",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie E",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie E",
                number: 1234,
                text: 'BTC'
            },
            {
                img: '/svg/Leaderboard/NFT.svg',
                name: "Pinnie E",
                number: 1234,
                text: 'BTC'
            }
        ],
        Academy: [
            {
                img: '/img/Leaderboard/academy1.jpg',
                name: "GamePlay",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy2.jpg',
                name: "WebDeveloper",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy3.jpg',
                name: "Web 3.0 Basics",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy4.jpg',
                name: "Trading Basics",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy5.jpg',
                name: "NFT Trading",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy5.jpg',
                name: "NFT Trading",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy5.jpg',
                name: "NFT Trading",
                number: 3213,
                text: 'Members'
            },
            {
                img: '/img/Leaderboard/academy5.jpg',
                name: "NFT Trading",
                number: 3213,
                text: 'Members'
            }
        ],
    }),

    actions: {
        getPlayersInfo(): leaderboardInfo[] {
            return this.$state.Players;
        },
        getGuildsInfo(): leaderboardInfo[] {
            return this.$state.Guilds;
        },
        getNFTsInfo(): leaderboardInfo[] {
            return this.$state.NFTs;
        },
        getAcademyInfo(): leaderboardInfo[] {
            return this.$state.Academy;
        },
        
    },
});
