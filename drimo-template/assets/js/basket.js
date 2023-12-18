const products = document.getElementById("products");

function getBasket() {
    products.innerHTML = " "
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item , index)=>{
        let box = document.createElement("div")
        box.className = 'col-6 col-lg-3 col-xl-3'
        box.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
                <button onclick="deleyt(${index})">delete</button>
            `
            products.appendChild(box)
    })
}


function deleyt(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index ,1) 
    localStorage.setItem('cart', JSON.stringify(cart))
    getBasket()
}

getBasket()