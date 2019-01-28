function Phone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}

Phone.prototype.printInfo = function () {
    document.write('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.<br>');
}

var galaxyS6 = new Phone('Samsung', 2000, 'black', '5.1 inch');
var iPhone6S = new Phone('Apple', 2200, 'silver', '4.7 inch');
var onePlus = new Phone('OnePlus', 1800, 'black', '5.5 inch');

Phone.prototype.screenSizeInfo = function () {
    document.write('Screen size of ' + this.brand + ' is ' + this.screen + '.<br>');
}

galaxyS6.printInfo();
iPhone6S.printInfo();
onePlus.printInfo();

iPhone6S.screenSizeInfo();