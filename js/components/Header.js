export default function Header() {
  return /*html*/ `
    <header class="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-12 bg-white">
      
      <!-- Back icon -->
      <img 
        src="./assets/icons/backMain.svg" 
        class="w-8 h-8 cursor-pointer"
        onclick="history.back()"
      />
  
      <!-- Logo -->
      <div class="flex flex-col items-center">
        <img src="./assets/icons/logo.svg" class="h-12" />
      </div>

      <!-- Location dropdown placeholder -->
      <div class="relative">  
      <div class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary" style="background-color: currentColor; -webkit-mask:url('./assets/icons/location.svg') no-repeat center / contain; mask:  url('./assets/icons/location.svg') no-repeat center / contain;"></div>
            <select class="appearance-none text-sm pl-8 pr-6 py-1 h-8 rounded-md border border-transparent focus:outline-none  bg-transparent cursor-pointer">
        <option value="jeddh">Jeddh</option>
        <option value="abha">Abha</option>
      </select>
      </div>

    </header>
  `;
}
