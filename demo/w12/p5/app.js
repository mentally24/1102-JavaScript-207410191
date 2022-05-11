const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.threee')

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addColor(heading1,1000,'red')
    .then(()=>addColor(heading2,2000,'green'))
    .then(()=>addColor(heading3,1000,'blue'))

})

const addColor = (element,time,color)=>{
   return new Promise((resolve,reject)=>{
       if (element){
           setTimeout( ()=>{
               element.style.color = color;
               resolve();
           },time)

       }else{
           reject(new Error(`There is no such element ${element} `))
       }
   })
}
// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
        
//     heading1.style.color = 'red'
//     setTimeout(()=>{
//         heading2.style.color = 'green'
        
//         setTimeout(()=>{
//             heading3.style.color = 'blue'
//             },1000);
//         },2000);
//     },1000);
    
// }) 

