//javascipt
var lists=[];
function productList(){
    var product=insertJson();
    lists.push(product);
    console.log(lists);
    display(lists);
        
    }


function insertJson(){
    var id=document.getElementById("productId").value;
    var name=document.getElementById("productName").value;
    var price=document.getElementById("productPrice").value;
    var edit="hello";
    var del=del;
    return {
        "pro_id":id,
        "pro_name":name,
        "pro_price":price,
        "edit":edit,
        "delete":del
    }
}

function display(){
    table =document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    for (var i=0; i<lists.length; i++){
        cell1.innerHTML = lists[i].pro_id;
        cell2.innerHTML = lists[i].pro_name;
        cell3.innerHTML = lists[i].pro_price;
        cell4.innerHTML = lists[i].edit;
        cell5.innerHTML = lists[i].delete;

}
}

