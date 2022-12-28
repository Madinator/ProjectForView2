import { defineStore } from 'pinia';
import { userApiService, type YoutubeVideoInfo } from '@/services/youtube/index';

interface State {
    videoInfo: YoutubeVideoInfo,
}

export const useYoutubeStore = defineStore({
  id: 'youtubeStore',

  state: (): State => ({
    videoInfo: {
        channelTitle: '',
        title: '',
        viewCount: 0,
        publishAt: new Date(),
        channelImage: '',
    }
  }),

  actions: {
    async getVideoInfo(id: string) {
        await userApiService.getVideoStatisticsById(id)
        .then(async res => {
            if(res.status === 200) {
                this.$state.videoInfo.viewCount = res.data.items[0].statistics.viewCount;

                await userApiService.getVideoInfoById(id)
                .then(async res => {
                    this.$state.videoInfo.channelTitle = res.data.items[0].snippet.channelTitle;
                    this.$state.videoInfo.title = res.data.items[0].snippet.title;
                    this.$state.videoInfo.publishAt = res.data.items[0].snippet.publishedAt;
            
                    await userApiService.getChannelInfoByVideoId(res.data.items[0].snippet.channelId)
                    .then(res => {
                        this.$state.videoInfo.channelImage = res.data.items[0].snippet.thumbnails.default.url;
                    })
                })
            }
        })
    }
  }
});
