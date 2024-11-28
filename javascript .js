var allbtn = document.querySelectorAll(".allbtn");
var content = document.querySelector("#word");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var price = document.querySelector("#price");
var totalprice = 0;

allbtn.forEach(function (item) {
    item.onclick = function () {
        var productPrice = parseInt(item.getAttribute("price"));
        if (!isNaN(productPrice)) {
            totalprice += productPrice;
            let newContent = document.createElement("p");
            newContent.textContent = item.getAttribute("product") + " - " + productPrice;
            content.appendChild(newContent);

            if (btn1 && btn2) {
                btn1.style.display = "inline-block";
                btn2.style.display = "inline-block";
            }
        }
    };
});

if (btn1 && btn2) {
    btn1.onclick = function () {
        price.innerHTML = "Total Price: " + totalprice;
    };

    btn2.onclick = function () {
        content.innerHTML = "";
        price.innerHTML = "";
        totalprice = 0;
        btn1.style.display = "none";
        btn2.style.display = "none";
    };
}