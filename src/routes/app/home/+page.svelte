<script>
  import { goto } from "$app/navigation";
  import Loading from "../../../lib/Loading.svelte";
  import { fade, slide } from "svelte/transition";
  import RegisterList from "../../../lib/app/Components/Home/RegisterList/RegisterList.svelte";
  import RegisterItem from "../../../lib/app/Components/Home/RegisterList/Children/RegisterItem.svelte";
  
  let data = {};
  let loading = false;

  let c = 0;

  function openModal(modalName) {
    const modal = document.getElementById(modalName);
    modal.showModal();
  }

  function openMenu(id) {
    const menu = document.getElementById("menu" + id);
    menu.classList.toggle("hidden");
  }

  function openEventDetails() {
    goto("/app/eventDetails");
  }

  function startScanning() {
    const modal = document.getElementById("startRegister");
    modal.close();
    loading = true;

    setTimeout(() => {
      loading = false;
      goto("/app/scanner");
    }, 1000);
  }

  function decrement() {
    if (c == 0) {
      c = 0;
    } else {
      c--;
    }
  }

  function increment() {
    c++;
  }

  function addListItem() {

   let list = new RegisterList();

   list.agregarItem();

  }

  function eliminarElemento(id) {
    var lista = document.getElementById("listaElementos" + id);

    lista.removeChild(lista.firstChild);
  }
</script>

<div class="flex mx-16 mb-0">
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a
    on:click={() => openModal("newEvent")}
    class="cursor-pointer w-72 my-6 mx-2 block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-green-800 dark:border-gray-700 dark:hover:bg-green-700"
  >
    <h5
      class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      CREAR NUEVO<br />EVENTO DE<br />ASISTENCIAS
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"></p>

    <div class="flex justify-end">
      <i
        class="pt-4 pb-3 fa-solid fa-calendar-plus fa-2xl"
        style="color: #ffffff;"
      ></i>
    </div>
  </a>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    on:click={() => openModal("createRegister")}
    class="cursor-pointer w-72 my-6 mx-2 block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-green-800 dark:border-gray-700 dark:hover:bg-green-700"
  >
    <h5
      class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      CREAR NUEVO<br />REGISTRO
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"></p>

    <div class="flex justify-end">
      <i
        class="pt-11 pb-0 fa-solid fa-file-circle-plus fa-2xl w-6 h-6 text-gray-800 dark:text-white place-content-between"
        style="color: #ffffff;"
      ></i>
    </div>
  </a>
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a
    on:click={() => openModal("startRegister")}
    class=" cursor-pointer w-72 my-6 mx-2 block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-green-800 dark:border-gray-700 dark:hover:bg-green-700"
  >
    <h5
      class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      INICIAR CAPTURA<br />DE ASISTENCIAS
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"></p>

    <div class="flex justify-end">
      <i class="pt-11 fa-solid fa-user-check fa-2xl" style="color: #ffffff;"
      ></i>
    </div>
  </a>
</div>

<!--TABLA DE REGISTROS RECIENTES-->

