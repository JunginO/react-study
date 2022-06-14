import React from 'react';
import styled from 'styled-components';
import mcu from '@Assets/mcu.jpg';
interface CardProps {
    name: string;
}

const MainCardBox = styled.div`
    img {
        width: 220px;
    }
    p {
        margin: 0px;
    }
    .title {
        font-weight: bold;
    }
`;

const MainCard: React.FC<CardProps> = ({ name }) => {
    return (
        <MainCardBox>
            <img src={mcu} />
            <p className="title">{name}</p>
            <div>
                <p>2022 . 한국</p>
                <p>평균 ★3.6 </p>
            </div>
        </MainCardBox>
    );
};
export default MainCard;
