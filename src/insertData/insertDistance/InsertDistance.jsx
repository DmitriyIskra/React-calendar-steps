import React from 'react';
import './css/insertDistance.css';

export default function InsertDistance(props) {
  const { isValid } = props;

  const handleFocus = (e) => {
    if(e.target.matches('.distanceInvalid')) {
      e.target.classList.remove('distanceInvalid');
    }
  } 

  if(!isValid) {
    const el = document.querySelector('.distance');
    el.classList.add('distanceInvalid');
  };
  
  return (
    <div className='wr-distance'>
        <label htmlFor="insertDistance">Пройдено км</label>
        <input
          className="distance"
          type="text" name="distance"
          id="insertDistance"
          onFocus={handleFocus}
          />
    </div>
  )
}