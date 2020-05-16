/*
 * @Author: Jiraiya
 * @Date: 2020-05-13 16:43:53
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:27:53
 * @Description: 
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Table from './component/Table';
import Table1 from './component/Table1';
import Quote from  './component/Quote';
import H3 from './component/H3';
import {js, article} from './data/index';

require('./index.scss');
const App1 = () => {
    return <section className='nice'> 
            <Quote desc={'故不积跬步，无以至千里；不积小流，无以成江河。'}/>
            <H3 title={'2020-05'}/>
            <Table {...article.table}/>
        </section>;
}

const NewTable = ({item}) => {
    return <React.Fragment>
                <H3 title={item.tag}/>
                {item.static ? <Table1 body={item.static} head={['静态属性、方法名', '注释']} es6={item.es6}/> : null}
                {item.pro ? <Table1 body={item.pro} head={['原型属性、方法名', '注释']} es6={item.es6}/> : null}
        </React.Fragment>
}
const App2 = () => {
    return <React.Fragment>
            {Object.keys(js).map((item, key) => {
                return <NewTable item={js[item]} key={key} />
            })}
    </React.Fragment>
}


ReactDOM.render(<App2 />, document.getElementById('app'));