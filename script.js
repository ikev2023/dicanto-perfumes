// Cargar los detalles del producto y redirigir a la página de detalles
function redirectToDetails(product) {
  const details = getDetails(product);
  localStorage.setItem("productDetails", JSON.stringify(details));
  window.location.href = "info.html";
}

// Simular obtener detalles del producto desde una fuente de datos
function getDetails(product) {
  let mensaje;
  switch (product) {
    case "versace_blue":
      mensaje = "Hola, me gustaría comprar un Decant Dylan Blue de 'VERSACE' 😁";
      return {
        name: "Versace Blue",
        price: { "10ml": "Q160.00", "5ml": "Q90.00" },
        image: "perfumes_catalogos/versace.png",
        smallImages: [
          "perfumes_catalogos/versace.png",
          "perfumes_catalogos/dylan_blu_mini.png",
          "perfumes_catalogos/dylan_blu_mini2.png"
        ],
        description:
          "Versace Pour Homme Dylan Blue de Versace es una fragancia de la familia olfativa Aromática Fougère para Hombres. Versace Pour Homme Dylan Blue se lanzó en 2016. La Nariz detrás de esta fragancia es Alberto Morillas. Las Notas de Salida son bergamota de Calabria, notas acuáticas, toronja (pomelo) y hojas de higuera; las Notas de Corazón son ambroxan, pimienta negra, pachulí, hojas de violeta y papiro de Egipto; las Notas de Fondo son incienso, almizcle, haba tonka y azafrán",
        mensaje: mensaje,
      };
    case "moschino":
      mensaje = "Hola, me gustaria comprar un Decant Toy Boy de 'MOSCHINO' 😁";
      return {
        name: 'Toy Boy de "MOSCHINO"',
        price: { "10ml": "Q110.00", "5ml": "Q65.00" },
        image: "perfumes_catalogos/epicasas.webp",
        smallImages: [
          "perfumes_catalogos/moschino_small1.jpg",
          "perfumes_catalogos/moschino_small2.jpg",
          "perfumes_catalogos/moschino_small3.jpg"
        ],
        description:
          "Toy Boy de Moschino es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Toy Boy se lanzó en 2019. La Nariz detrás de esta fragancia es Yann Vasnier. Las Notas de Salida son pimienta rosa, pera, nuez moscada de Indonesia, elemí y bergamota; las Notas de Corazón son rosa, clavo de olor, magnolia y lino; las Notas de Fondo son cachemira, vetiver de Haití, sándalo, Sylkolide y ámbar.",
        mensaje: mensaje,
      };
    case "armaf":
      mensaje = "Hola, me gustaria comprar un Decant Club De Nuit de 'ARMAF' 😁";
      return {
        name: 'Club De Nuit de "ARMAF"',
        price: { "10ml": "Q90.00", "5ml": "Q55.00" },
        image: "perfumes_catalogos/armaf club.jpeg",
        smallImages: [
          "perfumes_catalogos/armaf_small1.jpg",
          "perfumes_catalogos/armaf_small2.jpg",
          "perfumes_catalogos/armaf_small3.jpg"
        ],
        description:
          "Club de Nuit Intense Man de Armaf es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Club de Nuit Intense Man se lanzó en 2015. Las Notas de Salida son limón (lima ácida), piña, bergamota, grosellas negras y manzana; las Notas de Corazón son abedul, jazmín y rosa; las Notas de Fondo son almizcle, ámbar gris, pachulí y vainilla.",
        mensaje: mensaje,
      };
    case "halloween":
      mensaje = "Hola, me gustaria comprar un Decant Club De Nuit de 'Halloween Man' 😁.";
      return {
        name: "Halloween Man",
        price: { "10ml": "Q80.00", "5ml": "Q50.00" },
        image: "perfumes_catalogos/hallowen-men.png",
        smallImages: [
          "perfumes_catalogos/halloween_small1.jpg",
          "perfumes_catalogos/halloween_small2.jpg",
          "perfumes_catalogos/halloween_small3.jpg"
        ],
        description: "Descripción detallada del Producto 4.",
        mensaje: mensaje,
      };
    case "ultramale":
      mensaje = "Hola, me gustaria comprar un Decant Club De Nuit de 'Ultra Male Jean Paul Gaultier' 😁.";
      return {
        name: "Ultra Male Jean Paul Gaultier",
        price: { "10ml": "Q132.00", "5ml": "Q76.00" },
        image: "perfumes_catalogos/Jean_paul.png",
        smallImages: [
          "perfumes_catalogos/ultramale_small1.jpg",
          "perfumes_catalogos/ultramale_small2.jpg",
          "perfumes_catalogos/ultramale_small3.jpg"
        ],
        description: "Descripción detallada del Producto 5.",
        mensaje: mensaje,
      };
    case "eros_flame":
      mensaje = "Hola, me gustaria comprar un Decant Club Eros Flame 'VERSACE' 😁.";
      return {
        name: "Eros Flame 'VERSACE'",
        price: { "10ml": "Q140.00", "5ml": "Q80.00" },
        image: "perfumes_catalogos/eros flame.jpg",
        smallImages: [
          "perfumes_catalogos/eros_flame_small1.jpg",
          "perfumes_catalogos/eros_flame_small2.jpg",
          "perfumes_catalogos/eros_flame_small3.jpg"
        ],
        description: "Descripción detallada del Producto 5.",
        mensaje: mensaje,
      };
    case "dior_edt":
      mensaje = "Hola, me gustaria comprar un Decant Dior Homme EAU DE TOILETTE 😁.";
      return {
        name: "Dior Homme EAU DE TOILETTE",
        price: { "10ml": "Q130.00", "5ml": "Q75.00" },
        image: "perfumes_catalogos/dior.jpg",
        smallImages: [
          "perfumes_catalogos/dior_edt_small1.jpg",
          "perfumes_catalogos/dior_edt_small2.jpg",
          "perfumes_catalogos/dior_edt_small3.jpg"
        ],
        description: "Descripción detallada del Producto 5.",
        mensaje: mensaje,
      };
    default:
      return {};
  }
}

