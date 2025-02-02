const products = [
    {
        name: 'SWANS HOODIE GREY MELANGE',
        price: 89,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/SWANS_HOOD_GREY_MELANGE_back1_1200x.jpg?v=1729759821',
        image2: 'https://nude-project.com/cdn/shop/files/ProCam-IMG-1016.jpg?v=1728897297'
    },
    {
        name: 'SWANS HOODIE BLACK',
        price: 89,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/SWAN_HOOD_BLACK_back_1200x.jpg?v=1727271159',
        image2: 'https://nude-project.com/cdn/shop/files/IPHONE1080-9324_800x.jpg?v=1734445294'
    },
    {
        name: 'GRADIENT ZIP-UP HOODIE PINK',
        price: 129,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/GRADIENT_PINK_FRONT_cb0b5e79-500e-48e1-8578-b610e12cfffa_1200x.jpg?v=1733415592',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_6337_800x.png?v=1735056509'
    },
    {
        name: 'GRADIENT ZIP-UP HOODIE BROWN',
        price: 129,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/VOLA_front_0154fac8-8e69-45d0-a6af-b717a5fc87d0_1200x.jpg?v=1725525293',
        image2: 'https://nude-project.com/cdn/shop/files/ffffsa_800x.png?v=1726160100'
    },
    {
        name: 'GRADIENT COZY SWEATER BABY BLUE',
        price: 119,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/GRADIENT_COZY_SWEATER_BROWN_front_1200x.jpg?v=1732196046',
        image2: 'https://nude-project.com/cdn/shop/files/IPHONE1080-2797_800x.jpg?v=1734630030'
    },
    {
        name: 'GRADIENT COZY SWEATER ORANGE',
        price: 119,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/GRADIENT_COZY_SWEATERORANGE_FRONT_1_1200x.jpg?v=1733410263',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_4548.png?v=1735055946'
    },
    {
        name: 'GRADIENT COZY SWEATER RED',
        price: 119,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/GRADIENT_COZY_SWEATER_RED_front_b67b432b-790f-4f87-9c9b-b1e9547d043c_1200x.jpg?v=1732200136',
        image2: 'https://nude-project.com/cdn/shop/files/IPHONE1080-0696.jpg?v=1727283848'
    },
    {
        name: 'FUCK NORMAL HOODIE GREY MELANGE',
        price: 79,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/FUCK_NORMAL_HOOD_GREY_back_1200x.jpg?v=1729782302',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_2102.png?v=1730377699'
    },
    {
        name: 'FUCK NORMAL HOODIE BLACK',
        price: 79,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/FUCK_NORMAL_HOOD_BLACK_back_1200x.jpg?v=1731489565',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_4650_800x.jpg?v=1732209048'
    },
    {
        name: 'FUCK NORMAL HOODIE NAVY',
        price: 79,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/NORMAL_HOOD_NAVY_back_1200x.jpg?v=1729682700',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_1374_bc9c18ae-6182-4817-9e37-72c902458261.png?v=1732208219'
    },
    {
        name: 'OG PUFFER JACKET BLACK',
        price: 219,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/REAL_DOWN_PUFFER_BLACK_front_800x1000_d1efb429-3a54-40c4-b1e2-62f40408320c_1200x.jpg?v=1730996552',
        image2: 'https://nude-project.com/cdn/shop/files/BLACK1.png?v=1731057756&s'
    },
    {
        name: 'OG PUFFER JACKET GREY',
        price: 219,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/REAL_DOWN_PUFFER_GRAY_front_1_800x1000_8fd3f53a-6e6c-4a2e-83e6-5b08b1f50110_1200x.jpg?v=1730997168',
        image2: 'https://nude-project.com/cdn/shop/files/R1-03358-0010_800x.png?v=1730970377'
    },
    {
        name: 'OG PUFFER JACKET MARSHMALLOW',
        price: 219,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/REAL_DOWN_PUFFER_IVORY_front_1_800x1000_16ddf021-5bdc-4640-8b6f-66810a834612_1200x.jpg?v=1730997091',
        image2: 'https://nude-project.com/cdn/shop/files/R1-03362-0032_800x.png?v=1730970681'
    },
    {
        name: 'OG PUFFER JACKET BLUE',
        price: 219,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/REAL_DOWN_PUFFER_BLUE_front_1_800x1000_7a41e477-6001-4e59-b86b-016f064ed519_1200x.jpg?v=1730997029',
        image2: 'https://nude-project.com/cdn/shop/files/BLUE1_800x.png?v=1731057720'
    },
    {
        name: 'LE MARAIS KNIT GREY',
        price: 109,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/LE_MARAIS_KNIT_WHITE_FRONT_1200x.jpg?v=1725986259',
        image2: 'https://nude-project.com/cdn/shop/files/IMG_4180_800x.png?v=1725987113'
    },
    {
        name: 'LE MARAIS KNIT BROWN',
        price: 109,
        seller: 'Nude Project',
        sizes : '<p><span class="no-space">XS</span></p><p>S</p> <p>M</p> <p>L</p> <p><span class="no-space">XL</span></p>',
        image: 'https://nude-project.com/cdn/shop/files/LE_MARAIS_KNIT_BROWN_FRONT_1200x.jpg?v=1725986254',
        image2: 'https://nude-project.com/cdn/shop/files/LE_MARAIS_KNIT_BROWN_BACK.jpg?v=1725986254'
    },

  ];


  const galleryProducts = document.querySelector(".gallery")
  const productsArticle = document.querySelectorAll(".products-article")

  //BUCLE PARA AÑADIR LOS PRODUCTOS

  for (const product of products) {
    const articulos = document.createElement("article")
    articulos.setAttribute("class", "products-article")

    articulos.innerHTML = `
        <img class="image-1" src="${product.image} alt="${product.name}"/>
        <img class="image-2" src="${product.image2} alt="${product.name}"/>
        <h2 class="products-specs">${product.name}</h2>
        <p class="products-specs">€${product.price}</p>
        <p class="products-specs">Vendido por: ${product.seller}</p>
        <div class="sizes-products">
        ${product.sizes}
        </div>
        `

    galleryProducts.appendChild(articulos)

  }  



