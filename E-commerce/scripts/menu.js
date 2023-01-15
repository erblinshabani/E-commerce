const shoes = document.getElementById('shoes');
const pizza = document.getElementById('pizza');
const pc = document.getElementById('pc')
let category

pizza.addEventListener('click',() => {
    category = "pizza"
    Product.display()
})
shoes.addEventListener('click',() => {
    category = "shoes"
    Product.display()
})
pc.addEventListener('click',() => {
    category = "pc"
    Product.display()
})

let orderProducts = []

class Product {
    static display() {
        let _products = '';
        if(productList.length > 0) {
            productList.filter(val => {
                if (category == undefined) {
                    category = ""
                    return val
                } else if (val.category.includes(category)) {
                    return val
                }
            }).map(product => {
                _products += `
                <div class="menuItem">
                    <div id="pizza-${product.id}" class='pizza' style="background-image: url('./images/image${product.id}.jpg');"></div>
                    <h1>${product.name} ${category}</h1>
                    <h3>${product.price}$</h3>
                    <button class="order" onclick="ord('${product.id}', '${product.name}', '${product.price}')">Order Now</button>
                </div>
                `
            })
        }
        document.getElementById('menuList').innerHTML = _products
    }

    static order(id, name, price){
        let product = {
            id: id,
            name: name,
            price: price
        }
        orderProducts.push(product)

        let orderProduct = ''
        if (orderProducts.length > 0){
            orderProducts.map(p => {
                orderProduct += `
                <div class="order-product">
                    <img src='./images/image${p.id}.jpg'/>
                    <h1>${p.name}</h1>
                    <h3>${p.price}$</h3>
                </div>
                `
            })
        } else {
            
        document.querySelector('.orderProducts').innerHTML = "There Are Not Any Product"
        }
        const totalPrices = []
        let sum = 0;

        orderProducts.forEach(e => totalPrices.push(e.price))

        let total = `
            <div class="totalPrice">
                <h3>Total</h3>
                <h4>${totalPrices.reduce((sum,e) => sum = parseInt(sum) + parseInt(e))}$</h4>
            </div>
        `

        document.querySelector('.orderProducts').innerHTML = orderProduct + total;
        localStorage.setItem("Order Products", JSON.stringify(orderProducts));
    }
}



function ord(id, name, price) {
    Product.order(id, name, price)
    Product.display()
}