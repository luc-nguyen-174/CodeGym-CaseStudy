class Product{
    name
    price
    des
    size

    constructor(name, price, des, size) {
        this.name = name;
        this.price = price;
        this.des = des;
        this.size = size;
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

    get des() {
        return this.des;
    }

    set des(value) {
        this.des = value;
    }

    get size() {
        return this.size;
    }

    set size(value) {
        this.size = value;
    }
}