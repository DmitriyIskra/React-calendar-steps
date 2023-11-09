import { useState } from 'react';

import './css/WrInsertData.css';

import InsertDate from '../insertDate/InsertDate';
import InsertDistance from '../insertDistance/InsertDistance';
import InsertButton from '../insertButton/InsertButton';

export default function WrInsertData( props ) {
  const { callback } = props;

  const [state, setState] = useState({
    isValidDistance: true,
    isValidDate: true,
  })

  const data = {
    date: null,
    distance: null,
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    data.date = e.target.date.value;
    data.distance = e.target.distance.value;

    const validateDate = /^\d{2}\.\d{2}\.\d{2}$/.test(data.date);
    const validateDistance = /^\d+\.?\d*$/.test(data.distance);

    setState({
      isValidDistance: validateDistance,
      isValidDate: validateDate,
    })

    if(!validateDate || !validateDistance) return;

    callback(data)

    e.target.date.value = '';
    e.target.distance.value = '';

  //  при перерисовке всего приложения на уровне выше нужно ли будет сбрасывать фоорму

  }

  return (
    <form className='form' onSubmit={handlerSubmit}>
        <InsertDate isValid = {state.isValidDate}/>
        <InsertDistance isValid = {state.isValidDistance}/>
        <InsertButton />
    </form>
  )
}
