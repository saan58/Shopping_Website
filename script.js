// Cart data
let cart = [];
let total = 0;

// Function to add item to the cart
function addToCart(product, price) {
    // Add item to cart array
    alert(`Adding to Cart: ${product} - $${price}`);
    // ... rest of the function
    cart.push({ product, price });

    // Update total
    total += price;

    // Update cart display
    updateCartDisplay();
    // Update cart count
    updateCartCount();
}

// Function to update the cart display
function updateCartDisplay() {
    // Get the cart items element
    const cartItemsElement = document.getElementById('checkout-items');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Add each item to the list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update total
    document.getElementById('checkout-total').textContent = total.toFixed(2);
}


// Function to update the cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Attach event listener to the checkout form
document.getElementById('checkout-form').addEventListener('submit', handleCheckoutForm);