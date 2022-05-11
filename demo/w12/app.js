// console.log(`i'm first`);
// console.log(`i'm second`);
// console.log(`i'm third`);
// console.log(`i'm first`);
// boilingWater();
// console.log(`i'm third`);



function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 1000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}


// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 1 min
// chop onion
// add onion boil for 1 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilingWater();
console.log('chop carrots');

function boilingWater(time){
    console.log('boiling...');

    setTimeout(()=>{
        console.log('boiling done');
        console.log('add carrots');
        setTimeout(()=>{
            console.log('carrots boiling done');
            console.log('add onion');
        },2000);
        
        setTimeout(()=>{
            console.log('onion boiling done');

        },2000);


    },3000);
    
}