
import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const callbacksComponent = ( element ) =>{
    const id = '5d86371f25a058e5b1c8a65e'
    findHero( id, (error, Captain)=>{

        if( error ){
            element.innerHTML = error;
            return;
        }

        element.innerHTML= Captain.name;

    } );

}


/**
 * 
 * @param {String} id 
 * @param { (error: String | null , hero:object) => void } callback 
 */



const findHero = (id, callback) =>{

    const hero = heroes.find(hero => hero.id === id);
    
    if( !hero ){
        callback(`Hero with id ${ id } not found`);
        return; //undefined
    }

    callback( null, hero );
    

}
