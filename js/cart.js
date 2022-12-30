let btn = document.querySelectorAll("#plus-button");

btn.forEach(function (button,index) {
    button.addEventListener("click", function (event) {
        let btnItem = event.target;
        let product = btnItem.parentElement.parentElement.parentElement.parentElement;
        let productName = product.querySelector("strong").innerText;
        let productSize = product.querySelector("#size-dislay").innerText;
        let productPrice = product.querySelector("#price-dislay").innerText;
        addcart(productName, productSize, productPrice);
    })
});
function addcart(productName, productSize, productPrice) {
    let add_div = document.createElement("div");
    let content = `<div class="count-box"><div class="product-name txt-margin"><span>${productName}</span></div>
                        <div class="size txt-margin" ><span>${productSize}</span></div>
                        <div class="count txt-margin"><span>Giá: </span><span id="price">${productPrice}</span><sup>đ</sup></div>
                        <div class="txt-margin">
                            <span class="quantity">Số lượng: <input class="quantity-box" type="number" value="1">
                            <button class="delete-button" ><i class="fa-solid fa-xmark"></i></button>
                            </span>
                        </div></div>
                        <hr>`
    add_div.innerHTML = content;
    let showcart = document.querySelector(".showCart")
    // console.log(showcart);
    showcart.append(add_div);

    cartTotal();
}

function cartTotal() {
    let itemInCart = document.querySelectorAll(".showCart div.count-box ")
    // console.log(itemInCart.length);
    let cartTotal=0;
    for (let i=0;i<itemInCart.length;i++) {
        let inputValue=itemInCart[i].querySelector("input").value;
        // console.log(inputValue)
        let inputPrice=itemInCart[i].querySelector("#price").innerHTML;
        // console.log(inputPrice);
        let total=inputValue*inputPrice;
        // console.log(total);
        cartTotal+=total;
        // console.log(cartTotal)
    }
    let showTotal=document.querySelector("#showTotal")
    showTotal.innerHTML=cartTotal;
    console.log(showTotal)
}