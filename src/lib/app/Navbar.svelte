<script>
  import { goto } from "$app/navigation";
  import Loading from "../Loading.svelte";
  import { fade, slide } from "svelte/transition";
  let isMenuOpen = false;
  let isSidebarOpen = false;
  let loading = false;

  let profilePicture = `https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/311693255_2099624763574076_8587080800396754404_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE-oFIUGaD6Iyzvjqffa4IQ5gaAvgJA8JLmBoC-AkDwku2ZmAOlt179B_TAHV6abq5d-F9_3s-uN2Q2Wj8dbgAI&_nc_ohc=IfDfbbq7K5QAX8vJyLw&_nc_ht=scontent.ftij3-2.fna&oh=00_AfBLQYHoiojzEWPoGYVamYpE33uchArC-jUL0leQXUrp5w&oe=6582DF3E`;

  let userJson = `{
    "name": "Diego",
    "lastName": "Beltran",
    "secondLastName": "Lopez",
    "career": "Ing. Sistemas",
    "picture": "/images/dummy.jpg",
    "dateBirth": "1998-10-10",
    "controlNum": "20212390",
    "email": "20212390@tectijuana.edu.mx"
  }
  `;

  let user = JSON.parse(userJson);

  console.log(user);

  let completeName = `${user.name} ${user.lastName} ${user.secondLastName}`;

  function showModal(modalName) {
    const modal = document.getElementById(modalName);
    modal.showModal();
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function closeSidebar() {
    isSidebarOpen = false;
  }

  function logOut() {
    loading = true;
    //localStorage.removeItem("token");
    setTimeout(() => {
      loading = false;
      goto("/auth/login");
    }, 1000);
  }
</script>

<aside
  class="{isSidebarOpen
    ? 'translate-x-0'
    : '-translate-x-full'} fixed top-0 left-0 h-full w-60 bg-gray-200 text-white transition-transform duration-300 ease-in-out"
>
  <!-- Sidebar content goes here -->
  <div class="p-4">
    <div class="flex items-center justify-self-center">
      <button
        on:click={toggleSidebar}
        class="p-2 focus:outline-none focus:ring focus:border-blue-300 mr-2"
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
        >
          <path
            d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
            fill="#0F0F0F"
          />
        </svg>
      </button>
      <img src="/images/logo_ITT.png" alt="logo" class="h-12 w-12" />
      <span class="text-xl font-bold text-gray-900">Asiscan ITT</span>
    </div>
    <div class="mt-10">
      <a
        class="flex items-center justify-self-start hover:bg-white hover:text-gray-900 rounded-md py-3 px-2"
        href="/app/home"
      >
        <i class="fa-solid fa-house text-gray-900"></i>
        <span class="text-xl font-bold text-gray-900 ml-3">Inicio</span>
      </a>
      <a
        class="flex items-center justify-self-start hover:bg-white hover:text-gray-900 rounded-md py-3 px-2"
        href="/"
      >
        <i class="fa-solid fa-house text-gray-900"></i>
        <span class="text-xl font-bold text-gray-900 ml-3">Reportes</span>
      </a>
      <a
        class="flex items-center justify-self-start hover:bg-white hover:text-gray-900 rounded-md py-3 px-2"
        href="/"
      >
        <i class="fa-solid fa-house text-gray-900"></i>
        <span class="text-xl font-bold text-gray-900 ml-3">Inbox</span>
      </a>
      <a
        class="flex items-center justify-self-start hover:bg-white hover:text-gray-900 rounded-md py-3 px-2"
        href="/"
      >
        <i class="fa-solid fa-house text-gray-900"></i>
        <span class="text-xl font-bold text-gray-900 ml-3">Media</span>
      </a>
      <a
        class="flex items-center justify-self-start hover:bg-white hover:text-gray-900 rounded-md py-3 px-2"
        href="/"
      >
        <i class="fa-solid fa-house text-gray-900"></i>
        <span class="text-xl font-bold text-gray-900 ml-3">Calendar</span>
      </a>
    </div>
  </div>
</aside>

<!--navbar lateral-->

