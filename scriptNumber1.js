var food1 = {
  "name": "Spicy Ahi",
  "type": "Fish",
  "cost": 16,
  "madeBy": "Raene"
}

function buyAhi() {
    var qty1 = document.getElementById('qty1').value;
    var price = qty1 * food1.cost;
  document.getElementById('one').innerHTML = food1.name;
  localStorage.setItem('x',price);
  localStorage.href="page2.html";
}

function getStuff() {
  var a = localstorage.getItem("x");
  document.getElementById('showMe').innerHTML = a;
}