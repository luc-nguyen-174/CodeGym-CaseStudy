let specialProd=[
    new GongChaProd("Creme Brulee Tea","M",49000,"https://gongcha.com.vn/wp-content/uploads/2022/01/tra-den-creme-brulee.png"),
    new GongChaProd("Creme Brulee Tea","L",57000,"https://gongcha.com.vn/wp-content/uploads/2022/01/tra-den-creme-brulee.png"),
    new GongChaProd("Trà Bí Đao Gong Cha","M",53000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Milkfoam-2.png"),
    new GongChaProd("Trà Bí Đao Gong Cha","L",61000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Milkfoam-2.png"),
    new GongChaProd("Trà Oolong Gong Cha","M",53000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-Milkfoam-3.png"),
    new GongChaProd("Trà Oolong Gong Cha","",61000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-Milkfoam-3.png"),
    new GongChaProd("Trà Alisan Gong Cha","M",53000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-Milkfoam-2.png"),
    new GongChaProd("Trà Alisan Gong Cha","L",61000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-Milkfoam-2.png"),
    new GongChaProd("Trà Đen Gong Cha","M",49000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-Milkfoam-2.png"),
    new GongChaProd("Trà Đen Gong Cha","L",57000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-Milkfoam-2.png"),
    new GongChaProd("Trà Xanh Gong Cha","M",49000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tra%CC%80-xanh-GC.png"),
    new GongChaProd("Trà Xanh Gong Cha","L",57000,"https://gongcha.com.vn/wp-content/uploads/2018/02/Tra%CC%80-xanh-GC.png")
]


function showSpecialProd() {
    let content = "";
    for (let i = 0; i < specialProd.length; i++) {
        content += `<div>
                        <div class="item-img">
                            <img width="250" height="250" src=${specialProd[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                            <strong>${specialProd[i].name}</strong>
                            </div>
                        <div class="item-des">
                            <span>Size: ${specialProd[i].size}</span><br>
                        </div>
                        <div class="item-price">
                            <span>${specialProd[i].price}</span>
                        </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>
                    </div>`
    }
    document.getElementById("specialDrink").innerHTML =content;
}
showSpecialProd();