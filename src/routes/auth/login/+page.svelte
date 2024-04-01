<script>
import { goto } from '$app/navigation';
import Toast from '../../../lib/Toast.svelte';
import Loading from '../../../lib/Loading.svelte';
import { fade,slide} from 'svelte/transition';

var toastTitle = 'Toast';
var toastDescription = 'toast';
var toastClassColor = 'bg-green-500';
var showToast = false;
var loading = false;

function activateToast(){
  showToast = true;
  setTimeout(() => {
    showToast = false;
  }, 3000);
}

function changePassword(){
  const email = document.getElementById('emailPassword').value;
  if(email == ''){
    toastTitle = 'Error';
    toastDescription = 'El campo de correo no puede estar vacío';
    toastClassColor = 'bg-red-500';
    activateToast();
    return;
  }

}

function openForgotPasswordModal(){
  const forgotPassword = document.getElementById('forgotPassword');
  forgotPassword.showModal();
}

function  goToRegister(){
  loading = true;
 
 setTimeout(() => {
   loading = false;
   goto('/auth/register');
 }, 1000);
 
}

function logIn(){
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email == ''){
    toastTitle = 'Error';
    toastDescription = 'El campo de correo/usuario no puede estar vacío';
    toastClassColor = 'bg-red-500';
    activateToast();
    return;
  }
  if(password == ''){
    toastTitle = 'Error';
    toastDescription = 'El campo de contraseña no puede estar vacío';
    toastClassColor = 'bg-red-500';
    activateToast();
    return;
  }

  loading = true;
  setTimeout(() => {
   loading = false;
   goto('/app/home');
 }, 1000);
}
</script>


    <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6">
        <div class="w-full max-w-md" out:fade in:fade>
          <div class="flex justify-center mb-6">
            <img
              src="/images/logo_ITT.png"
              alt="Logo"
              class="h-20 w-20"
              width="100"
              height="100"
              style="aspect-ratio: 100 / 100; object-fit: cover;"
            />
            <div class="ml-3">
              <h2 class="text-left text-3xl font-extrabold text-gray-900 mb-2">ASISCAN ITT</h2>
              <p class="text-left text-sm font-medium text-gray-600 mb-8">Gestor de asistencias ITT</p>
          </div>
          </div>
         
          <div class="border text-card-foreground w-full bg-white py-8 px-6 shadow-md rounded-lg" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Iniciar sesión</h3>
            </div>
            <div class="p-6">
              <div class="space-y-6">
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Nombre de usuario / correo
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="email@address.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Contraseña
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    placeholder="******************"
                    type="password"
                  />
                </div>
                <div class="flex justify-between">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <a class="font-medium text-sm text-green-600 hover:text-green-500 cursor-pointer" on:click={openForgotPasswordModal}>
                    Olvidé mi contraseña...
                  </a>
                </div>
                <div>
                  <button on:click={logIn}   class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-green-600 text-white">
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
            <div class="items-center p-6 flex justify-center pt-4">
              <button on:click={goToRegister} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 px-4 py-2 w-full border-green-600 text-green-600 hover:border-green-500 hover:text-green-500">
                Registrarse
              </button>
            </div>
          </div>
        </div>
    </div>


{#if showToast}
<div in:fade out:fade>
  <Toast {toastTitle} {toastDescription} {toastClassColor}  />
</div>
{/if}

<dialog id="forgotPassword" class="bg-white p-8 rounded-lg shadow-xl w-1/3 " >
  <div class="bg-white rounded-lg " >
    <div class="w-full" >
      <div class="flex justify-between items-center pb-8">
        <h1 class="text-2xl font-bold" >Recuperar contraseña</h1>
        
        <button class="text-gray-400 hover:text-gray-500" onclick="forgotPassword.close()">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <p class="text-sm text-gray-900">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        <div>
          <label class="text-sm font-medium leading-none" for="emailPassword">
            Correo electrónico
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="emailPassword"
            placeholder="johndoe@gmail.com">
            
            <button on:click={changePassword} class=" mt-5 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-green-600 text-white">
              Enviar
            </button>
    </div>
  </div>
</dialog>

{#if loading}
<div in:fade out:fade>
  <Loading />
</div>
{/if}
