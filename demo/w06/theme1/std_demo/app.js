const updateFruits = fruits.map( (fruit)=>{
    fruit.role = 'fruit'
    //console.log(fruit);
    return fruit;
})
console.log('updateFruits',updateFruits);
const highPrice = fruits.filter((fruit)=>{  
    // if(fruit.price >20){
    //     return fruit;
    // }
    //if(fruit.price>20)return fruit;
    return fruit.price >20 
})
console.log('highPrice ',highPrice)
const specificId = fruits.find((fruit)=>{
    return fruit.id ===1;
})
console.log('specificId',specificId)
const averagePrice = fruits.reduce((priceTotal,fruit)=>{
    // console.log('fruit',fruit)
    // console.log('priceTotal',priceTotal)
    return priceTotal + fruit.price;
},0)/fruits.length;
console.log('averagePrice',averagePrice)
const survey = fruits.reduce((survey,fruit)=>{
    // console.log('color',fruit.color)
    const color = fruit.color
    if (survey[color]){
        survey[color] =survey[color]+1 
    }
    else{
        survey[color]=1;
    }
    return survey;
}, {});
console.log('survey',survey)
