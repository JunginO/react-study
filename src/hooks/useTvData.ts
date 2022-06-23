import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchTvDatas = async () => {
    const { data } = await axios.get('http://localhost:5000/api/home/tv');
    return data;
};

export function useTvData(index: number) {
    return useQuery('tv', fetchTvDatas, {
        select: data => {
            if (index === 0 || index === 1) {
                const TVInfos = data.result.result[index].item.result.map((d: any) => d.content);
                return TVInfos;
            } else {
                const TVInfos = data.result.result[index].item.reasoned_contents.map((d: any) => d.content);
                return TVInfos;
            }
        },
    });
}

export function useCarouselTvTitle() {
    return useQuery('tv', fetchTvDatas, {
        select: data => {
            const CarouselTitle = data.result.result.map((d: any) => d.title);
            return CarouselTitle;
        },
    });
}
