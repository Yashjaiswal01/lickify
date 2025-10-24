

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lickify - Your Favorite Food Delivered</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-utensils"></i>
                <span>Lickify</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#restaurants" class="nav-link">Restaurants</a></li>
                <li><a href="#menu" class="nav-link">Menu</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
            </ul>
            <div class="nav-right">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search food or restaurants...">
                </div>
                <button class="cart-btn" id="cart-btn">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count" id="cart-count">0</span>
                </button>
                <button class="login-btn">Sign In</button>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Your Favorite Food<br>Delivered <span class="highlight">Hot & Fresh</span></h1>
            <p>Delicious meals from the best cafes & restaurants in Potheri, Chennai</p>
            
            <div class="hero-search">
                <div class="location-input">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="Potheri, Chennai" value="Potheri, Chennai">
                </div>
                <button class="find-food-btn">Find Food <i class="fas fa-arrow-right"></i></button>
            </div>
            <div class="hero-stats">
                <div class="stat">
                    <h3>9+</h3>
                    <p>Restaurants</p>
                </div>
                <div class="stat">
                    <h3>5K+</h3>
                    <p>Happy Customers</p>
                </div>
                <div class="stat">
                    <h3>25min</h3>
                    <p>Average Delivery</p>
                </div>
            </div>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop" alt="Delicious Food">
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <h2 class="section-title">Browse by Category</h2>
        <div class="category-grid">
            <div class="category-card" data-category="coffee">
                <div class="category-icon">☕</div>
                <h3>Coffee</h3>
            </div>
            <div class="category-card" data-category="biryani">
                <div class="category-icon">🍛</div>
                <h3>Biryani</h3>
            </div>
            <div class="category-card" data-category="dessert">
                <div class="category-icon">🍰</div>
                <h3>Desserts</h3>
            </div>
            <div class="category-card" data-category="snacks">
                <div class="category-icon">🍟</div>
                <h3>Snacks</h3>
            </div>
            <div class="category-card" data-category="arabian">
                <div class="category-icon">🥙</div>
                <h3>Arabian</h3>
            </div>
            <div class="category-card" data-category="beverages">
                <div class="category-icon">🥤</div>
                <h3>Beverages</h3>
            </div>
        </div>
    </section>

    <!-- Popular Restaurants -->
    <section id="restaurants" class="restaurants">
        <h2 class="section-title">Popular Cafes & Restaurants in Potheri</h2>
        <div class="restaurant-grid" id="restaurant-grid">
            <!-- Restaurants will be loaded dynamically -->
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu-section">
        <h2 class="section-title">Featured Dishes</h2>
        <div class="filter-tabs">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="coffee">Coffee</button>
            <button class="filter-btn" data-filter="biryani">Biryani</button>
            <button class="filter-btn" data-filter="dessert">Desserts</button>
            <button class="filter-btn" data-filter="snacks">Snacks</button>
            <button class="filter-btn" data-filter="arabian">Arabian</button>
        </div>
        <div class="menu-grid" id="menu-grid">
            <!-- Menu items will be loaded dynamically -->
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="about-content">
            <div class="about-text">
                <h2>Why Choose <span class="highlight">Lickify?</span></h2>
                <p>We connect you with the best cafes and restaurants in Potheri, Chennai, ensuring fast delivery and quality food every time.</p>
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-shipping-fast"></i>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Get your food delivered in 25 minutes or less across Potheri</p>
                        </div>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <h4>Quality Guaranteed</h4>
                            <p>Fresh ingredients and top-rated restaurants</p>
                        </div>
                    </div>
                    <div class="feature">
                        <i class="fas fa-mobile-alt"></i>
                        <div>
                            <h4>Easy Ordering</h4>
                            <p>Order from anywhere with our mobile app</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&h=500&fit=crop" alt="Delivery">
            </div>
        </div>
    </section>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header">
            <h3><i class="fas fa-shopping-cart"></i> Your Cart</h3>
            <button class="close-cart" id="close-cart"><i class="fas fa-times"></i></button>
        </div>
        <div class="cart-items" id="cart-items">
            <p class="empty-cart">Your cart is empty</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cart-total">₹0.00</span>
            </div>
            <button class="checkout-btn">Proceed to Checkout</button>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <div class="logo">
                    <i class="fas fa-utensils"></i>
                    <span>Lickify</span>
                </div>
                <p>Your favorite food delivered fresh and fast.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#restaurants">Restaurants</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li><i class="fas fa-phone"></i> +91 98765 43210</li>
                    <li><i class="fas fa-envelope"></i> hello@lickify.com</li>
                    <li><i class="fas fa-map-marker-alt"></i> Potheri, Chennai, Tamil Nadu</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Lickify. All rights reserved.</p>
        </div>
    </footer>

    <script src="index.js"></script>
</body>
</html>

