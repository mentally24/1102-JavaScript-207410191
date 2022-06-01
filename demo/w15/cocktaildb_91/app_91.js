import presentDrinks from "./src/presentDrinks_91.js"

import './src/searchForm_91.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=j'

window.addEventListener('DOMContentLoaded',()=>{
 presentDrinks(URL);
})