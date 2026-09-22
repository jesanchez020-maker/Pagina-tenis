const products = [

    // =========================
    // ADIDAS
    // =========================

    {
        id: 1,
        brand: "Adidas",
        name: "F50 Elite FG",
        price: 7499,
        image: "https://soccerworld.com.au/cdn/shop/files/JH7615_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white.jpg?v=1751276772&width=416"
    },

    {
        id: 2,
        brand: "Adidas",
        name: "F50 League",
        price: 2199,
        image: "https://soccerworld.com.au/cdn/shop/files/JH7615_5_FOOTWEAR_Photography_FrontLateralTopView_white.jpg?v=1751908545&width=416"
    },

    {
        id: 3,
        brand: "Adidas",
        name: "F50 League Messi",
        price: 2299,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white.jpg?v=1781835136&width=416"
    },

    {
        id: 4,
        brand: "Adidas",
        name: "F50 Pro TF",
        price: 2999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_2_FOOTWEAR_Photography_TopPortraitView_white.jpg?v=1781835177&width=416"
    },

    {
        id: 5,
        brand: "Adidas",
        name: "Predator Elite FG",
        price: 7499,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_01_standard.png?v=1735968783&width=416"
    },

    {
        id: 6,
        brand: "Adidas",
        name: "Predator League",
        price: 2199,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_02_standard.png?v=1735968783&width=416"
    },

    {
        id: 7,
        brand: "Adidas",
        name: "Copa Pure Elite",
        price: 5999,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_03_standard.png?v=1735968783&width=416"
    },

    {
        id: 8,
        brand: "Adidas",
        name: "Copa Pure League",
        price: 2299,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_04_standard.png?v=1735968784&width=416"
    },

    {
        id: 9,
        brand: "Adidas",
        name: "F50 Club",
        price: 1699,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_05_standard.png?v=1735968784&width=416"
    },

    {
        id: 10,
        brand: "Adidas",
        name: "F50 Hyperfast Elite",
        price: 7499,
        image: "https://soccerworld.com.au/cdn/shop/files/Predator_24_Elite_Turf_Boots_Black_IG7731_06_standard.png?v=1735968784&width=416"
    },


    // =========================
    // NIKE
    // =========================

    {
        id: 11,
        brand: "Nike",
        name: "Mercurial Superfly 11 Elite",
        price: 7599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1dcc9cca-39b5-4463-8af4-94b5a9ec2961/ZM+SUPERFLY+11+ELITE+FG+KM.png"
    },

    {
        id: 12,
        brand: "Nike",
        name: "Mercurial Superfly 11 Academy",
        price: 2599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/81dca9e9-4bc4-4162-9519-5e26eda94b8b/SUPERFLY+11+ACADEMY+TF+KM.png"
    },

    {
        id: 13,
        brand: "Nike",
        name: "Mercurial Superfly 11 Club",
        price: 1999,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e0c70da7-5696-4683-876f-7efa10fbe21a/SUPERFLY+11+CLUB+TF.png"
    },

    {
        id: 14,
        brand: "Nike",
        name: "Phantom 6 Low Club",
        price: 1999,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e813658-c7ff-4e41-a9db-9722f1eba7b0/PHANTOM+6+LOW+CLUB+TF+T.png"
    },

    {
        id: 15,
        brand: "Nike",
        name: "Phantom 6 High Club",
        price: 1999,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/81866844-dfd7-499f-88f9-b2eb5a167137/PHANTOM+6+HIGH+CLUB+TF.png"
    },

    {
        id: 16,
        brand: "Nike",
        name: "Phantom 6 Low Pro",
        price: 3699,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab0b9f75-7ac4-4da1-99e6-72ddaf8dc883/REACTX+PHANTOM+6+LOW+PRO+TF+T.png"
    },

    {
        id: 17,
        brand: "Nike",
        name: "Phantom 6 High Elite",
        price: 6999,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/997638b7-170b-4072-97d2-1294d2117fac/PHANTOM+6+HIGH+ELITE+FG+T.png"
    },

    {
        id: 18,
        brand: "Nike",
        name: "Phantom 6 High Club FG",
        price: 2199,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1257cf3f-1adb-458c-9560-66ee0cd360e5/PHANTOM+6+HIGH+CLUB+FG%2FMG.png"
    },

    {
        id: 19,
        brand: "Nike",
        name: "Phantom 6 Low Club FG",
        price: 2199,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/20be608c-de64-45bc-8b44-306f9fc0c252/PHANTOM+6+LOW+CLUB+FG%2FMG.png"
    },

    {
        id: 20,
        brand: "Nike",
        name: "Tiempo Maestro Club",
        price: 1799,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da5b33e2-4641-4325-8bc5-45cde328254c/TIEMPO+MAESTRO+CLUB+TF+T.png"
    },


    // =========================
    // PUMA
    // =========================

    {
        id: 21,
        brand: "PUMA",
        name: "Ultra 6 Carbon",
        price: 6999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_3_FOOTWEAR_Photography_BottomView_white.jpg?v=1781835177&width=416"
    },

    {
        id: 22,
        brand: "PUMA",
        name: "Ultra 6 Pro",
        price: 3999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_4_FOOTWEAR_Photography_SideMedialCenterView_white.jpg?v=1781835177&width=416"
    },

    {
        id: 23,
        brand: "PUMA",
        name: "Ultra 6 Match",
        price: 2999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_5_FOOTWEAR_Photography_FrontLateralTopView_white.jpg?v=1781835177&width=416"
    },

    {
        id: 24,
        brand: "PUMA",
        name: "Ultra 6 Play",
        price: 2199,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_6_FOOTWEAR_Photography_BackLateralTopView_white.jpg?v=1781835177&width=416"
    },

    {
        id: 25,
        brand: "PUMA",
        name: "Future 9 Play",
        price: 2199,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_7_FOOTWEAR_Photography_DetailView1_white.jpg?v=1781835177&width=416"
    },

    {
        id: 26,
        brand: "PUMA",
        name: "Future 9 Match",
        price: 2999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_8_FOOTWEAR_Photography_DetailView2_white.jpg?v=1781835177&width=416"
    },

    {
        id: 27,
        brand: "PUMA",
        name: "Future 9 Pro",
        price: 4299,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_14_FOOTWEAR_Photography_HeroMrktngView1.jpg?v=1781835200&width=416"
    },

    {
        id: 28,
        brand: "PUMA",
        name: "King Ultimate",
        price: 4999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_16_FOOTWEAR_Photography_HeroMrktngView5.jpg?v=1781835200&width=416"
    },

    {
        id: 29,
        brand: "PUMA",
        name: "King Match",
        price: 2999,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_18_FOOTWEAR_Photography_HeroMrktngView7.jpg?v=1781835200&width=416"
    },

    {
        id: 30,
        brand: "PUMA",
        name: "King Pro",
        price: 3799,
        image: "https://soccerworld.com.au/cdn/shop/files/IH1892_19_FOOTWEAR_Photography_HeroMrktngView8.jpg?v=1781835200&width=416"
    }

];


