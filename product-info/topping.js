let toppingProduct=[
    new GongChaProd("Thạch Nâu",'',10000,"https://gongcha.com.vn/wp-content/uploads/2022/08/THACH-NAU.png"),
    new GongChaProd("Thạch Cà Phê",'',10000,"https://gongcha.com.vn/wp-content/uploads/2022/08/THACH-CA-PHE.png"),
    new GongChaProd("Trân Châu Vải",'',10000,"https://gongcha.com.vn/wp-content/uploads/2022/08/TRAN-CHAU-VAI-1.png"),
    new GongChaProd("Trân Châu Xoài",'',10000,"https://gongcha.com.vn/wp-content/uploads/2022/08/TRAN-CHAU-XOAI.png"),
    new GongChaProd("Kem Sữa",'',16000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Kem-S%E1%BB%AFa.png"),
    new GongChaProd("Nha Đam",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Nha-%C4%90am.png"),
    new GongChaProd("Hạt É",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/H%E1%BA%A1t-%C3%89.png"),
    new GongChaProd("Trân Châu Đen",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Tr%C3%A2n-Ch%C3%A2u-%C4%90en.png"),
    new GongChaProd("Trân Châu Trắng",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Tr%C3%A2n-Ch%C3%A2u-Tr%E1%BA%AFng.png"),
    new GongChaProd("Đậu Đỏ",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/%C4%90%E1%BA%ADu-%C4%90%E1%BB%8F.png"),
    new GongChaProd("Sương Sáo",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/S%C6%B0%C6%A1ng-s%C3%A1o.png"),
    new GongChaProd("Thạch Trái Cây",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Th%E1%BA%A1ch-tr%C3%A1i-c%C3%A2y.png"),
    new GongChaProd("Thạch Dừa",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Th%E1%BA%A1ch-D%E1%BB%ABa.png"),
    new GongChaProd("Pudding",'',10000,"https://gongcha.com.vn/wp-content/uploads/2018/03/%E5%B8%83%E4%B8%81-pudding.png"),
    new GongChaProd("Combo 2 Loại Hạt",'',17000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Combo2loaihat-2.png"),
    new GongChaProd("Combo 3 Loại Hạt",'',25000,"https://gongcha.com.vn/wp-content/uploads/2018/03/Combo-3-lo%E1%BA%A1i-h%E1%BA%A1t.png"),
]

function showToppingProd() {
    let content = "";
    for (let i = 0; i < toppingProduct.length; i++) {
        content += `<div>
                        <div class="item-img">
                            <img width="250" height="170" src=${toppingProduct[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                            <strong>${toppingProduct[i].name}</strong>
                            </div>
                        <div class="item-des">
                            <span id="size-dislay">${toppingProduct[i].size}</span><br>
                        </div>
                        <div class="item-price">
                            <span id="price-dislay">${toppingProduct[i].price}</span><sup>đ</sup>
                        </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>
                    </div>`
    }
    document.getElementById("topping").innerHTML =content;
}
showToppingProd();
