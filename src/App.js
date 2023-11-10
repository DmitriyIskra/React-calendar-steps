import './App.css';

import { useState } from 'react';

import WrInsertData from './insertData/wr-insert-data/WrInsertData';
import ShowData from './showData/showDataBoard/showData';

import { sortDate } from './functions/sort-date';

function App() {

  const [state, setState] = useState([
    {
      date: '',
      distance: '',
    }
  ]);

  // Функция добавления данных
  const addData = (data) => {
    let arr = state;

    // преобразуем формат даты
    data.date = data.date.split('.');
    data.date[2] = '20' + data.date[2];
    data.date = data.date.join('.');
    

    // проверяем на совпадение по дате и сумируем и меняем состояние
    // в данном компоненте только добавляем или прибавляем
    // сортировка на следующем шаге
    const resultSome = arr.some( item => item.date === data.date )
    
    if(resultSome) {
      let arr2 = [...state];
      arr2.forEach( item => {
        if(item.date === data.date) {
          item.distance = +item.distance + +data.distance;
        }
      })
      
      setState(arr2);
      console.log(state)
      return;
    }

    // добавляем новые данные
    arr.push(data)
    // сортируем
    const sorted = sortDate(arr);

    // меняем состояние
    setState(sorted);
  };

  // Функция удаления данных

  const deleteData = (data) => {
    const arr = [...state];

    const index = arr.findIndex( item => item.date === data )
    arr.splice(index, 1);
    setState(arr);
  }

  return (
    <div className='wrapper-app'>
      <WrInsertData callback = {addData}/>
      <ShowData
        data = {state}
        callback = {deleteData}
        />
    </div>
  );
}

export default App;
