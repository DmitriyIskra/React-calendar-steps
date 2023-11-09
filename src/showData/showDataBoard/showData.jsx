import React from 'react';
import './css/showData.css';
import ShowDataItem from '../showDataItem/showDataItem';

export default function ShowData(props) {

    const { data, callback } = props;

    let arrDate = [];

    // сортируем по дате
    data.forEach( item => {
        arrDate.push(item.date);
    })

    const sortedDate = arrDate.sort();
    
    arrDate = [];

    sortedDate.forEach( i => {
        data.forEach( j => {
            if(i === j.date) {
                arrDate.push(j);
            }
        } )
    } )

    const handleClick = (e) => {
        if(e.target.matches('.delete')) {
            const el = e.target.closest('.data-board-item');

            const elDate = el.querySelector('.data-item-date').textContent;
            
            callback(elDate);
        }
    }

    return (
    <div className='wr-show-data'>
        <ul className="show-data-list">
            <li className="show-data-item">Дата (ДД.ММ.ГГ)</li>
            <li className="show-data-item">Пройдено км</li>
            <li className="show-data-item">Действия</li>
        </ul>
        <ul className="data-board" onClick={handleClick}>
            {arrDate.reverse().map( item => {
                return item.date ? <ShowDataItem key={item.date} item={item}  /> : '';
            } )}
        </ul>
    </div>
    )
}