<div class="mx-20">
  <div
    class="h-80 overflow-x-auto shadow-md sm:rounded-lg rounded-lg inline-block mb-8 mt-8"
  >
    <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-600 px-5">
      Registros recientes
    </h1>
    <table
      class="table-auto w-full text-sm text-left rtl:text-right text-gray-500"
    >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"> Nombre </th>
          <th scope="col" class="px-6 py-3"> Fecha de inicio </th>
          <th scope="col" class="px-6 py-3"> Evento </th>
          <th scope="col" class="px-6 py-3"> Estado </th>
          <th scope="col" class="px-6 py-3"> Creado por... </th>
          <th scope="col" class="px-6 py-3"> </th>
          <th scope="col" class="px-6 py-3"> </th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            CONFERENCIA 1
          </td>
          <td class="px-6 py-4"> 19 May, 2021 : 10:10 AM </td>
          <td class="px-6 py-4"> INNOVATEC 2024 </td>
          <td class="px-6 py-4"> Activo </td>
          <td class="px-6 py-4"> Laura G. </td>
          <td class="px-6 py-4">
            <div class="relative inline-block text-left">
              <div>
                <button
                  on:click={() => {
                    openMenu(1);
                  }}
                  class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Opciones
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="menu1"
                class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
              >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Iniciar registro</a
                >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <a
                  on:click={() => openModal("reportsModal")}
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Emitir constancias/créditos</a
                >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Editar registro</a
                >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Eliminar registro</a
                >
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <button
              class=" px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Detalles...</button
            >
          </td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PARTICIPANTES
          </td>
          <td class="px-6 py-4"> 18 May, 2021 : 3:12 PM </td>
          <td class="px-6 py-4"> HACKATON 2024 </td>
          <td class="px-6 py-4"> Inactivo </td>
          <td class="px-6 py-4"> Artemio Lara </td>
          <td class="px-6 py-4"></td>
          <td class="px-6 py-4"></td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ENTRADA GENERAL
          </td>
          <td class="px-6 py-4"> 19 May, 2021 : 11:15 AM </td>
          <td class="px-6 py-4"> TALLER DE EMPRENDIMIENTO 2024 </td>
          <td class="px-6 py-4"> Activo </td>
          <td class="px-6 py-4"> M. Jose Luis </td>
          <td class="px-6 py-4"></td>
          <td class="px-6 py-4"></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!--TABLA DE EVENTOS RECIENTES-->

  <div
    class="h-80 overflow-x-auto shadow-md sm:rounded-lg rounded-lg inline-block mb-8"
  >
    <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-600 px-5">
      Eventos recientes
    </h1>
    <table class="table-auto text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"> Nombre </th>
          <th scope="col" class="px-6 py-3"> Fecha de creación </th>
          <th scope="col" class="px-6 py-3"> Carrera</th>
          <th scope="col" class="px-6 py-3"> Estado </th>
          <th scope="col" class="px-6 py-3"> Creado por... </th>
          <th scope="col" class="px-6 py-3"> </th>
          <th scope="col" class="px-6 py-3"> </th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            TEC 2024
          </td>
          <td class="px-6 py-4"> 19 May, 2021 : 10:10 AM </td>
          <td class="px-6 py-4"> ISC SISTEMAS </td>
          <td class="px-6 py-4"> Activo </td>
          <td class="px-6 py-4"> Laura G. </td>
          <td class="px-6 py-4">
            <div class="relative inline-block text-left">
              <div>
                <button
                  on:click={() => {
                    openMenu(2);
                  }}
                  class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Opciones
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="menu2"
                class="dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
              >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Pausar registros</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Emitir constancias/créditos</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Editar evento</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Eliminar evento</a
                >
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <button
              on:click={openEventDetails}
              class="px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Detalles...</button
            >
          </td>
        </tr>

        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            PARTICIPANTES
          </td>
          <td class="px-6 py-4"> 18 May, 2021 : 3:12 PM </td>
          <td class="px-6 py-4"> HACKATON 2024 </td>
          <td class="px-6 py-4"> Inactivo </td>
          <td class="px-6 py-4"> Artemio Lara </td>
          <td class="px-6 py-4">
            <div class="relative inline-block text-left">
              <div>
                <button
                  on:click={() => {
                    openMenu(3);
                  }}
                  class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Opciones
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="menu3"
                class="dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
              >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Iniciar registro</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Emitir constancias/créditos</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Editar registro</a
                >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Eliminar registro</a
                >
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <button
              on:click={openEventDetails}
              class="px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Detalles...</button
            >
          </td>
        </tr>

        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ENTRADA GENERAL
          </td>
          <td class="px-6 py-4"> 19 May, 2021 : 11:15 AM </td>
          <td class="px-6 py-4"> TALLER DE EMPRENDIMIENTO 2024 </td>
          <td class="px-6 py-4"> Activo </td>
          <td class="px-6 py-4"> M. Jose Luis </td>
          <td class="px-6 py-4"></td>
          <td class="px-6 py-4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<dialog id="createRegister" class="bg-white p-8 rounded-lg shadow-xl w-1/3">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold">Añadir nuevo registro</h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="createRegister.close()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Evento o actividad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <div class="flex justify-start items-center">
            <select
              bind:value={data.event}
              class="flex h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            >
              <option value="1">EVENTO X</option>
              <option value="2">ACTIVIDAD Y</option>
              <option value="3">FERIA Z</option>
            </select>
            <button
              class="ml-3 mt-1 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Crear...</button
            >
          </div>
          <p class="mt-1 text-sm text-gray-500">
            Por ejemplo: INNOVATEC 2024, SEMANA DE LA ARQUITECTURA
          </p>
        </div>

        <div class="mt-8">
          <label
            for="add-entry"
            class="block text-sm font-medium text-gray-700"
          >
            Agregar registro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <!--input de nombre de registro-->
          <div class="flex items-center w-full">
            <div class="flex w-full">
              <input
                type="text"
                id="itemInput1"
                class="ml-0 h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nuevo registro..."
              />
              <button
                on:click={() => addListItem(1)}
                class="ml-3 mt-1 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
                >Añadir</button
              >
            </div>
          </div>
          <!--final de input-->

          <p class="mt-1 mb-2 text-sm text-gray-500">
            Un registro es una lista de asistencias.
          </p>

          <div class="mt-1">
            <!--inicio de lista de registros-->

            <div
              class="border rounded-lg pb-0 pt-0 w-full h-60"
              style="background-color: white; "
            >
              <div style=" max-height: 240px; overflow-y: auto;">
                <div id="listaElementos1" class="" style="z-index: -1;">
                  <!-- elementos añadidos -->
                  <!--muestra por defecto-->
                  <div
                    style="border: solid #ccc;
                        border-width: 0 0px 1px 0px;
                        padding: 1em;
                        padding-right: 3em;
                        padding-left: 3em;"
                  >
                    Entradas
                    <button
                      on:click={() => eliminarElemento(1)}
                      style=" float: right;
                        margin-left: 1em; 
                        right: 10px; "
                    >
                      <i
                        class="fa-solid fa-trash"
                        style="color: #4EA44B;padding: 0.5em;"
                      >
                      </i>
                    </button>
                  </div>
                </div>
              </div>
              <!--fin de lista de registros-->
            </div>

            <p class="mt-1 text-sm text-gray-500">
              Por ejemplo: STAFF, ENTRADA, SALIDA, PARTICIPANTES, AYUDANTES,
              ALUMNOS
            </p>
          </div>
        </div>
        <button
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Siguiente</button
        >
      </div>
    </div>
  </div>
