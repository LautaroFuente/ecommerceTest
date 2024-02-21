import load_best_products from "./load-bests-products.js";
import load_sale_products from "./load-sale-products.js";

const bests = [1,2,3];
const sales =[5,6,7];

document.addEventListener('DOMContentLoaded', (e) =>{
    load_best_products(bests);
    load_sale_products(sales);
});
