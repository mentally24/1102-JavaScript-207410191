import get from './getElement.js'
import { hideLoading } from './toggleLoading_91.js'

const displayDrinks = async({drinks})=>{
console.log('drinks',drinks )
const title = get('.title')
const section = get('.section-center')
//console.log('title',title)
//console.log('section',section)
if(!drinks){
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search'
    section.innerHTML = null;
    return
    
}
const  newDrinks = drinks.map((drink)=>{
    const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink
    return `
    <a href="drink_91.html">
     <article class="cocktail" data-id="${id}">
     <img src="${image}" alt="cocktail">
     <h3>${name}</h3>  
    </article>
    </a>
    `
}).join('')
//console.log('newDrink',newDrinks)
hideLoading();
title.textContent = ''
section.innerHTML = newDrinks
return section
}

export default displayDrinks 

