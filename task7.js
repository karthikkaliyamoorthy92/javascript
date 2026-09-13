// Use this API:
// https://fakestoreapi.com/products
// Requirements:
// •	Fetch all products.
// •	Convert response using .json().
// •	Display:
// o	Product title
// o	Price
// o	Category
// •	Use map() to create a new array containing only:
// o	title
// o	price
// •	Use filter() to find products with price greater than $100.
// •	Use find() to find the first product in the "electronics" category.
// •	Use reduce() to calculate the total price.
// •	Use sort() to arrange products from highest price to lowest.
// •	Handle API errors using .catch().
// •	Display a completion message using .finally().

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return response.json();
//   })
//   .then((products) => {
//     // 1. Display all products
//     console.log("ALL PRODUCTS");

//     products.forEach((product) => {
//       console.log("Title:", product.title);
//       console.log("Price:", product.price);
//       console.log("Category:", product.category);
//       console.log("--------------------");
//     });

//     // 2. map() - create new array containing only title and price
//     const titleAndPrice = products.map((product) => ({
//       title: product.title,
//       price: product.price,
//     }));

//     console.log("TITLE AND PRICE");
//     console.log(titleAndPrice);

//     // 3. filter() - products with price greater than $100
//     const expensiveProducts = products.filter((product) => product.price > 100);

//     console.log("PRODUCTS ABOVE $100");
//     console.log(expensiveProducts);

//     // 4. find() - first product in electronics category
//     const firstElectronic = products.find(
//       (product) => product.category === "electronics",
//     );

//     console.log("FIRST ELECTRONICS PRODUCT");
//     console.log(firstElectronic);

//     // 5. reduce() - calculate total price
//     const totalPrice = products.reduce(
//       (total, product) => total + product.price,
//       0,
//     );

//     console.log("TOTAL PRICE:", totalPrice);

//     // 6. sort() - highest price to lowest price
//     const sortedProducts = [...products].sort((a, b) => b.price - a.price);

//     console.log("SORTED PRODUCTS - HIGH TO LOW");
//     console.log(sortedProducts);
//   })
//   .catch((error) => {
//     // 7. Handle API errors
//     console.error("API Error:", error.message);
//   })
//   .finally(() => {
//     // 8. Completion message
//     console.log("Product processing completed.");
//   });

// ________________________________________
// Task 2 — Product Category Dashboard
// Use:
// https://fakestoreapi.com/products
// Create a console-based dashboard.
// Expected output:
// ===== PRODUCT DASHBOARD =====

// Total Products: 20

// Electronics: 6
// Jewelery: 4
// Men's Clothing: 6
// Women's Clothing: 4

// Highest Price: $999.99
// Lowest Price: $5.99
// Average Price: $XXX
// Students must use:
// •	fetch()
// •	map()
// •	filter()
// •	reduce()
// •	sort()
// •	Functions
// •	Template literals

// function getCategoryCount(products, category) {
//   return products.filter((product) => product.category === category).length;
// }

// function getHighestPrice(products) {
//   const sortedProducts = [...products].sort((a, b) => b.price - a.price);

//   return sortedProducts[0].price;
// }

// function getLowestPrice(products) {
//   const sortedProducts = [...products].sort((a, b) => a.price - b.price);

//   return sortedProducts[0].price;
// }

// function getAveragePrice(products) {
//   const totalPrice = products.reduce(
//     (total, product) => total + product.price,
//     0,
//   );

//   return totalPrice / products.length;
// }

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return response.json();
//   })

//   .then((products) => {
//     // map() - create a new array containing product prices
//     const prices = products.map((product) => product.price);

//     console.log("Prices:", prices);

//     // Category counts
//     const electronics = getCategoryCount(products, "electronics");

//     const jewelery = getCategoryCount(products, "jewelery");

//     const mensClothing = getCategoryCount(products, "men's clothing");

//     const womensClothing = getCategoryCount(products, "women's clothing");

//     // Highest price
//     const highestPrice = getHighestPrice(products);

//     // Lowest price
//     const lowestPrice = getLowestPrice(products);

//     // Average price
//     const averagePrice = getAveragePrice(products);

//     // Template literal
//     const dashboard = `PRODUCT DASHBOARD:
// ------------------

// Total Products: {products.length}

