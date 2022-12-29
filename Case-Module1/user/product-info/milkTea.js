let milkTeaProd = [
    new GongChaProd( "Mint Choco Milk Tea", "M", 59000, "https://gongcha.com.vn/wp-content/uploads/2022/11/Mint-Chocolate-Milk-Tea-w-Pearl-Iced.png"),
    new GongChaProd("Mint Choco Milk Tea", "L", 67000, "https://gongcha.com.vn/wp-content/uploads/2022/11/Mint-Chocolate-Milk-Tea-w-Pearl-Iced.png"),

    new GongChaProd( "Strawberry Milk Tea", "M", 59000, "https://gongcha.com.vn/wp-content/uploads/2022/01/Strawberry-milk-tea.png"),
    new GongChaProd("Strawberry Milk Tea", "L", 67000, "https://gongcha.com.vn/wp-content/uploads/2022/01/Strawberry-milk-tea.png"),

    new GongChaProd("Creme Brulee Milk Tea", "M", 55000, "https://gongcha.com.vn/wp-content/uploads/2022/01/tra-sua-creme-brulee.png"),
    new GongChaProd("Creme Brulee Milk Tea", "L", 63000, "https://gongcha.com.vn/wp-content/uploads/2022/01/tra-sua-creme-brulee.png"),

    new GongChaProd("Trà Sữa Gạo Rang Trân Châu Trắng", "M", 58000, "https://gongcha.com.vn/wp-content/uploads/2021/10/Tra%CC%80-su%CC%9B%CC%83a-ga%CC%A3o-rang-tra%CC%82n-cha%CC%82u-tra%CC%86%CC%81ng-2.png"),

    new GongChaProd("Trà Sữa Xoài Trân Châu Đen", "M", 59000, "https://gongcha.com.vn/wp-content/uploads/2019/06/Mango-Milktea.png"),
    new GongChaProd("Trà Sữa Xoài Trân Châu Đen", "L", 55000, "https://gongcha.com.vn/wp-content/uploads/2019/06/Mango-Milktea.png"),

    new GongChaProd("Trà Sữa Okinawa", "M", 59000, "https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-TR%C3%80-S%E1%BB%AEA.png"),
    new GongChaProd("Trà Sữa Okinawa", "L", 63000, "https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-TR%C3%80-S%E1%BB%AEA.png"),

    new GongChaProd("Trà Sữa Matcha Đậu Đỏ", "M", 59000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Matcha-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png"),
    new GongChaProd("Trà Sữa Matcha Đậu Đỏ", "L", 67000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Matcha-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png"),

    new GongChaProd("Trà Sữa Trân Châu Đen", "M", 49000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Tr%C3%A2n-ch%C3%A2u-%C4%91en-1.png"),
    new GongChaProd("Trà Sữa Trân Châu Đen", "L", 57000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Tr%C3%A2n-ch%C3%A2u-%C4%91en-1.png"),

    new GongChaProd("Trà Sữa Trà Xanh", "M", 46000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-tr%C3%A0-xanh-1.png"),
    new GongChaProd("Trà Sữa Trà Xanh", "L", 54000, "https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-tr%C3%A0-xanh-1.png"),

    new GongChaProd("Trà Sữa Khoai Môn", "M", 53000, "https://gongcha.com.vn/wp-content/uploads/2018/01/Tr%C3%A0-s%E1%BB%AFa-Khoai-m%C3%B4n-2.png"),
    new GongChaProd("Trà Sữa Khoai Môn", "L", 61000, "https://gongcha.com.vn/wp-content/uploads/2018/01/Tr%C3%A0-s%E1%BB%AFa-Khoai-m%C3%B4n-2.png")

]

function showMilkTeaPro() {
    let content = "";
    for (let i = 0; i < milkTeaProd.length; i++) {
        content += `<div>
                        <div class="item-img">
                            <img width="250" height="250" src=${milkTeaProd[i].img} alt="item-img">
                        </div>

                        <div class="item-des">
                            <div class="item-title">
                            <strong>${milkTeaProd[i].name}</strong>
                            </div>
                        <div class="item-des">
                            <span>Size: ${milkTeaProd[i].size}</span><br>
                        </div>
                        <div class="item-price">
                            <span>${milkTeaProd[i].price}</span>
                        </div>
                            <span id="addtocart-button"><button id="plus-button"><i class="fa-solid fa-plus"></i></button></span>
                        </div>
                    </div>`
    }
    document.getElementById("milkTea").innerHTML =content;
}
showMilkTeaPro();
