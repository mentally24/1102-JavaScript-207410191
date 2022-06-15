// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const alert = document.querySelector('.alert')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn') 

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

const setBacktoefault = ()=>{
    grocery.value= ''
}

//displayAlert
const displayAlert = (text,action)=>{
    alert.textContent= text;
    alert.classList.add(`alert-${action}`)
    setTimeout(()=>{
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    },3000)
}
const addItem = (e)=>{
    e.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString()
    console.log('id',id)
    if (value !==''){
        list.innerHTML += `
        <article data-id="${id}" class="grocery-item">
        <p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </article>`
    }
   console.log('list',list)
   displayAlert('item added to list','success')
   container.classList.add('show-container')
   setBacktoefault()
}
// ****** LOCAL STORAGE **********
// ****** SETUP ITEMS **********
 const setupItems = ()=>{}
form.addEventListener('submit',addItem)
window.addEventListener('DOMContentLoaded',setupItems) 
