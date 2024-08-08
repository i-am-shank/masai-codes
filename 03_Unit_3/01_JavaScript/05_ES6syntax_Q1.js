// Develop an inventory management system for a retail company, leveraging JavaScript's advanced functionalities like map, filter, sort, and reduce. This web-based application will streamline inventory management, analysis, and reporting tasks. Users will access a product inventory displaying details such as name, category, price, quantity, and availability status. Filtering options will enable users to view products based on parameters like price, quantity, or category. Additionally, users can access detailed information about each product, including features, photos, and contact details. The system will generate reports summarizing metrics such as total inventory value, average price per features, photos, and contact details. The system will generate reports summarizing metrics such as total inventory value, average price per product, or category distribution. Utilize map to transform data, filter to narrow down listings, sort for comparison, and reduce for data aggregation, demonstrating proficiency in advanced JavaScript functionalities for efficient inventory management and analysis.

// Input :

const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 1200,
        quantity: 10,
        available: true,
    },
    {
        name: "Chair",
        category: "Furniture",
        price: 100,
        quantity: 20,
        available: true,
    },
    {
        name: "Shirt",
        category: "Clothing",
        price: 30,
        quantity: 50,
        available: false,
    },
    {
        name: "Book",
        category: "Books",
        price: 20,
        quantity: 100,
        available: true,
    },
];

// Expected Output :

// Filtered Products:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },
// ]

var filteredProducts = products.filter((ele) => ele.name === "Laptop");
console.log("Filtered Products:");
console.log(filteredProducts);
console.log();

// Sorted Products by Price:
// [
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
// ]

var sortedProducts = products.sort((a, b) => {
    return a.price - b.price;
});
console.log("Sorted Products by Price:");
console.log(sortedProducts);
console.log();

// Products with Total Value:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
// ]

var updatedProducts = [];
products.forEach((product) => {
    product.totalValue = product.price * product.quantity;
    updatedProducts.push(product);
});
console.log("Products with Total Value:");
console.log(updatedProducts);
console.log();

// Inventory Report:
// {
//     totalProducts: 4,
//     totalValue: 17500,
//     avgPrice: 337.5,
//     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
// }

var inventoryReport = {};
inventoryReport.totalProducts = products.length;
inventoryReport.totalValue = updatedProducts.reduce((acc, item) => {
    return acc + item.totalValue;
}, 0);
var totalPrice = products.reduce((acc, item) => acc + item.price, 0);
inventoryReport.avgPrice = totalPrice / products.length;
var categoryDistribution = {};
products.forEach((product) => {
    if (Boolean(categoryDistribution[`${product.category}`]) === false) {
        categoryDistribution[`${product.category}`] = 1;
    } else {
        categoryDistribution[`${product.category}`]++;
    }
});
inventoryReport = { ...inventoryReport, categoryDistribution };
console.log("Inventory Report:");
console.log(inventoryReport);
console.log();
