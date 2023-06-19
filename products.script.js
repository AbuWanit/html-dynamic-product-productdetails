document.addEventListener("DOMContentLoaded", function () {
    fetch("/products.json") // Replace with the path to your JSON file
        .then((response) => response.json())
        .then((data) => {
            const productContainer =
                document.querySelector(".product-container");
            const kidsProductContainer = document.querySelector(
                ".kids-product-container"
            );
            const mensProductContainer = document.querySelector(
                ".mens-product-container"
            );
            const womansProductContainer = document.querySelector(
                ".womans-product-container"
            );

            if (kidsProductContainer) {
                // Create a new row container for kids products
                const kidsRowContainer = document.createElement("div");
                kidsRowContainer.classList.add("row", "g-4");

                const kidsProduct = data.filter(
                    (item) => item.category === "Kids"
                );
                const kidsCards = kidsProduct.map((product) => {
                    return `
                    <div class="col-md-6 col-12 col-lg-4 col-xl-4">
                        <div class="pro-card">
                            <div class="image">
                                <img src="${product.image}" alt="${
                        product.name
                    }" />
                            </div>
                            <div class="content">
                                <h5>${product.name}</h5>
                                <p>${product.description.slice(
                                    0,
                                    100
                                )}...<a href="productdetails.html?id=${
                        product.id
                    }">View Details</a></p>
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <a class="text-btn" href="contact.html">Order Now</a>
                                    <small class="">Min Order Quantity 10k Piece</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                });

                // Append the kids product cards to the kids row container
                kidsRowContainer.innerHTML = kidsCards.join("");

                // Append the kids row container to the kids product container
                kidsProductContainer.appendChild(kidsRowContainer);
            }

            if (mensProductContainer) {
                // Similarly, create new row containers for mens and womans products
                // and append the product cards to their respective containers

                // Create a new row container for mens products
                const mensRowContainer = document.createElement("div");
                mensRowContainer.classList.add("row", "g-4");

                const mensProduct = data.filter(
                    (item) => item.category === "Men's"
                );
                const mensCards = mensProduct.map((product) => {
                    return `
                    <div class="col-md-6 col-12 col-lg-4 col-xl-4">
                        <div class="pro-card">
                            <div class="image">
                                <img src="${product.image}" alt="${
                        product.name
                    }" />
                            </div>
                            <div class="content">
                                <h5>${product.name}</h5>
                                <p>${product.description.slice(
                                    0,
                                    100
                                )}...<a href="productdetails.html?id=${
                        product.id
                    }">View Details</a></p>
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <a class="text-btn" href="contact.html">Order Now</a>
                                    <small class="">Min Order Quantity 10k Piece</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                });

                // Append the mens product cards to the mens row container
                mensRowContainer.innerHTML = mensCards.join("");

                // Append the mens row container to the mens product container
                mensProductContainer.appendChild(mensRowContainer);
            }

            if (womansProductContainer) {
                // Create a new row container for womans products
                const womansRowContainer = document.createElement("div");
                womansRowContainer.classList.add("row", "g-4");

                const womansProduct = data.filter(
                    (item) => item.category === "Woman's"
                );
                const womansCards = womansProduct.map((product) => {
                    return `
                    <div class="col-md-6 col-12 col-lg-4 col-xl-4">
                        <div class="pro-card">
                            <div class="image">
                                <img src="${product.image}" alt="${
                        product.name
                    }" />
                            </div>
                            <div class="content">
                                <h5>${product.name}</h5>
                                <p>${product.description.slice(
                                    0,
                                    100
                                )}...<a href="productdetails.html?id=${
                        product.id
                    }">View Details</a></p>
                                <div class="d-flex justify-content-between align-items-center flex-wrap">
                                    <a class="text-btn" href="contact.html">Order Now</a>
                                    <small class="">Min Order Quantity 10k Piece</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                });

                // Append the womans product cards to the womans row container
                womansRowContainer.innerHTML = womansCards.join("");

                // Append the womans row container to the womans product container
                womansProductContainer.appendChild(womansRowContainer);
            }
        })
        .catch((error) => console.log(error));
});
