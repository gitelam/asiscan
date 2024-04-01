import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
//import node from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

//const dev = process.env.NODE_ENV == "development"

export default {
    kit: {
        //adapter: node()
        adapter: adapter(),
    },
    preprocess: vitePreprocess()
    
}
