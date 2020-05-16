/*
 * @Author: Jiraiya
 * @Date: 2020-05-14 15:53:14
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-14 16:06:50
 * @Description: 
 */

import * as React from 'react';
require('./h3.scss');

const H3 = ({title}) => {
    return <h3 className='title-3'> 
        <span>{title}</span>
    </h3>
}

export default H3;