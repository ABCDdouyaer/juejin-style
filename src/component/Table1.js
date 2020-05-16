/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 18:43:56
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 16:15:49
 * @Description: 
 */
import * as React from 'react';
require('./table1.scss');

const obj = {
    'es6': '6️⃣ ',
    'rubbit': '🚯 ',
    'default': '🍀 ',
}
const getTag = (index, es6, type, isTag) => {
    if(isTag) return;
    let tagKey = 'default';
    if(es6){
        tagKey = 'es6';
    }else if(type[index]){
        tagKey = type[index];
    }
    return obj[tagKey]
}
const P = (props) => {
    const {content, isTag, type = [], es6} = props;
    
    if(!content) return null;
    return <React.Fragment>
        {content.map((e, k) => {
            return <p key={k}>{getTag(k, es6, type, isTag)}{isTag ? `${k+1}.` : ''}{e.trim()}</p>
        })}
       </React.Fragment>
}
const Tr = (props) => {
    const {idx, item, es6} = props;
    const {content, title, type} = item;
    return (<tr key={idx}>
                <td key='1'>
                    <P content={title.split('|')} isTag={false} type={type} es6={es6}/>
                </td>
                <td key='2'>
                    <P content={content} isTag={true}/>
                </td>
            </tr>)
}

const Table1 = (props) => {
    const {head, body, es6} = props;
    return (
        <table className='table1'>
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
                        return <Tr item={item} idx={idx} key={idx} es6={es6}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table1;