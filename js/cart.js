(function () {
  var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  CheckZero(cartProducts);
  RenderCart(cartProducts);
})();

function RenderCart(cartProducts) {
  const root = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  root.appendChild(container);

  for (let i = 0; i < cartProducts.length; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    row.style.margin = "10px";
    row.style.border = ".5em solid #04adc7";
    row.style.borderRadius = "1em";

    const item = document.createElement("div");
    item.setAttribute("class", "col-12");
    item.setAttribute("class", "my-auto");

    const img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.src = cartProducts[i].imgurl;
    img.style.float = "left";
    img.style.margin = "1em";

    const name = document.createElement("p");
    name.textContent = cartProducts[i].name;
    name.style.float = "left";
    name.style.fontSize = "2em";
    name.style.margin = "1em";

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("btn");
    remove.classList.add("btn-dark");
    remove.style.float = "right";
    remove.style.marginTop = "2em";
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

  const row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("class", "w-100");
  row.style.margin = "10px";

  const item = document.createElement("div");
  item.setAttribute("class", "col-12");

  const totalItems = document.createElement("p");
  totalItems.textContent = "Items : " + cartProducts.length;
  totalItems.style.fontSize = "2em";
  totalItems.style.float = "left";

  let totalPrice = 0;
  for (let j = 0; j < cartProducts.length; j++) {
    totalPrice += parseFloat(cartProducts[j].price);
  }

  localStorage.setItem("totalItems", parseInt(cartProducts.length));
  localStorage.setItem("totalPrice", totalPrice);
  const totalPriceString = document.createElement("p");
  totalPriceString.textContent = "Total : €" + totalPrice.toFixed(2);
  totalPriceString.style.fontSize = "2em";
  totalPriceString.style.float = "right";
  container.appendChild(row);
  row.appendChild(item);
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
  if (cartProducts == null || cartProducts.length == 0) {
    let button = document.getElementById("checkoutButton");
    button.disabled = true;
    button.innerHTML = "Your cart is empty";
    document.getElementById("checkout").style.display = "none";
  }
}
