/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 19:21:33
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-13 19:32:08
 * @Description: 
 */
// var inlineCss = require('inline-css');
// var html=`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>table{display: table; text-align: left;}tbody{    border: 0;}tr{    border: 0;     border-top: 1px solid #ccc;    background-color: white;}th{    font-size: 16px;     padding: 5px 10px;     font-weight: bold;     border: 1px solid #009688;     background-color: #009688;     color: #f8f8f8;     border-bottom: 0;     text-align: left;}td{    font-size: 16px;     padding: 5px 10px;     border: 1px solid #009688;     text-align: left;}a{    text-decoration: none;     word-wrap: break-word;     font-weight: bold;     color: #009688;     border-bottom: 1px solid #009688;}</style></head><body><section><table><thead><tr><th>文章题目</th><th>文章要点</th></tr></thead><tbody><tr><td>hah</td></tr><tr><td>hah</td></tr></tbody></table></section></body></html>`;
// inlineCss(html).then(res => {
//     console.log(res)
// })

var inlineCss = require('inline-css');
var html = "<style>div{color:red;}</style><div/>";
 
inlineCss(html,{url:''})
    .then(function(html) { console.log(html); });