const url = './api/dataset.json'
const btn = document.querySelector('.btn')


let data = [];

btn.addEventListener('click',()=>{
    fetchDataSet(url)
})

const fetchDataSet = (url)=>{
try{
const response = await fetch(url)
data = await response.json()
console.log('data',data)
updateDOM();
}catch(err){
console.log('error',err)
}  
const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return `<div class="person"><strong>${item.name}</strong> ${formatMoney(item.money)}</div>`
    });
    tempData = tempData.join('');
  //    console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
  } 
  
}



  
  const addData = (obj) => {
     data.push(obj);
     // console.log('data', data);
     updateDOM();
  }
  
  // Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  function formatMoney(number) {
     return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
   }

   const setupDataSet1 = () => {
    data  = dataSet1;
    updateDOM();
  }
  