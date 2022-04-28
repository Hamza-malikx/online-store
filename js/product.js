//function to get value from select
var category = "Drivers";
var WindshirtsData = "";
function run(e) {
  document.getElementById("select").value;
  category = e.toString();
  (function () {
    fetch("https://api.npoint.io/4bd83a531f355b7102e5")
      .then((response) => response.json())
      .then((data) => {
        WindshirtsData = data.Windshirts;
        const productsDiv = document.getElementById("sector1");
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        productsDiv.appendChild(container);
        var e = document.getElementById("select");
        var category = e.value;

        if (category === "None") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }
          for (let i = 0; i < data.Windshirts.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Windshirts[i].imgurl;
            h2.textContent = data.Windshirts[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Windshirts[i].code);

            const text = document.createTextNode(
              "€" + data.Windshirts[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Windshirts?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Windshirts[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Windshirts[i].imgurl;
            const p = document.createElement("p");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);
            divb.appendChild(button);
            button.appendChild(idProduct);
          }

          for (let i = 0; i < data.Drivers.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Drivers[i].imgurl;
            h2.textContent = data.Drivers[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Drivers[i].code);

            const text = document.createTextNode(
              "€" + data.Drivers[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);
            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Drivers?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Drivers[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Drivers[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }

          for (let i = 0; i < data.Wedges.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Wedges[i].imgurl;
            h2.textContent = data.Wedges[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Wedges[i].code);

            const text = document.createTextNode(
              "€" + data.Wedges[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Wedges?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Wedges[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Wedges[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Windshirts") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }

          for (let i = 0; i < data.Windshirts.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Windshirts[i].imgurl;
            h2.textContent = data.Windshirts[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Windshirts[i].code);

            const text = document.createTextNode(
              "€" + data.Windshirts[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Windshirts?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Windshirts[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Windshirts[i].imgurl;
            const p = document.createElement("p");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);
            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Drivers") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }

          for (let i = 0; i < data.Drivers.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Drivers[i].imgurl;
            h2.textContent = data.Drivers[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Drivers[i].code);

            const text = document.createTextNode(
              "€" + data.Drivers[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Drivers?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Drivers[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Drivers[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Wedges") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }
          for (let i = 0; i < data.Wedges.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
            divb.setAttribute("class", "col-inner text-center");
            a.setAttribute("href", "");
            img1.setAttribute("class", "prodImage");
            img1.src = data.Wedges[i].imgurl;
            h2.textContent = data.Wedges[i].name
              .split(" ")
              .slice(0, 2)
              .join(" ");
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Wedges[i].code);

            const text = document.createTextNode(
              "€" + data.Wedges[i]?.price + " - Add to Cart"
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Wedges?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Wedges[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Wedges[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("btn-dark");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else {
          alert("");
        }

        //this array will hold all products that user is selecting
        const cc = localStorage.getItem("cartProducts");
        var cartProducts = cc ? JSON.parse(cc) : [];

        //get event click
        $(".addtocart").click(function (element) {
          //convert to Jsonparse element selected
          let itemAdded = element.currentTarget;
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
  })();
}
function againRunning() {
  fetch("https://api.npoint.io/4bd83a531f355b7102e5")
    .then((response) => response.json())
    .then((data) => {
      WindshirtsData = data.Windshirts;
      const productsDiv = document.getElementById("sector1");
      var e = document.getElementById("select");
      var category = e.value;

      if (category === "None") {
        for (let i = 0; i < data.Windshirts.length; i++) {
          let diva = document.createElement("div");
          let divb = document.createElement("div");
          let divPrice = document.createElement("div");
          let a = document.createElement("a");
          let img1 = document.createElement("img");
          let h2 = document.createElement("h2");
          h2.setAttribute("class", "product-name");
          diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
          divb.setAttribute("class", "col-inner text-center");
          a.setAttribute("href", "");
          img1.setAttribute("class", "prodImage");
          img1.src = data.Windshirts[i].imgurl;
          h2.textContent = data.Windshirts[i].name
            .split(" ")
            .slice(0, 2)
            .join(" ");

          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");
          button.setAttribute("data-id", data.Windshirts[i].code);

          const text = document.createTextNode(
            "€" + data.Windshirts[i]?.price + " - Add to Cart"
          );
          button.appendChild(text);

          divb.appendChild(button);

          productsDiv.appendChild(diva);
          diva.appendChild(divb);
          divb.appendChild(a);
          a.appendChild(img1);
          divb.appendChild(h2);
          a.appendChild(button);

          divb.appendChild(button);

          //this is creating each element from the data windshirts
          const idProduct = document.createElement("param");
          idProduct.textContent = JSON.stringify(data.Windshirts[i]);

          const div8 = document.createElement("div");
          div8.setAttribute("class", "col-inner");
          const card = document.createElement("div");
          card.setAttribute("class", "col-md-4");
          card.classList.add("card");

          const h3 = document.createElement("h3");
          h3.textContent = data.Windshirts?.name;

          const h4 = document.createElement("h4");
          h4.textContent = " " + data.Windshirts[i]?.brand;

          const myimg = document.createElement("img");
          myimg.style.width = "250px";
          myimg.style.height = "250px";
          myimg.style.marginLeft = "auto";
          myimg.style.marginRight = "auto";
          myimg.src = data.Windshirts[i].imgurl;
          const p = document.createElement("p");
          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");
          button.appendChild(text);
          idProduct.textContent = JSON.stringify(data.Windshirts[i]);
          divb.appendChild(button);
          button.appendChild(idProduct);
        }

        for (let i = 0; i < data.Drivers.length; i++) {
          let diva = document.createElement("div");
          let divb = document.createElement("div");
          let divPrice = document.createElement("div");
          let a = document.createElement("a");
          let img1 = document.createElement("img");
          let h2 = document.createElement("h2");
          h2.setAttribute("class", "product-name");
          diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
          divb.setAttribute("class", "col-inner text-center");
          a.setAttribute("href", "");
          img1.setAttribute("class", "prodImage");
          img1.src = data.Drivers[i].imgurl;
          h2.textContent = data.Drivers[i].name
            .split(" ")
            .slice(0, 2)
            .join(" ");
          // divPrice.textContent = data.Windshirts[i].price;

          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");
          button.setAttribute("data-id", data.Drivers[i].code);

          const text = document.createTextNode(
            "€" + data.Drivers[i]?.price + " - Add to Cart"
          );
          button.appendChild(text);

          divb.appendChild(button);

          productsDiv.appendChild(diva);
          diva.appendChild(divb);
          divb.appendChild(a);
          a.appendChild(img1);
          divb.appendChild(h2);
          a.appendChild(button);

          divb.appendChild(button);

          //this is creating each element from the data windshirts
          const idProduct = document.createElement("param");
          idProduct.textContent = JSON.stringify(data.Drivers[i]);

          const div8 = document.createElement("div");
          div8.setAttribute("class", "col-inner");
          const card = document.createElement("div");
          card.setAttribute("class", "col-md-4");
          card.classList.add("card");

          const h3 = document.createElement("h3");
          h3.textContent = data.Drivers?.name;

          const h4 = document.createElement("h4");
          h4.textContent = " " + data.Drivers[i]?.brand;

          const myimg = document.createElement("img");
          myimg.style.width = "250px";
          myimg.style.height = "250px";
          myimg.style.marginLeft = "auto";
          myimg.style.marginRight = "auto";
          myimg.src = data.Drivers[i].imgurl;

          const p = document.createElement("p");

          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");

          button.appendChild(text);
          idProduct.textContent = JSON.stringify(data.Drivers[i]);

          divb.appendChild(button);
          button.appendChild(idProduct);
        }

        for (let i = 0; i < data.Wedges.length; i++) {
          let diva = document.createElement("div");
          let divb = document.createElement("div");
          let divPrice = document.createElement("div");
          let a = document.createElement("a");
          let img1 = document.createElement("img");
          let h2 = document.createElement("h2");
          h2.setAttribute("class", "product-name");
          diva.setAttribute("class", "col-sm-12 col-md-4 allProductWrapper");
          divb.setAttribute("class", "col-inner text-center");
          a.setAttribute("href", "");
          img1.setAttribute("class", "prodImage");
          img1.src = data.Wedges[i].imgurl;
          h2.textContent = data.Wedges[i].name.split(" ").slice(0, 2).join(" ");
          // divPrice.textContent = data.Windshirts[i].price;

          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");
          button.setAttribute("data-id", data.Wedges[i].code);

          const text = document.createTextNode(
            "€" + data.Wedges[i]?.price + " - Add to Cart"
          );
          button.appendChild(text);

          divb.appendChild(button);

          productsDiv.appendChild(diva);
          diva.appendChild(divb);
          divb.appendChild(a);
          a.appendChild(img1);
          divb.appendChild(h2);
          a.appendChild(button);

          divb.appendChild(button);

          //this is creating each element from the data windshirts
          const idProduct = document.createElement("param");
          idProduct.textContent = JSON.stringify(data.Wedges[i]);

          const div8 = document.createElement("div");
          div8.setAttribute("class", "col-inner");
          const card = document.createElement("div");
          card.setAttribute("class", "col-md-4");
          card.classList.add("card");

          const h3 = document.createElement("h3");
          h3.textContent = data.Wedges?.name;

          const h4 = document.createElement("h4");
          h4.textContent = " " + data.Wedges[i]?.brand;

          const myimg = document.createElement("img");
          myimg.style.width = "250px";
          myimg.style.height = "250px";
          myimg.style.marginLeft = "auto";
          myimg.style.marginRight = "auto";
          myimg.src = data.Wedges[i].imgurl;

          const p = document.createElement("p");

          button.classList.add("btn");
          button.classList.add("btn-dark");
          button.classList.add("addtocart");

          button.appendChild(text);
          idProduct.textContent = JSON.stringify(data.Wedges[i]);

          divb.appendChild(button);
          button.appendChild(idProduct);
        }
      } else {
        alert("");
      }

      //this array will hold all products that user is selecting

      const cc = localStorage.getItem("cartProducts");
      var cartProducts = cc ? JSON.parse(cc) : [];
      //get event click
      $(".addtocart").click(function (event) {
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
againRunning();
function myFunction() {
  if (document.getElementById("checkout").innerHTML > 0) {
    document.getElementById("checkout").style.display = "block";
  } else {
    document.getElementById("checkout").style.display = "none";
  }
}
myFunction();
