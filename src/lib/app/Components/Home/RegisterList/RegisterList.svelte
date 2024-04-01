<script>
    
    export let newItem;
    import RegisterItem from "./Children/RegisterItem.svelte";
    
    let items = [
        {id: 1, title: "Item 1"},
        {id: 2, title: "Item 2"},
        {id: 3, title: "Item 3"},
        {id: 4, title: "Item 4"},
        {id: 5, title: "Item 5"},
    ];

    let newID = items.length;

    function eliminarItem(id) {
        console.log("eliminando item", id);
        items = items.filter(item => item.id !== id);

    }

    function agregarItem(){
        
        newID++;
        items = [...items, {id: newID, title: `${newItem}`}];

        console.log(items);
    }





</script>

<div id="header" class="flex w-full mb-2">

    <div class="flex w-full">
        <form class="m-0 p-0 w-full mx-0" on:submit|preventDefault={agregarItem}>
            <input
          type="text"
          id="newItem"
          class="ml-0 m-0 p-0 w-full h-10 rounded-md border border-input bg-background px-3 py-2 mt-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nuevo registro..."
          bind:value={newItem}
        />
        </form>
        <button
          on:click={() => agregarItem()}
          class=" w-1/4 ml-3 mt-1 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent h-10 py-2 border-green-600 bg-green-600 text-white hover:border-green-500 hover:text-green-500"
          >Añadir</button
        >
      </div>

</div>

<ul class="overflow-auto max-h-90 border rounded-lg pb-0 pt-0 w-full h-60 mt-1 bg-white">
    
    
    {#each items as item}
        <RegisterItem title={item.title} on:eliminar={()=>{eliminarItem(item.id)}}/>
    {/each}
    
</ul>

