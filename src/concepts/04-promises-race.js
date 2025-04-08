

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promisesRaceComponent = ( element ) =>{
    
    element.innerHTML = 'Loading...'

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }
    Promise.race([
        slowPromises(),
        mediumPromise(),
        fastPromise(),
        slowPromises(),
        mediumPromise(),
        fastPromise(),
        slowPromises(),
        mediumPromise(),
        fastPromise(),
    ]).then (renderValue); //esto es lo mismo que decir value => renderValue(value)

}

const slowPromises = () => new Promise (resolve =>{
    setTimeout(()=>{
        resolve('slow promises')
    }, 2000);
})
const mediumPromise = () => new Promise (resolve =>{
    setTimeout(()=>{
        resolve('Medium Promise')
    }, 1500);
})
const fastPromise = () => new Promise (resolve =>{
    setTimeout(()=>{
        resolve('fast promises')
    }, 1000);
})