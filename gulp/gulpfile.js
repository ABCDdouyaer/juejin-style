/*
 * @Author: Jiraiya
 * @Date: 2020-05-14 10:34:52
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-14 10:34:53
 * @Description: 
 */
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
})