</dialog>

<dialog id="newEvent" class="bg-white p-8 rounded-lg shadow-xl w-1/3">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold">Crear nuevo evento</h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="newEvent.close()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Nombre del evento o actividad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <div class="flex justify-start items-center">
            <!-- <input
              bind:value={data.event}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            /> -->
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>

          <p class="mt-1 mb-2 text-sm text-gray-500">
            Por ejemplo: INNOVATEC 2024, SEMANA DE LA ARQUITECTURA
          </p>

          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Carrera de la actividad o evento
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <div class="flex justify-start items-center">
            <select
              bind:value={data.event}
              class="flex h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            >
              <option value="1">CUALQUIERA</option>
              <option value="2">ISC SISTEMAS</option>
              <option value="3">ARQ ARQUITECTURA</option>
            </select>
          </div>
        </div>

        <div class="mt-8">
          <label
            for="add-entry"
            class="block text-sm font-medium text-gray-700"
          >
            Agregar registro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <!--input de nombre de registro-->
          <div class="flex items-center w-full">
            
          </div>
          <!--final de input-->
          <div class="my-2">
            <label for="" class="text-gray-500">
              Un registro es una lista de asistencias.
            </label>

              <RegisterList/>
            
          </div>
          

          

            <p class="mt-1 text-sm text-gray-500">
              Por ejemplo: STAFF, ENTRADA, SALIDA, PARTICIPANTES, AYUDANTES,
              ALUMNOS
            </p>
        </div>
        <button
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Siguiente</button
        >
      </div>
    </div>
  </div>
</dialog>

<dialog id="startRegister" class="bg-white p-8 rounded-lg shadow-xl w-1/3">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold">Inicializar registro de un evento</h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="startRegister.close()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Nombre del evento o actividad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <div class="flex justify-start items-center">
            <select
              bind:value={data.event}
              class="flex h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            >
              <option value="1">INNOVATEC 2024</option>
              <option value="2">TALLER DE SOFTSKILLS</option>
              <option value="3">STAFF INNOVATEC 2024</option>
            </select>

            <button
              class="ml-3 mt-1 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
              >Crear...</button
            >
          </div>

          <p class="mt-1 text-sm text-gray-500">
            Por ejemplo: INNOVATEC 2024, SEMANA DE LA ARQUITECTURA
          </p>
        </div>

        <div class="mt-8">
          <label
            for="add-entry"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Iniciar registro de...
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>

          <select
            multiple
            id="countries_multiple"
            class="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
          >
            <option selected>Salidas</option>
            <option value="US">Staff</option>
            <option value="CA">Entradas</option>
            <option value="FR">Conferencia Samsung</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <button
          on:click={startScanning}
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Iniciar registro QR</button
        >
      </div>
    </div>
  </div>
