const $cont_prod = document.getElementById('container-products');

document.addEventListener('DOMContentLoaded', (e)=>{
    load_all_products();
    search();
});

function load_all_products(){
    getData();
}

async function getData(){
    $frag = document.createDocumentFragment();
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {

      for (let elem in data) {
        let product = elem;  
        
        const productoHTML =`
            <div class="card text-center" style="width: 100%; height: 100%;">
                <img src="assets/producto${data[product].id}.webp" class="card-img-top" alt="Reloj">
                <div class="card-body">
                    <h5 class="card-title">${data[product].nombre}</h5>
                    <p class="card-text">Precio: $${data[product].precio}</p>
                    <p class="card-text">Calificación: ${data[product].calificacion}</p>
                </div>
            </div>
        `;
        $div = document.createElement("div");
        $div.classList.add('flex');
        $div.innerHTML = productoHTML;
        $frag.appendChild($div);

        handler_prod($div.querySelector('.card'),data[product].id);
      }
      $cont_prod.appendChild($frag);
  
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error)); 
}

function search(){
    document.addEventListener('keyup', (e)=>{
        if(e.target.matches('#search')){

            if(e.key === 'Escape') e.target.value='';            
            execute_search(e);

        }
    });
}

function execute_search(e){
    document.querySelectorAll('.flex').forEach((el)=>{
        let card = el.querySelector('.card');
        let card_body = el.querySelector('.card-body');
        let name = card_body.querySelector('.card-title');
        name.textContent.toLocaleLowerCase().includes(e.target.value)
        ? el.classList.remove('filter')
        :el.classList.add('filter')
    })
}

function handler_prod(card, id){
    card.addEventListener('click', () =>{
        const URL = 'producto-dinamico.html?id=' + id;
        window.location.href = URL;
    });
}