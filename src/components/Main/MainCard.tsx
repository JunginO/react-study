import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface CardProps {
    name: string;
    year: number;
    country: string;
    imgLink: string;
    code: string;
    index: number;
    genre: string;
    star: number;
}

const MainCardBox = styled.div`
    .link {
        text-decoration: none;
        .star {
            color: orange;
        }
    }
    img {
        width: 220px;
        border-radius: 2%;
    }
    p {
        margin: 0px;
        color: black;
    }
    .title {
        font-weight: bold;
    }
`;

const MainCard: React.FC<CardProps> = ({ name, year, country, imgLink, code, index, genre, star }) => {
    return (
        <MainCardBox>
            <Link to={`/detail/${genre}/${index}/${code}`} className="link">
                <img src={imgLink} />
                <p className="title">{name}</p>
                <div>
                    <p>
                        {year} . {country}
                    </p>
                    <p className="star">평가함 ★{star} </p>
                </div>
            </Link>
        </MainCardBox>
    );
};
export default MainCard;
