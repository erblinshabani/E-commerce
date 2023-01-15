const changeThemeColor = document.getElementById('changeThemeColor');
const showNavList = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const orderProductsCart = document.querySelector(".orderProducts");
const cart = document.querySelector('.cart')


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

cart.addEventListener("click", () => {
    orderProductsCart.classList.toggle("active-cart");
})

if (orderProductsCart.classList != "active") {
    cart.addEventListener("click", () => {
        orderProductsCart.classList.remove("active");
    })
}

