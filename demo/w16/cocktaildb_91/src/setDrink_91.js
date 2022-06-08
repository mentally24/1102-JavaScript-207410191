const setDrink = (section)=>{
    section.addEventListener('click',(e)=>{
        //e.preventDefault()
        console.log('e.traget',e.target.parentElement.dataset.id)
        const id = e.target.parentElement.dataset.id
        localStorage.setItem('drink',id)
    })
}  


export default setDrink;