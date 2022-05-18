const elForm = document.querySelector('.form');
const elInputText = document.querySelector('.text-note');
const elInputPrice = document.querySelector('.price-number');
const elListContainer = document.querySelector('.list-container');
const totalPrice = document.querySelector('.total-price');
let array = [];
let count = 0;
let total = 0;
elForm.addEventListener('submit', addListFunction);

function addListFunction(event){
    event.preventDefault();
    let txt = elInputText.value.trim();
    let num = elInputPrice.value.trim();
    if(elInputPrice.value != "" && elInputText.value != ""){
        count++;
        let obj = {
            id: count,
            product: txt.toLowerCase(),
            price: Number(num)
        }
        array.push(obj);
    }
    functionAddArray(array);
    array = [];
    elInputText.value = "";
    elInputPrice.value = "";
    let elList = document.querySelectorAll('.list-item')
    let bxTrash = document.querySelectorAll('.bx-trash');
    
    delFunc(bxTrash);
    complFunc(elList)
}

function functionAddArray(arr){
    arr.forEach(item =>{
        let list = document.createElement('li');
        list.id = item.id;
        list.className = "list-item"
        list.innerHTML = `
        <span class="title-list">${item.product}</span>
        <span class="product-price">${item.price}</span>
        <i class="bx bx-trash"></i>
        `;
        elListContainer.appendChild(list);
        totalPrice.textContent = `Total price: ${total+=item.price}`
    })

}

function delFunc(nodeArr){
    Array.from(nodeArr).forEach(item =>{
        item.addEventListener('click', (e)=>{
            console.log(total);
            e.target.parentElement.classList.add('d-none');
            let delTotal = Number(e.target.parentElement.children[1].textContent)
            totalPrice.textContent = `Total price: ${total - delTotal}`
        })
    })
}

function complFunc(li){
    Array.from(li).forEach(item => {
        item.addEventListener('click',()=>{
            item.children[0].classList.toggle('complited');
            item.children[1].classList.toggle('complited')
        })
    })
}