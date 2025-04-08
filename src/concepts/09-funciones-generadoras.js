import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const generatorFunctionsComponent = ( element ) =>{

    // const myGenerator = myFirstGeneratorFunction();
    // console.log ( myGenerator.next());

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click Me'
    element.append( button );
    
    const renderButton = () =>{
        const { value } = genId.next();
        button.innerText = `Click ${value}`
    }


    button.addEventListener('click', renderButton); // renderbutton es igual a () => renderButton()


}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++ currentId;
    }
}

function* myFirstGeneratorFunction(){
    yield 'primer valor'; // es como un retunr pero en cuentra el primer valor y se pausa 
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';
    return 'Ya no hay valores'
    yield 'cuarto valor';
}