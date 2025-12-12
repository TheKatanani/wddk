export default function SubHeader() {
  return /*html*/ `
    <header class="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-12 bg-white">
      
      <!-- Back icon -->
      <img 
        src="./assets/icons/back.svg" 
        class="w-8 h-8 cursor-pointer  rounded-full border border-gray-400"

        onclick="window.history.back()"
      />
  
      <!-- Logo -->
      <div class="flex flex-col items-center">
        <img src="./assets/icons/logo.svg" class="h-12" />
      </div> 
      <div></div>
    </header>
  `;
}
