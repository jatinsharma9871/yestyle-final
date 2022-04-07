let itemlist = document.getElementById("itemlist");

let cart_items = JSON.parse(localStorage.getItem('cart_items'));

console.log(cart_items);
// let cart_items = [
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10.0,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
//   {
//     price: 10,
//     name: "COSRX - Acne Pimple Master Patch",
//     quantity: 1,
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg",
//   },
// ];
var total_items = 0;
var sum_price = 0;
cart_items.forEach(function (item) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div = document.createElement("div");
  let qnt = document.createElement("div");
  let img = document.createElement("img");
  let head = document.createElement("h3");
  let line1 = document.createElement("p");
  let line2 = document.createElement("p");
  let line3 = document.createElement("p");

  qnt.textContent = item.quantity;
  img.src = item.image;
  head.textContent = "US$ " + item.price;
  line1.textContent = item.name;
  line2.textContent = item.quantity + "pc";
  line3.textContent = "In-Stock - Usually ships within 24 hours";

  div2.append(head, line1, line2, line3);

  div1.append(img);

  div.append(div1, div2);

  itemlist.append(qnt, div);

  div.setAttribute("class", "div");

  div1.setAttribute("class", "div1");

  div2.setAttribute("class", "div2");

  img.setAttribute("class", "img");

  head.setAttribute("class", "head");

  line1.setAttribute("class", "txt");

  line2.setAttribute("class", "txt");

  line3.setAttribute("class", "txt");

  qnt.setAttribute("class", "qnt");

  total_items += item.quantity;
  sum_price += item.price;
});

let span1 = document.getElementById("sp1");
let span2 = document.getElementById("sp2");
let span4 = document.getElementById("sp4");

var total_price = sum_price + 5;
var total = document.getElementById("total");

span1.textContent = `Items Total (${total_items} pcs)`;
span2.textContent = `US$ ${sum_price.toFixed(2)}`;
span4.textContent = `US$ 05.00`;
total.textContent = `US$ ${total_price.toFixed(2)}`;

let redirect = document.getElementById("direct");

redirect.onclick = function () {
  window.location.href = "pay.html";
};

var submit = document.getElementById("submit");

var coupon = document.getElementById("ip1").value;

submit.addEventListener("click", applyCode);

var count = 1;
function applyCode(e) {
  e.preventDefault();

  if (count == 1) {
    if (document.getElementById("ip1").value == "masai30") {
      total_price = total_price - 0.3 * total_price;
      total.textContent = `US$ ${total_price.toFixed(2)}`;
      alert("Congratulations You have Won 30% OFF On Coupon Code");
    } else if (coupon != "masai30") {
      alert("Sorry You Are Not Eligible For Rewards!");
    }
    count++;
    document.getElementById("ip1").value = "";
  }
}
