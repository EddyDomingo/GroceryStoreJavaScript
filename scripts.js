//document.getElementById("btn1").addEventListener("click", Purchase)
//document.getElementById("btn2").addEventListener("click", Cart)

document.getElementById("btn1").onclick = function(){Purchase()}
document.getElementById("pay").onclick = function(){Cart()}


var products = new Array();
var amount = new Array();

function Purchase(){

    // veggies value and amount
    var veggies = document.getElementById('veggies').value 
    var veggiesAmount = document.getElementById('quantity1').value

    // meats value and amount
    var meats = document.getElementById('meats').value 
    var meatsAmount = document.getElementById('quantity2').value

    // breads value and amount 
    var breads = document.getElementById('breads').value 
    var breadsAmount = document.getElementById('quantity3').value

    // sweets value and amount 
    var sweets = document.getElementById('sweets').value 
    var sweetsAmount = document.getElementById('quantity4').value

    // soft drinks value and amount 
    var drinks = document.getElementById('drinks').value 
    var drinksAmount = document.getElementById('quantity5').value

    // eggs drinks value and amount 
    var eggs = document.getElementById('eggs').value 
    var eggsAmount = document.getElementById('quantity6').value

    // new elements to array
    products.push(veggies)
    amount.push(veggiesAmount)

    products.push(meats)
    amount.push(meatsAmount)

    products.push(breads)
    amount.push(breadsAmount)

    products.push(sweets)
    amount.push(sweetsAmount)

    products.push(drinks)
    amount.push(drinksAmount)

    products.push(eggs)
    amount.push(eggsAmount)
    
    
    console.log(products)
    console.log(amount)

    var obj = String(products[0])
    console.log(obj)

    localStorage.setItem("products", products)
    localStorage.setItem("amount", amount)



}

function Cart(){

    document.write(products)
    document.write(amount)


}