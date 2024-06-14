let product1 = 'Electric Guitar'; //declare variable
let product2 = 'Drum Set';
let product3 = 'Piano';
let product4 = 'Bass Guitar';

let productListDiv = document.getElementById('productList');

let newDiv1 = document.createElement('div');
newDiv1.innerHTML = product1;
productListDiv.appendChild(newDiv1);

let newDiv2 = document.createElement('div');
newDiv2.innerHTML = product2;
productListDiv.appendChild(newDiv2);

function addProduct(productName) { //keyword functionName(parameters){}
    let newDiv = document.createElement('div');
    newDiv.innerHTML = productName;
    productListDiv.appendChild(newDiv);
}

addProduct(product3); //functionName(arguments);
addProduct(product4);