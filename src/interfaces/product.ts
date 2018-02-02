import {IProductData} from "./product-data";

export interface IProduct {

    id : number;                    // ID for the placement in the cart

    getData() : IProductData;       // Get the product data
    update() : boolean              // Update this product
    remove() : boolean              // Remove this product
}