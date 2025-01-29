
async function electronicsPriceAbove500 () {
    try {
        const products = await Product.find({ 
            category: "Electronics", 
            price: { $gt: 500 } 
        }).sort({ price: -1 });

        console.log(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

electronicsPriceAbove500();
