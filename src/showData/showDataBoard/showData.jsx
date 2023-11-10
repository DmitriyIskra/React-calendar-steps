import React from 'react';
import './css/showData.css';
import ShowDataItem from '../showDataItem/showDataItem';

export default function ShowData(props) {

    const { data, callback } = props;

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
            {data.map( item => {
                return item.date ? <ShowDataItem key={item.date} item={item}  /> : '';
            } )}
        </ul>
    </div>
    )
}
