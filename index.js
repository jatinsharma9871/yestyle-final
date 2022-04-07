// This is the data for the box title "Recommended for you
if (localStorage.getItem("showProducts") === null) {
    localStorage.setItem("showProducts", JSON.stringify([]));
}
var newArr_whatshot_pants_data = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/60/126/M_p0139112660.jpg",
        title: "Lemongrass - Floral Lace Bustier Top",
        price: 17.77,
        category: "female",
        quantity: 1
    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/75/735/M_p0143673575.jpg",
        title: "Lemongrass-Lace Bustier ",
        price: 8.99,
        category: "female",
        quantity: 1

    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/57/488/M_p0140348857.jpg",
        title: "Lemongrass - Contrast-Ribbon Bustier Top",
        price: 12.40,
        category: "female",
        quantity: 1
    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/94/889/M_p0129288994.jpg",
        title: "Lemongrass - Daisy-Print Sheer Mesh Top",
        price: 6.94,
        category: "female",
        quantity: 1
    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/95/553/M_p0139755395.jpg",
        title: "Lemongrass - Corduroy Floral Bustier Top in 6 Colors",
        price: 10.74,
        category: "female",
        quantity: 1
    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/955/M_p0127895515.jpg",
        title: "Lemongrass - Square-neck Sunflower-Print Smocked Cropped Top",
        price: 11.31,
        category: "female",
        quantity: 1
    },
]


function showReccomData(recData) {
    var recommendedBox = document.getElementById("recommendedBox");
    recommendedBox.onclick = function () {
        window.location.href = "./HTML/addtobag.html";
    }
    recData.forEach(function (el) {
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class", "productsImages");
        img.src = el.image;
        img.addEventListener("click", function () {
            getTheDataRecommendedBoxHomepage(el);
        })
        var title = document.createElement("p");
        title.textContent = el.title;
        title.id = "productsTitle";
        var price = document.createElement("p");
        price.textContent = "US$" + el.price;

        boxes.append(img, title, price);
        recommendedBox.append(boxes);
    });

}

function getTheDataRecommendedBoxHomepage(el) {
    localStorage.setItem("showProducts", JSON.stringify([]));
    var currClickedItemStockClearance = JSON.parse(localStorage.getItem("showProducts"));
    currClickedItemStockClearance.push(el);
    localStorage.setItem("showProducts", JSON.stringify(currClickedItemStockClearance));
}

showReccomData(newArr_whatshot_pants_data);

// This is the data for the box titled Recently viewed
var recentlyViewedBoxData = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/14/221/M_p0132422114.jpg",
    },
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/90/509/M_p0145250990.jpg",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/955/M_p0127895515.jpg",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/97/623/M_p0126962397.jpg",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/57/647/M_p0104764757.jpg",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/94/889/M_p0129288994.jpg",
    },

]

function showRecViewedData(recData) {
    var recommendedBox = document.getElementById("recentlyViewedBox");
    recData.forEach(function (el) {
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class", "productsImagesInRecentlyViewedBox");
        img.src = el.image;
        boxes.append(img);
        recommendedBox.append(boxes);
    });

}

showRecViewedData(recentlyViewedBoxData);

// For yes stylist page
var firstDivData = {
    image: "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/video_blog/202109/20210927mn.jpg",
    title: "10 WEARABLE FALL / WINTER 2021 FASHION TRENDS",
    description: "Cool and crisper weather is arriving soon, a reminder that it’s time to refresh your wardrobe for the changing season!"
}

var secondDivData = {
    image: "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/video_blog/202109/20210923jm.jpg",
    title: "TWINNING: FALL BEVERAGES & OUTERWEARS",
    description: "What better way to welcome the crisp autumn breeze than by pairing cozy parkas, jackets and coats with fall beverages!"
}


function showFirstDivData(data) {
    var imageContainer = document.getElementById("firstHalfOfFirst_YesStylist");
    var textContainer = document.getElementById("secondHalfOfFirst_YesStylist");
    var image = document.createElement("img");
    image.src = data.image;
    image.setAttribute("class", "imagesInYesStylistBox");
    var title = document.createElement("h3");
    title.setAttribute("class", "titleInYesStylist");
    title.textContent = data.title;
    var description = document.createElement("p");
    description.setAttribute("class", "descInYesStylist");
    description.textContent = data.description;
    var btnReadMore = document.createElement("button");
    btnReadMore.setAttribute("class", "btnInYesStylist");
    btnReadMore.textContent = "READ MORE";

    imageContainer.append(image);
    textContainer.append(title, description, btnReadMore);
}

