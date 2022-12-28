import { defineStore } from 'pinia'

interface State {
    activeBroadcastid: number,
    broadcastNames: string[],
}

export const useBlogNewsStore = defineStore({
  id: 'blognewsStore',

  state: (): State => ({
    activeBroadcastid: 0,
    broadcastNames: ['WEB 3.0', 'UIX design', 'Develop']
  }),

  actions: {
    setActiveBroadCastid(id: number): void {
        this.$state.activeBroadcastid = id;
    }
  }
});
