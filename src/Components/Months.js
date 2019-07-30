import React from 'react';
import '../css/Month.css';
import nameMonth from '../helpers/nameMonts';
import nameDays from '../helpers/nameDays';

function Months (props){
    let {year, month} = props;
    let current = new Date(year, month);
    let next    = new Date(year, month + 1);
    let diff = (next - current)/(1000 * 3600 * 24);
    let index = (current.getDay()+6) % 7;
    let rows;
    index > 5 ? rows = 6 : rows = 5;
    const COLS = 7;
    

    let table = [],
    tr = [1,2],
    k = 1 - index;
    for(let i = 0; i < rows; i++){
        tr = [];
        for(let j = 0; j < COLS; j++){
            tr.push(<td>{k > 0 && k <= diff ? k : ''}</td>);
            k++;
        }
        table.push(<tr>{tr}</tr>)
    }

    const th = nameDays.map(day =>(
        <th>{day}</th>
    ))

    return(
        <table>
            <caption>{nameMonth[month] + ' '}{year}</caption>
            {th}
            {table}
        </table>
    )
}

export default Months;