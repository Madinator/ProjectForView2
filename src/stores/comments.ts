import { defineStore } from 'pinia'

export type Comment = {
  name: string,
  replied : string | null,
  comment: string,
  time: string,
  img: string
}

interface State {
  comments: Array<Comment[]>
}

export const useCommentsStore = defineStore({
  id: 'commentsStore',

  state: (): State => ({
    comments: [
      [
        {
          name: 'RESHALA HELEX',
          replied: null,
          comment: 'What are you worried about?',
          time: 'Yestarday at 17:06',
          img: '/img/GameCommentUser.png'
        },  
        {
          name: 'Poperechni',
          replied: 'RESHALA HELEX',
          comment: 'I dont give a shit, bitch',
          time: 'Yestarday at 17:06',
          img: '/img/GameCommentUser.png',
        },
      ],
      [
        {
          name: 'xxxxxRESHALA HELEX',
          replied: null,
          comment: 'What are you worried about?',
          time: 'Yestarday at 17:06',
          img: '/img/GameCommentUser.png'
        },  
        {
          name: 'Poperechni',
          replied: 'xxxxxRESHALA HELEX',
          comment: 'I dont give a shit, bitch',
          time: 'Yestarday at 17:06',
          img: '/img/GameCommentUser.png',
        },
      ],
    ]
  }),

  actions: {
    
  }
});
