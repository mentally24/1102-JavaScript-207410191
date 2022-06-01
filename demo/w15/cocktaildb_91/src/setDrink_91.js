const setDrink = (section)=>{
    section.addEventListner('click',(e)=>{
        e.preventDefault()
        console.log('e.traget',e.target)
    })
}  


export default setDrink