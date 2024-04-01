<script>
import { fade,slide} from 'svelte/transition';

import { goto } from '$app/navigation';
import Toast from "../../../lib/Toast.svelte";
  import Loading from '../../../lib/Loading.svelte';
let step = 1;

var toastTitle = 'Toast';
var toastDescription = 'toast';
var toastClassColor = 'bg-green-500';
var showToast = false;
var loading = false;

var data = {
    name: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    career: '',
    controlNumber: '',
    email: '',
    image: ''
};

var textData = [
    'Datos básicos',
    'Datos académicos',
    'Foto de perfil'
];

function goToLogin(){
    loading = true;
    setTimeout(() => {
        loading = false;
        goto('/auth/login');
    }, 2000);
}

function nextStep() {
    document.getElementById(`step-${step}`).classList.remove('bg-green-500');
    document.getElementById(`step-${step}`).classList.remove('text-white');

    document.getElementById(`step-${step}`).classList.add('bg-gray-200');
    document.getElementById(`step-${step}`).classList.remove('text-black');
    step++;
    document.getElementById(`step-${step}`).classList.add('bg-green-500');
    document.getElementById(`step-${step}`).classList.remove('bg-gray-200');
    document.getElementById(`step-${step}`).classList.add('text-white');
}

function prevStep() {
    document.getElementById(`step-${step}`).classList.remove('bg-green-500');
    document.getElementById(`step-${step}`).classList.remove('text-white');

    document.getElementById(`step-${step}`).classList.add('bg-gray-200');
    document.getElementById(`step-${step}`).classList.remove('text-black');
    step--;
    document.getElementById(`step-${step}`).classList.add('bg-green-500');
    document.getElementById(`step-${step}`).classList.add('text-white');
    const text = document.getElementById('text');
    text.innerHTML = textData[step-1];
}

function activateToast(){
    showToast = true;
    setTimeout(() => {
        showToast = false;
    }, 1000);
}

