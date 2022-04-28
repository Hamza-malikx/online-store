$(document).ready(function () {
  if (localStorage.getItem("cartProducts") !== null) {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    document.getElementById("checkout").style.display = "block";
    $("#checkout").html(" " + cartProducts.length + "");
  } else {
    localStorage.setItem("checkout", 0);
  }
  $(".addtocart").click(function () {
    var total = localStorage.getItem("checkout");
    total++;
    localStorage.setItem("checkout", total);
    $("#checkout").html(total);
  });
});

function myFunction() {
  let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  if (document.getElementById("checkout").innerHTML > 0) {
    document.getElementById("checkout").style.display = "block";
  } else {
    document.getElementById("checkout").style.display = "none";
  }
}
