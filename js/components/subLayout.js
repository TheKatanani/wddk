export default function subLayout(contentHtml) {
  return `
  <div class="w-full flex flex-col min-h-screen">

    <!-- subLayout Header -->
    <header class="w-full flex items-center justify-between px-6 py-4 border-b">
      <img src="./assets/icons/back.svg" class="w-7 h-7 cursor-pointer" onclick="navigate('reservation')" />

      <div class="flex flex-col items-center">
        <img src="./assets/icons/logo.svg" class="h-7" />
        <span class="text-[11px] tracking-widest text-primary mt-[2px]">RIYADH</span>
      </div>

      <div class="w-7 h-7"></div>
    </header>

    <!-- Page Content -->
    <main class="flex-1 px-6 py-8">
      ${contentHtml}
    </main>

    <!-- Optional Minimal Footer -->
    <footer class="py-4 text-center text-[11px] text-gray-400">
      Powered by Wddk
    </footer>

  </div>
  `;
}
