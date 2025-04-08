import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncAwait2Component = async( element ) =>{

    console.time('start');

    // const value1 = await slowPromises();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [value1, value2, value3] = await Promise.all([ //ejecuta las promesas de manera simultanea, debido a que ninguna depende de otra, por esa razón pasa de 4 ms a 2 ms
        slowPromises(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value1: ${value1} </br>
        value2: ${value2} </br>
        value3: ${value3} </br>
    `

    console.timeEnd('start');

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