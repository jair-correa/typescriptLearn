export class ShoppingCart {
  private readonly products: Product[] = [];
  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
  quantityProducts(): number {
    return this.products.length;
  }
  totalValue(): number {
    return this.products.reduce((soma, product) => soma + product.price, 0);
  }
}
export class Product {
  constructor(
    public nome: string,
    public price: number,
  ) {}
}
const product1 = new Product("Shirt", 49.9);
const product2 = new Product("Shoes", 201.9);
const product3 = new Product("T-Shirt", 29.9);
const product4 = new Product("Pants", 39.9);
const shoppingCart = new ShoppingCart();

shoppingCart.insertProducts(product1, product2, product3, product4);
console.log(shoppingCart.totalValue());
console.log(shoppingCart.quantityProducts());