function step2(){
    
    if(data.career == ''){
        toastTitle = 'Error';
        toastDescription = 'La carrera no puede estar vacía';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else if(data.controlNumber == ''){
        toastTitle = 'Error';
        toastDescription = 'El número de control no puede estar vacío';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else if(data.email == ''){
        toastTitle = 'Error';
        toastDescription = 'El correo institucional no puede estar vacío';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else{
        nextStep();

        const text = document.getElementById('text');
        text.innerHTML = textData[step-1];
    }

}

function step1(){
    

    if(data.name == ''){
        toastTitle = 'Error';
        toastDescription = 'El nombre no puede estar vacío';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else if(data.middleName == ''){
        toastTitle = 'Error';
        toastDescription = 'El apellido paterno no puede estar vacío';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else if(data.lastName == ''){
        toastTitle = 'Error';
        toastDescription = 'El apellido materno no puede estar vacío';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else if(data.birthDate == ''){
        toastTitle = 'Error';
        toastDescription = 'La fecha de nacimiento no puede estar vacía';
        toastClassColor = 'bg-red-500';
        activateToast();
    }
    else{
        nextStep();

        const text = document.getElementById('text');
        text.innerHTML = textData[step-1];
    }
}

function step3(){
    nextStep();
    const image = document.getElementById('fileInput').files[0];
    
    if(image != undefined){
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = function () {
            const base64 = reader.result;
            console.log(base64);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    const text = document.getElementById('text');
    text.innerHTML = textData[step-1];
}
</script>


    
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6" >
        
        <div class="w-full max-w-md"  out:fade in:fade>
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

          <div >
           <div class="flex justify-center mb-2">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 last:mr-0 mr-1 text-center" id="text">
                Datos básicos
              </span>
           </div>
              <div class="flex justify-center items-center mb-3" >
                <span class="inline-block w-8 h-8 mr-1 align-middle text-center leading-8 rounded-full bg-green-500 text-white" id="step-1">
                  1
                </span>
                <span class="inline-block w-8 h-8 mr-1 align-middle text-center leading-8 rounded-full bg-gray-200" id="step-2">2</span>
                <span class="inline-block w-8 h-8 align-middle text-center leading-8 rounded-full bg-gray-200" id="step-3">3</span>
              </div>
          </div>


          <div class="border text-card-foreground w-full bg-white py-8 px-6 shadow-md rounded-lg" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Registrarse</h3>
              
            </div>
            <div class="p-6">
              <form class="space-y-6">
               {#if step == 1}
               <div in:fade >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                 for = "name"
                >
                  Nombre 
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  bind:value={data.name}
                  placeholder="Antonio"
                  type="text"
                />
              </div>
              <div in:fade>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                   for = "middleName"
                  >
                    Apellido paterno 
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    bind:value={data.middleName}
                    placeholder="López"
                    type="text"
                  />
                </div>
                <div in:fade>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                   for="lastName"
                  >
                    Apellido materno 
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  bind:value={data.lastName}
                    placeholder="López"
                    type="text"
                  />
                </div>
                <div in:fade>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                   for="birthDate"
                  >
                   Fecha de nacimiento
                  </label>
                  <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    bind:value={data.birthDate}
                    placeholder="24-05-2000"
                    type="date"
                  />
                </div>
             
              <div in:fade>
                <button on:click={step1} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-green-600 text-white">
                  Siguiente
                </button>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={goToLogin} class="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full text-green-600">
                ¿Ya tienes una cuenta?
              </a>
              </div>
               {:else if step == 2}
               <div in:fade>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                 for = "career"
                >
                  Carrera 
                </label>
                <select  in:fade   bind:value={data.career}              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    
                    placeholder="Selecciona una carrera"
                    type="text"
                >
                <option value="1">Ingeniería en Sistemas Computacionales</option>
                <option value="2">Ingeniería en Gestión Empresarial</option>
                <option value="3">Ingeniería en Industrias Alimentarias</option>
                </select>
              </div>
              <div in:fade>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                   for = "controlNumber"
                  >
                    Numero de control
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    bind:value={data.controlNumber}
                    placeholder="2021184"
                    type="text"
                  />
                </div>
                <div in:fade>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                   for="email"
                  >
                    Correo institucional
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  bind:value={data.email}
                    placeholder="l20211858@tectijuana.edu.mx"
                    type="email"
                  />
                </div>
               
             
              <div class="flex justify-between" in:fade>
                <button on:click={prevStep} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  bg-gray-400 text-black">
                  Regresar
                </button>
                <button on:click={step2} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  bg-green-600 text-white">
                  Siguiente
                </button>
              </div>
               <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={goToLogin} class="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full text-green-600">
                ¿Ya tienes una cuenta?
              </a>
               {:else if step == 3}
              
               <div class="flex flex-col items-center mb-4" in:fade>
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5"
                   for="email"
                  >
                  Foto de perfil (opcional)
                </label>
                
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="relative mb-10 cursor-pointer" on:click={() => { console.log('aasd'); }} in:fade>
                  <label for="fileInput" class="relative cursor-pointer">
                    <input
                      bind:value={data.image}
                      type="file"
                      id="fileInput"
                      class="hidden"
                      accept="image/png, image/jpeg"
                      style="display: none;"
                      onchange="handleFileChange(event)"
                    />
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="Profile"
                      class="rounded-full"
                      width="200"
                      height="200"
                      style="aspect-ratio: 100 / 100; object-fit: cover;"
                    />
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
                      class="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </label>
                </div>
              </div>
               
             
              <div class="flex justify-between">
                <button on:click={prevStep} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  bg-gray-400 text-black">
                  Regresar
                </button>
                <button on:click={step3} class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  bg-green-600 text-white">
                  Siguiente
                </button>
              </div>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={goToLogin} class="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full text-green-600">
                ¿Ya tienes una cuenta?
              </a>
               {/if}
              </form>
            </div>
            
          </div>
        </div>
    </div>


{#if showToast}
<div in:fade out:fade>
  <Toast {toastTitle} {toastDescription} {toastClassColor}  />
</div>
{/if}

{#if loading}
<Loading/>
{/if}
