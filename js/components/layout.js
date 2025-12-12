import Header from "./Header.js";

export default function Layout(contentHtml, activePage = "reservation") {
  return /*html*/`
  <div class="w-full flex flex-col">

    ${Header()}

    ${HeroWithNavigation(activePage)}

    <!-- MAIN CONTENT -->
    <main class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 px-6 mt-16">

      <!-- LEFT -->
      <div id="dynamic-page">
        ${contentHtml}
      </div>

      <!-- RIGHT SIDEBAR -->
      <aside class="hidden lg:flex flex-col gap-10">
          <!-- Restaurant Title + Info Icons -->
  <div>
    <h2 class="text-[22px] font-semibold text-black mb-1">SUSHISAMBA</h2>

    <div class="flex items-center gap-4 text-[13px] text-gray-700 mt-1">

      <span class="flex items-center gap-1">
        <img src="./assets/icons/info-japanese.svg" class="w-4 h-4">
        Japanese
      </span>

      <span class="flex items-center gap-1">
        <img src="./assets/icons/info-available.svg" class="w-4 h-4">
        Available
      </span>

      <span class="flex items-center gap-1">
        <img src="./assets/icons/info-formal.svg" class="w-4 h-4">
        Formal
      </span>

      <span class="flex items-center gap-1">
        <img src="./assets/icons/info-price.svg" class="w-4 h-4">
        $$$
      </span>

    </div>

    <p class="text-[13px] text-gray-700 mt-4 leading-relaxed pr-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut enim ad minim veniam,
      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    </p>
  </div>

  <!-- Divider -->
  <div class="border-t border-gray-300"></div>

  <!-- Policies & Notes -->
  <div>
    <h3 class="font-semibold text-[15px] text-black mb-2">Policies & Notes</h3>
    <p class="text-[13px] text-gray-700 leading-relaxed pr-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
  </div>

  <!-- Social Icons -->
  <div class="flex gap-4 items-center">
    <a href="#" class="cursor-pointer">
      <img src="./assets/icons/social-instagram.svg" class="w-6 h-6">
    </a>
    <a href="#" class="cursor-pointer">
      <img src="./assets/icons/social-facebook.svg" class="w-6 h-6">
    </a>
    <a href="#" class="cursor-pointer">
      <img src="./assets/icons/social-tiktok.svg" class="w-6 h-6">
    </a>
    <a href="#" class="cursor-pointer">
      <img src="./assets/icons/social-x.svg" class="w-6 h-6">
    </a>
  </div>

  <!-- Opening Hours -->
  <div>
    <h3 class="font-semibold text-[15px] text-black mb-2">Opening Hours</h3>

    <div class="grid grid-cols-2 text-[13px] text-gray-800 gap-y-1">
      <span>Sunday</span><span>2:45 AM – 1:00 PM</span>
      <span>Monday</span><span>2:45 AM – 1:00 PM</span>
      <span>Tuesday</span><span>2:45 AM – 1:00 PM</span>
      <span>Wednesday</span><span>2:45 AM – 1:00 PM</span>
      <span>Thursday</span><span>2:45 AM – 1:00 PM</span>
      <span>Friday</span><span>2:45 AM – 1:00 PM</span>
      <span>Saturday</span><span>2:45 AM – 1:00 PM</span>
    </div>
  </div>

  <!-- Map -->
  <img src="./assets/images/map.png" class="rounded-xl w-full shadow-md">

  <!-- Address Link -->
  <a href="#" class="text-[13px] text-primary underline block">
    Al Motassem Street, Riyadh, 12212
  </a>
      </aside>

    </main>

  </div>
  `;
}

function HeroWithNavigation(activePage) {
  return /*html*/`
  <section class="relative px-6">

    <!-- HERO IMAGE -->
    <div class="relative rounded-3xl overflow-hidden shadow-sm">
      <img 
        src="./assets/images/hero.webp"
        class="w-full h-[260px] md:h-[360px] object-cover"
      /> 
      <!-- CURVE -->
      <img 
        src="./assets/images/curve.png"
        class="absolute -bottom-4 sm:-bottom-5 md:-bottom-8 sm:scale-y-125 md:scale-y-150 h-[40px] md:h-[70px] lg:-bottom-11 left-1/2 -translate-x-1/2 w-full sm:w-[90%]  lg:w-[80%] pointer-events-none select-none z-10"
      />
    </div>

    <!-- NAVIGATION TABS -->
    <div class="absolute left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[60%]  -bottom-4 sm:-bottom-6 z-20">
      <div class="bg-white rounded-full  flex gap-1 sm:gap-2 lg:gap-10 justify-center px-2 sm:px-4 py-1 sm:py-2">

        ${NavButton(
    "reservation",
    "Reservation",
    "./assets/icons/nav-calendar.svg",
    activePage
  )}
        ${NavButton(
    "gallery",
    "Gallery",
    "./assets/icons/nav-gallery.svg",
    activePage
  )}
        ${NavButton(
    "giftcard",
    "Gift Card",
    "./assets/icons/nav-gift.svg",
    activePage
  )}

      </div>
    </div>

  </section>
  `;
}

function NavButton(page, label, icon, activePage) {
  const isActive = activePage === page;
  return /*html*/`
    <button 
      data-page="${page}"
      class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm transition
        ${isActive
      ? "bg-[#333333] text-white"
      : "text-gray-700 hover:bg-gray-100"
    }
      "
    >
      <img 
        src="${icon}" 
        class="w-4 h-4 ${isActive ? "brightness-0 invert" : ""}"
      />
      ${label}
    </button>
  `;
}
