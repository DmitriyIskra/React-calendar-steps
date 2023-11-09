import React from 'react';
import './css/insertDate.css';

export default function InsertDate(props) {
  const { isValid } = props;

  const handleFocus = (e) => {
    if(e.target.matches('.dateInvalid')) {
      e.target.classList.remove('dateInvalid');
    }
  } 

  if(!isValid) {
    const el = document.querySelector('.date');
    el.classList.add('dateInvalid');
  };

  return (
    <div className='wr-date'>
        <label htmlFor="insertDate">Дата ( ДД.ММ.ГГ )</label>
        <input
          className='date'
          type="text"
          name="date"
          id="insertDate"
          onFocus={handleFocus} />
    </div>
  )
}
