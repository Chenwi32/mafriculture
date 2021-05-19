    const productDisplay = document.querySelector('.product-display');
 /*    const firstPage = document.getElementById('first-page');
    const secondPage = document.getElementById('more-products');
    const next = document.getElementById('next');
 */

// UI
class UI {
    displayProducts(obj){
        let results = '';
        obj.forEach(({id, title, price, image}) => {
            results +=`
                <div class="col-4 card" id="p4">
                <a href="product-details.html"><img src=${image} alt=""/></a>
                <h3>${title}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                    <a href="" data-id=${id}>Add to cart</a>
                    <p>FCFA ${price}</p>
                </div>`;
            
        });
        productDisplay.innerHTML = results; 
    }
};

// Storage
class Storage{

}


// Products 
class Products{

    // This will get the products from the JSON by fetching them 
    // Because we will be fetching data from an external source, it might be delaying or might encounter
    // errors so we will be using asyncronous and try catch.


    async getProducts(){

        // Because we will be dealing with get data from external source, we need to use the
        // try catch method so that it will catch any error that will arrise along the way like this;

        try{

            // This will go and fetch the data, assign the data to the recievedData variable
            const results = await fetch("../js/products.json");
            const recievedData = await results.json();

           // This will extract the items object which is in the fetched data 
            const products = recievedData.items;

           // This will return the products to be used outside this function 
            return products;

        }catch(err){
            console.log(err);
        }
    }
};


// This will update the DOM after loading
document.addEventListener('DOMContentLoaded', /* because the getProducts() is async, to call it here, we must also make this async like this; */ 
async () => {
    const ui = new UI();
    const products = new Products();

    // This will collect the products we recieve from the getProduct() of the Products class at
    // runtime
    const productsObj = await products.getProducts();

    // This will display the products in the UI at runtime using the display function of the UI class
    // by recieving the products through the productobj as its parameter

    ui.displayProducts(productsObj)
})