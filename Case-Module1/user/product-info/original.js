let originalProd=[
    new GongChaProd("Trà Gạo Rang","M",47000,"https://gongcha.com.vn/wp-content/uploads/2021/10/Tra%CC%80-ga%CC%A3o-rang-4.png"),

    new GongChaProd("Trà Bí Đao Alisan","M",42000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Alisan-2.png"),
    new GongChaProd("Trà Bí Đao Alisan","L",50000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Alisan-2.png"),

    new GongChaProd("Trà Bí Đao","M",42000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-2.png"),
    new GongChaProd("Trà Bí Đao","L",50000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-2.png"),

    new GongChaProd("Trà Alisan","M",42000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-2.png"),
    new GongChaProd("Trà Alisan","L",50000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-2.png"),

    new GongChaProd("Trà Oolong","M",42000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-2.png"),
    new GongChaProd("Trà Oolong","L",50000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-2.png"),

    new GongChaProd("Trà Đen(Hồng Trà)","M",39000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-2.png"),
    new GongChaProd("Trà Đen(Hồng Trà)","L",47000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-2.png"),

    new GongChaProd("Trà Xanh","M",39000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Xanh-2.png"),
    new GongChaProd("Trà Xanh","L",47000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Xanh-2.png"),
]



function showOriginalProd() {
    let content = "";
    for (let i = 0; i < originalProd.length; i++) {
        content += `<div>
                        <div class="item-img">
                            <img width="250" height="250" src=${originalProd[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                            <strong>${originalProd[i].name}</strong>
                            </div>
                        <div class="item-des">
                            <span>Size: ${originalProd[i].size}</span><br>
                        </div>
                        <div class="item-price">
                            <span>${originalProd[i].price}</span>
                        </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>
                    </div>`
    }
    document.getElementById("original").innerHTML =content;
}
showOriginalProd();
