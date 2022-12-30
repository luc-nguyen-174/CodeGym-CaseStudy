class GongChaProd {

    name
    price
    size
    img

    constructor(name, size, price, img) {
        this.name = name;
        this.size = size
        this.price = price;
        this.img = img;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get size() {
        return this.size;
    }

    set size(value) {
        this.size = value;
    }

    get img() {
        return this.img;
    }

    set img(value) {
        this.img = value;
    }
}