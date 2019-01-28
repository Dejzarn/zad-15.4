function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function () {
    document.write('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.<br>');
}

var galaxyS6 = new Phone('Samsung', 2000, 'black');
var iPhone6S = new Phone('Apple', 2200, 'silver');
var onePlus = new Phone('OnePlus', 1800, 'black');


galaxyS6.printInfo();
iPhone6S.printInfo();
onePlus.printInfo();