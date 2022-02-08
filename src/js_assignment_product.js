//javascipt
var lists = [];
function productList() {
  var product = insertJson();
  if (product!= -1){
    console.log("Entering the push array part");
    lists.push(product);
  }
  
  console.log(lists);
  display(lists);
}

function insertJson() {
  var id = document.getElementById("productId").value;
  var name = document.getElementById("productName").value;
  var price = document.getElementById("productPrice").value;
  var check = validation(id, lists);
  if (!check) {
    var data = { pro_id: id, pro_name: name, pro_price: price };
    return data;
  } else {
    console.log("yes id exists");
    alert("Product with this ID is already added in List");
    return -1;
  }
}

function validation(id, lists) {
  console.log("Hello id " + id);
  console.log(lists);
  for (i = 0; i < lists.length; i++) {
    if (id == lists[i].pro_id) {
      return true;
    }
  }
}

function display(lists) {
  console.log("Entering display function");
  var table =
    "<table><tr><th>Product ID</th><th>Product Name</th><th>Product Price</tj></tr>";
  for (var i = 0; i < lists.length; i++) {
    table +=
      "<tr><td>" +
      lists[i].pro_id +
      "</td><td>" +
      lists[i].pro_name +
      "</td><td>" +
      lists[i].pro_price +
      "</td></tr>";
  }
  table += "</table>";
  document.getElementById("table").innerHTML = table;
}
