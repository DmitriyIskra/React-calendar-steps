import React from 'react'
import './css/showDataItem.css'

export default function ShowDataItem(props) {

    const { item } = props;

    return (
        <li className='data-board-item'>
            <div className='data-item data-item-date'>{item.date}</div>
            <div className='data-item data-item-distance'>{item.distance}</div>
            <div className='data-item data-item-control'>
                <div className='edit'>Edit</div>
                <div className='delete'>Del</div>
            </div>
        </li>
    )
}