<nav class="flex items-center justify-between bg-white border-b">
  <div class="flex items-center">
    <button
      class="text-white bg-green-800 px-2 py-5 ml-0 mr-3 w-16"
      on:click={toggleSidebar}
    >
      <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
    </button>

    <img src="/images/logo_ITT.png" alt="logo" class="h-12 w-12" />
    <span class="ml-1 text-xl font-bold">Asiscan ITT</span>
  </div>
  <div class="flex items-center mx-2">
    <div>
      <h1 value="" class="text-sm font-bold text-gray-900">
        {user.name}
        {user.lastName}
        {user.secondLastName}
      </h1>
      <p class="text-gray text-xs text-gray-600">{user.career}</p>
    </div>
    <button
      on:click={toggleMenu}
      class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 w-10 ml-4"
    >
      <img src={user.picture} alt="User" class="rounded-full" />
    </button>
    {#if isMenuOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={closeMenu}
        class="absolute right-0 mt-56 w-56 mr-1 bg-white border rounded-md shadow-lg"
      >
        <div class="py-1">
          <a
            on:click={() => showModal("myProfileModal")}
            href="#"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            ><i class="fa-solid fa-user mr-3"></i>Mi perfil</a
          >
          <a href="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            ><i class="fa-solid fa-user-tie mr-3"></i>Panel de administración</a
          >
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            on:click={logOut}
            ><i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>Cerrar
            sesión</a
          >
        </div>
      </div>
    {/if}
  </div>
</nav>

<dialog id="myProfileModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-0">
        <h1 class="text-xl font-bold mr-16">Mi perfil</h1>
        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="myProfileModal.close()"
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

      <div class="flex mb-4">
        <!--imagen de usuario-->
        <div class="w-60 p-2 pt-10">
          <img src={user.picture} alt="User" class="rounded-full" />
        </div>

        <!--informacion del perfil-->
        <div class="ml-12 pr-12">
          <h1 class="text-2xl font-bold mr-16" for="career">
            {completeName}
          </h1>

          <h1 class="mr-40 mb-6 text-xl font-bold tracking-tight text-gray-700">
            {user.career}
          </h1>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">num. control</p>
            <label
              for="add-entry"
              class="block text-sm font-medium text-gray-700"
            >
              {user.controlNum}
            </label>
          </div>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">
              correo institucional
            </p>
            <label
              for="add-entry"
              class="block text-sm font-medium text-gray-700"
            >
              {user.email}
            </label>
          </div>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">
              fecha de nacimiento
            </p>
            <label
              for="add-entry"
              class="block text-sm font-medium text-gray-700"
            >
              {user.dateBirth}
            </label>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="mr-auto">
          <button
            on:click={() => showModal("changePasswordModal")}
            class="mx-0 my-0 bg-transparent hover:bg-green-100 text-green-700 font-semibold hover:border-transparent rounded"
          >
            <i class="mr-2 fa-solid fa-lock" style="text-green-700"></i>cambiar
            contraseña
          </button>
        </div>
        <div class="">
          <button
            on:click={() => showModal("editMyProfileModal")}
            class="mx-0 my-0 bg-transparent hover:bg-green-100 text-green-700 font-semibold hover:border-transparent rounded"
          >
            <i class="mr-2 fa-solid fa-pen" style="text-green-700"></i>modificar
            datos
          </button>
        </div>
      </div>
    </div>
  </div>
</dialog>

<dialog id="editMyProfileModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">
  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-0">
        <h1 class="text-xl font-bold mr-16">Editar perfil</h1>
        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="editMyProfileModal.close()"
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

      <div class="flex mb-4">
        <!--imagen de usuario-->
        <div class="w-60 p-2 pt-10">
          <img src={user.picture} alt="User" class="rounded-full" />
          <div class="">
            <button
              on:click={() => console.log("none")}
              class="w-full mx-0 my-0 bg-transparent hover:bg-green-100 font-semibold hover:border-transparent rounded text-green-700"
            >
              <i class="mr-2 fa-solid fa-pen text-green-700"></i>cambiar foto
            </button>
          </div>
        </div>

        <!--informacion del perfil-->
        <div class="ml-12 pr-12">
          <div class="mb-6">
            <div class="flex">
              <div class="nombres w-60 mr-2">
                <p class="notAccesible text-sm text-gray-500">
                  nombre(s)
                </p>

                <input
                  value={user.name}
                  class="w-full h-10 pr-0 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                />
              </div>
              <div class="apellidos">
                <p class="notAccesible text-sm text-gray-500">apellidos</p>
                <div class="flex">
                  <input
                  value={user.lastName}
                  class="mr-2 w-full h-10 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                />
                <input
                  value={user.secondLastName}
                  class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                />
                </div>
               
              </div>
            </div>
          </div>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">num. control</p>
            <input
              value={user.controlNum}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">
              correo institucional
            </p>
            <input
              value={user.email}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>

          <div class="mb-6">
            <p class="notAccesible text-sm text-gray-500">
              fecha de nacimiento
            </p>
            <input
              value={user.dateBirth}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="date"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="mr-6">
          <button
            on:click={() => console.log("none")}
            onclick="editMyProfileModal.close()"
            class="mx-0 my-0 bg-transparent hover:bg-green-100 font-semibold hover:border-transparent rounded"
            style="color: #619bff;"
          >
            <i class="mr-2 fa-solid fa-xmark" style="color: #619bff;"
            ></i>cancelar
          </button>
        </div>
        <div class="">
          <button
            on:click={() => console.log("none")}
            class="mx-0 my-0 bg-transparent hover:bg-green-100 text-green-700 font-semibold hover:border-transparent rounded"
          >
            <i class="mr-2 fa-solid fa-check" style="text-green-700"></i>guardar
            datos
          </button>
        </div>
      </div>
    </div>
  </div>
</dialog>


<dialog id="changePasswordModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">

  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h2 class="text-2xl font-bold mr-16">
          Cambiar contraseña
        </h2>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="changePasswordModal.close()"
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

            Contraseña actual
           
          </label>

          <div class="flex justify-start items-center">
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="career"
          >

            Nueva contraseña
           
          </label>

          <div class="flex justify-start items-center">
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
              type="text"
            />
          </div>
        </div>

        
        <button
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-500 bg-green-500 text-white hover:bg-green-100 hover:text-gray-500"
          >aceptar</button
        >
        <button
          onclick="changePasswordModal.close()"
          class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-gray-500 bg-gray-500 text-white hover:bg-green-100 hover:text-gray-500"
          >cancelar</button
        >
        
      </div>
    </div>
  </div>
  
</dialog>





<!-- <dialog id="myProfileModal" class="bg-white p-8 rounded-lg shadow-xl w-fit">

  <div class="bg-white rounded-lg">
    <div class="w-full">
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold mr-16">
          title
        </h1>

        <button
          class="text-gray-400 hover:text-gray-500"
          onclick="myProfileModal.close()"
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

            subtitle
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
            description
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
          >button</button
        >
      </div>
    </div>
  </div>
  
</dialog> -->

{#if loading}
  <div in:fade out:fade>
    <Loading />
  </div>
{/if}
