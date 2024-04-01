<script>
    import Icon from '@iconify/svelte';
    
    export let title;
    import { createEventDispatcher } from 'svelte';
     import { is_empty } from 'svelte/internal';
    const dispatch = createEventDispatcher();


    function eliminarItem() {
        dispatch('eliminar');
    }

    function addItem() {
        dispatch('add');
    }


   
</script>



<li>
    <div class="flex items-center mb-2 bg-slate rounded-xl">
         <label for="#" class="w-full ml-2 p-2">{title}</label>
         <button on:click={() => eliminarItem()} id="delete-button" class="flex items-center m-2 justify-end mr-4 hover:bg-slate-100 rounded-lg p-0">
            <label for="delete-buttton"></label>
            <Icon color="green" icon="material-symbols:delete-sweep-outline" width="24"/>
        </button>
    </div>
</li>