let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
const ulEvenNumbers = document.getElementById("ulEvenNumbers");


function handleClick(){

firstNumber = Number(firstNumber.value);
secondNumber = Number(secondNumber.value);

for (let i = firstNumber; i <= secondNumber; i++){
    
    if(i%2 === 0){
        // console.log(i);
        ulEvenNumbers.innerHTML += `<li>`+ i +` is even</li>`;
    }
}
}

function showInfo(){
    const infoContainer = document.getElementById("infoContainer");
    const userInfo = {
		name: "Daniel",
		age: 23,
		email: "d@notmyrealmail.com",
		phone: "058666666😈",
		address: {
			city: "tlv",
			street: "not found",
			number: 666
		}
	}
    
    infoContainer.innerHTML += `<ul>
    <li>Name ==> `+ userInfo.name +`</li>
    <li>Age ==> `+ userInfo.age +`</li>
    <li>Email ==> `+ userInfo.email +`</li>
    <li>Phone ==> `+ userInfo.phone +`</li><br>
    <li>Address: </li>
    <ul>
    <li>City ==> `+ userInfo.address.city +`</li>
    <li>Street ==> `+ userInfo.address.street +`</li>
    <li>Number ==> `+ userInfo.address.number +`</li>
    </ul>
    </ul>`
}


const products = [
    {
        title: "Shampoo",
        price: 23.4,
        category: "shower",
        barcode: "4043945"
    },
    {
        title: "Cornflakes",
        price: 60,
        category: "food",
        barcode: "A-5455"
    },
    {
        title: "Cola",
        price: 80.5,
        category: "drinks",
        barcode: "B-986453"
    },
    {
        title: "Bamba Red",
        price: 90.3,
        category: "food",
        barcode: "C-68645"
    },
];

function createCard(title, price, category, barcode){
    return `<div id="card" class="card" style="width: 18rem">
    <div class="card-body">
     <h5 class="card-title">`+ title +`</h5>
     <h6 class="card-subtitle mb-2 text-muted">`+ price +`₪</h6>
     <a href="#" class="card-link"> `+ category +`</a>
    <a href="#" class="card-link">`+ barcode +`</a>
</div>
</div>`;
}

function displayProducts(){
    const productsContainer = document.getElementById("productsContainer");
    const productsDetails = products;

    for (const product of productsDetails){
        const card = document.createElement("div");
        card.innerHTML = createCard(
            product.title,
            product.price,
            product.category,
            product.barcode
            );
        productsContainer.appendChild(card);

    }
}
