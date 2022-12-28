class GongChaProd {
    category
    name
    price
    size
    img

    constructor(category, name, size, price, img) {
        this.category = category;
        this.name = name;
        this.size = size
        this.price = price;
        this.img = img;
    }

    get category() {
        return this.category;
    }

    set category(value) {
        this.category = value;
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