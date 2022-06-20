import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/index';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
export const decorators = [
    Story => (
        <Provider store={store}>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </Provider>
    ),
];
