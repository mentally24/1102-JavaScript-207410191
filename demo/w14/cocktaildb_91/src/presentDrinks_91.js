
import fetchDrinks from "./fetchDrinks_91.js";
import displayDrinks from "./displayDrinks_91.js";

const presentDrinks = async(url)=>{

const data = await fetchDrinks(url)
// fetch drinks
console.log('drinks-data',data)
const section = await displayDrinks(data)
//console.log('presentDrinks')
}

export default presentDrinks;