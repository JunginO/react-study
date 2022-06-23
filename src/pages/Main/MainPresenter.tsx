import React from 'react';
import Carousel from '@Components/Common/Carousel';
import { useCarouselMovieTitle } from '@Hooks/useMovieData';
import { useCarouselTvTitle } from '@Hooks/useTvData';
import { useParams } from 'react-router-dom';

const MainPresenter = () => {
    const params = useParams();
    const { data } = params.section === 'movie' ? useCarouselMovieTitle() : useCarouselTvTitle();

    return <div>{data && data.map((d: any, index: number) => <Carousel title={d} index={index} key={index} genre={params.section || 'movie'} />)}</div>;
};
export default MainPresenter;
