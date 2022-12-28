let toppingProduct=[
    new GongChaProd("","",1,)
]

function showToppingProd() {
    let content = "";
    for (let i = 0; i < toppingProduct.length; i++) {
        content += `<div>
                        <div class="item-img">
                            <img width="80" height="80" src=${toppingProduct[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                            <strong>${toppingProduct[i].name}</strong>
                            </div>
                        <div class="item-des">
                            <span>Size: ${toppingProduct[i].size}</span><br>
                        </div>
                        <div class="item-price">
                            <span>${toppingProduct[i].price}</span>
                        </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>
                    </div>`
    }
    document.getElementById("topping").innerHTML =content;
}
showToppingProd();
