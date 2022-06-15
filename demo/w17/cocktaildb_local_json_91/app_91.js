import presentDrinks from "./src/presentDrinks_91.js"

import './src/searchForm_91.js'

import {LOCAL_URl,hasNetwork,searchItems } from './api/search/config_91.js' 

console.log('confid.js',{LOCAL_URl,hasNetwork,searchItems})

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=j'

window.addEventListener('DOMContentLoaded',()=>{
 if(hasNetwork){
    presentDrinks(URL);
 }else{
    presentDrinks(LOCAL_URl);
 }
    

})