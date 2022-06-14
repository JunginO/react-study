import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import logo from '@Assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '@Stores/action';
import { RootState } from '@Stores/index';
const NavigationBox = styled.div`
    .logo {
        height: 50px;
        margin: 5px;
    }
    border-bottom: 1px solid lightgray;
    .container {
    }
`;

const Navigation: React.FC = () => {
    const userState = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.loginUser('정인'));
    }, []);
    return (
        <NavigationBox>
            <div className={'container'}>
                <img src={logo} className="logo" />
                <NavLink
                    to="/movie"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? 'black' : 'gray',
                        };
                    }}
                >
                    영화
                </NavLink>
                <NavLink
                    to="/tv"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? 'black' : 'gray',
                        };
                    }}
                >
                    TV
                </NavLink>
            </div>
            {userState.login ? (
                <div>
                    <div>로그인됨</div>
                    <button onClick={() => dispatch(userActions.logoutUser())}>로그아웃</button>
                </div>
            ) : (
                <button onClick={() => dispatch(userActions.loginUser('jungin'))}>로그인</button>
            )}
        </NavigationBox>
    );
};
export default Navigation;
