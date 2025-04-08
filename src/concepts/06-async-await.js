import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncAwaitComponent = async( element ) =>{
    
    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    try{ //intente que se haga esto de lo contrario con el catch aparecerá en la pantalla
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2); // se puede desestructurar como { hero1 }
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
        
    } catch(error){ // se muestra el error en pantalla a través de un element.innerHTML
        element.innerHTML = error;
    }

}
//promesas no secuenciales: se refiere a que el valor de una promesa no dependa del valor de otra

const findHero = async(id) =>{ //no olvidar el valor que va pasar por referencia es decir, el id

    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero not found`;
    return hero;
}
