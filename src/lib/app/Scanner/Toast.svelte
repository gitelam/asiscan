<script>
    export let toastTitle = null;
    export let toastImage = null;
    export let toastDescription = null;
    export let toastClassColor = null;
</script>

<div class="fixed top-0 left-0 right-0 z-50 mt-5">
    <div
      role="alert"
      class="relative border [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground {toastClassColor} text-white rounded-md p-4 w-full max-w-md mx-auto"
    >
      <div class="flex items-center">
        
        <h5 class="mb-1 leading-none tracking-tight font-semibold">{toastTitle}</h5>
      </div>
      <div class="flex items-center mt-3">
        <img src="{toastImage}" alt="Logo" class="h-20 w-20" width="100" height="100" style="aspect-ratio: 100 / 100; object-fit: cover;" />
        <div class="ml-3 text-sm [&amp;_p]:leading-relaxed font-bold">{toastDescription}</div>
      </div>
    </div>
  </div>