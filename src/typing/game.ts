type Banner = {
    title: string,
    description: string,
    img: string,
}

enum GameView {
  COLUMN = 'COLUMN',
  ROW = 'ROW'
}

enum GameSortBY {
    RECENTLYLESTED="recentlylested",
    RECENTLYCREATED="recentlycreated",
    RECENTLYSOLD="recentlysold",
    RECENTLYRECEIVED="recentlyreceived",
    ENDINGSOON="endingsoon",
    PRICELOWTOHIGH="pricelowtohigh",
    PRICEHIGHTOLOW="pricehightolow",
    HIGHESTLASTSALE="highestlastsale",
    OLDEST="oldest",
    RATING="Rating",
}

type GameCategoryItem = {
    title: GameCategories,
    subtitles: PickedGameSubCategory[]
}

type SetOptionsType = PickedGameSubCategory & {
    category: GameCategories,
}

type AllSubCategories = GameCategory & GameGenre & GameDeveloper | string;

enum GameCategories {
    CATEGORY = 'Category',
    GENRE = 'Genre',
    DEVELOPER = 'Developer'
}

type PickedGameSubCategory = {
    name: GameCategory | GameGenre | GameDeveloper,
    picked: boolean
}

enum GameCategory {
    ALL = 'All',
    NEW = 'New',
    POPULAR = 'Popular'
}

enum GameGenre {
    CASUAL = 'Casual',
    ADVENTURE = 'Adventure',
    EDUCATION = 'Education',
    ACTION = 'Action',
}

enum GameDeveloper {
    EARNGAMES = 'EarnGames',
    OTHER = 'Other',
    ANOTHER = 'Another',
    ETC = 'ETC'
}

type FAQ = {
    question: string,
    answer: string,
}

enum NFTType {
    CHARACTERS = 'Characters',
    WEAPON = 'Weapon',
    SKIN = 'Skin'
}

export type {
    Banner,
    GameView as GameViewType,
    GameCategoryItem,
    AllSubCategories,
    PickedGameSubCategory,
    GameCategories as GameCategoriesType,
    SetOptionsType,
    FAQ,
}

export { 
    GameView,
    GameSortBY,
    GameCategories,
    GameCategory,
    GameGenre,
    GameDeveloper,
    NFTType
}