// Electronics: {electronics}
// Jewelery: {jewelery}
// Men's Clothing: {mensClothing}
// Women's Clothing: {womensClothing}

// Highest Price: {highestPrice.toFixed(2)}
// Lowest Price: {lowestPrice.toFixed(2)}
// Average Price: {averagePrice.toFixed(2)}
//         `;

//     console.log(dashboard);
//   })

//   .catch((error) => {
//     console.error("Error:", error.message);
//   })

//   .finally(() => {
//     console.log("Product dashboard completed.");
//   });

// ________________________________________
// Task 3 — User & Post API
// Use these APIs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// Requirements:
// 1.	Fetch users.
// 2.	Display all user names.
// 3.	Display user name + email.
// 4.	Find the user with ID 5.
// 5.	Filter users from a particular city.
// 6.	Fetch posts.
// 7.	Display posts written by user ID 1.
// 8.	Count how many posts user ID 1 has created.
// 9.	Find the first post with more than 50 characters in the title.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     console.log("===== ALL USER NAMES =====");

//     users.forEach((user) => {
//       console.log(user.name);
//     });

//     console.log("===== USER NAME + EMAIL =====");

//     users.forEach((user) => {
//       console.log(`${user.name} - ${user.email}`);
//     });

//     // Find user with ID 5

//     const user5 = users.find((user) => user.id === 5);

//     console.log("===== USER ID 5 =====");
//     console.log(user5);

//     // Filter users from a particular city

//     const cityUsers = users.filter(
//       (user) => user.address.city === "Gwenborough",
//     );

//     console.log("===== USERS FROM GWENBOROUGH =====");

//     cityUsers.forEach((user) => {
//       console.log(user.name);
//     });

//     // Fetch posts

//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((posts) => {
//         // Posts written by user ID 1

//         const user1Posts = posts.filter((post) => post.userId === 1);

//         console.log("===== POSTS BY USER ID 1 =====");

//         user1Posts.forEach((post) => {
//           console.log(post.title);
//         });

//         // Count posts of user ID 1

//         console.log(`User ID 1 created ${user1Posts.length} posts`);

//         // First post with title greater than 50 characters

//         const longTitlePost = posts.find((post) => post.title.length > 50);

//         console.log(
//           "===== FIRST POST WITH TITLE MORE THAN 50 CHARACTERS =====",
//         );

//         console.log(longTitlePost);
//       });
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("===== COMPLETED =====");
//   });
// ________________________________________
// Task 4 — API + Search
// Use:
// https://fakestoreapi.com/products
// Ask the user:
// Enter product category:
// Example:
// electronics
// Then display only products belonging to that category.
// Also ask:
// Enter maximum price:
// Example:
// 500
// Display products matching both conditions:
// Category = electronics
// Price <= 500
// Concepts: prompt(), fetch(), filter(), conditions, functions.

// const category = prompt("Enter product category:");

// const maxPrice = prompt("Enter maximum price:");

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())

//   .then((products) => {
//     const result = products.filter((product) => {
//       return product.category === category && product.price <= Number(maxPrice);
//     });

//     console.log("===== PRODUCTS =====");

//     result.forEach((product) => {
//       console.log(
//         `Product: ${product.title}Price: $${product.price}Category: ${product.category}            `,
//       );
//     });
//   })

//   .catch((error) => {
//     console.log("Error:", error);
//   });
// ________________________________________
// Task 5 — API Shopping Cart
// Use:
// https://fakestoreapi.com/products
// Fetch the products and create a shopping cart.
// The student should:
// 1.	Display available products.
// 2.	Select products using their IDs.
// 3.	Add selected products to an array.
// 4.	Calculate cart total using reduce().
// 5.	Apply discount:
// o	Above $100 → 10%
// o	Above $200 → 20%
// 6.	Display final amount.
// Example:
// ===== CART =====

// Product 1: Laptop
// Price: $999

// Product 2: Mouse
// Price: $50

// Total: $1049
// Discount: 20%
// Final Amount: $839.20

// fetch("https://fakestoreapi.com/products")

//     .then(response => response.json())

//     .then(products => {

//         // 1. Display available products

//         console.log("===== AVAILABLE PRODUCTS =====");

//         products.forEach(product => {

//             console.log(
//                 `ID: ${product.id} - ${product.title} - $${product.price}`
//             );

//         });


//         // 2. Select products using IDs

