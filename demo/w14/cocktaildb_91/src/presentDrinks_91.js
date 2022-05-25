
import fetchDrinks from "./fetchDrinks_91.js";
const presentDrinks = async(url)=>{
const data = await fetchDrinks(url)
console.log('drinks-data',data)
//console.log('presentDrinks')
}

export default presentDrinks;