showFirstDivData(firstDivData);

function showSecondDivData(data) {
    var imageContainer = document.getElementById("firstHalfOfSecond_YesStylist");
    var textContainer = document.getElementById("secondHalfOfSecond_YesStylist");
    var image = document.createElement("img");
    image.src = data.image;
    image.setAttribute("class", "imagesInYesStylistBox");
    var title = document.createElement("h3");
    title.setAttribute("class", "titleInYesStylist");
    title.textContent = data.title;
    var description = document.createElement("p");
    description.setAttribute("class", "descInYesStylist");
    description.textContent = data.description;
    var btnReadMore = document.createElement("button");
    btnReadMore.setAttribute("class", "btnInYesStylist");
    btnReadMore.textContent = "READ MORE";

    imageContainer.append(image);
    textContainer.append(title, description, btnReadMore);
}

showSecondDivData(secondDivData);


// It's for the box titled as flash sales from 2.99$
// CountDown timer
var deadlineForFlashSales = new Date("feb 21, 2022 23:59:00").getTime();
// console.log(deadline);
var flashSalesInt = setInterval(function () {
    var now = new Date().getTime();
    var lefttime = deadlineForFlashSales - now;
    // console.log(lefttime);
    var days = Math.floor(lefttime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((lefttime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((lefttime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((lefttime % (1000 * 60)) / 1000);

    document.getElementById("box-1_flashSales").innerHTML = days + "d";
    document.getElementById("box-2_flashSales").innerHTML = hours;
    document.getElementById("box-3_flashSales").innerHTML = minutes;
    document.getElementById("box-4_flashSales").innerHTML = seconds;

    if (lefttime < 0) {
        clearInterval(flashSalesInt);
        document.getElementById("box-1_flashSales").innerHTML = "";
        document.getElementById("box-2_flashSales").innerHTML = "";
        document.getElementById("box-3_flashSales").innerHTML = "";
        document.getElementById("box-4_flashSales").innerHTML = "";
    }

}, 1000);



// This is data for the box titled fleshSalesUnder2.99Dollar
var fleshSalesUnderThreeDollars = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/86/182/M_p0128518286.jpg",
        price: 8.99,
        claimedPerc: "6%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        price: 8.99,
        claimedPerc: "7%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/46/759/M_p0047075946.jpg",
        price: 2.99,
        claimedPerc: "12%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/23/857/M_p0112985723.jpg",
        price: 9.99,
        claimedPerc: "80%",
        category: "female",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/78/162/M_p0130216278.jpg",
        price: 8.99,
        claimedPerc: "53%",
        category: "female",
        quantity: 1
    },
]


function showFleshSaleUnderThreeData(fleshSalesData) {
    var flashSalesBox = document.getElementById("flashSalesUnderThreeContent");
    fleshSalesData.forEach(function (el) {
        var divContainer = document.createElement("div");
        divContainer.setAttribute("class", "productsDivInsideFleshSales");
        divContainer.onclick = function () {
            window.location.href = "./HTML/addtobag.html";
        }
        var image = document.createElement("img");
        image.src = el.image;
        image.addEventListener("click", function () {
            getTheDataFlashSalesUnderThree(el);
        });
        var price = document.createElement("p");
        price.textContent = "US$" + el.price;
        var claimedPerc = document.createElement("p");
        claimedPerc.textContent = "Deal is " + el.claimedPerc + " claimed";
        claimedPerc.id = "claimedPercInFleshSales";

        divContainer.append(image, price, claimedPerc);

        flashSalesBox.append(divContainer);
    })
}

showFleshSaleUnderThreeData(fleshSalesUnderThreeDollars);

function getTheDataFlashSalesUnderThree(el) {
    localStorage.setItem("showProducts", JSON.stringify([]));
    let currClickedItemData = JSON.parse(localStorage.getItem("showProducts"));
    currClickedItemData.push(el);
    localStorage.setItem("showProducts", JSON.stringify(currClickedItemData));
    // Now redirect the user to the product details page
}

// This functionality is for the box titled Flash Sales upto 25% off

// CountDown timer
var deadlineForFlashSalesUptoTwentyFive = new Date("Oct 3, 2021 23:59:00").getTime();
// console.log(deadline);
var flashSalesUnderTwentyFivInt = setInterval(function () {
    var now = new Date().getTime();
    var lefttime = deadlineForFlashSalesUptoTwentyFive - now;
    // console.log(lefttime);
    var days = Math.floor(lefttime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((lefttime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((lefttime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((lefttime % (1000 * 60)) / 1000);

    document.getElementById("box-1_fleshSalesTwentyFive").innerHTML = days + "d";
    document.getElementById("box-2_fleshSalesTwentyFive").innerHTML = hours;
    document.getElementById("box-3_fleshSalesTwentyFive").innerHTML = minutes;
    document.getElementById("box-4_fleshSalesTwentyFive").innerHTML = seconds;

    if (lefttime < 0) {
        clearInterval(flashSalesUnderTwentyFivInt);
        document.getElementById("box-1_fleshSalesTwentyFive").innerHTML = "";
        document.getElementById("box-2_fleshSalesTwentyFive").innerHTML = "";
        document.getElementById("box-3_fleshSalesTwentyFive").innerHTML = "";
        document.getElementById("box-4_fleshSalesTwentyFive").innerHTML = "";
    }

}, 1000);

var fleshSalesUptoTwentyFive = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/203/M_p0126820315.jpg",
        price: 8.99,
        claimedPerc: "6%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/61/733/M_p0104573361.jpg",
        price: 7.99,
        claimedPerc: "7%",
        category: "male",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        price: 3.99,
        claimedPerc: "12%",
        category: "female",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/96/683/M_p0129068396.jpg",
        price: 5.99,
        claimedPerc: "80%",
        category: "female",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/31/897/M_p0088089731.jpg",
        price: 9.99,
        claimedPerc: "53%",
        category: "male",
        quantity: 1

    },
]


function showFleshSalesUpto25Data(fleshSalesData) {
    var flashSalesBox = document.getElementById("flashSalesUpToTwentyFiveData");
    fleshSalesData.forEach(function (el) {
        var divContainer = document.createElement("div");
        divContainer.setAttribute("class", "productsDivInsideFleshSales");
        divContainer.onclick = function () {
            window.location.href = "./HTML/addtobag.html";
        }
        var image = document.createElement("img");
        image.src = el.image;
        image.addEventListener("click", function () {
            getTheDataFlashSalesUptoTwentyFiv(el);
        })
        var price = document.createElement("p");
        price.textContent = "US$" + el.price;
        var claimedPerc = document.createElement("p");
        claimedPerc.textContent = "Deal is " + el.claimedPerc + " claimed";
        claimedPerc.id = "claimedPercInFleshSales";

        divContainer.append(image, price, claimedPerc);

        flashSalesBox.append(divContainer);
    })
}

function getTheDataFlashSalesUptoTwentyFiv(el) {
    localStorage.setItem("showProducts", JSON.stringify([]));
    var currClickedItem = JSON.parse(localStorage.getItem("showProducts"));
    currClickedItem.push(el);
    localStorage.setItem("showProducts", JSON.stringify(currClickedItem));
}

showFleshSalesUpto25Data(fleshSalesUptoTwentyFive);

// It's for stock clearance box

var stockClearanceData = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/87/209/M_p0149120987.jpg",
        price: 8.99,
        claimedPerc: "6%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/52/358/M_p0096835852.jpg",
        price: 7.99,
        claimedPerc: "7%",
        category: "female",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/38/771/M_p0115277138.jpg",
        price: 3.99,
        claimedPerc: "12%",
        category: "female",
        quantity: 1
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/44/686/M_p0100368644.jpg",
        price: 5.99,
        claimedPerc: "80%",
        category: "female",
        quantity: 1

    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/73/911/M_p0141291173.jpg",
        price: 9.99,
        claimedPerc: "53%",
        category: "female",
        quantity: 1
    },
]

function showFleshSalesStockClearance(fleshSalesData) {
    var flashSalesBox = document.getElementById("flashSalesInStockClearanceContent");
    fleshSalesData.forEach(function (el) {
        var divContainer = document.createElement("div");
        divContainer.setAttribute("class", "productsDivInsideFleshSales");
        divContainer.onclick = function () {
            window.location.href = "./HTML/addtobag.html";
        }
        var image = document.createElement("img");
        image.src = el.image;
        image.addEventListener("click", function () {
            getTheDataFlashSalesStockClearance(el);
        })
        var price = document.createElement("p");
        price.textContent = "US$" + el.price;
        var claimedPerc = document.createElement("p");
        claimedPerc.textContent = "Deal is " + el.claimedPerc + " claimed";
        claimedPerc.id = "claimedPercInFleshSales";

        divContainer.append(image, price, claimedPerc);

        flashSalesBox.append(divContainer);
    })
}

function getTheDataFlashSalesStockClearance(el) {
    localStorage.setItem("showProducts", JSON.stringify([]));
    var currClickedItemStockClearance = JSON.parse(localStorage.getItem("showProducts"));
    currClickedItemStockClearance.push(el);
    localStorage.setItem("showProducts", JSON.stringify(currClickedItemStockClearance));
}

showFleshSalesStockClearance(stockClearanceData);

// pummy's javaScript code
let images = [
    "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/21wk39/l_pa_endofseason.jpg",
    "https://img4.urbanic.com/4d589e5d2f0f43fda41eb222d5079332",
    "https://img4.urbanic.com/d45a2ba773d94afa95cf218ff903cd4a"
];


let container = document.getElementById("mySlideshow");
let interval;
function startSlideshow() {
    let counter = 0;
    let image = document.createElement("img");
    image.src = images[counter];
    container.append(image);
    counter++;


    interval = setInterval(function () {
        container.innerHTML = null;

        if (counter == images.length) {
            counter = 0;
        }

        let img = document.createElement("img");
        img.src = images[counter];
        container.append(img);
        counter++;

    }, 3000);
}

startSlideshow();






function ShowDropDown(idname) {
    // event.preventDefault();
    console.log("working_show");
    var disp = document.getElementById(idname);
    disp.style.display = "grid";
}

function showaddress() {
    var div = document.createElement("div");

    var head = document.createElement('h2');
    head.innerHTML = "Location Preferences";
    head.style.cssText = "background:linear-gradient(to bottom right, #66CA59,#45D27D);color:white;padding-left:10px;padding-top:10px"

    var info = document.createElement('p');
    info.innerHTML = "During this difficult period, some couriers and post offices have suspended services to select countries and territories. Please check our Shipping Rates Table to see which countries and territories YesStyle is currently serving.";
    info.style.cssText = "color:#8a6d3b;background-color: #fcf8e3;margin-bottom:20px;padding:4px;box-sizing:border-box;border:2px solid #fada9f";

    var myform = document.createElement('form');
    myform.style.cssText = "display:grid;gird-template-columns:100%;grid-template-rows:repeat(4,23%);gap:3px;";

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');

    // div styling

    div1.style.cssText = "display:grid;grid-template-columns:90%;justify-content:center;grid-template-rows:20% 78%;gap:2%;";
    div2.style.cssText = "display:grid;grid-template-columns:90%;justify-content:center;grid-template-rows:20% 78%;gap:2%;";
    div3.style.cssText = "display:grid;grid-template-columns:90%;justify-content:center;grid-template-rows:20% 78%;gap:2%;";
    div4.style.cssText = "width-90%;display:grid;grid-template-columns:repeat(2,40%);gap:2%;gird-template-rows:70%;align-items:center;margin-left:50%";

    var label_location = document.createElement('label');
    label_location.innerText = "Shipping Destination";

    var select_location = document.createElement('select');
    select_location.value = "null";

    var option_location1 = document.createElement('option');
    var option_location2 = document.createElement('option');
    var option_location3 = document.createElement('option');
    var option_location4 = document.createElement('option');
    var option_location5 = document.createElement('option');

    option_location1.innerHTML = "India";
    option_location2.innerHTML = "Russsia";
    option_location3.innerHTML = "America";
    option_location4.innerHTML = "Swedain";
    option_location5.innerHTML = "Japan";

    select_location.style.border = "0px"
    select_location.style.borderBottom = "2px solid black";

    select_location.append(option_location1, option_location2, option_location3, option_location4, option_location5);
    div1.append(label_location, select_location);

    var label_currency = document.createElement('label');
    label_currency.innerText = "Currency";

    var select_currency = document.createElement('select');
    select_currency.value = "null";

    var option_currencyRs = document.createElement('option');
    var option_currencydollar = document.createElement('option');
    var option_currencypound = document.createElement('option');
    var option_currencyrussia = document.createElement('option');
    var option_currencyjapan = document.createElement('option');

    option_currencyRs.innerHTML = "Indian Rupees (INR)";
    option_currencydollar.innerHTML = "USD - US Dollar (US$)";
    option_currencypound.innerHTML = "PLN - Polish Złoty (zł)";
    option_currencyrussia = "RUB - Russian Ruble (руб)";
    option_currencyjapan.innerHTML = "PLN - Polish Złoty (zł)";

    select_currency.style.border = "0px"
    select_currency.style.borderBottom = "2px solid black";

    select_currency.append(option_currencyRs, option_currencydollar, option_currencyjapan, option_currencypound, option_currencyrussia);
    div2.append(label_currency, select_currency);


    var label_language = document.createElement('label');
    label_language.innerHTML = "Language";

    var select_language = document.createElement('select');
    select_language.value = "null";

    var option_hindi = document.createElement('option');
    var option_french = document.createElement('option');
    var option_english = document.createElement('option');
    var option_spanish = document.createElement('option');
    var option_italy = document.createElement('option');

    option_hindi.innerHTML = 'हिंदी';
    option_french.innerHTML = "Français";
    option_english.innerHTML = "English";
    option_spanish.innerHTML = "Spanish";
    option_italy.innerHTML = "Italiano";

    select_language.style.border = "0px"
    select_language.style.borderBottom = "2px solid black";

    select_language.append(option_hindi, option_english, option_french, option_italy, option_spanish);
    div3.append(label_language, select_language);

    var cancel_btn = document.createElement('button');
    var save_btn = document.createElement('button');

    cancel_btn.innerHTML = "CANCEL";
    save_btn.innerHTML = "SAVE";

    cancel_btn.style.cssText = "height:60%;"
    save_btn.style.cssText = "height:60%;"

    div4.append(cancel_btn, save_btn);

    save_btn.addEventListener('submit', hideaddress);

    myform.append(div1, div2, div3, div4);

    div.append(head, info, myform);

    div.style.cssText = "display:grid;grid-template-columns:100%;grid-template-rows:10% 20% 64%;font-size:15px;justify-content:center;position:fixed;top:6rem;left:35rem;width:600px;height:500px;z-index:100;background-color:white;";
    div.style.boxShadow = "16px 16px 16px 16px rgba(0,0,0,0.3)";
    // document.getElementById("container").style.opacity = "0.3";


    document.body.appendChild(div);

}

function hideaddress() {
    var remove = document.body.lastChild;
    document.body.removeChild(remove);
    // document.getElementById("container").style.opacity = "1";
}


function showsearchbar() {

    var search = document.getElementById('dropbox_search_bar');
    search.style.visibility = "visible";
}

function hidesearchbar() {

    var search = document.getElementById('dropbox_search_bar');
    search.style.visibility = "hidden";
}

if(localStorage.getItem("flagforlogin") === null) {
    localStorage.setItem("flagforlogin",JSON.stringify([false]));
}
var login = JSON.parse(localStorage.getItem("flagforlogin"));
if(login[0] == true) {
    document.getElementById("a_sign_in").innerHTML = "Welcome" + login[1];
    document.getElementById("a_register_now").innerHTML = "Sign Out";
}
let check_sign_out = document.getElementById("a_register_now");
if(check_sign_out.innerHTML === "Sign Out") {
     check_sign_out.addEventListener("click",flagforloginnull);
     check_sign_out.style.pointerEvents = "homepage.html";
    //  check_sign_out.style.pointerEvents = "none";
}
function flagforloginnull(){
    localStorage.setItem("flagforlogin",JSON.stringify([false]));
}