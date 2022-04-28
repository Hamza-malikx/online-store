(function () {
  var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  CheckZero(cartProducts);
  RenderCart(cartProducts);
})();

function RenderCart(cartProducts) {
  const root = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "ovs");
  root.appendChild(container);

  for (let i = 0; i < cartProducts.length; i++) {
    const row = document.createElement("div");
    const row1 = document.createElement("div");
    row.setAttribute("class", "row cartProductWrapper");
    row1.setAttribute("class", "row");
    const item = document.createElement("div");
    // item.setAttribute("class", "col-12");
    item.setAttribute("class", "my-auto innerWrapperProducts");
    const img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.src = cartProducts[i].imgurl;
    img.style.float = "left";
    img.style.margin = "1em";
    const name = document.createElement("p");
    name.textContent = cartProducts[i].name.split(" ").slice(0, 2).join(" ");
    name.style.float = "left";
    name.style.fontSize = "2em";
    name.style.margin = "1em";
    name.style.width = "250px";
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("btn");
    remove.classList.add("btn-dark");
    remove.style.float = "right";
    // remove.style.marginTop = "2em";
    remove.addEventListener(
      "click",
      function () {
        Remove(event, cartProducts);
      },
      false
    );

    const productId = document.createElement("param");
    productId.textContent = JSON.stringify(cartProducts[i]);

    const price = document.createElement("p");
    price.textContent = "€" + cartProducts[i].price;
    price.style.float = "right";
    price.style.fontSize = "2em";
    price.style.margin = "1em";

    container.appendChild(row);
    row.appendChild(item);
    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(remove);

    item.appendChild(price);
    item.appendChild(productId);
  }
  const app = document.getElementById("root");
  const container1 = document.createElement("div");
  app.appendChild(container1);
  const row1 = document.createElement("div");
  row1.setAttribute("class", "row");
  container1.setAttribute("id", "div2");
  // row.style.margin = "10px";

  const item = document.createElement("div");
  item.setAttribute("class", "col-12");

  const totalItems = document.createElement("p");
  totalItems.textContent = "Items : " + cartProducts.length;
  totalItems.style.fontSize = "1.2em";
  totalItems.style.float = "left";

  let totalPrice = 0;
  for (let j = 0; j < cartProducts.length; j++) {
    totalPrice += parseFloat(cartProducts[j].price);
  }

  localStorage.setItem("totalItems", parseInt(cartProducts.length));
  localStorage.setItem("totalPrice", totalPrice);
  const totalPriceString = document.createElement("p");
  totalPriceString.textContent = "Total : €" + totalPrice.toFixed(2);
  totalPriceString.style.fontSize = "1.2em";
  totalPriceString.style.float = "right";
  container1.appendChild(row1);
  row1.appendChild(item);
  item.appendChild(totalItems);
  item.appendChild(totalPriceString);
}

function Remove(event, cartProducts) {
  let button = event.target;
  let item = button.parentElement;
  let itemJSON = JSON.parse(item.lastChild.textContent);
  for (let i = 0; i < cartProducts.length; i++) {
    if (itemJSON.code == cartProducts[i].code) {
      cartProducts.splice(i, 1);
    }
  }
  Clear();
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  RenderCart(cartProducts);
  document.getElementById("checkout").innerHTML = cartProducts.length;
  CheckZero(cartProducts);
}

function Clear() {
  const app = document.getElementById("root");
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}

function CheckZero(cartProducts) {
  if (cartProducts.length === 0) {
    let button = document.getElementById("checkoutButton");
    button.innerHTML = "Continue Shopping";
    let btn = document.getElementById("emptyCart");
    btn.classList.remove("emptyDisable");
    btn.classList.add("emptyEnable");
    button.href = "products.html";
    button.style.margin = "auto";
    button.onclick = function () {
      window.location.href = "products.html";
    };
    let hid = document.getElementById("div2");
    hid.style.display = "none";
    document.getElementById("checkout").style.display = "none";
  }
}
