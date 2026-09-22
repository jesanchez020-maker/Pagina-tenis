const products = [

    // =========================
    // ADIDAS
    // =========================

    {
        id: 1,
        brand: "Adidas",
        name: "F50 League Messi FG/MG",
        price: 2299,
        image: "https://www.futbolemotion.com/imagesarticulos/229392/750/bota-adidas-f50-league-fgmg-messi-dorado-0.webp"
    },

    {
        id: 2,
        brand: "Adidas",
        name: "Predator Elite FT FG",
        price: 7499,
        image: "https://www.futbolemotion.com/imagesarticulos/272995/750/bota-adidas-predator-elite-ft-fg-jb-core-black-ftwr-white-glory-blue-0.webp"
    },

    {
        id: 3,
        brand: "Adidas",
        name: "F50 Pro FG",
        price: 3999,
        image: "https://www.futbolemotion.com/imagesarticulos/291417/750/bota-adidas-f50-pro-fg-negro-0.webp"
    },

    {
        id: 4,
        brand: "Adidas",
        name: "F50 League LL FG/MG",
        price: 2199,
        image: "https://www.futbolemotion.com/imagesarticulos/291437/750/bota-adidas-f50-league-ll-fgmg-negro-0.webp"
    },

    {
        id: 5,
        brand: "Adidas",
        name: "Predator League SG",
        price: 2499,
        image: "https://www.futbolemotion.com/imagesarticulos/333828/750/bota-adidas-predator-league-sg-negro-0.webp"
    },

    {
        id: 6,
        brand: "Adidas",
        name: "F50 Hyperfast League FG",
        price: 2199,
        image: "https://www.futbolemotion.com/imagesarticulos/327358/750/bota-adidas-f50-hyperfast-league-fg-rosa-0.webp"
    },

    {
        id: 7,
        brand: "Adidas",
        name: "F50 Messi League FG/MG",
        price: 2299,
        image: "https://www.futbolemotion.com/imagesarticulos/266038/750/bota-adidas-f50-messi-league-fg-mg-blanco-0.webp"
    },

    {
        id: 8,
        brand: "Adidas",
        name: "F50 Hyperfast League FG Black",
        price: 2199,
        image: "https://www.futbolemotion.com/imagesarticulos/335841/750/bota-adidas-f50-hyperfast-league-fg-negro-0.webp"
    },

    {
        id: 9,
        brand: "Adidas",
        name: "Predator League FT FG",
        price: 2999,
        image: "https://www.futbolemotion.com/imagesarticulos/291509/750/bota-adidas-predator-league-ft-fg-negro-0.webp"
    },

    {
        id: 10,
        brand: "Adidas",
        name: "F50 Messi League FG/MG Junior",
        price: 1899,
        image: "https://www.futbolemotion.com/imagesarticulos/291307/750/bota-adidas-f50-messi-league-fgmg-kinder-blanco-0.webp"
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
        name: "Mercurial Superfly 11 Pro",
        price: 4599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f50455a8-e017-4daf-bcae-d27eef69878c/ZM+SUPERFLY+11+PRO+FG+KM.png"
    },

    {
        id: 14,
        brand: "Nike",
        name: "Mercurial Superfly 11 Academy FG/MG",
        price: 2599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e30b3b1b-19f8-48e3-b145-a4656ffc3b3c/SUPERFLY+11+ACADEMY+FG%2FMG+KM.png"
    },

    {
        id: 15,
        brand: "Nike",
        name: "Mercurial Vapor 17 Elite",
        price: 6999,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aa4800cb-1f02-4118-be45-2a7a1bfde346/VAPOR+17+ELITE+FG+T+SE.png"
    },

    {
        id: 16,
        brand: "Nike",
        name: "Mercurial Superfly 11 Elite SE",
        price: 7899,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14810f25-c670-4cd8-b0b2-939c4ea2a7b6/ZM+SUPERFLY+11+ELITE+FG+T+SE.png"
    },

    {
        id: 17,
        brand: "Nike",
        name: "Mercurial Superfly 11 Elite",
        price: 7599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5b145286-3559-4c43-84cc-89fc580765dd/ZM+SUPERFLY+11+ELITE+FG.png"
    },

    {
        id: 18,
        brand: "Nike",
        name: "Mercurial Superfly 11 Pro",
        price: 4599,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34c9282e-7840-40e6-9eb7-60006ecc1088/ZM+SUPERFLY+11+PRO+FG.png"
    },

    {
        id: 19,
        brand: "Nike",
        name: "Mercurial Vapor 17 Academy",
        price: 2399,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/13366761-c0e4-401b-a0d2-50f7dc083a1d/VAPOR+17+ACADEMY+TF.png"
    },

    {
        id: 20,
        brand: "Nike",
        name: "Mercurial Vapor 17 Pro",
        price: 3699,
        image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_386,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/96a32925-20a5-4e01-a064-ae29717bba9a/VAPOR+17+PRO+FG.png"
    },


    // =========================
    // PUMA
    // =========================

    {
        id: 21,
        brand: "Puma",
        name: "Future 9 Match MG",
        price: 3299,
        image: "https://www.futbolemotion.com/imagesarticulos/285642/750/bota-puma-future-9-match-mg-rojo-0.webp"
    },

    {
        id: 22,
        brand: "Puma",
        name: "Future 9 Pro FG/AG",
        price: 4299,
        image: "https://www.futbolemotion.com/imagesarticulos/285526/750/bota-puma-future-9-pro-fgag-rojo-0.webp"
    },

    {
        id: 23,
        brand: "Puma",
        name: "Future 9 Match FG/AG",
        price: 2999,
        image: "https://www.futbolemotion.com/imagesarticulos/285527/750/bota-puma-future-9-match-fgag-rojo-0.webp"
    },

    {
        id: 24,
        brand: "Puma",
        name: "Future 9 Match MxSG",
        price: 2999,
        image: "https://www.futbolemotion.com/imagesarticulos/287856/750/bota-puma-future-9-match-mxsg-puma-black-glowing-red-strong-gray-0.webp"
    },

    {
        id: 25,
        brand: "Puma",
        name: "Ultra 6 Pro FG/AG",
        price: 3899,
        image: "https://www.futbolemotion.com/imagesarticulos/285584/750/bota-puma-ultra-6-pro-fgag-negro-0.webp"
    },

    {
        id: 26,
        brand: "Puma",
        name: "Future 9 Play FG/AG",
        price: 2199,
        image: "https://www.futbolemotion.com/imagesarticulos/285575/750/bota-puma-future-9-play-fgag-negro-0.webp"
    },

    {
        id: 27,
        brand: "Puma",
        name: "Future 9 Play FG/AG Red",
        price: 2199,
        image: "https://www.futbolemotion.com/imagesarticulos/285530/750/bota-puma-future-9-play-fgag-rojo-0.webp"
    },

    {
        id: 28,
        brand: "Puma",
        name: "Future 9 Match MxSG Black",
        price: 2999,
        image: "https://www.futbolemotion.com/imagesarticulos/329652/750/bota-puma-future-9-match-mg-negro-0.webp"
    },

    {
        id: 29,
        brand: "Puma",
        name: "Ultra 6 Match FG/AG",
        price: 2499,
        image: "https://www.futbolemotion.com/imagesarticulos/285544/750/bota-puma-ultra-6-match-fgag-amarillo-0.webp"
    },

    {
        id: 30,
        brand: "Puma",
        name: "Ultra 6 Play",
        price: 1999,
        image: "https://www.oneills.com/media/catalog/product/1/0/10870403-front_1.jpg"
    }

];
