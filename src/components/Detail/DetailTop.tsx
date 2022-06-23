import React, { useState } from 'react';
import styled from 'styled-components';
import mcu from '@Assets/mcu.jpg';
import { useParams } from 'react-router-dom';
import DetailStar from './DetailStar';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { useMovieData } from '@Hooks/useMovieData';
import { useTvData } from '@Hooks/useTvData';
const DetailBox = styled.div`
    img {
        width: 220px;
        border-radius: 2%;
        display: inline-block;
        border: 2px solid white;
    }
    .detail-title {
        font-weight: bold;
    }
    .detail-star {
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        width: 600px;
    }
    .detail-content {
        display: inline-block;
    }
    .detail-eval {
        display: inline-block;
        border-right: 1px solid ligthgray;
    }
    .detail-buttons {
        display: inline-block;
    }
    .btn {
        background-color: #fff;
        border: 1px solid #dbdee2;
        color: #404a5c;
    }
    .btn.active {
        background-color: #505bf0;
        color: #fff;
    }
`;

interface DetailPage {
    index: number;
}

const DetailTop: React.FC = () => {
    const params = useParams();
    const [bools, setBool] = useState<boolean>(false);
    const { data } = params.genre === 'movie' ? useMovieData(parseInt(params.index || '0')) : useTvData(parseInt(params.index || '0'));
    const detailData = data.find((d: any) => d.code === params.code);
    console.log(detailData);
    return (
        <DetailBox>
            <div>
                <img src={detailData.poster.large} />
                <div className="detail-content">
                    <p className="detail-title">{detailData.title}</p>
                    <p>
                        {detailData.year} ・ 액션/드라마 ・ {detailData.nations[0].name}
                    </p>
                    <div className="detail-star">예상 ★3.3 평균 ★2.8 (2,463명)</div>
                    <div>
                        <div className="detail-eval">
                            평가하기
                            <DetailStar />
                        </div>
                        <div className="detail-buttons">
                            <button className={`btn ${bools ? 'active' : ''}`} onClick={() => setBool(!bools)}>
                                보고싶어요
                            </button>
                            <button>코멘트</button>
                            <button>보는중</button>
                            <button>더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </DetailBox>
    );
};
export default DetailTop;
