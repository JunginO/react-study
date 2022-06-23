import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from '@Pages/Main/MainPresenter';
import Mypage from '@Pages/Mypage/MypagePresenter';
import Detail from '@Pages/Detail/DetailPresenter';
import MainLayout from '@Components/Layout/MainLayout';
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/:section"
                    element={
                        <MainLayout>
                            <Main />
                        </MainLayout>
                    }
                />
                <Route
                    path="/detail/:genre/:index/:code"
                    element={
                        <MainLayout>
                            <Detail />
                        </MainLayout>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <MainLayout>
                            <Mypage />
                        </MainLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
