import { defineStore } from 'pinia'

export type Vote = {
    id: string,
    name: string,
    isVoted: boolean,
}

interface State {
    votes: Vote[]
}

export const useGovernanceStore = defineStore({
  id: 'governanceStore',

  state: (): State => ({
    votes: [
        {
            id: '143242',
            name: 'Yeah, thats a great idea.',
            isVoted: false
        },
        {
            id: '213DA22',
            name: 'No, dont leak our cats videos ',
            isVoted: false
        },
        {
            id: '21SFS232',
            name: 'I wanna sleep, please return keep silence',
            isVoted: false
        },
    ]
  }),

  actions: {
    setActiveVote(id: string): void {
        this.$state.votes.map((item:Vote) => {
            if(item.id === id) {
                item.isVoted = !item.isVoted;
            }
            else {
                item.isVoted = false;
            }
        })
    }
  }
});
