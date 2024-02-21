export default function load_best_products(id){
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {

      const productos = document.getElementById('best-container');
  
      for (let i = 0; i < id.length; i++){
        let product = data[`producto${id[i]}`];  

        const productoHTML =`
            <div class="card text-center" style="width: 100%; height: 100%;" id="${product.id}">
                <img src="assets/producto${id[i]}.webp" class="card-img-top" alt="Reloj">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">Precio: $${product.precio}</p>
                    <p class="card-text">Calificación: ${product.calificacion}</p>
                </div>
            </div>
        `;

        productos.innerHTML += productoHTML;
      }  

      productos.querySelectorAll('.card').forEach((card) =>{
        handler_prod(card, card.id);
      });
  
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
  
}

function handler_prod(card, id){
  card.addEventListener('click', () =>{
      const URL = 'producto-dinamico.html?id=' + id;
      window.location.href = URL;
  });
}