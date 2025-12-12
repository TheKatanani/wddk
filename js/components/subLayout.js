import SubHeader from "./SubHeader.js";

export default function subLayout(contentHtml) {
  return /*html*/`
  <div class="w-full flex flex-col min-h-screen"> 
     ${SubHeader()}
 <!-- HERO IMAGE -->
      <div class="  rounded-3xl shadow-sm relative">
        <img 
          src="./assets/images/hero.webp" 
          class="w-full h-[280px] md:h-[360px] object-cover rounded-3xl"
        />
        </div>
    <!-- Page Content -->
    <main class="flex-1 px-6 py-8">
      ${contentHtml}
    </main> 
  </div>
  `;
}
