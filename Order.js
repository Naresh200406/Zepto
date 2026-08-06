
let cartContainer=document.querySelector(".cart_container_two")
let billContainer=document.querySelector(".cart_container_three")
let cartProducts=getCartItems()
function displayCartProducts(){
    cartProducts=getCartItems()
    cartContainer.innerHTML=""
    if(cartProducts.length==0){
        billContainer.innerHTML=""
        cartContainer.innerHTML=`
        <h2>Your Cart Is Empty🛒</h2>
        <a href="./Products.html>Browse Products</a>`
        return }

        cartProducts.forEach((item)=>{
            let totalPrice=Math.round(item.qty*item.price)
            cartContainer.innerHTML+=`
            <div class="cart_item">
            <asisde class="cart_item_one">
            <img src=${item.img} alt=${item.title}> 
            </asisde>
            <asiide class="cart_item_two">
            <h2 class="item_title></h2>
            </asiide>
            
            </div>
            `
        })
}