const looks = [
    {
        products: 4,
        image: 'https://nude-project.com/cdn/shop/files/3_319705dd-26d7-4240-9ce1-cd0fca9004c9.jpg?v=1734692284&width=1000'
    },
    {
        products: 3,
        image: 'https://nude-project.com/cdn/shop/files/2_f15990f2-bd8d-436d-a2cc-bdaad19fe645.jpg?v=1734692284&width=1000'
    },
    {
        products: 2,
        image: 'https://nude-project.com/cdn/shop/files/4_86ce9299-a02f-4ceb-8c88-82167c5d1b7c.jpg?v=1734692285&width=1000'
    },
    {
        products: 3,
        image: 'https://nude-project.com/cdn/shop/files/5_72cc4d65-9d01-47f6-9c3a-8ce54581f296.jpg?v=1734692284&width=1000'
    },
    {
        products: 4,
        image: 'https://nude-project.com/cdn/shop/files/1_6128237e-c83d-4a87-b776-65de48fb2eaa.jpg?v=1734692284&width=1000'
    },
    {
        products: 4,
        image: 'https://nude-project.com/cdn/shop/files/6_7ab82ef0-9d1e-4c58-ae96-ababd41fb63d.jpg?v=1734692284&width=1000'
    },
    {
        products: 3,
        image: 'https://nude-project.com/cdn/shop/files/11_5c0e15ef-2a0c-4b36-b37d-5f73af5e7f74.jpg?v=1731598556&width=1000'
    },
  ];

  const galleryLooks = document.querySelector(".look")

  //BUCLE PARA AÑADIR LOS LOOKS

  for (const look of looks) {
    const articulos = document.createElement("article")
    articulos.innerHTML = `
        <img src="${look.image} alt="Look Completo Nude Project"/>
        <p class ="product-count">SHOP THE LOOK</p>
        <p>${look.products} PRODUCTS</p>
    `
    galleryLooks.appendChild(articulos)
  }


  const filterssDesktop = document.querySelector(".sec-categories")

  filterssDesktop.innerHTML = `
        <p class="product-categories">Categorias</p>
        <nav class="nav-categories">
          <ul class="categories">      
            <li>Sudaderas</li>
            <li>Camisetas</li>
            <li>Punto</li>
            <li>Pantalones</li>
            <li>Chaquetas</li>
            <li>Accesorios</li>
          </ul>
        </nav>

        <p class="product-categories">Colores</p>
        <nav class="nav-categories">
          <ul class="categories">
          <li>Negro</li>
          <li>Gris</li>
          <li>Rosa</li>
          <li>Marron</li>
          <li>Azul</li>
          <li>Naranja</li>
          </ul>
        </nav>

        <p class="product-categories">Tallas</p>
        <nav class="nav-categories">
          <ul class="categories">
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
          </ul>
        </nav>
  `

  const filtersMobile = document.querySelector(".menu-mobile")

  filtersMobile.innerHTML = `
        <nav class="categories-mobile">
          <p>CATEGORIAS</p>
          <ul>
            <li>SUDADERAS</li>
            <li>CAMISETAS</li>
            <li>PANTALONES</li>
            <li>PUNTO</li>
            <li>CHAQUETAS</li>
          </ul>
        </nav>

        <nav class="categories-mobile">
          <p>COLORES</p>
          <ul>
            <li>NEGRO</li>
            <li>GRIS</li>
            <li>ROSA</li>
            <li>MARRON</li>
            <li>AZUL</li>
          </ul>
        </nav>

        <nav class="categories-mobile">
          <p>TALLAS</p>
          <ul>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </nav>
  `