</dialog>

<dialog id="reportsModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold">
          Emitir créditos/constancias <br />a correo institucional
        </h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="reportsModal.close()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Nombre de registro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <div class="flex justify-start items-center">
            <select
              class="flex h-10 w-3/4 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            >
              <option value="1">CONFERENCIA 1</option>
              <option value="2">PARTICIPANTES</option>
              <option value="3">ENTRADA GENERAL</option>
            </select>
          </div>

          <p class="notAccesible mt-1 text-sm text-gray-500">
            Seleccione un registro para emitir créditos o constancias
          </p>
        </div>

        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Mínimo de asistencias por alumno
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>

          <div class="flex justify-start items-center pt-1">
            <!-- Input Number -->
            <div class="py-2 px-3 bg-gray-100 rounded-lg" data-hs-input-number>
              <div class="w-full flex justify-between items-center gap-x-5">
                <div class="grow">
                  <input
                    class="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0"
                    type="text"
                    value={c}
                    data-hs-input-number-input
                  />
                </div>
                <div class="flex justify-end items-center gap-x-1.5">
                  <button
                    on:click={decrement}
                    type="button"
                    class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-input-number-decrement
                  >
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"><path d="M5 12h14" /></svg
                    >
                  </button>
                  <button
                    on:click={increment}
                    type="button"
                    class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-input-number-increment
                  >
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      ><path d="M5 12h14" /><path d="M12 5v14" /></svg
                    >
                  </button>
                </div>
              </div>
            </div>
            <!-- End Input Number -->
          </div>

          <p class="notAccesible mt-1 text-sm text-gray-500">
            Seleccione asistencias mínimas para validar créditos o constancias
          </p>
        </div>

        <div class="mt-8">
          <label
            for="add-entry"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Registrados
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>

          <div class="max-h-60 overflow-y-auto">
            <table
              class="table-auto text-sm text-left rtl:text-right text-gray-500"
            >
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">Nombre</th>
                  <th scope="col" class="px-6 py-3">Matrícula</th>
                  <th scope="col" class="px-6 py-3">Asistencias</th>
                  <th scope="col" class="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white even:bg-gray-50 border-b">
                  <td
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="truncate w-32 whitespace-normal">
                      CASTRO MARTINEZ SAMUEL HIRAM
                    </div>
                  </td>

                  <td class="px-6 py-4"> 20212390 </td>

                  <td class="px-6 py-4"> 10 </td>

                  <td class="px-4 py-4">
                    <div class="relative inline-block text-left">
                      <div>
                        <button
                          class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Emitir
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-50 border-b">
                  <td
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="truncate w-32 whitespace-normal">
                      BELTRAN LOPEZ DIEGO
                    </div>
                  </td>

                  <td class="px-6 py-4"> C20212390 </td>

                  <td class="py-4"> </td>

                  <td class="px-6 py-4"> </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-50 border-b">
                  <td
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div class="truncate w-32 whitespace-normal">
                      JIMENEZ RIVERA ALAN
                    </div>
                  </td>
                  <td class="px-6 py-4"> 20211990 </td>

                  <td class="py-4">
                    <div class="relative inline-block text-left">
                      <div></div>
                    </div>
                  </td>
                  <td class="px-6 py-4"> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Continuar</button
        >
      </div>
    </div>
  </div>
</dialog>

<!--DIALOG AÑADIR REGISTRO-->

<dialog id="addRegisterModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold mr-16">Añadir registro</h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="addRegisterModal.close()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            Nombre de registro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-1 inline-block h-4 w-4 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </label>
          <p class="notAccesible text-sm text-gray-500">
            Aquí se guardarán asistencias
          </p>
          <div class="flex justify-start items-center">
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>
        </div>

        <button
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Añadir</button
        >
      </div>
    </div>
  </div>
</dialog>

{#if loading}
  <div in:fade out:fade>
    <Loading />
  </div>
{/if}

<style>
  .dropdown-menu {
    z-index: 10; /* Ajusta el z-index para asegurar que el menú esté por encima */
  }

  .notAccesible {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Estilo para el input */
  body,
  html {
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
