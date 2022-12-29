
let btn = document.querySelectorAll("#plus-button");

btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        let btnItem= event.target;
        let product= btnItem.parentElement.parentElement.parentElement;
        let productName = product.querySelector("strong").innerText;
        let productSize = product.querySelector("#size-dislay").innerText;
        let productPrice = product.querySelector("#price-dislay").innerText;
        console.log(productName,productSize,productPrice);
    })
    addtocart(productName,productSize,productPrice);
})


function addtocart(){

}

