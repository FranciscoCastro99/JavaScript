
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponents = ( element ) =>{

    console.log(import.meta.env); // lo que se encuentra dentro de ( ) , usualmente en otros frameworks es process.env

    const html = `
        Dev: ${ import.meta.env.DEV } </br>
        Prod: ${ import.meta.env.PROD } </br>
        Prod: ${ import.meta.env.VITE_API_KEY } </br>
        URL: ${ import.meta.env.VITE_BASE_URL } </br>
    `;
    element.innerHTML = html;



}