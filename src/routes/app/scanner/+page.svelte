<script>
  import {Html5QrcodeScanner} from "html5-qrcode";
  import {goto} from '$app/navigation';
  import { fade,slide} from 'svelte/transition';
  import { onMount } from 'svelte';
  import Toast from "../../../lib/app/Scanner/Toast.svelte";
  var showToast = false; 
  let toastTitle = null;
  let toastImage = null;
  let toastDescription = null;
  let toastClassColor = null;
  let scanner;
  var tmpResult = "";

  
  onMount(() => {
    scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 600,
        height: 600,
      },
      fps: 30,
    });

    scanner.render(success, error);
  });
    
  function endScan(){

    //regresar a pagina principal
    goto('/app/home');
    scanner.clear();
    scanner.stop();
   
  }

  function activateToast(){
    showToast = true;
    setTimeout(() => {
        showToast = false;
        return;
    }, 1000);
  }

  async function success(result) {
    var url = "https://qr.tijuana.tecnm.mx/v/CREDENCIALESENEJUN23/GL5F?fbclid=IwAR2z-yCksg1pNYbufWUqyCJCHpz4YpjnPL4aL5b2k-aC9bGNJ-eyM6yrCNI";
    
    
    if (tmpResult == result) {
      return;
    }
    
    if(tmpResult != result){
      tmpResult = result;
    }

    var data = {
        url: result,
    }

    let information = []; 

    const response = await fetch("http://127.0.0.1:8000/get_student_info",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(data)
            });
            
		if(response.ok){
      information = await response.json();
      toastClassColor = 'bg-green-500';
      toastTitle = '¡Éxito!';
      toastDescription = `Se ha registrado la asistencia de ${information.Nombre} `;
      toastImage = information.image;
      
      activateToast();
     
      
    }    
    
    
   
  }

  function error(err) {
   // console.log(err);
    // Prints any errors to the console
  }

</script>

<svelte:head>
  <title>Scanner</title>
</svelte:head>

<main>
  <div class="flex ">
    <div id="reader" class="aspect-video w-3/4"></div>
    <div class="w-full h-1/2">
      <h1 class="font-bold text-center my-3">Ultimos registros en la lista: Entrada</h1>
      <div class="grid grid-cols-1 bg-gray-300 overflow-y-auto">
        <div class="bg-orange-300 w-auto h-40 flex justify-start border rounded-md my-1 mx-14">
            <div class="flex items-center">
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" class="h-20 w-20 rounded-md mx-3">
                <div>
                    <h1><strong>Nombre <br></strong>Diego Beltran Lopez</h1>
                    <h2><strong>Matricula <br></strong>C20211959</h2>
                    <h3><strong>Carrera <br></strong>Ing. Sistemas Computacionales</h3>
                </div>
            </div>
        </div>
        <div class="bg-orange-300 w-auto h-40 flex justify-start border rounded-md my-1 mx-14">
          <div class="flex items-center">
              <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" class="h-20 w-20 rounded-md mx-3">
              <div>
                  <h1><strong>Nombre <br></strong>Diego Beltran Lopez</h1>
                  <h2><strong>Matricula <br></strong>C20211959</h2>
                  <h3><strong>Carrera <br></strong>Ing. Sistemas Computacionales</h3>
              </div>
          </div>
      </div>
      <div class="bg-orange-300 w-auto h-40 flex justify-start border rounded-md my-1 mx-14">
        <div class="flex items-center">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" class="h-20 w-20 rounded-md mx-3">
            <div>
                <h1><strong>Nombre <br></strong>Diego Beltran Lopez</h1>
                <h2><strong>Matricula <br></strong>C20211959</h2>
                <h3><strong>Carrera <br></strong>Ing. Sistemas Computacionales</h3>
            </div>
        </div>
    </div>
    
        <!-- Repeat similar blocks for other items -->
    </div>
    </div>

    </div>
      
    
  <div class="bg-gray-300 w-full h-full flex justify-center">
    <button on:click={endScan}
    class=" my-14 px-6 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-10 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
    >Dejar de registrar</button>

    <button
    class="ml-3 my-14 px-6 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-10 border-cyan-400 bg-cyan-400 text-white hover:border-cyan-300 hover:text-cyan-300"
    >Registro manual</button>
  </div>

</main>

{#if showToast}
<div in:fade out:fade>
  <Toast {toastTitle} {toastDescription} {toastClassColor} {toastImage} />
</div>
{/if}