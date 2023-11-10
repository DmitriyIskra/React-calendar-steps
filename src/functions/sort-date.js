export function sortDate(data) {
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

    return arrDate.reverse();
}