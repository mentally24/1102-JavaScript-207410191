const promise = new Promise((resolve,reject)=>{
let value = false   ;
if(value){
    resolve([1,2,4])

}
else{
    reject('there is an error')
}
})

console.log(promise)

promise.then((data)=>{
console.log('data',data) 
})
.catch((err)=>console.log('error',err));