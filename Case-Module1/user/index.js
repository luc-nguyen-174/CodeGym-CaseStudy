let creamProd =[
    new GongChaProd("Dolce Milk Tea Float","M",70.000,"https://gongcha.com.vn/wp-content/uploads/2022/07/Dolce-milk-tea-float.png"),
    new GongChaProd("Okinawa Latte Float","M",75.000,"https://gongcha.com.vn/wp-content/uploads/2022/07/okinawa-latte-float.png")
]

function showCreamProd(){
    let content="";
    for(let i=0;i<creamProd.length;i++){
        content +=`<div>
                        <div class="item-img">
                            <img width="80" height="80" src=${creamProd[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                                <strong>${creamProd[i].name}</strong>
                            </div>
                            <div class="item-des">
                            <p>Size: ${creamProd[i].size}</p><br>
                            </div>
                            <div class="item-price">
                                <span>${creamProd[i].price}</span>
                            </div>
                    </div>

                </div>`
    }
    document.getElementById("cream").innerHTML=content;
}
showCreamProd();