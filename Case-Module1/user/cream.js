let creamProd =[
    new GongChaProd("Cream","Dolce Milk Tea Float","M",70000,"https://gongcha.com.vn/wp-content/uploads/2022/07/Dolce-milk-tea-float.png"),
    new GongChaProd("Cream","Okinawa Latte Float","M",75000,"https://gongcha.com.vn/wp-content/uploads/2022/07/okinawa-latte-float.png")
]

function showCreamProd(){
    let content="";
    for(let i=0;i<creamProd.length;i++){
        content +=`<div class="category">${creamProd[i].category}</div>
                    <div>
                        <div class="item-img">
                            <img width="80" height="80" src=${creamProd[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                                <strong>${creamProd[i].name}</strong>
                            </div>
                            <div class="item-des">
                            <span>Size: ${creamProd[i].size}</span><br>
                            </div>
                            <div class="item-price">
                                <span>${creamProd[i].price}</span>
                            </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>

                    </div>`
    }
    document.getElementById("cream").innerHTML=content;
}
showCreamProd();