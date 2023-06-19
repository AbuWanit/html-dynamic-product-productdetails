// productdetails.js

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the product ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    fetch("/products.json") // Replace with the path to your JSON file
        .then((response) => response.json())
        .then((data) => {
            const productDetailsContainer =
                document.getElementById("product-details");

            // Find the product with the matching ID
            const product = data.find((product) => product.id === productId);

            // Create the HTML structure for displaying the product details
            const productDetailsHTML = `
             <div class="row g-4">
                        <div class="col-12 col-md-12 col-lg-6">
                            <!-- card left -->
                            <div class="product-image">
                                <img
                                    src="${product.image}"
                                    alt="${product.name}" />
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6">
                            <!-- card right -->
                            <div class="product-content">
                                <div class="product-detail">
                                    <div class="border-bottom">
                                        <h4>${product.name}</h4>
                                        <p>${product.description}</p>
                                        <ul class="mb-2">
                                            <li class="my-2">
                                                <strong>Material:</strong>
                                                <span>
                                                    ${product.material}</span
                                                >
                                            </li>
                                            <li class="my-2">
                                                <strong>Sleeve Style:</strong>
                                                <span>${product.style}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul class="py-2 border-bottom">
                                        <li class="my-2">
                                            <strong>Category:</strong>
                                            <span>${product.category}</span>
                                        </li>
                                        <li class="my-2 mt-3">
                                            <strong>Tag:</strong>
                                            <span>
                                                ${product.tags.join(", ")}</span
                                            >
                                        </li>
                                    </ul>

                                    <ul class="py-2 border-bottom">
                                        <li class="my-2">
                                            <strong>Category:</strong>
                                            <span>Mens</span>
                                        </li>
                                        <li class="my-2">
                                            <strong>Tag:</strong>
                                            <span>Mens Solid Shirt</span>
                                        </li>
                                    </ul>

                                    <ul class="py-2">
                                        <li class="my-2">
                                            <strong>Phone:</strong>
                                            <a href="tel:+8801711568505"
                                                >+88 01711568505</a
                                            >
                                        </li>
                                        <li class="my-2">
                                            <strong>WhatsApp:</strong>
                                            <a
                                                href="https://wa.me/+8801711568505"
                                                target="_blank"
                                                >+88 01711568505</a
                                            >
                                        </li>
                                        <li class="my-2">
                                            <strong>Skype:</strong>
                                            <a
                                                href="skype:live:Shamim_279?chat"
                                                target="_blank"
                                                >Salah Uddin Ahmed Shamim</a
                                            >
                                        </li>
                                        <li class="my-2">
                                            <strong>Email:</strong>
                                            <a href="mailto:shamim@ifstex.com"
                                                >shamim@ifstex.com</a
                                            >
                                        </li>
                                    </ul>
                                    <ul class="py-2">
                                        <a
                                            class="btn primary"
                                            href="contact.html"
                                            >Order Now</a
                                        >
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            `;

            // Append the product details HTML to the container
            productDetailsContainer.innerHTML = productDetailsHTML;
        })
        .catch((error) => console.log(error));
});
