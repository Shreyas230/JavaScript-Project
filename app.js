document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products-container');
    const cart = document.querySelector('.cart-items'); // Changed from '.cart' to '.cart-items'
    const totalSpan = document.getElementById('total');

    // Sample product data
    const products = [
        { id: 1, name: 'Apple', price: 1.00, image: "apple.jpg" },
        { id: 2, name: 'Banana', price: 0.50, image: 'banana.jpg' },
        { id: 3, name: 'Orange', price: 0.75, image: 'orange.jpg' },
        { id: 4, name: 'Grapes', price: 2.50, image: 'grapes.jpg' },
        { id: 5, name: 'Strawberries', price: 3.00, image: 'strawberries.jpg' },
        { id: 6, name: 'Watermelon', price: 4.50, image: 'watermelon.jpg' },
        { id: 10, name: 'Kellogs Cornflakes', price: 0.75, image: 'kellogs.jpg' },
        { id: 11, name: 'Cookies', price: 0.80, image: 'cookies.jpg' } ,
        { id: 12,name:  'Beans' ,price:5.00,image:'beans.jpg'}
    ];

    // Display products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });

    // Add to cart functionality
    productsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    // Add item to cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.price.toFixed(2)}</span>
        `;
        cart.appendChild(cartItem);

        // Update total
        updateTotal();
    }

    // Update total cost
    function updateTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.children[1].textContent.slice(1));
            total += price;
        });
        totalSpan.textContent = total.toFixed(2);
    }

    // Checkout
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        alert(`Total amount: $${totalSpan.textContent}`);
        // Implement further actions here (e.g., payment processing)
    });
});