// En la página de detalles
document.addEventListener("DOMContentLoaded", function () {
  const storedDetails = localStorage.getItem("productDetails");
  if (storedDetails) {
    const details = JSON.parse(storedDetails);
    displayDetails(details);
  }

  // Agregar event listeners a los radios para cambiar el precio y mensaje
  const radios = document.querySelectorAll('input[name="rdb"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      updateDetails();
      updatePrice();
    });
  });

  // Inicializar los detalles y precio
  updateDetails();
  updatePrice();

  // Configurar las imágenes pequeñas
  const smallImagesContainer = document.getElementById("small-images-container");
  if (storedDetails) {
    const details = JSON.parse(storedDetails);
    details.smallImages.forEach(imgSrc => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.classList.add("img_perfumes2");
      imgElement.onclick = () => cambiar_img(imgSrc);
      smallImagesContainer.appendChild(imgElement);
    });
  }
});

function displayDetails(details) {
  document.getElementById("product-name").innerText = details.name;
  document.getElementById("product-description").innerText =
    details.description;
  document.getElementById("product-image").src = details.image;
  updatePrice();
}

function updateDetails() {
  const storedDetails = localStorage.getItem("productDetails");
  if (storedDetails) {
    const details = JSON.parse(storedDetails);
    const selectedSize = document.querySelector('input[name="rdb"]:checked').id;
    details.selectedSize = selectedSize;
    localStorage.setItem("productDetails", JSON.stringify(details));
  }
}

function updatePrice() {
  const storedDetails = localStorage.getItem("productDetails");
  if (storedDetails) {
    const details = JSON.parse(storedDetails);
    const selectedSize = details.selectedSize;
    document.getElementById(
      "product-price"
    ).innerText = `Precio: ${details.price[selectedSize]}`;
  }
}

function cambiar_img(imgSrc) {
  const productImage = document.getElementById("product-image");
  
  // Añadir la clase 'img_hidden' para ocultar la imagen
  productImage.classList.add("img_hidden");
  
  // Esperar a que termine la transición antes de cambiar la fuente de la imagen
  setTimeout(() => {
    productImage.src = imgSrc;
    
    // Quitar la clase 'img_hidden' para mostrar la imagen con la nueva fuente
    productImage.classList.remove("img_hidden");
  }, 300); // El tiempo debe coincidir con la duración de la transición
}
document.getElementById('whatsappButton').addEventListener('click', function () {
  const storedDetails = localStorage.getItem('productDetails');
  if (storedDetails) {
    const details = JSON.parse(storedDetails);
    const mensajeBase = details.mensaje || "Mensaje predeterminado si no se proporciona un mensaje específico.";
    const selectedSize = details.selectedSize;
    const mensajeConSize = mensajeBase + `\n\nTipo de decant: ${selectedSize}`;
    const imagePath = window.location.origin + '/' + details.image;
    const mensajeConImagen = mensajeConSize + "\n\nImagen: " + imagePath;
    const numeroTelefono = '50259213299';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const enlaceWhatsApp = isMobile
      ? 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensajeConImagen)
      : 'https://web.whatsapp.com/send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensajeConImagen);
    window.open(enlaceWhatsApp, '_blank');
  }
});
