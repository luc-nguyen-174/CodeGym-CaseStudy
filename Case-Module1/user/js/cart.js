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
    let content = `<div class="product-name txt-margin"><span>${productName}</span></div>
                        <div class="size txt-margin" ><span>${productSize}</span></div>
                        <div class="count txt-margin"><span>Giá: ${productPrice}<sup>đ</sup></span></div>
                        <div class="txt-margin">
                            <span class="quantity">Số lượng: <input class="quantity-box" type="number" value="1">
                            <button class="delete-button" ><i class="fa-solid fa-xmark"></i></button>
                            </span>
                        </div>
                        <hr>`
    add_div.innerHTML = content;
    let showcart = document.querySelector(".showCart")
    // console.log(showcart);
    showcart.append(add_div);

    cartTotal();
}

function cartTotal() {
    let itemInCart = document.querySelectorAll("p.shop-content div.product-box")
    console.log(itemInCart)
}