/* =========================================
   CARRITO
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("footballzone-cart")
    ) || [];


/* =========================================
   PRECIO
========================================= */

function formatPrice(price) {

    return price.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });

}


/* =========================================
   CONTADOR
========================================= */

function updateCartCount() {

    const count =
        document.getElementById("cart-count");

    if (!count) return;

    const total =
        cart.reduce(
            (sum, product) =>
                sum + product.quantity,
            0
        );

    count.textContent = total;

}


/* =========================================
   GUARDAR
========================================= */

function saveCart() {

    localStorage.setItem(
        "footballzone-cart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================
   AGREGAR
========================================= */

function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();


    alert(
        "✓ " +
        product.name +
        " fue agregado al carrito"
    );

}


/* =========================================
   TARJETA
========================================= */

function createProductCard(product) {

    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.brand} ${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>


                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    AGREGAR AL CARRITO
                </button>

            </div>

        </article>

    `;

}


/* =========================================
   PRODUCTOS
========================================= */

function renderProducts(
    brand = "Todos",
    search = ""
) {

    const container =
        document.getElementById("products");

    if (!container) return;


    const filtered =
        products.filter(product => {

            const correctBrand =
                brand.toLowerCase().trim() === "todos" ||
                product.brand.toLowerCase().trim() ===
                brand.toLowerCase().trim();


            const text =
                (
                    product.brand +
                    " " +
                    product.name
                ).toLowerCase();


            const correctSearch =
                text.includes(
                    search.toLowerCase()
                );


            return (
                correctBrand &&
                correctSearch
            );

        });


    if (filtered.length === 0) {

        container.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:80px;
            ">

                <h2>
                    No encontramos ese tenis.
                </h2>

                <p style="
                    color:#888;
                    margin-top:10px;
                ">
                    Intenta con otro nombre o marca.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filtered
            .map(createProductCard)
            .join("");

}


/* =========================================
   DESTACADOS
========================================= */

function renderFeatured() {

    const container =
        document.getElementById(
            "featured-products"
        );

    if (!container) return;


    container.innerHTML =
        products
            .slice(0, 8)
            .map(createProductCard)
            .join("");

}


/* =========================================
   FILTROS
========================================= */

function setupFilters() {

    const buttons =
        document.querySelectorAll(".filter");

    const search =
        document.getElementById("search");


    let currentBrand = "Todos";


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                currentBrand =
                    button.dataset.brand;


                renderProducts(
                    currentBrand,
                    search
                        ? search.value
                        : ""
                );

            }
        );

    });


    if (search) {

        search.addEventListener(
            "input",
            () => {

                renderProducts(
                    currentBrand,
                    search.value
                );

            }
        );

    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const brand =
        params.get("marca");


    if (
        brand &&
        ["Adidas", "Nike", "PUMA"]
            .includes(brand)
    ) {

        currentBrand = brand;


        buttons.forEach(button => {

            button.classList.remove(
                "active"
            );


            if (
                button.dataset.brand ===
                brand
            ) {

                button.classList.add(
                    "active"
                );

            }

        });


        renderProducts(
            brand,
            ""
        );

    }

}


/* =========================================
   PEDIDO
========================================= */

function renderOrder() {

    const container =
        document.getElementById(
            "order-items"
        );

    const totalElement =
        document.getElementById(
            "order-total"
        );


    if (
        !container ||
        !totalElement
    ) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div style="
                color:#888;
                padding:30px 0;
            ">

                Tu carrito está vacío.

                <br><br>

                <a
                    href="productos.html"
                    style="color:#b7ff00;"
                >
                    VER TENIS
                </a>

            </div>

        `;


        totalElement.textContent =
            formatPrice(0);

        return;

    }


    let total = 0;


    container.innerHTML =
        cart.map(item => {

            const subtotal =
                item.price *
                item.quantity;


            total += subtotal;


            return `

                <div class="order-item">

                    <div>

                        <div class="order-item-name">
                            ${item.name}
                        </div>

                        <small style="
                            color:#777;
                        ">
                            ${item.brand}
                            · ${item.quantity}
                        </small>

                    </div>


                    <div class="order-item-price">
                        ${formatPrice(subtotal)}
                    </div>

                </div>

            `;

        }).join("");


    totalElement.textContent =
        formatPrice(total);

}


/* =========================================
   COMPRA
========================================= */

function setupCheckout() {

    const form =
        document.getElementById(
            "checkout-form"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Tu carrito está vacío."
                );

                return;

            }


            const success =
                document.getElementById(
                    "success-message"
                );


            success.classList.add(
                "show"
            );


            cart = [];


            saveCart();

        }
    );

}


/* =========================================
   INICIAR
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();

        renderFeatured();

        renderProducts();

        setupFilters();

        renderOrder();

        setupCheckout();

    }
);
