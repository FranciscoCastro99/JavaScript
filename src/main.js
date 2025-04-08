import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { callbacksComponent } from './concepts/02-callbacks';
import { promisesComponent } from './concepts/03-promises';
import { promisesRaceComponent } from './concepts/04-promises-race';
import { asyncComponent } from './concepts/05-async'
import { asyncAwaitComponent } from './concepts/06-async-await';
import { asyncAwait2Component } from './concepts/07-async-await';
import { forAwaitComponent } from './concepts/08-for-await';
import { generatorFunctionsComponent } from './concepts/09-funciones-generadoras';
import { generatorAsyncComponent } from './concepts/10-generator-async';



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    <p class="read-the-docs">
      
    </p>
  </div>
`;


const element = document.querySelector('.card');

// callbacksComponent(element);
// promisesComponent(element);
// promisesRaceComponent(element)
// asyncComponent(element)
// asyncAwaitComponent(element)
// asyncAwait2Component(element)
// forAwaitComponent(element);
// generatorFunctionsComponent(element)
generatorAsyncComponent(element);
