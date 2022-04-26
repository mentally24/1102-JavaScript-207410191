let count =0;

const value = document.querySelector('#value');


const btns = document.querySelectorAll('.btn');


console.log('value',value.textContent);
console.log('btns',btns);

//舊寫法btns.forEach( function (){});


btns.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{
        //console.log(e.currentTarget);用來判斷有沒有抓到
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        };
        if(count >0){
            value.style.color = "green";
        }
        if(count <0){
            value.style.color = "red";
        }
        if(count ===0){
            value.style.color = "black"
        }
        value.textContent = count;
        console.log('value',value.textContent,value.style.color);
    
    });
})