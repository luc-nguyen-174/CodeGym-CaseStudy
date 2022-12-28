let latteProduct=[
    new GongChaProd("Latte Series","Toffee Black Tea Latte","M",53000,"https://gongcha.com.vn/wp-content/uploads/2022/03/LATTE-TOFFEE-1.png"),
    new GongChaProd("Latte Series","Toffee Black Tea Latte","L",61000,"https://gongcha.com.vn/wp-content/uploads/2022/03/LATTE-TOFFEE-1.png"),

    new GongChaProd("Latte Series","Creme Brulee Matcha","M",61000,"https://gongcha.com.vn/wp-content/uploads/2022/01/matcha-creme-brulee.png"),
    new GongChaProd("Latte Series","Creme Brulee Matcha","L",69000,"https://gongcha.com.vn/wp-content/uploads/2022/01/matcha-creme-brulee.png"),

    new GongChaProd("Latte Series","Creme Brulee Latte","M",61000,"https://gongcha.com.vn/wp-content/uploads/2022/01/creme-brulee-late.png"),
    new GongChaProd("Latte Series","Creme Brulee Latte","L",69000,"https://gongcha.com.vn/wp-content/uploads/2022/01/creme-brulee-late.png"),

    new GongChaProd("Latte Series","Đào Latte","M",61000,"https://gongcha.com.vn/wp-content/uploads/2021/12/Latte-Dao.png"),
    new GongChaProd("Latte Series","Đào Latte","L",69000,"https://gongcha.com.vn/wp-content/uploads/2021/12/Latte-Dao.png"),

    new GongChaProd("Latte Series","Sữa Tươi Long Nhãn Táo Đỏ","M",53000,"https://gongcha.com.vn/wp-content/uploads/2019/06/Sua-Tuoi-Long-Nhan.png"),
    new GongChaProd("Latte Series","Sữa Tươi Long Nhãn Táo Đỏ","L",61000,"https://gongcha.com.vn/wp-content/uploads/2019/06/Sua-Tuoi-Long-Nhan.png"),

    new GongChaProd("Latte Series","Sữa Tươi Okinawa","L",53000,"https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-SUA-TUOI.png"),
    new GongChaProd("Latte Series","Sữa Tươi Okinawa","L",61000,"https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-SUA-TUOI.png"),

    new GongChaProd("Latte Series","Dâu Latte","M",59000,"https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Earl-grey-latte.png"),
    new GongChaProd("Latte Series","Dâu Latte","L",67000,"https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Earl-grey-latte.png"),

    new GongChaProd("Latte Series","Xoài Matcha Latte","M",59000,"https://gongcha.com.vn/wp-content/uploads/2018/06/Mango-Matcha-Latte.png"),

    new GongChaProd("Latte Series","Okinawa Latte","M",59000,"https://gongcha.com.vn/wp-content/uploads/2018/06/Hinh-Web-OKINAWA-LATTE.png"),
    new GongChaProd("Latte Series","Okinawa Latte","L",67000,"https://gongcha.com.vn/wp-content/uploads/2018/06/Hinh-Web-OKINAWA-LATTE.png")
]

function showLatteProd() {
    let content="";
    for (let i=0; i<latteProduct.length; i++)
    {
        content +=`<div class="category">${latteProduct[i].category}</div>
                <div>
                        <div class="item-img">
                            <img width="80" height="80" src=${latteProduct[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                                <strong>${latteProduct[i].name}</strong>
                            </div>
                            <div class="item-des">
                            <span>Size: ${latteProduct[i].size}</span><br>
                            </div>
                            <div class="item-price">
                                <span>${latteProduct[i].price}</span>
                            </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                    </div>

                </div>`
    }
    document.getElementById("latte").innerHTML =content;
}
showLatteProd();

