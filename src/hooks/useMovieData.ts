import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchMovieDatas = async () => {
    const { data } = await axios.get('http://localhost:5000/api/home/movie');
    return data;
};

export function useMovieData(index: number) {
    return useQuery('movies', fetchMovieDatas, {
        select: data => {
            if (index === 0) {
                const MovieInfos = data.result.result[index].item.result.map((d: any) => d.content);
                return MovieInfos;
            } else {
                const MovieInfos = data.result.result[index].item.reasoned_contents.map((d: any) => d.content);
                return MovieInfos;
            }
        },
    });
}

export function useCarouselMovieTitle() {
    return useQuery('movies', fetchMovieDatas, {
        select: data => {
            const CarouselTitle = data.result.result.map((d: any) => d.title);
            return CarouselTitle;
        },
    });
}
