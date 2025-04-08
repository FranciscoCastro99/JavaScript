import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const generatorAsyncComponent = async( element ) =>{

        const heroGenerator = getHeroGenerator();
        do{

        }while( (await heroGenerator.next()).done ){

        }
}

async function* getHeroGenerator() {
    
    for( const hero of heroes){
        await sleep();
        yield hero.name;
    }
}


const sleep = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}