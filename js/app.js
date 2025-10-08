
// Productos

const productos = {
  // Frutas tropicales
  mango: {id:"mango",nombre:"Mango",descripcion:"Mango de pulpa firme, dulce y aromático, perfecto para batidos y ensaladas.",precio:3500,imagen:"img/mango.jpeg",categoria:"frutas-tropicales"},
  piña: {id:"piña",nombre:"Piña",descripcion:"Piña dulce y jugosa, rica en vitamina C y bromelina, ideal para jugos y postres.",precio:4200,imagen:"img/pina.jpeg",categoria:"frutas-tropicales"},
  papaya: {id:"papaya",nombre:"Papaya",descripcion:"Papaya rica en fibra y enzimas digestivas, excelente para desayunos y postres.",precio:3000,imagen:"img/papaya.jpg",categoria:"frutas-tropicales"},
  maracuya: {id:"maracuya",nombre:"Maracuyá",descripcion:"Fruta aromática y ácida, ideal para jugos, postres y salsas.",precio:3800,imagen:"img/maracuya.jpg",categoria:"frutas-tropicales"},
  guanabana: {id:"guanabana",nombre:"Guanábana",descripcion:"Fruta grande y dulce, perfecta para jugos, batidos y postres.",precio:4500,imagen:"img/guanabana.jpeg",categoria:"frutas-tropicales"},
  lulo: {id:"lulo",nombre:"Lulo",descripcion:"Fruta cítrica y refrescante, base para jugos y postres típicos.",precio:3000,imagen:"img/lulo.jpg",categoria:"frutas-tropicales"},
  borojo: {id:"borojo",nombre:"Borojo",descripcion:"Fruta energética y nutritiva, usada en batidos y bebidas revitalizantes.",precio:5500,imagen:"img/borojo.jpg",categoria:"frutas-tropicales"},

  // Frutas cítricas
  naranja: {id:"naranja",nombre:"Naranja",descripcion:"Jugo natural y refrescante, alta en vitamina C, perfecta para el desayuno.",precio:2500,imagen:"img/naranja.jpg",categoria:"frutas-citricas"},
  limon: {id:"limon",nombre:"Limón",descripcion:"Aporta acidez y aroma a platos y bebidas; excelente para conservar y marinar.",precio:1800,imagen:"img/limon.jpeg",categoria:"frutas-citricas"},
  mandarina: {id:"mandarina",nombre:"Mandarina",descripcion:"Dulce, fácil de pelar y perfecta como snack saludable para toda la familia.",precio:2700,imagen:"img/mandarina.jpg",categoria:"frutas-citricas"},
  tamarillo: {id:"tamarillo",nombre:"Tamarillo",descripcion:"Fruta cítrica de pulpa dulce y ligeramente ácida, excelente para jugos y ensaladas.",precio:3200,imagen:"img/tamarindo.jpg",categoria:"frutas-citricas"},
  pomelo: {id:"pomelo",nombre:"Pomelo",descripcion:"Fruta refrescante y jugosa, rica en vitamina C, ideal para desayunos y jugos naturales.",precio:3500,imagen:"img/pomelo.jpg",categoria:"frutas-citricas"},

  // Verduras de hoja
  lechuga: {id:"lechuga",nombre:"Lechuga",descripcion:"Crujiente y fresca, ideal para ensaladas y wraps.",precio:1500,imagen:"img/lechuga.jpg",categoria:"verduras-hoja"},
  espinaca: {id:"espinaca",nombre:"Espinaca",descripcion:"Rica en hierro y vitaminas, para smoothies y guisos.",precio:2000,imagen:"img/espinaca.jpg",categoria:"verduras-hoja"},
  acelga: {id:"acelga",nombre:"Acelga",descripcion:"Versátil y nutritiva, para guisos y sopas.",precio:2200,imagen:"img/acelga.jpg",categoria:"verduras-hoja"},
  repollo: {id:"repollo",nombre:"Repollo",descripcion:"Hojas crujientes y versátiles, ideal para ensaladas, guisos y sopas.",precio:1800,imagen:"img/repollo.jpg",categoria:"verduras-hoja"},
  perejil: {id: "perejil",nombre: "Perejil",descripcion: "Hojas aromáticas, perfectas para sazonar sopas, guisos y ensaladas.",precio: 1200,imagen: "img/perejil.jpg",categoria:"verduras-hoja"},
  cilantro: {id: "cilantro",nombre: "Cilantro",descripcion: "Hojas frescas y aromáticas, ideales para salsas, guisos y ensaladas.",precio: 1300,imagen: "img/cilantro.jpg",categoria:"verduras-hoja"},

  // Tubérculos
  papa: {id:"papa",nombre:"Papa",descripcion:"Textura harinosa, ideal para sopas, purés y asados.",precio:1500,imagen:"img/papa-.jpeg",categoria:"tuberculos"},
  yuca: {id:"yuca",nombre:"Yuca",descripcion:"Tubérculo energético, perfecto para frituras y sancochos familiares.",precio:1800,imagen:"img/yuca.jpeg",categoria:"tuberculos"},
  zanahoria: {id:"zanahoria",nombre:"Zanahoria",descripcion:"Fuente de betacaroteno, para jugos y guarniciones saludables.",precio:2200,imagen:"img/zanahoria.jpg",categoria:"tuberculos"},
  batata: {id:"batata",nombre:"Batata",descripcion:"Tubérculo dulce y suave, ideal para postres, purés y guisos.",precio:2800,imagen:"img/batata.jpg",categoria:"tuberculos"},
  arracacha: {id: "arracacha",nombre: "Arracacha",descripcion: "Tubérculo andino de sabor dulce y textura suave, ideal para sopas, purés y guisos.",precio: 2000,imagen: "img/arracacha.jpg",categoria: "tuberculos"},

  // Frutas exóticas
  rambutan: {id:"rambutan",nombre:"Rambután",descripcion:"Fruta exótica de cáscara roja con espinas suaves, jugosa y dulce, rica en vitamina C.",precio:12000,imagen:"img/rambutan.jpg",categoria:"frutas-exoticas"},
  mangostan: {id:"mangostan",nombre:"Mangostán",descripcion:"Fruta morada con pulpa blanca, suave y muy dulce, considerada la reina de las frutas tropicales.",precio:15000,imagen:"img/mangostan.jpg",categoria:"frutas-exoticas"},
  longan: {id:"longan",nombre:"Longan",descripcion:"Fruta pequeña similar al lichi, de sabor dulce y refrescante, muy consumida en Asia.",precio:10000,imagen:"img/longan.jpeg",categoria:"frutas-exoticas"},
  durian: {id:"durian",nombre:"Durian",descripcion:"Fruta tropical del sudeste asiático, conocida por su olor fuerte y pulpa cremosa y dulce.",precio:18000,imagen:"img/durian.jpg",categoria:"frutas-exoticas"},
  dragonfruit: {id:"dragonfruit",nombre:"Pitahaya (Dragon Fruit)",descripcion:"Fruta de origen asiático, con pulpa blanca o roja y semillas negras, refrescante y ligeramente dulce.",precio:14000,imagen:"img/dragonfruit.jpeg",categoria:"frutas-exoticas"},
  jackfruit: {id:"jackfruit",nombre:"Jackfruit (Yaca)",descripcion:"Fruta gigante originaria de India y el sudeste asiático, con pulpa dulce y textura fibrosa, usada en platos dulces y salados.",precio:20000,imagen:"img/jackfruit.jpg",categoria:"frutas-exoticas"},

  // Frutas internacionales
  albaricoque: {id:"albaricoque",nombre:"Albaricoque",descripcion:"Fruta pequeña y jugosa, de sabor dulce con un toque ácido, perfecta para mermeladas y postres.",precio:8500,imagen:"img/albaricoque.jpg",categoria:"frutas-internacionales"},
  granada: {id:"granada",nombre:"Granada",descripcion:"Fruta exótica de cáscara dura y granos rojos jugosos, rica en antioxidantes y muy refrescante.",precio:9500,imagen:"img/granada.jpg",categoria:"frutas-internacionales"},
  nectarina: {id:"nectarina",nombre:"Nectarina",descripcion:"Similar al durazno pero de piel lisa, jugosa y dulce, ideal para ensaladas y jugos.",precio:8800,imagen:"img/nectarina.jpg",categoria:"frutas-internacionales"},
  kiwi: {id:"kiwi",nombre:"Kiwi",descripcion:"Fruta pequeña, verde por dentro y marrón por fuera, refrescante y rica en vitamina C, perfecta para ensaladas y jugos.",precio:7800,imagen:"img/kiwi.jpg",categoria:"frutas-internacionales"},
  cereza: {id:"cereza",nombre:"Cereza",descripcion:"Fruta pequeña, roja y jugosa, ideal para postres, batidos o como snack saludable.",precio:9500,imagen:"img/cereza.jpg",categoria:"frutas-internacionales"}, 

  // Combos de frutas
mandarina_y_piña: {id: "mandarina_y_piña",nombre: "Combo Mandarina y Piña",descripcion: "Deliciosa combinación de mandarina jugosa y piña dulce, ideal para jugos cítricos y refrescantes.",precio: 4700,imagen: "img/mandarinaypina.jpg",categoria: "combos-de-frutas"},
banano_y_pera: {id: "banano_y_pera",nombre: "Combo Banano y Pera",descripcion: "Dúo suave y dulce de banano y pera, perfecto para snacks saludables o batidos cremosos.",precio: 4600,imagen: "img/bananoypera.jpg",categoria: "combos-de-frutas"},
piña_y_limon: {id: "piña_y_limon",nombre: "Combo Piña y Limón",descripcion: "Mezcla tropical y cítrica de piña y limón, ideal para bebidas refrescantes y digestivas.",precio: 4500,imagen: "img/pinaylimon.jpg",categoria: "combos-de-frutas"},

// Combos de verduras
brocoli_y_zanahoria: {id: "brocoli_y_zanahoria",nombre: "Combo Brócoli y Zanahoria",descripcion: "Clásico nutritivo con brócoli fresco y zanahorias dulces, ideal para sopas, ensaladas y guarniciones.",precio: 5200,imagen: "img/brocoliyzanahoria.jpg",categoria: "combos-de-verduras"},
hojas_verdes: {id: "hojas_verdes",nombre: "Combo Hojas Verdes",descripcion: "Selección fresca de lechuga, espinaca, rúcula, brócoli y col rizada, perfecta para ensaladas llenas de vitaminas.",precio: 5500,imagen: "img/hojasverdes.jpg",categoria: "combos-de-verduras"},
repollo_tomate_y_mas: {id: "repollo_tomate_y_mas",nombre: "Combo Repollo, Tomate y Más",descripcion: "Colorida mezcla de repollo, tomates, zanahorias, cebolla y calabacín, lista para sofritos y ensaladas.",precio: 5300,imagen: "img/repolloymas.jpg",categoria: "combos-de-verduras"}
};


