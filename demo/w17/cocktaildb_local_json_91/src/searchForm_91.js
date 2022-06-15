import get from './getElement.js'
import presentDrinks from './presentDrinks_91.js'

import {LOCAL_URl,hasNetwork,searchItems} from  '../api/search/config_91.js'

const form = get('.search-form')

const input = get('[name="drink"]')

// console.log('form',form)
// console.log('input',input)
console.log('confid.js',{LOCAL_URl,hasNetwork,searchItems})

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

form.addEventListener('keyup',(e)=>{
    e.preventDefault();
    console.log('input',input.value)
    const value = input.value
    if (!value) return;
    if(hasNetwork){
    presentDrinks(`${baseURL}${value}`)
    }else{
    if(searchItems.find((item)=>item === value)){
        presentDrinks(`${LOCAL_URl}${value}.json`)
    }
    
    }
    
    
}) 