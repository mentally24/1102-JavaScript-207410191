const url = './api/people.json'
const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    fetchData(url);
})

function fetchData(url){
    // const response = fetch(url).then().catch();
    // console.log('response',response)
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log('data',data)
        displayItems(data)
    })
    .catch((err)=>console.log('error',err))
}
const displayItems = (items)=>{
    const displayData = items.map((items)=>{
        return `<p>${items.name}</p>`
       }).join('')
       console.log('displaydata',displayData)

       const element = document.createElement('div')
       element.innerHTML = displayData
       document.body.appendChild(element)
}

function getData(url){
    const xhr = new XMLHttpRequest();
    console.log('xhr0', xhr)
    
    
    xhr.open('GET',url)
    
    xhr.onreadystatechange = function(){
        console.log('xhr',xhr)
        if(xhr.readyState === 4 && xhr.status ===200){
        //console.log('done')
        const data =JSON.parse(xhr.responseText)
        console.log('data',data)
        const displayData = data.map((item)=>{
         return `<p>${item.name}</p>`
        }).join('')

        console.log('displaydata',displayData)

        const element = document.createElement('div')
        element.innerHTML = displayData
        document.body.appendChild(element)
        const text = document.createElement('h3')
        text.textContent = xhr.responseText
        document.body.appendChild(text)
        }else{
            console.log({
                status:xhr.status,
                text: xhr.statusText,
            })
        }
    }
    xhr.send()
}



