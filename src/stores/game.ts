import { defineStore } from 'pinia'
import { type Banner, GameView, GameSortBY, GameCategories, type GameCategoryItem, GameCategory, GameGenre, GameDeveloper, type AllSubCategories, type FAQ, NFTType } from '@/typing/game'

interface State {
    banner: Banner[],
    activeBannerId: number,
    activeViewType: GameView,
    selectedSortType: GameSortBY,
    gameCategories: GameCategoryItem[],
    faq: FAQ[],
    NFTTypes: NFTType[],
    selectedNFTType: NFTType
}

export const useGameStore = defineStore({
  id: 'gameStore',

  state: (): State => ({
    banner: [
        {
          title: "Title Default One",
          description: "Past recorded videos have to sometimes be tapped twice to open on the Android app (though single-tap works most of the time)",
          img: "/img/mainMobile.png"
        },
        {
          title: "Title Default Two",
          description: "Past recorded videos have to sometimes be tapped twice to open on the Android app (though single-tap works most of the time)",
          img: "/img/mainMobile.png"
        },
        {
          title: "Title Default Three",
          description: "Past recorded videos have to sometimes be tapped twice to open on the Android app (though single-tap works most of the time)",
          img: "/img/mainMobile.png"
        },
      ],
    activeBannerId: 0,
    activeViewType: GameView.COLUMN,
    selectedSortType: GameSortBY.RATING,
    gameCategories: [
      {
        title: GameCategories.CATEGORY,
        subtitles: [
          { name: GameCategory.ALL, picked: true }, 
          { name: GameCategory.NEW, picked: false }, 
          { name: GameCategory.POPULAR, picked: false }
        ]
      },
      {
        title: GameCategories.GENRE,
        subtitles: [
          { name: GameGenre.CASUAL, picked: false }, 
          { name: GameGenre.ADVENTURE, picked: false }, 
          { name: GameGenre.EDUCATION, picked: false },
          { name: GameGenre.ACTION, picked: false }

        ]
      },
      {
        title: GameCategories.DEVELOPER,
        subtitles: [
          { name: GameDeveloper.EARNGAMES, picked: false }, 
          { name: GameDeveloper.OTHER, picked: false }, 
          { name: GameDeveloper.ANOTHER, picked: false },
          { name: GameDeveloper.ETC, picked: false }
        ]
      },
    ],
    faq: [
      {
        question: "How to play Earnland?",
        answer: "Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players' individual techniques and teamwork to challenge themselves in multiple game modes. Different from the current chain games on the market, Earnland is a product that truly integrates all the advantages of traditional mobile games, with a high degree of completion and entertainment, creating a real 'social gaming experience' and profit model."
      },
      {
        question: "How do I earn money while playing?",
        answer: "Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players'"
      },
      {
        question: "How to use my NFT in a game?",
        answer: "Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players'"
      },
      {
        question: "Is it free to start?",
        answer: "Earnland is a blockchain-based multiplayer online battle arena (MOBA) game designed to combine players'"
      },
    ],
    NFTTypes: [NFTType.CHARACTERS, NFTType.WEAPON, NFTType.SKIN],
    selectedNFTType: NFTType.CHARACTERS,
  }),

  actions: {
    setActiveBanner(id: number): void {
        this.$state.activeBannerId = id;
    },
    setActiveViewType(type: GameView): void {
      this.$state.activeViewType = type;
    },
    setSortType(type: GameSortBY): void {
      this.$state.selectedSortType = type;
    },
    pickCategories(cat: GameCategories, subCat: AllSubCategories, pick: boolean = true): void {
      this.$state.gameCategories
      .filter(item => item.subtitles.filter(elem => {
        if(item.title === cat) {
          if(elem.name === subCat) {
            if(pick) {
              elem.picked = true;
            }
            else {
              elem.picked = false;
            }
          }
          else {
            elem.picked = false;
          }
        }
      }));
      
    },
    setActiveNFTType(type: NFTType): void {
      this.$state.selectedNFTType = type;
    }
  }
});
