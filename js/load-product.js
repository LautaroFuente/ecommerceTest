const $product = document.getElementById('product');

document.addEventListener('DOMContentLoaded', function() {

    const params = new URLSearchParams(window.location.search);
  
    const idProducto = params.get('id');
  
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        
        let product = data[`producto${idProducto}`];  
        const productoHTML =`
            <div class="card text-center" style="width: 100%; height: 100%;">
                <img src="assets/producto${idProducto}.webp" class="card-img-top" alt="Reloj" style="width:8rem; height:auto;">
                <div class="card-body">
                    <h5 class="card-title" style="margin-top: 4rem; font-size: 2rem; text-decoration: underline;">${product.nombre}</h5>
                    <p class="card-text" style="margin-top: 4rem; font-size: 1rem; text-decoration: underline;">Precio: $${product.precio}</p>
                    <p class="card-text" style="margin-top: 4rem; font-size: 1rem; text-decoration: underline;">Calificación: ${product.calificacion}</p>
                </div>
            </div>
        `;
        $product.innerHTML = productoHTML;
  
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
  });
  