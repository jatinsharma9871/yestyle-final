var cart_items = JSON.parse(localStorage.getItem("cart_items"));
console.log(cart_items);

function displayCartDyn(cart_items){
if(cart_items.length<1){
    function displayCart(){
        var cartBox = document.getElementById("cartContent");
        var defaultPara = document.createElement("h1");
        defaultPara.id = "defaultParaInCart";
        let ourInterval;
        ourInterval = setInterval(function(){
            var random = getRandom(1,4);
            if(random===1){
                defaultPara.textContent = "Your Shopping Bag is empty-";
            }
            else if(random===2){
                defaultPara.textContent = "Empty Cart and empty Stomach, Both Are Not Good For Health";
            }       
            else{
                defaultPara.textContent = "Discount Ahead! Add some products to cart";
            }

        },3000)
        defaultPara.textContent = "Your Shopping Bag is empty-"
        defaultPara.setAttribute("class","boxHeadings");
        var defaultBtn = document.createElement("button");
        defaultBtn.onclick = function(){
            window.location.href = "homepage.html";
        }
        defaultBtn.textContent = "CONTINUE SHOPPING";
        cartBox.style.display = "block";
        defaultBtn.setAttribute("class","defaultButton");

        cartBox.append(defaultPara, defaultBtn);
    }

    displayCart();
}
else{
    // Code for cart data
        var secondBox = document.getElementById("cartContent");
    var data = localStorage.getItem("cart_items");
    var usableData = JSON.parse(localStorage.getItem("cart_items"));
    var firDivCartData = document.createElement("div");
    var secDivCartData = document.createElement("div");
    firDivCartData.setAttribute("class","cartItemsData");
    secDivCartData.setAttribute("class","checkOutBox");
    firDivCartData.textContent = "Your order is eligible for FREE Express Shipping.";
    firDivCartData.id = "cartDataHead";
    secondBox.append(firDivCartData, secDivCartData);
    var grossBill = 0;

    cart_items.forEach(function(el,ind){
        grossBill+= Math.round(el.quantity*el.price);
        var outerDiv = document.createElement("div");
        var imageHolderDiv = document.createElement("div");
        imageHolderDiv.setAttribute("class","imagesDivCartData")
        var textHolderDiv = document.createElement("div");
        textHolderDiv.setAttribute("class","textDivCartData")
        outerDiv.setAttribute("class","itemsInCartItemsData");
        var image = document.createElement("img");
        var quantity = document.createElement("p");
        quantity.id = "quantityTxt";
        quantity.textContent = "quantity: "+el.quantity;
        image.src = el.image;
        imageHolderDiv.append(image);
        image.setAttribute("class","imgInCartItemsData");
        var price = document.createElement("h1");
        price.textContent = "US$ "+el.price;
        var title = document.createElement("p");
        title.textContent = el.title;
        var category = document.createElement("p");
        category.textContent = el.category;
        var btnRemoveData = document.createElement("button");
        btnRemoveData.setAttribute("class","btnRemoveCartItem");
        btnRemoveData.addEventListener("click",function(){
            removeCartItem(ind);
        })
        btnRemoveData.textContent = "Delete";
        textHolderDiv.append(price,title,category,quantity,btnRemoveData);
        outerDiv.append(imageHolderDiv,textHolderDiv);
        var emptyHr = document.createElement("hr");
        firDivCartData.append(emptyHr,outerDiv);
    })

    // Code for checkout box
    var whiteDivInCheckout = document.createElement("div");
    whiteDivInCheckout.setAttribute("class","whiteContInCheckout");
    var textCheckout = document.createElement("h1");
    textCheckout.textContent = "Checkout";
    secDivCartData.append(textCheckout);
    secDivCartData.append(whiteDivInCheckout);
    textCheckout.setAttribute("class","checkoutTxt");
    var firstDivInWhite = document.createElement("div");
    firstDivInWhite.setAttribute("class","firstDivInWhiteBox contentInCheckBox");
    whiteDivInCheckout.append(firstDivInWhite);
    var secondDivInWhite = document.createElement("div");
    secondDivInWhite.setAttribute("class","secondDivInWhiteBox contentInCheckBox");
    var thirdDivInWhite = document.createElement("div");
    thirdDivInWhite.setAttribute("class","thirdDivInWhiteBox contentInCheckBox");
    whiteDivInCheckout.append(firstDivInWhite,secondDivInWhite,thirdDivInWhite);
    // for first div in white box
    var deliverToUnitedStatesTxt = document.createElement("h4");
    deliverToUnitedStatesTxt.textContent = "Deliver to United States";
    deliverToUnitedStatesTxt.setAttribute("class","headingsInFirstDivInCheckout");
    deliverToUnitedStatesTxt.id = "delToUnitStatTxt";
    var express_FREE_Txt = document.createElement("label");
    express_FREE_Txt.style.fontWeight = "bold";
    express_FREE_Txt.textContent = "Express-FREE";
    express_FREE_Txt.id = "expressFreeTxt"
    var inputExpressRadio = document.createElement("input");
    inputExpressRadio.setAttribute("type","radio");
    inputExpressRadio.id = "inputRadioBox";
    inputExpressRadio.setAttribute("class","headingsInFirstDivInCheckout");
    var txtThreeToFiveDays = document.createElement("p");
    txtThreeToFiveDays.setAttribute("class","marginLeftDouble");
    txtThreeToFiveDays.textContent = "3 to 5 business days, with tracking code";
    var imagesFlexBox = document.createElement("div");
    imagesFlexBox.setAttribute("class","marginLeftDouble");
    var localImages = ["https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/2920/imgs/icons/courier_fedex.svg","https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/2920/imgs/icons/courier_dhl.svg","https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/2920/imgs/icons/courier_ups.svg"];
    localImages.forEach(function(el){
        var images = document.createElement("img");
        images.src = el;
        imagesFlexBox.append(images);
    });
    var txtCourierWill = document.createElement("p");
    txtCourierWill.setAttribute("class","marginLeftDouble");
    txtCourierWill.textContent = "*Courier will be selected by YesStyle";
    firstDivInWhite.append(deliverToUnitedStatesTxt,inputExpressRadio,express_FREE_Txt,txtThreeToFiveDays,imagesFlexBox,txtCourierWill);
    // For second box
    var couponCodesHead = document.createElement("h4");
    couponCodesHead.setAttribute("class","headingsInFirstDivInCheckout");
    couponCodesHead.textContent = "Coupon or Rewards Code";
    var input = document.createElement("input");
    input.placeholder = "Enter Code";
    input.setAttribute("class","couponOrRewardsInput headingsInFirstDivInCheckout");
    secondDivInWhite.append(couponCodesHead,input);
    // For third div
    var summaryTxt = document.createElement("h4");
    summaryTxt.setAttribute("class","headingsInFirstDivInCheckout");
    summaryTxt.textContent = "Summary";
    var itemsTotalFlex = document.createElement("div");
    itemsTotalFlex.setAttribute("class","summaryFlexes")
    var itemsTotalTxt = document.createElement("p");
    var objLen = cart_items.length;
    itemsTotalTxt.textContent = "Items Total ("+objLen+" pcs)";
    var totalSumItems = "US$ "+grossBill;
    itemsTotalFlex.append(itemsTotalTxt,totalSumItems);

    var shipAndHandFlex = document.createElement("div");
    shipAndHandFlex.setAttribute("class","summaryFlexes");
    var shipAndHandTxt = document.createElement("p");
    shipAndHandTxt.textContent = "Shipping & Handling";
    var shipAndHandFee = "FREE";
    shipAndHandFlex.append(shipAndHandTxt,shipAndHandFee);

    var salesTaxFlex = document.createElement("div");
    salesTaxFlex.setAttribute("class","summaryFlexes");
    var salesTaxTxt = document.createElement("p");
    salesTaxFlex.textContent = "Sales Tax";
    var salesTaxFee = "TBD";
    salesTaxFlex.append(salesTaxTxt,salesTaxFee);

    var estTotalFlex = document.createElement("div");
    estTotalFlex.setAttribute("class","summaryFlexes");
    var estTotalTxt = document.createElement("h4");
    estTotalTxt.textContent = "Estimated Total";
    var estTotalFee = "US$ "+grossBill;
    var estTotalFeeHead = document.createElement("h4");
    estTotalFeeHead.textContent = estTotalFee;
    estTotalFlex.append(estTotalTxt,estTotalFeeHead);
    var empHrOne = document.createElement("hr");
    var empHrTwo = document.createElement("hr");
    var btnContinue = document.createElement("button");
    btnContinue.textContent = "CONTINUE";
    btnContinue.setAttribute("class","btnCheckout");
    btnContinue.addEventListener("click",function() {
        window.location.href = "checkout.html";
    });
    thirdDivInWhite.append(summaryTxt,itemsTotalFlex,shipAndHandFlex,salesTaxFlex,empHrOne,estTotalFlex,empHrTwo,btnContinue);
    }
    
}


