const addButton = document.querySelector('.addButton')
const inputValue = document.querySelector('.input')
const container = document.querySelector('.container')
const  form = document.querySelector('.input_div')



form.addEventListener('submit',function(event){
    event.preventDefault()

    if (!inputValue.value){
        alert('please fill this input field')
        return
    }

    let div = document.createElement('div')
    div.classList.add('item')

    let h1 = document.createElement('h1')
    h1.classList.add('h1')
    h1.innerText = inputValue.value
    div.appendChild(h1)

    let editBtn = document.createElement('button')
    editBtn.innerHTML = 'EDIT'
    editBtn.classList.add('editButton')

    let removeBtn = document.createElement('button')
    removeBtn.innerText = 'REMOVE'
    removeBtn.classList.add('removeButton')

    div.append(editBtn, removeBtn)

    container.append(div)
  
    
    inputValue.value = ''
})