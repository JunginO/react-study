const path = require('path');
module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-create-react-app'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async config => {
        config.resolve.alias['@Assets'] = path.resolve(__dirname, '../src/assets');
        config.resolve.alias['@Components'] = path.resolve(__dirname, '../src/components');
        config.resolve.alias['@Hooks'] = path.resolve(__dirname, '../src/hooks');
        config.resolve.alias['@Stores'] = path.resolve(__dirname, '../src/stores');
        config.resolve.alias['@Pages'] = path.resolve(__dirname, '../src/pages');
        config.resolve.alias['@Styles'] = path.resolve(__dirname, '../src/styles');

        return config;
    },
    // webpackFinal: async config => {
    //     config.module.rules.push({
    //         test: /\.(ts|tsx)$/,
    //         loader: require.resolve('babel-loader'),
    //         options: {
    //             presets: [['react-app', { flow: false, typescript: true }]],
    //         },
    //     });
    //     config.resolve.extensions.push('.ts', '.tsx');
    //     return config;
    // },
};
