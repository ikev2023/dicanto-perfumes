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
          "notas/dylan_blue.png"
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
          "perfumes_catalogos/epicasas.webp",
          "perfumes_catalogos/toyboy_mini1.png",
          "notas/toyboy.png"
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
          "perfumes_catalogos/armaf club.jpeg",
          "perfumes_catalogos/armaf_mini.webp",
          "notas/armaf.png"
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
          "perfumes_catalogos/hallowen-men.png",
          "perfumes_catalogos/hallowen_mini2.webp",
          "notas/hallowen.png"
        ],
        description: "Halloween Man de Halloween es una fragancia de la familia olfativa Ámbar Amaderada para Hombres. Halloween Man se lanzó en 2012. Las Notas de Salida son Martini, hojas de violeta, mandarina y albahaca; las Notas de Corazón son canela, lavanda, flor de jengibre y flor de azahar del naranjo; las Notas de Fondo son vainilla, ámbar, cuero y almizcle.",
        mensaje: mensaje,
      };
    case "ultramale":
      mensaje = "Hola, me gustaria comprar un Decant Club De Nuit de 'Ultra Male Jean Paul Gaultier' 😁.";
      return {
        name: "Ultra Male Jean Paul Gaultier",
        price: { "10ml": "Q132.00", "5ml": "Q76.00" },
        image: "perfumes_catalogos/Jean_paul.png",
        smallImages: [
          "perfumes_catalogos/Jean_paul.png",
          "perfumes_catalogos/ultramale_mini.webp",
          "notas/ultramale.png"
        ],
        description: "Ultra Male de Jean Paul Gaultier es una fragancia de la familia olfativa Ámbar Fougère para Hombres. Ultra Male se lanzó en 2015. La Nariz detrás de esta fragancia es Francis Kurkdjian. Las Notas de Salida son pera, lavanda, menta, bergamota y limón (lima ácida); las Notas de Corazón son canela, esclarea y alcaravea; las Notas de Fondo son vaina de vainilla negra, ámbar, pachulí y cedro.",
        mensaje: mensaje,
      };
    case "eros_flame":
      mensaje = "Hola, me gustaria comprar un Decant Club Eros Flame 'VERSACE' 😁.";
      return {
        name: "Eros Flame 'VERSACE'",
        price: { "10ml": "Q140.00", "5ml": "Q80.00" },
        image: "perfumes_catalogos/eros flame.jpg",
        smallImages: [
          "perfumes_catalogos/eros flame.jpg",
          "perfumes_catalogos/eros_flame_mini.png",
          "notas/eros_flame.png"
        ],
        description: "Eros Flame de Versace es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Eros Flame se lanzó en 2018. La Nariz detrás de esta fragrancia es Olivier Pescheux. Las Notas de Salida son mandarina, pimienta de Madagascar, limón (lima ácida), Chinotto y romero; las Notas de Corazón son geranio, rosa y Pepperwood™; las Notas de Fondo son vainilla, haba tonka, sándalo, cedro de Texas, pachulí y musgo de roble.",
        mensaje: mensaje,
      };
    case "dior_edt":
      mensaje = "Hola, me gustaria comprar un Decant Dior Homme EAU DE TOILETTE 😁.";
      return {
        name: "Dior Homme EAU DE TOILETTE",
        price: { "10ml": "Q130.00", "5ml": "Q75.00" },
        image: "perfumes_catalogos/dior.jpg",
        smallImages: [
          "perfumes_catalogos/dior.jpg",
          "perfumes_catalogos/dior_mini.jpg",
          "notas/dior.png"
        ],
        description: "Dior Homme Sport 2017 de Dior es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Dior Homme Sport 2017 se lanzó en 2017. La Nariz detrás de esta fragrancia es François Demachy. Las Notas de Salida son naranja sanguina, toronja (pomelo), limón (lima ácida) y pera; las Notas de Corazón son pimienta rosa, nuez moscada y geranio; las Notas de Fondo son sándalo y vetiver.",
        mensaje: mensaje,
      };
    case "eros_edt":
      mensaje = "Hola, me gustaria comprar un Decant Eros Eau de Toilette 'VERSACE' 😁.";
      return {
        name: "Eros Eau de Toilette 'VERSACE'",
        price: { "10ml": "Q160.00", "5ml": "Q90.00" },
        image: "perfumes_catalogos/eros.jpg",
        smallImages: [
          "perfumes_catalogos/eros.jpg",
          "perfumes_catalogos/eros_blu_mini.jpg",
          "notas/eros_blu.png"
        ],
        description: "Eros de Versace es una fragancia de la familia olfativa Aromática Fougère para Hombres. Eros se lanzó en 2012. La Nariz detrás de esta fragrancia es Aurélien Guichard. Las Notas de Salida son menta, manzana verde y limón (lima ácida); las Notas de Corazón son haba tonka, ambroxan y geranio; las Notas de Fondo son vainilla de Madagascar, cedro de Virginia, cedro del Atlas, vetiver y musgo de roble.",
        mensaje: mensaje,
      };
    case "y_edt":
      mensaje = "Hola, me gustaria comprar un Decant Y EAU DE TOILETTE 😁.";
      return {
        name: "Y EAU DE TOILETTE",
        price: { "10ml": "Q165.00", "5ml": "Q92.00" },
        image: "perfumes_catalogos/y_toilette.jpg",
        smallImages: [
          "perfumes_catalogos/y_toilette.jpg",
          "perfumes_catalogos/y_toilette_mini.jpg",
          "notas/y_toilete.png"
        ],
        description: "Y Eau de Toilette de Yves Saint Laurent es una fragancia de la familia olfativa para Hombres. Esta fragancia es nueva. Y Eau de Toilette se lanzó en 2022. La Nariz detrás de esta fragancia es Dominique Ropion. Las Notas de Salida son aldehídos, bergamota y jengibre; las Notas de Corazón son lavanda, esclarea y geranio; las Notas de Fondo son ámbar gris, vainilla, incienso de olíbano (franquincienso) y cedro.",
        mensaje: mensaje,
      };
    case "y_edp":
      mensaje = "Hola, me gustaria comprar un Decant Y EAU DE PARFUM 😁.";
      return {
        name: "Y EAU DE PARFUM",
        price: { "10ml": "Q190.00", "5ml": "Q105.00" },
        image: "perfumes_catalogos/y_perfum.jpeg",
        smallImages: [
          "perfumes_catalogos/y_perfum.jpeg",
          "perfumes_catalogos/y_perfume_mini.jpg",
          "notas/y_perfume.png"
        ],
        description: "Y Eau de Parfum de Yves Saint Laurent es una fragancia de la familia olfativa Aromática Fougère para Hombres. Y Eau de Parfum se lanzó en 2018. La Nariz detrás de esta fragrancia es Dominique Ropion. Las Notas de Salida son manzana, jengibre y bergamota; las Notas de Corazón son salvia, bayas de enebro y geranio; las Notas de Fondo son Amberwood, haba tonka, cedro, vetiver y incienso de olíbano (franquincienso).",
        mensaje: mensaje,
      };
    case "the_icon":
      mensaje = "Hola, me gustaria comprar un Decant The Icon EAU DE TOILETTE 😁.";
      return {
        name: "The Icon EAU DE TOILETTE",
        price: { "10ml": "Q65.00", "5ml": "Q43.00" },
        image: "perfumes_catalogos/banderas.jpeg",
        smallImages: [
          "perfumes_catalogos/banderas.jpeg",
          "perfumes_catalogos/banderas_mini.jpg",
          "notas/banderas.png"
        ],
        description: "The Icon de Antonio Banderas es una fragancia de la familia olfativa Ámbar Amaderada para Hombres. The Icon se lanzó en 2020. Las Notas de Salida son toronja (pomelo) y pimienta negra; las Notas de Corazón son lavanda y salvia; las Notas de Fondo son sándalo y musgo de roble.",
        mensaje: mensaje,
      };
      case "givenchy":
      mensaje = "Hola, me gustaria comprar un Decant Givenchy pour homme 😁.";
      return {
        name: "Givenchy pour homme",
        price: { "10ml": "Q110.00", "5ml": "Q65.00" },
        image: "perfumes_catalogos/givenchy.jpeg",
        smallImages: [
          "perfumes_catalogos/givenchy.jpeg",
          "perfumes_catalogos/givenchy_mini.jpeg",
          "notas/givenchy.png"
        ],
        description: "Givenchy pour Homme de Givenchy es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Givenchy pour Homme se lanzó en 2002. Givenchy pour Homme fue creada por Alberto Morillas y Ilias Ermenidis. Las Notas de Salida son mandarina, toronja (pomelo), cilantro y violeta; las Notas de Corazón son vetiver y extracto de lavanda; las Notas de Fondo son cedro y ládano.",
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