//         const id1 = Number(
//             prompt("Enter first product ID:")
//         );

//         const id2 = Number(
//             prompt("Enter second product ID:")
//         );


//         // 3. Add selected products to cart array

//         const cart = [];

//         const product1 = products.find(
//             product => product.id === id1
//         );

//         const product2 = products.find(
//             product => product.id === id2
//         );


//         if (product1) {
//             cart.push(product1);
//         }

//         if (product2) {
//             cart.push(product2);
//         }


//         // 4. Calculate cart total using reduce()

//         const total = cart.reduce(
//             (sum, product) => sum + product.price,
//             0
//         );


//         // 5. Apply discount

//         let discount = 0;

//         if (total > 200) {

//             discount = 20;

//         } else if (total > 100) {

//             discount = 10;

//         }


//         // Calculate discount amount

//         const discountAmount = total * discount / 100;


//         // Final amount

//         const finalAmount = total - discountAmount;


//         // 6. Display cart

//         console.log("===== CART =====");

//         cart.forEach((product, index) => {

//             console.log(
//                 `Product ${index + 1}: ${product.title}`
//             );

//             console.log(
//                 `Price: $${product.price}`
//             );

//             console.log("----------------------");

//         });


//         console.log(`Total: $${total.toFixed(2)}`);

//         console.log(`Discount: ${discount}%`);

//         console.log(
//             `Final Amount: $${finalAmount.toFixed(2)}`
//         );

//     })

//     .catch(error => {

//         console.log("Error:", error);

//     });
// ________________________________________
// Task 6 — FakeStore Product Report
// This is the best intermediate assignment for your current syllabus.
// API:
// https://fakestoreapi.com/products
// Create a complete product report.
// Students must implement:
// 1. Fetch API
// fetch(apiLink)
// 2. Convert response
// response.json()
// 3. Display all products
// Use:
// forEach()
// 4. Create product names array
// Use:
// map()
// 5. Filter expensive products
// price > 100
// Use:
// filter()
// 6. Find electronics product
// Use:
// find()
// 7. Calculate total price
// Use:
// reduce()
// 8. Check products
// Use:
// some()
// every()
// 9. Sort
// Highest price → lowest price.
// 10. Error handling
// Use:
// .catch()
// .finally()
// Expected final output
// ========== PRODUCT REPORT ==========

// Total Products: 20

// Product Names:
// - Fjallraven Backpack
// - Mens Casual Premium Slim Fit T-Shirts
// - Mens Cotton Jacket
// ...

// Products Above $100:
// ...

// Electronics Product:
// ...

// Total Product Value:
// $XXXX

// Any Product Above $500:
// true

// All Products Above $1:
// true

// Highest → Lowest:
// ...
// This stays within the concepts actually present in your student's code, especially the API flow using fetch(), .json(), .then(), .catch() and .finally().

const apiLink = "https://fakestoreapi.com/products";


fetch(apiLink)

    .then(response => response.json())

    .then(products => {

        // 1. Display all products

        console.log("========== PRODUCT REPORT ==========");

        console.log(`Total Products: ${products.length}`);


        console.log("\nProduct Names:");

        products.forEach(product => {

            console.log(`- ${product.title}`);

        });


        // 2. Create product names array using map()

        const productNames = products.map(
            product => product.title
        );

        console.log("\nProduct Names Array:");

        console.log(productNames);


        // 3. Filter products above $100

        const expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });


        // 4. Find electronics product

        const electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("\nElectronics Product:");

        console.log(
            `${electronicsProduct.title} - $${electronicsProduct.price}`
        );


        // 5. Calculate total price using reduce()

        const totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log("\nTotal Product Value:");

        console.log(`$${totalPrice.toFixed(2)}`);


        // 6. Check if any product is above $500

        const anyAbove500 = products.some(
            product => product.price > 500
        );

        console.log("\nAny Product Above $500:");

        console.log(anyAbove500);


        // 7. Check if every product is above $1

        const allAbove1 = products.every(
            product => product.price > 1
        );

        console.log("\nAll Products Above $1:");

        console.log(allAbove1);


        // 8. Sort products from highest price to lowest

        const sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );


        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });

    })

    .catch(error => {

        console.log("Error:", error);

    })

    .finally(() => {

        console.log("\n========== REPORT COMPLETED ==========");

    });
