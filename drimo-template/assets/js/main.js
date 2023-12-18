const products = document.getElementById("products")
const products2 = document.getElementById("products2")
const btn  = document.getElementById("btn")
const inp = document.getElementById("inp")
const axtar = document.getElementById("search-btn")

let page = 1
let limit = 8

async function getProducts() {
    products2.style.display = "none"
    let skip = (page - 1) * limit;
    const response = await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
    const data = response.data;
    db = data

    data.forEach(item => {
        const box = document.createElement('div');
        box.className = ' col-6 col-lg-3 col-xl-3';
        box.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
                <button onclick="addToBasket(${item.id})">add to basket</button>
            `;
        products.appendChild(box);
    });
    page++;
}

btn.addEventListener("click" , getProducts)

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getProducts()


//  search by name

function searchByName() {
    products.style.display = "none"
    products2.style.display = "flex"
    axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?title=${inp.value}`)
    .then((res)=>{
        db = res.data
        db.forEach((item)=>{
            let box = document.createElement("div")
            box.className = 'col-6 col-lg-3 col-xl-3';
            box.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
            `;
            products2.appendChild(box)
        })
    })
}


axtar.addEventListener("click" , searchByName);