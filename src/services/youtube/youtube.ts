import { httpService } from '@/services/http/http.service';

const youtube_base_url = import.meta.env.VITE_YOUTUBE_BASE_URL;
const youtube_key = import.meta.env.VITE_YOUTUBE_KEY;

export const userApiService = {
    getVideoStatisticsById: async (videoId: string): Promise<any> => {
        return await httpService.get(`${youtube_base_url}videos?part=statistics`, {
            id: videoId,
            key: youtube_key
        })
    },
    getVideoInfoById: async (videoId: string): Promise<any> => {
        return await httpService.get(`${youtube_base_url}videos?part=snippet `, {
            id: videoId,
            key: youtube_key
        })
    },
    getChannelInfoByVideoId: async (videoId: string): Promise<any> => {
        return await httpService.get(`${youtube_base_url}channels?part=snippet `, {
            id: videoId,
            key: youtube_key
        })
    },
}
