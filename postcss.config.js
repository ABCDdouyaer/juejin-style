/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 16:52:54
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-13 16:52:55
 * @Description: 
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: true
        }),
        // require('postcss-px-to-viewport')({
        //     unitToConvert: 'px',
        //     viewportWidth: 750,
        //     unitPrecision: 5,
        //     propList: ['*'],
        //     viewportUnit: 'vw',
        //     fontViewportUnit: 'vw',
        //     selectorBlackList: [],
        //     minPixelValue: 1,
        //     mediaQuery: false,
        //     replace: true,
        //     exclude: [/px.scss/, /tx.scss/],
        //     landscape: false,
        //     landscapeUnit: 'vw',
        //     landscapeWidth: 568
        // }),
        // require('postcss-aspect-ratio-mini'),
        // require('postcss-write-svg'),
        // require('postcss-viewport-units'),
    ],
};
