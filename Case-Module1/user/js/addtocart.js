let btn = document.querySelectorAll("#plus-button");

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        let btnItem = event.target;
        let product = btnItem.parentElement.parentElement.parentElement;
        let productName = product.querySelector("strong").innerText;
        let productSize = product.querySelector("#size-dislay").innerText;
        let productPrice = product.querySelector("#price-dislay").innerText;
        addcart(productName, productSize, productPrice);
    })
});
function addcart(productName, productSize, productPrice) {
    let add_div=document.createElement("div")
    let content=`<div class="product-name"><span>${productName}</span></div><br>
                        <div class="quantity" ><span>${productSize}</span></div><br>
                        <div class="count"><span>${productPrice}</span></div><hr>`
    add_div.innerHTML = content;
    let showcart=document.querySelector(".showCart")
    console.log(showcart);
    showcart.append(add_div)
}