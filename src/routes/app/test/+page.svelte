<script>



  function añadirElemento() {
    var valor = document.getElementById("itemInput").value;

    if (valor === "") {
      alert("Por favor, ingresa un valor.");
      return;
    }

    var lista = document.getElementById("listaElementos");

    var nuevoElemento = document.createElement("div");

    nuevoElemento.textContent = valor;

    nuevoElemento.style = `z-index: 10;
                           border: solid #ccc;
                           border-width: 0 0px 1px 0px;
                           padding: 1em;
                           padding-right: 3em;
                           padding-left: 3em;
                           `;

    var botonEliminar = document.createElement("button");

    var trashcanIcon = document.createElement("i");
    trashcanIcon.className = "fa-solid fa-trash";
    trashcanIcon.style = `color: #4EA44B;
                  padding: 0.5em;`;

    botonEliminar.textContent = "";

    botonEliminar.style = `
                           float: right;
                           margin-left: 1em; 
                           right: 10px; 
                          `;

    botonEliminar.appendChild(trashcanIcon);

    botonEliminar.onclick = function () {
      lista.removeChild(nuevoElemento);
    };

    //aqui se le añade una etiqueta interna al texto div
    nuevoElemento.appendChild(botonEliminar);

    lista.appendChild(nuevoElemento);

    document.getElementById("itemInput").value = "";
  }

  function eliminarElemento() {
    var lista = document.getElementById("listaElementos");

    lista.removeChild(lista.firstChild);
  }


</script>






<div class="flex items-center justify-center border rounded-lg" style="width: 100vw; height: 93vh; background-color: lightblue;">
  
    <div class="border rounded-lg pb-4 pt-4 w-96 h-80" style="background-color: white; z-index: 11;">
       <div class="flex">
            <input
              type="text"
              id="itemInput"
              class="ml-2 h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Escriba nombre de registro..."
            />
            <button
              on:click={() => añadirElemento()}
              class="ml-2 mt-1 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Añadir</button
            >
      </div>
      <div style=" max-height: 250px; /* Altura máxima para el contenedor */
      overflow-y: auto;">
        <div id="listaElementos" class="" style="z-index: -1;">
        
            <!-- elementos añadidos -->
            
            <div style="border: solid #ccc;
            border-width: 0 0px 1px 0px;
            padding: 1em;
            padding-right: 3em;
            padding-left: 3em;">
            Entradas
            <button on:click={()=>eliminarElemento()} style=" float: right;
            margin-left: 1em; 
            right: 10px; ">
                <i class="fa-solid fa-trash" style="color: #4EA44B;padding: 0.5em;" >
    
                </i>
            </button>
            </div>

      </div>
      
        

      </div>

    </div>
    

</div>






<style>
  
  /* Estilo para el input */
  body, html {
      margin: 0;
      padding: 0;
    }

  #itemInput {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
  }

  #itemInput:focus {
    border-color: #3366ff;
  }

</style>