displayCartDyn(JSON.parse(localStorage.getItem("cart_items")));

function removeCartItem(index){
    var mainDiv = document.getElementById("cartContent");
    mainDiv.innerHTML = null;
    // var removTill = cart_items.length-index;
    cart_items.splice(index,1);
    console.log(cart_items)
    localStorage.setItem("cart_items",JSON.stringify([]));
    localStorage.setItem("cart_items",JSON.stringify(cart_items));
    displayCartDyn(JSON.parse(localStorage.getItem("cart_items")));
}

if(localStorage.getItem("recommendedData")===null){
    localStorage.setItem("recommendedData",JSON.stringify([]));
}

if(localStorage.getItem("flashSales")===null){
    localStorage.setItem("flashSales",JSON.stringify([]));
}

var reccoData = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/71/435/M_p0097443571.jpg",
        title:"Magimomo - Printed Sweatshirt",
        price:"US$ 23.52",
        category: "male"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/67/041/M_p0146704167.jpg",
        title:"Lemongrass - Ribbed Bustier Top",
        price:"US$ 0.99",
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/55/521/M_p0147252155.jpg",
        title:"Nabla - Floral Embroidered Bustier",
        price:"US$ 19.00"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/10/840/M_p0138484010.jpg",
        title:"Oonnukal - Hook-And-Eye Cropped Tank Top",
        price:"US$ 8.80"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/10/899/M_p0129389910.jpg",
        title:"OUREA - Wide-Leg Dress Pants",
        price:"US$ 18.88"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/93/792/M_p0049579293.jpg",
        title:"MISSHA - All-Around Safe Block Essence Sun SPF45 PA+++ 50ml",
        price:"US$ 8.03"
    },
];

