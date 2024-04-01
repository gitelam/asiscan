<script>
  
  import { goto } from "$app/navigation";

  function returnHome() {
    goto("/app/home");
  }

  function openMenu(id) {
    const menu = document.getElementById("menu" + id);
    menu.classList.toggle("hidden");
  }

</script>

<button
  on:click={returnHome}
  class="mx-20 my-6 bg-transparent hover:bg-green-100 text-green-700 font-semibold hover:border-transparent rounded"
>
  <i class="mr-2 fa-solid fa-arrow-left" style="text-green-700"></i>Volver
</button>

<div class="flex">

  <div class="ml-16 mr-4 mb-0">

    <a
      href="#"
      class="w-auto my-0 mx-2 block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-green-800 dark:border-gray-700 dark:hover:bg-green-700"
    >
      <div class="flex items-center">
        <h5
          class="mr-6 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Asistencias
        </h5>

        <h5
          class="mx-40 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          140
        </h5>
      </div>

      <p class="font-normal text-gray-700 dark:text-gray-400">
        Total de asistencias registradas
      </p>
    </a>

    <a
      href="#"
      class="w-auto my-6 mx-2 block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow dark:border-gray-700 dark:hover:bg-green-100"
    >
      <div class="flex items-center">
        <h5 class="mr-9 mb-2 text-xl font-bold tracking-tight text-gray-500">
          Registros
        </h5>

        <h5 class="mx-40 mb-2 text-xl font-bold tracking-tight text-gray-500">
          3
        </h5>
      </div>

      <p class="font-normal text-gray-700 dark:text-gray-400">
        Asuntos para verificar asistencia
      </p>
    </a>

    <div class="flex mx-2">


      <div class="border rounded-lg pb-4 pt-4">
        <div class="flex justify-between items-center">
          <span class="px-6 mb-1 text-lg font-medium text-gray-700"
            >Registros</span
          >

          <!--esta es una barra de busqueda-->
            <div class="flex mr-4 pt-2 mb-3 mx-auto text-gray-600">
              
              <input class="border-l-2 border-y-2 border-gray-300 bg-white h-10 px-5 rounded-l-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Búscar registro...">

              <div class="flex justify-center items-center border-2 border-gray-300 rounded-r-lg w-8 h-10">
                <button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-2 rounded-r">
                  <svg class="text-gray-600" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                    width="14px" height="14px">
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>

            </div>

         

        </div>

 
        <div class="flex">
          <table
          class="w-full text-sm text-left rtl:text-right text-gray-500"
        >
          <thead class="sticky text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Nombre</th>
              <th scope="col" class="px-6 py-3">Asistencias</th>
            </tr>
          </thead>
          </table>
        </div>

        <div class="max-h-52 overflow-y-auto table-container">
          <table
          class="w-full table-auto text-sm text-left rtl:text-right text-gray-500"
        >
          <!-- <thead class="sticky text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Nombre</th>
              <th scope="col" class="px-6 py-3">Asistencias</th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-5 py-3"></th>
            </tr>
          </thead> -->
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50 border-b">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <div class="truncate w-32 whitespace-normal">
                  CONFERENCIA SAMSUNG TALK NUEVA VISION
                </div>
              </td>
              <td class="px-6 py-4"> 10 </td>

              <td class="py-4">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      on:click={() => {
                        openMenu(1);
                      }}
                      class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      ...
                    </button>
                  </div>

                  <div
                    id="menu1"
                    class="  dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Ver detalles</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Iniciar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Emitir constancias/créditos</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Editar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Eliminar registro</a
                    >
                  </div>
                </div>
              </td>
            </tr>

            <tr class="odd:bg-white even:bg-gray-50 border-b">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <div class="truncate w-32 whitespace-normal">
                  CONFERENCIA SAMSUNG TALK NUEVA VISION
                </div>
              </td>
              <td class="px-6 py-4"> 10 </td>

              <td class="py-4">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      on:click={() => {
                        openMenu(2);
                      }}
                      class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      ...
                    </button>
                  </div>

                  <div
                    id="menu2"
                    class="dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Ver detalles</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Iniciar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Emitir constancias/créditos</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Editar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Eliminar registro</a
                    >
                  </div>
                </div>
              </td>
              <td class="px-6 py-4"> 
              </td>
            </tr>

             <tr class="odd:bg-white even:bg-gray-50 border-b">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <div class="truncate w-32 whitespace-normal">
                  CONFERENCIA SAMSUNG TALK NUEVA VISION
                </div>
              </td>
              <td class="px-6 py-4"> 10 </td>

              <td class="py-4">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      on:click={() => {
                        openMenu(2);
                      }}
                      class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      ...
                    </button>
                  </div>

                  <div
                    id="menu2"
                    class="focus:outline-none dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg hidden"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Ver detalles</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Iniciar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Emitir constancias/créditos</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Editar registro</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Eliminar registro</a
                    >
                  </div>
                </div>
              </td>
              <td class="px-6 py-4"> 
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
      </div>
    </div>
  </div>

  <div class="border rounded-lg p-4 ">
    
    <div class="pl-2">

      <div>
        <h1 class="mr-40 mb-12 text-xl font-bold tracking-tight text-gray-700">
          INNOVATEC 2024
        </h1>
      </div>

      <div class="flex">
        
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            CREADO POR
          </label>

          <p class="font-normal text-gray-700 dark:text-gray-400">Laura G.</p>
        </div>

        <div class="ml-32 mr-32">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            ESTADO
          </label>

          <p class="font-bold text-gray-700 dark:text-green-500">En curso</p>
        </div>

      </div>

      <div class="flex mt-9">
        
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            FECHA DE CREACIÓN
          </label>

          <p class="font-normal text-gray-700 dark:text-gray-400">19 abr. 2024</p>
        </div>

      </div>

      <div class="flex mt-9">
        
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            ÚLTIMA ASISTENCIA REGISTRADA
          </label>

          <p class="font-normal text-gray-700 dark:text-gray-400">29 abr. 2024, 13:09</p>
        </div>

      </div>


      <div class="flex mt-9">
        
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >
            CARRERA DEL EVENTO
          </label>

          <p class="font-normal text-gray-700 dark:text-gray-400">ISC SISTEMAS</p>
        </div>

      </div>


      <div class="flex m-14 align-bottom">
      </div>
      
      <!--button-->
    <a
      href="#"
      class="ml-1 pt-1 pb-1 block max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-green-800 dark:border-gray-700 dark:hover:bg-green-700"
    >
    <div class="flex justify-center">
        <h5
          class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          PAUSAR
        </h5>
        
      </div>

      <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400">
        Se pausarán los registros de asistencias
      </p>

    </a>

    

    </div>
   
  </div>

  
  <div class="border rounded-lg pb-4 pt-4 ml-6">
    <div class="flex justify-between items-center">
      <span class="px-6 mb-1 text-lg font-medium text-gray-700"
        >Asistencias</span
      >

      <!--esta es una barra de busqueda-->
        <div class="flex mr-4 pt-2 mb-3 mx-auto text-gray-600">
          
          <input class="border-l-2 border-y-2 border-gray-300 bg-white h-10 px-5 rounded-l-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Búscar alumno...">

          <div class="flex justify-center items-center border-2 border-gray-300 rounded-r-lg w-8 h-10">
            <button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-2 rounded-r">
              <svg class="text-gray-600" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="14px" height="14px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>

        </div>

     

    </div>



    <!--div con scroll-->

  <div class="max-h-96 overflow-y-auto">
   
    <table
    class="table-auto text-sm text-left rtl:text-right text-gray-500">
    
    <thead class=" text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">Alumno</th>
        <th scope="col" class="px-6 py-3">Num. Control</th>
        <th scope="col" class="px-6 py-3">Asistencia(s) en... </th>
        <th scope="col" class="px-0 py-3">Totales</th>
      </tr>
    </thead>

    <tbody>
      
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            CASTRO MARTINEZ SAMUEL HIRAM
          </div>
        </td>
        <td class="px-6 py-4"> 20212390 </td>

        <td class="px-6 py-4"> STAFF </td>

        <td class="pr-6 py-4"> 
          100000
        </td>
        
      </tr>

      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            BELTRAN LOPEZ DIEGO
          </div>
        </td>
        <td class="px-6 py-4"> C20213909 </td>

        <td class="px-6 py-4"> 
          <div class="truncate w-32 whitespace-normal">
            CONFERENCIA SAMSUNG TALK NUEVA VISION
          </div>
        </td>

        <td class="pr-6 py-4"> 
          2
        </td>

        
      </tr>
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            CASTRO MARTINEZ SAMUEL HIRAM
          </div>
        </td>
        <td class="px-6 py-4"> 20212390 </td>

        <td class="px-6 py-4"> STAFF </td>

        <td class="pr-6 py-4"> 
          2
        </td>
        
      </tr>

      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            BELTRAN LOPEZ DIEGO
          </div>
        </td>
        <td class="px-6 py-4"> C20213909 </td>

        <td class="px-6 py-4"> 
          <div class="truncate w-32 whitespace-normal">
            CONFERENCIA SAMSUNG TALK NUEVA VISION
          </div>
        </td>

        <td class="pr-6 py-4"> 
          2
        </td>

        
      </tr>
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            CASTRO MARTINEZ SAMUEL HIRAM
          </div>
        </td>
        <td class="px-6 py-4"> 20212390 </td>

        <td class="px-6 py-4"> STAFF </td>

        <td class="pr-6 py-4"> 
          3
        </td>
        
      </tr>

      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            CASTRO MARTINEZ SAMUEL HIRAM
          </div>
        </td>
        <td class="px-6 py-4"> 20212390 </td>

        <td class="px-6 py-4"> STAFF </td>

        <td class="pr-6 py-4"> 
          2
        </td>
        
      </tr>

      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            BELTRAN LOPEZ DIEGO
          </div>
        </td>
        <td class="px-6 py-4"> C20213909 </td>

        <td class="px-6 py-4"> 
          <div class="truncate w-32 whitespace-normal">
            CONFERENCIA SAMSUNG TALK NUEVA VISION
          </div>
        </td>

        <td class="pr-6 py-4"> 
          2
        </td>

        
      </tr>
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="truncate w-32 whitespace-normal">
            CASTRO MARTINEZ SAMUEL HIRAM
          </div>
        </td>
        <td class="px-6 py-4"> 20212390 </td>

        <td class="px-6 py-4"> STAFF </td>

        <td class="pr-6 py-4"> 
          323
        </td>
        
      </tr>
     
    </tbody>
  </table>
  </div>

    <!--BUTTON-->
    <a
      href="#"
      class="mx-28 mt-11 pt-1 pb-1 block max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-green-100"
    >
    <div class="flex justify-center">
        <h5
          class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-500"
        >
          EMITIR CRÉDITOS/CONSTANCIAS
        </h5>
        
      </div>

      <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400">
        Debe pausar el evento para emitir.
      </p>

    </a>

  </div>



</div>

<style>

      /* Estilos para el encabezado */
  th {
    position: sticky;
    top: 0;
    background-color: #f7fafc;
  }

  .dropdown-menu {
    z-index: 10; 
  }


  

</style>
