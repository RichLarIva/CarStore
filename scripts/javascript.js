function Car(index, model, brand, color, sold, price, img){
    this.index = index
    this.model = model
    this.brand = brand
    this.color = color
    this.sold = sold
    this.price = price
    this.img = img
}


var volvo = new Car(0, "960/S90 SEDAN", "Vovlo", "White", false, 5029.21, "img/960sedan.png");

var saab = new Car(1, "Saab 900", "SAAB", "Blue", false, 500, "img/saab900.png")

var fiat = new Car(2, "500", "Fiat", "Dark Blue", false, 5, "img/Fiat-500-vorne2.jpeg")

var chev = new Car(3, "Chevrolet P30", "CHEVROLET", "Pink", false, 5029.21, "img/chev.png");

var car5 = new Car(4, "Ski-Doo EXPEDITION LE E-TEC 600 HO", "SKI-DOO", "Black", false, 0, "img/skido.png")

var honda = new Car(5, "Honda FIT", "Honda FIT", "Black", false, 5, "img/hondafit.jpeg")

var inter = new Car(6, "VFR800 INTERCEPTOR", "Honda", "Red", false, 5002103, "img/hondint.png")

var peter = new Car(7, "220", "Peterbilt", "White", false, 5200103, "img/peter.png")

var freight = new Car(8, "108SD", "Freightliner", "Dark Blue", false, 502, "img/108.png")

var kawa = new Car(8, "EN500C VULCAN 500 LTD", "Kawasaki", "Dark Red", false, 59812302, "img/kawa.png")

var cars = [volvo, saab, fiat, chev, car5, honda, inter, peter, freight, kawa];

function displayCars(){
    cars.forEach(element => isNotSold(element))
}


function isNotSold(car){
    if(car.sold == false){
        const carDiv = document.getElementById("cars");

        let header = `<h3>${car.brand}</h3>`
        let text = `<img src=${car.img} alt="Car"> <p> Buy the New ${car.model} <br> PRICE: ${car.price} <br> Available in only ${car.color} in color.</p> <button onclick="buyCar(${car.index})">Buy ${car.model}</button>`

        let fullContent = "<div class='items'>" + header + text + "</div>"
        carDiv.innerHTML += fullContent
    }
}

function buyCar(index){
    car = cars[index]
    console.log(car)
    car.sold = true
    console.log(car.sold)
}

displayCars()