// --- Helper para resolver rutas de imagen ---
function getImgSrc(path) {
  if (!path) return '';

  if (/^(https?:)?\/\//i.test(path)) return path;

  const clean = path.replace(/^\/+/, '');

  if (window.location.protocol === 'file:') {
    if (window.location.pathname.includes('/paginas/')) return '../' + clean;
    return clean;
  }
 
  if (path.startsWith('/')) return path;

  if (window.location.pathname.includes('/paginas/')) return '../' + clean;

  return clean;
}

// Carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
actualizarContador();


// Función para generar card

function generarCardProducto(p) {
  return `
  <div class="col-6 col-lg-4 col-xl-3 mb-4">
    <div class="card shadow-sm h-100 product-card" style="height:481px;">
      <img src="${getImgSrc(p.imagen)}" alt="${p.nombre}" class="card-img-top product-img" style="height:220px; object-fit:cover; cursor:pointer;" onclick="verDetalle('${p.id}')">
      <div class="card-body d-flex flex-column" style="padding-bottom:0.5rem;">
        <h5 class="card-title mb-1">${p.nombre}</h5>
        <p class="text-muted mb-1" style="font-size:14px;">${p.descripcion}</p>


       
           
        <p class="fw-bold text-success mb-2">$${p.precio} / Kilo</p>
        <div class="d-flex mb-2">
          <input type="number" min="1" value="1" class="form-control me-2" id="cantidad-${p.id}" style="max-width:80px; font-size:14px;">
          <select class="form-select" id="unidad-${p.id}" style="max-width:120px; font-size:14px;">
            <option value="kilo">Kilos</option>
            <option value="libra">Libras</option>
          </select>
        </div>
        <button class="btn btn-success btn-sm w-100 mt-auto" onclick="agregarAlCarrito('${p.id}','${p.nombre}',${p.precio})">Agregar al carrito</button>
      </div>
    </div>
  </div>
  `;
}


// Render dinámico por categoría

["frutas-tropicales","frutas-citricas","verduras-hoja","tuberculos","frutas-exoticas","frutas-internacionales","combos-de-frutas", "combos-de-verduras"].forEach(cat => {
  const cont = document.getElementById(`${cat}-lista`);
  if(cont){
    // Filtrar productos por categoría
    let productosCategoria = Object.values(productos).filter(p => p.categoria === cat);

    // Si estamos en index.html, mostrar solo 4
    if(window.location.pathname.endsWith("index.html") || window.location.pathname === "/"){
      productosCategoria = productosCategoria.slice(0, 4);
    }

    cont.innerHTML = productosCategoria.map(p => generarCardProducto(p)).join("");
  }
});

// Productos recomendados (ejemplo: selecciona algunos a mano)
const recomendados = ["mango", "lechuga", "kiwi", "mandarina_y_piña"];

// Render dinámico para recomendados
const contRecomendados = document.getElementById("recomendados-lista");
if (contRecomendados) {
  contRecomendados.innerHTML = recomendados
    .map(id => generarCardProducto(productos[id]))
    .join("");
}


// Funciones carrito

function agregarAlCarrito(id,nombre,precio){
  const cantidad = parseInt(document.getElementById(`cantidad-${id}`).value);
  const unidad = document.getElementById(`unidad-${id}`).value;
  let item = carrito.find(p=>p.id===id && p.unidad===unidad);
  if(item) item.cantidad += cantidad;
  else carrito.push({id,nombre,precio,cantidad,unidad});
  localStorage.setItem("carrito",JSON.stringify(carrito));
  actualizarContador();
}

function actualizarContador(){
  const total = carrito.reduce((acc,p)=>acc+p.cantidad,0);
  if(document.getElementById("cart-count")) document.getElementById("cart-count").innerText = total;
  if(document.getElementById("cart-count-mobile")) document.getElementById("cart-count-mobile").innerText = total;
}

function mostrarCarrito(){
  const cont = document.getElementById("carrito-lista");
  if(!cont) return;
  cont.innerHTML = "";
  let total=0,totalProd=0;
  carrito.forEach((item,index)=>{
    const p = productos[item.id];
    const subtotal = item.precio*item.cantidad;
    total+=subtotal;
    totalProd+=item.cantidad;
    cont.innerHTML+=`
      <div class="col-12 mb-3">
        <div class="card shadow-sm p-2">
          <div class="row g-2 align-items-center">
            <div class="col-2"><img src="${getImgSrc(p.imagen)}"  alt="${p.nombre} " class="img-fluid rounded" style="width:100px;height:100px;object-fit:cover;cursor:pointer;" onclick="verDetalle('${p.id}')">
            </div>
            <div class="col-6">
              <h6>${item.nombre}</h6>
              <p class="mb-1 text-muted" style="font-size:14px;">Unidad: <strong>${item.unidad}</strong></p>
              <p class="mb-1 text-success fw-bold" style="font-size:14px;">Precio unitario: $${item.precio}</p>
              <p class="mb-1 text-success fw-bold" style="font-size:14px;">Subtotal: $${subtotal}</p>
            </div>
            <div class="col-4 d-flex flex-column align-items-end justify-content-between">
              <button class="btn btn-danger btn-sm mb-4" onclick="eliminarProducto(${index})">Eliminar</button>
              <div>
                <label for="cantidad-${index}" class="form-label mb-1" style="font-size:13px;">Cantidad:</label>
                <input id="cantidad-${index}" type="number" min="1" value="${item.cantidad}" onchange="cambiarCantidad(${index},this.value)" style="width:50px;font-size:14px;text-align:center;">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  if(document.getElementById("total-general")) document.getElementById("total-general").innerText="$"+total;
  if(document.getElementById("total-productos")) document.getElementById("total-productos").innerText=totalProd;
}

function eliminarProducto(index){
  carrito.splice(index,1);
  localStorage.setItem("carrito",JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}

function cambiarCantidad(index,nueva){
  nueva = parseInt(nueva);
  if(nueva>0) carrito[index].cantidad=nueva;
  else carrito[index].cantidad=1;
  localStorage.setItem("carrito",JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}


// Ver detalle producto

function verDetalle(id){
  localStorage.setItem("productoSeleccionado", id);

  // Si la página actual está en la carpeta paginas
  if (window.location.pathname.includes("/paginas/")) {
    window.location.href = "detalle.html";  // ya estás dentro de /paginas/
  } else {
    window.location.href = "paginas/detalle.html"; // vienes desde index
  }
}



// Mostrar detalle en detalle.html

if(document.getElementById("detalle-producto")){
  const id = localStorage.getItem("productoSeleccionado");
  const p = productos[id];
  if(p){
    document.getElementById("detalle-producto").innerHTML=`
      <div class="row">
        <div class="col-md-6">
          <img src="${getImgSrc(p.imagen)}"  alt="${p.nombre} "class="img-fluid rounded shadow-sm" style="max-height:400px; object-fit:cover; width:100%;">
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h2 class="mb-2">${p.nombre}</h2>
          <p class="text-muted" style="font-size:15px; line-height:1.4;">${p.descripcion}</p>
          <p class="fw-bold text-success fs-5">$${p.precio} / Kilo</p>
          <div class="d-flex mb-3 gap-2">
            <input type="number" min="1" value="1" class="form-control" id="cantidad-${p.id}" style="max-width:90px;">
            <select class="form-select" id="unidad-${p.id}" style="max-width:120px;">
              <option value="kilo">Kilos</option>
              <option value="libra">Libras</option>
            </select>
            <button class="btn btn-success w-100" onclick="agregarAlCarrito('${p.id}','${p.nombre}',${p.precio})"><i class="bi bi-cart3 me-1"></i>Agregar</button>
          </div>
          <div class="mt-auto"><a href="../index.html" class="btn btn-secondary w-35">Volver</a></div>
        </div>
      </div>
    `;
    // Productos relacionados
    if(document.getElementById("relacionados")){
      document.getElementById("relacionados").innerHTML = Object.values(productos).filter(prod=>prod.categoria===p.categoria && prod.id!==p.id)
        .map(prod=>`
          <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <div class="card shadow-sm product-card" style="height:430px;">
              <img src="${getImgSrc(prod.imagen)}"  alt="${prod.nombre} " class="card-img-top product-img" style="height:180px; object-fit:cover; cursor:pointer;" onclick="verDetalle('${prod.id}')">

              <div class="card-body d-flex flex-column">
                <h5>${prod.nombre}</h5>
                 <p class="text-muted mb-1" style="font-size:14px;">${p.descripcion}</p>
                <p class="fw-bold text-success mb-2">$${prod.precio} / Kilo</p>
                <div class="d-flex mb-2">
                  <input type="number" min="1" value="1" class="form-control me-2" id="cantidad-${prod.id}" style="max-width:80px;">
                  <select class="form-select" id="unidad-${prod.id}" style="max-width:120px;">
                    <option value="kilo">Kilos</option>
                    <option value="libra">Libras</option>
                  </select>
                </div>
              <button class="btn btn-success btn-sm mt-auto" onclick="agregarAlCarrito('${prod.id}','${prod.nombre}',${prod.precio})"><i class="bi bi-cart3 me-1"></i> Agregar</button>


              </div>
            </div>
          </div>
        `).join("");
    }
  }
}

// Mostrar carrito si contenedor existe
if(document.getElementById("carrito-lista")) mostrarCarrito();

