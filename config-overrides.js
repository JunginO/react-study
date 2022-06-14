/*eslint-disable*/
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@Assets': path.resolve(__dirname, 'src/assets'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Layouts': path.resolve(__dirname, 'src/layouts'),
        '@Pages': path.resolve(__dirname, 'src/pages'),
        '@Hooks': path.resolve(__dirname, 'src/hooks'),
        '@Styles': path.resolve(__dirname, 'src/styles'),
        '@Stores': path.resolve(__dirname, 'src/stores'),
    }),
);
