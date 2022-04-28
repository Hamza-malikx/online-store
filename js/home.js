function another() {
  fetch("https://api.npoint.io/4bd83a531f355b7102e5")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 1; i++) {
        const productsDiv = document.getElementById("product1");
        let divParent = document.createElement("div");
        let div = document.createElement("div");
        let divAg = document.createElement("div");
        let img1 = document.createElement("img");
        let h4 = document.createElement("h4");
        let h6 = document.createElement("h6");
        let btn = document.createElement("button");
        btn.setAttribute("class", "addtocartAg");
        btn.innerHTML = "Add";
        divAg.setAttribute("class", "btnWrapper");
        img1.setAttribute("class", "productImg");
        div.setAttribute(
          "style",
          "display:flex;justify-content:space-between;width:90%;padding: 20px 10px;"
        );
        h4.setAttribute("class", "productName");
        h6.setAttribute("class", "product-price");
        img1.src = data.Windshirts[i].imgurl;
        h4.textContent = data.Windshirts[i].name
          .split(" ")
          .slice(0, 2)
          .join(" ");
        h6.textContent = data.Windshirts[i].price;
        productsDiv.appendChild(divParent);
        divParent.setAttribute("class", "productsWrapper");
        divParent.appendChild(img1);
        divParent.appendChild(div);
        div.appendChild(h4);
        div.appendChild(h6);
        divParent.appendChild(divAg);
        divAg.appendChild(btn);
        const idProduct = document.createElement("param");
        idProduct.textContent = JSON.stringify(data.Windshirts[i]);
        btn.appendChild(idProduct);
      }
      for (let i = 0; i < 1; i++) {
        const productsDiv = document.getElementById("product2");
        let divParent = document.createElement("div");
        let div = document.createElement("div");
        let divAg = document.createElement("div");
        let img1 = document.createElement("img");
        let h4 = document.createElement("h4");
        let h6 = document.createElement("h6");
        let btn = document.createElement("button");
        btn.setAttribute("class", "addtocartAg");
        btn.innerHTML = "Add";
        divAg.setAttribute("class", "btnWrapper");
        img1.setAttribute("class", "productImg");
        div.setAttribute(
          "style",
          "display:flex;justify-content:space-between;width:90%;padding: 20px 10px;"
        );
        h4.setAttribute("class", "productName");
        h6.setAttribute("class", "product-price");
        img1.src = data.Drivers[i].imgurl;
        h4.textContent = data.Drivers[i].name.split(" ").slice(0, 2).join(" ");
        h6.textContent = data.Drivers[i].price;
        productsDiv.appendChild(divParent);
        divParent.setAttribute("class", "productsWrapper");
        divParent.appendChild(img1);
        divParent.appendChild(div);
        div.appendChild(h4);
        div.appendChild(h6);
        divParent.appendChild(divAg);
        divAg.appendChild(btn);
        const idProduct = document.createElement("param");
        idProduct.textContent = JSON.stringify(data.Drivers[i]);
        btn.appendChild(idProduct);
      }
      for (let i = 0; i < 1; i++) {
        const productsDiv = document.getElementById("product3");
        let divParent = document.createElement("div");
        let div = document.createElement("div");
        let divAg = document.createElement("div");
        let img1 = document.createElement("img");
        let h4 = document.createElement("h4");
        let h6 = document.createElement("h6");
        let btn = document.createElement("button");
        btn.setAttribute("class", "addtocartAg");
        btn.innerHTML = "Add";
        divAg.setAttribute("class", "btnWrapper");
        img1.setAttribute("class", "productImg");
        div.setAttribute(
          "style",
          "display:flex;justify-content:space-between;width:90%;padding: 20px 10px;"
        );
        h4.setAttribute("class", "productName");
        h6.setAttribute("class", "product-price");
        img1.src = data.Wedges[i].imgurl;
        h4.textContent = data.Wedges[i].name.split(" ").slice(0, 2).join(" ");
        h6.textContent = data.Wedges[i].price;
        productsDiv.appendChild(divParent);
        divParent.setAttribute("class", "productsWrapper");
        divParent.appendChild(img1);
        divParent.appendChild(div);
        div.appendChild(h4);
        div.appendChild(h6);
        divParent.appendChild(divAg);
        divAg.appendChild(btn);
        const idProduct = document.createElement("param");
        idProduct.textContent = JSON.stringify(data.Wedges[i]);
        btn.appendChild(idProduct);
      }
      const cc = localStorage.getItem("cartProducts");
      var cartProducts = cc ? JSON.parse(cc) : [];
      $(".addtocartAg").click(function (event) {
        //convert to Jsonparse element selected
        let itemAdded = event.currentTarget;

        let info = itemAdded.lastChild.textContent;
        info = JSON.parse(info);
        if (info) {
          if (cartProducts.filter((x) => x.code === info.code).length === 0) {
            cartProducts.push(info);
          } else {
            alert("Already Exists");
          }
        }
        //set array of selected produts in local storage, so now we can access it from another pages afins
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        //get size of array produts and display it in our header
        $("#checkout").html("" + cartProducts.length + "");
        myFunction(cartProducts);
      });
    });
}
