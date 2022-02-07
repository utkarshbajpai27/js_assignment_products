//javascipt
var lists=[];
function productList(){
    var product=insertJson();
    lists.push(product);
    console.log(lists);
    table =document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for (var i=0; i<lists.length; i++){
        cell1.innerHTML = lists[i].pro_id;
        cell2.innerHTML = lists[i].pro_name;
        cell3.innerHTML = lists[i].pro_price;
    }
}

function insertJson(){
    var id=document.getElementById("productId").value;
    var name=document.getElementById("productName").value;
    var price=document.getElementById("productPrice").value;
    return {
        "pro_id":id,
        "pro_name":name,
        "pro_price":price
    }
}


/*function display(lists){
    document.getElementById("id").innerHTML=id;
    document.getElementById("name").innerHTML=name;
    document.getElementById("price").innerHTML=price;
}

function addList(id,name,price){
    document.getElementById("id").innerHTML=id;
    document.getElementById("name").innerHTML=name;
    document.getElementById("price").innerHTML=price;*/
