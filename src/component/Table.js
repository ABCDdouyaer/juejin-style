/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 18:43:56
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 10:42:02
 * @Description: 
 */
import * as React from 'react';
require('./table.scss');

const obj = {
    'shuji': '🌹️ ',
    'lijie': '🌼 ',
    'liaojie': '🍀 ',
    'shijian': '🍄 ', 
}
const P = (props) => {
    const {content} = props;
    if(!content) return null;
    return <React.Fragment>
        {content.map((e, k) => {
            return <p key={k}>{k+1}. {e}</p>
        })}
       </React.Fragment>
}
const Tr = (props) => {
    const {idx, item} = props;
    const {href, content, title, type} = item;
    return (<tr key={idx}>
                <td key='1'>
                    {href ? <a href={href}>{obj[type]}{title}</a> : title}
                </td>
                <td key='2'>
                    <P content={content}/>
                </td>
            </tr>)
}

const Table = (props) => {
    const {head, body} = props;
    return (
        <table className='table'>
            <thead>
                <tr>
                    {head.length && head.map((th, idx) => {
                        return <th key={idx}>{th}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    body.map((item, idx) => {
                        return <Tr item={item} idx={idx} key={idx}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;