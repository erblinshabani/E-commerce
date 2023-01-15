const changeThemeColor = document.getElementById('changeThemeColor');
const showNavList = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const orderProduct = document.getElementsByClassName("order")


changeThemeColor.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme');
})

showNavList.addEventListener("click", () => {
    navList.classList.toggle("active");
    showNavList.classList.toggle('hamburger-active');
})

if (navList.classList != "active") {
    navList.addEventListener("click", () => {
        navList.classList.remove("active");
        showNavList.classList.remove('hamburger-active');
    })
}

class Product {
    static display() {
        let _products = '';
        if(productList.length > 0) {
            productList.forEach(product => {
                _products += `
                <div class="menuItem">
                    <div id="pizza-${product.id}" class='pizza' style="background-image: url('./images/image${product.id}.jpg');"></div>
                    <h1>${product.name} ${product.category}</h1>
                    <h3>${product.price}$</h3>
                    <div class="menuButton">
                        <button onclick="del('${product.name}')">Delete</button>
                    </div>
                </div>
                `
            })
        }
        document.getElementById('menuList').innerHTML = _products
    }

    static delete(product){
        var index = productList.findIndex(object => {
            return object.name === product
        });
        console.log("Product deleted")

        if(index > -1) {
            productList.splice(index, 1);
        }
    }
}


function del(product) {
    Product.delete(product)
    Product.display()
}