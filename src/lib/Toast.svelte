<script>
    export let toastTitle = null;
    export let toastDescription = null;
    export let toastClassColor = null;
</script>

<div class="fixed top-0 left-0 right-0 z-50 mt-5">
    <div
      role="alert"
      class="relative border [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground {toastClassColor} text-white rounded-md p-4 w-full max-w-md mx-auto"
    >
      <div class="flex items-center">
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
          class="h-4 w-4 mr-2"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
          <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
        </svg>
        <h5 class="mb-1 leading-none tracking-tight font-semibold">{toastTitle}</h5>
      </div>
      <div class="text-sm [&amp;_p]:leading-relaxed">{toastDescription}</div>
    </div>
  </div>