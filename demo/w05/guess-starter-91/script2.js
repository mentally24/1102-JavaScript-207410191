let bills =[125,100,250,555,44,350,191];
// 50<=小費<=300 *0.15 else 0.2 
let tips=[]

// 相加
let total = [];

for(var i = 0; i < bills.length; i++) {
    tips[i] = bills[i];
}

for (var j = 0; j < tips.length; j++) {
    if (tips[j]<=50 && tips[j]){
        tips[j]*0.15
        tips[j]=tips[j]
    }
    else {
        tips[j]=tips[j]*0.2
    }
    
}

for(var k = 0; k < bills.length; k++) {
    total[k] = bills[k]+tips[k];
    total[k] = total[k] 
}


console.log("bills", bills)
console.log("tips",tips)
console.log("total",total)
