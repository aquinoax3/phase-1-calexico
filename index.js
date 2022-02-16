//  Variable
let globalMenu;


//  Create a span element then place in menu item
const menuItemDiv = document.getElementById('menu-items')
const menuDishSeciton = document.getElementById('dish')

// Menu information
const menuImage = document.getElementById('dish-image')
const menuName = document.getElementById('dish-name')
const menuDescription = document.getElementById('dish-description')
const menuPrice = document.getElementById('dish-price')

//  Form 
const menuForm = document.getElementById('cart-form')
const cartAmount = document.getElementById('cart-amount')
const menuSpanCart = document.getElementById('number-in-cart')


//  Fetch API information

fetch('http://localhost:3000/menu')
.then(response => response.json())
.then(jsonData =>{
    console.log('Data Here:', jsonData)

    

    jsonData.forEach(menu => {
        renderFirstMenuItems(menu)
        renderMenuItems(menu)
    });
})

function renderFirstMenuItems(menu){
    //  create a span element
    let menuSpan = document.createElement('span')

    //  name of menu item for all
    menuSpan.textContent = menu.name

    //  Append
    menuItemDiv.appendChild(menuSpan)

    //  Click event for menu

    menuSpan.addEventListener('click', () =>{
        console.log('click')

        renderMenuItems(menu)
    })

}

function renderMenuItems(menu){

    //  Menu Image
    menuImage.src = menu.image

    //  Menu Name
    menuName.textContent = menu.name

    //  Menu Description
    menuDescription.textContent = menu.description

    //  Menu Price
    menuPrice.textContent = ` $${menu.price} `

    globalMenu = menu
}



// Form Submit

menuForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('Clicked')

    

    //backend 
    cartAmount.textContent = parseInt(cartAmount.value)
    


    //frontend
    menuSpanCart.textContent = cartAmount.textContent 

    

    

})
