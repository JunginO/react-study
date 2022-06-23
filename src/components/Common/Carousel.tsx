import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import Slider from 'react-slick';
import MainCard from '@Components/Main/MainCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useMovieData } from '@Hooks/useMovieData';
import { useTvData } from '@Hooks/useTvData';
interface CarouselProps {
    title: string;
    index: number;
    genre: string;
}
const CarouselBox = styled.div`
    margin: 0 0 42px;
    padding: 0px 60px;
    .carousel-title {
        font-weight: 600;
        font-size: 22px;
    }
`;

const Carousel: React.FC<CarouselProps> = ({ title, index, genre }) => {
    const settings = {
        infinite: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: false,
    };
    const { data } = genre === 'movie' ? useMovieData(index) : useTvData(index);
    console.log(data);

    // console.log(query.data.result.result[0].item.result);
    // if (query.isLoading) {
    //     return <h1>Loading,,,</h1>;
    // }
    return (
        <CarouselBox>
            <p className="carousel-title">{title}</p>
            <Slider {...settings}>
                {data &&
                    data.map((d: any, i: number) => (
                        // eslint-disable-next-line react/jsx-key
                        <MainCard
                            key={i}
                            name={d.title}
                            year={d.year}
                            country={d.nations[0].name}
                            imgLink={d.poster.medium}
                            code={d.code}
                            index={index}
                            genre={genre}
                            star={d.ratings_avg.toFixed(1)}
                        />
                    ))}
            </Slider>
        </CarouselBox>
    );
};
export default Carousel;
