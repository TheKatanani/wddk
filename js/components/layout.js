export default function Layout(contentHtml, activePage = "reservation") {
  return `
  <div class="w-full flex flex-col">

    <!-- ====================== TOP HEADER ====================== -->
    <header class="w-full flex justify-between items-center py-2 px-6">
      <!-- Left orange icon -->
      <img src="./assets/icons/back.svg" class="w-8 h-8 cursor-pointer" />

      <!-- Centered Logo -->
      <div class="flex flex-col items-center py-4">
        <img src="./assets/icons/logo.svg" class="h-12" />
        <span class="tracking-widest text-[11px] text-primary mt-[2px]">RIYADH</span>
      </div>

      <!-- Right empty (for future use) -->
      <div class="w-8 h-8"></div>
    </header>

    <!-- ====================== HERO ====================== -->
    <div class="w-full px-6 relative pb-16">

      <!-- HERO IMAGE -->
      <div class="  rounded-3xl shadow-sm relative">
        <img 
          src="./assets/images/hero.png" 
          class="w-full h-[280px] md:h-[360px] object-cover rounded-3xl"
        />

        <!-- CURVE IMAGE - ABSOLUTE AT BOTTOM -->
        <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] mx-auto z-10">
          <img 
            src="./assets/images/curve.png" 
            class="w-full block pointer-events-none select-none"
          />
        </div>

        <!-- NAVIGATION TABS OVER CURVE - ABSOLUTE -->
        <div class="absolute left-1/2 transform -translate-x-1/2 
                    -bottom-2 flex gap-8 z-20">

          <button 
            data-page="reservation"
            class="tab-btn ${activePage === "reservation" ? "tab-active" : "tab-inactive"
    }">
            <img src="./assets/icons/nav-calendar.svg" class="w-4 h-4 ${activePage === "reservation"
      ? "brightness-0 invert"
      : "brightness-0"
    }" />
            Reservation
          </button>

          <button 
            data-page="gallery"
            class="tab-btn ${activePage === "gallery" ? "tab-active" : "tab-inactive"
    }">
            <img src="./assets/icons/nav-gallery.svg" class="w-4 h-4 ${activePage === "gallery" ? "brightness-0 invert" : "brightness-0"
    }" />
            Gallery
          </button>

          <button 
            data-page="giftcard"
            class="tab-btn ${activePage === "giftcard" ? "tab-active" : "tab-inactive"
    }">
            <img src="./assets/icons/nav-gift.svg" class="w-4 h-4 ${activePage === "giftcard" ? "brightness-0 invert" : "brightness-0"
    }" />
            Gift Card
          </button>

        </div>
      </div>

    </div>

    <!-- ====================== MAIN CONTENT + SIDEBAR ====================== -->
    <main class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 px-6">

      <!-- LEFT: Dynamic content -->
      <div id="dynamic-page">
        ${contentHtml}
      </div>

      <!-- RIGHT: Shared Sidebar -->
     <!-- RIGHT SIDEBAR -->
<aside class="flex flex-col gap-10">

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
    <img src="./assets/icons/social-instagram.svg" class="w-5 h-5">
    <img src="./assets/icons/social-facebook.svg" class="w-5 h-5">
    <img src="./assets/icons/social-tiktok.svg" class="w-5 h-5">
    <img src="./assets/icons/social-x.svg" class="w-5 h-5">
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
