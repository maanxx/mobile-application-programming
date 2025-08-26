class Product {
    private _name: string;
    private _price: number;

    public constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

}

const products:  Product[] = [
    new Product("Computer", 2000),
    new Product("Phone", 800)
];

// filter sp > 100
const filteSP = products.filter(p => p.price > 100);

console.log("Loc san pham:");
filteSP.forEach(p => {
console.log(`${p.name} - ${p.price}`);
});