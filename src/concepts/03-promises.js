import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const promisesComponent = ( element ) =>{
    
    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    } 

    const renderTwoHeroes = (hero1, hero2)=>{
        element.innerHTML = `
            <h1>${hero1.name}</h1>,
            <h1>${hero2.name}</h1>
        `
    }

    const renderEror = (error) =>{
        element.innerHTML = `
        <h1>Error: </h1>
        <h3>${ error }</h3>
        `;
    }

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f97c29d020f1e1f6d';

    //promise.all => nos permite ejecutar todas las promesas en un arreglo de promesas
    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then(([hero1, hero2])=> renderTwoHeroes(hero1, hero2)
    .catch(renderEror));
    
    
    //forma 2
    //let hero1;
    // findHero(id1).then(hero =>{
    //     hero1 = hero;
    //     return findHero(id2);
    // }).then( hero => {
    //     renderTwoHeroes(hero1, hero2);
    // } )
    // .catch(renderEror);

//fomra 1
    // findHero (id1)
    //     // .then( superHero => renderHero(superHero) ); si el valor solicitado es igual a la renderización del mismo, entonces solo se usa la funcion donde se ejecuta
    //     .then( (hero1) => { 

    //         findHero(id2)
    //             .then( hero2 =>{
    //             renderTwoHeroes(hero1,hero2)
    //         })
    //         .catch(renderEror);
    //     } )
    //     // .catch( error => renderEror(error) ); es el mismo caso de then, cuando la variable es la misma que se llama entonces solo se llama la funcion
    //     .catch( renderEror );

// then: es cuando todo sale bien
// Catch: lo que se ejecuta si sale algo mal
// finally: se ejecuta cuando el then y catch se ejecuta, se usa para hacer limpieza en el codigo

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = (id) =>{
    //resolve: es el vlaor de la promesa
    //reject es que fallamos en realizar la promesa
    // const promise = new Promise(( resolve, reject ) =>{ es raro ver declarado una variable como promesa, por esa razón es mejor solo quitarle el espacio de memoria y devolverla como se hace en la siguiente linea
    return new Promise(( resolve, reject ) =>{

        const hero = heroes.find( hero => hero.id === id);
        if(hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);
    } );
  
}