var flashSaleData = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/25/288/M_p0104428825.jpg",
        title:"Niji Smile - Mini Pleated Skirt",
        price:"US$ 10.00"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        title:"Shopherd - Wide-Leg Shorts",
        price:"US$ 8.99"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/80/543/M_p0090754380.jpg",
        title:"Alfie - V-Neck Chiffon Blouse",
        price:"US$ 12.40"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/36/646/M_p0139064636.jpg",
        title:"Berrytrix - Halter Mock Two-Piece Knit Top",
        price:"US$ 16.72"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/96/683/M_p0129068396.jpg",
        title:"HERMITAKH - Short-Sleeved Button-Up Crop Top",
        price:"US$ 8.48"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/31/964/M_p0112796431.jpg",
        title:"Moon City - Long-Sleeve Mock-Neck T-Shirt",
        price:"US$ 16.34"
    },
];

function showReccomData(recData){
    var recommendedBox = document.getElementById("recommendedBox");
    recData.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImages");
        img.src = el.image;
        var title = document.createElement("p");
        title.textContent = el.title;
        var price = document.createElement("p");
        price.textContent = el.price;

        boxes.append(img, title, price);
        recommendedBox.append(boxes);
    });

}

showReccomData(reccoData);


function flashSalesData(data){
    var fleshSalesBox = document.getElementById("flashSalesBox");
    data.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImages");
        img.src = el.image;
        var title = document.createElement("p");
        title.textContent = el.title;
        var price = document.createElement("p");
        price.textContent = el.price;

        boxes.append(img, title, price);
        fleshSalesBox.append(boxes);
    });
}

flashSalesData(flashSaleData);
var btnContainerLast = document.getElementById("btnHolderatLast");

var btnMoreFlashSales = document.createElement("button");
    btnMoreFlashSales.textContent = 'MORE FLASH SALES';
    btnMoreFlashSales.id = "btnMoreFlashSales";
    btnContainerLast.append(btnMoreFlashSales);



function getRandom(min, max){
    // use only with integers no decimal numbers allowed
    return Math.floor(Math.random() * (max-min)+min);
}




