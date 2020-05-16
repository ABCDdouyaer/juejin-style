/*
 * @Author: Jiraiya
 * @Date: 2020-05-14 15:45:29
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-14 16:04:52
 * @Description: 
 */
import * as React from 'react';
require('./quote.scss');
const Quote = ({desc}) => {
    return <blockquote className='desc'> 
        <p className='desc-p'>{desc}</p>
    </blockquote>
}

export default Quote;