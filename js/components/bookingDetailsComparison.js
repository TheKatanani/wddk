// js/components/bookingDetailsComparison.js

/**
 * Pixel-perfect Booking Comparison (New vs Old)
 * With dual icons + dual values exactly like your screenshot
 */
export function BookingDetailsComparisonCard(oldData, newData) {
  return /*html*/`
    <div class="relative bg-white rounded-xl border border-gray-200 
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                w-full max-w-[300px] mx-auto pt-6 pb-12 px-6 flex flex-col items-center">

      <!-- Title -->
      <h2 class="text-[18px] font-semibold text-center tracking-wide">Booking Details</h2>
      <div class="w-12 mx-auto h-[1px] bg-gray-300/60 mt-2 mb-4"></div>

      <!-- Timer -->
      <div class="text-center mb-10">
        <div id="timer-countdown" class="text-[24px] font-semibold text-gray-900">
          2:47
        </div>
        <div class="text-[12px] text-gray-500 mt-[2px]">Remaining Time</div>
      </div>

      <!-- Rows -->
      ${renderRow("Guests", newData.guests, oldData.guests, "./assets/icons/guests.svg")}
      ${renderRow("Date", newData.date, oldData.date, "./assets/icons/date.svg")}
      ${renderRow("Time", newData.timeSlot, oldData.timeSlot, "./assets/icons/time.svg")}
      ${renderRow("Area", newData.area, oldData.area, "./assets/icons/area.svg")}
      ${renderRow("Seating", newData.seating, oldData.seating, "./assets/icons/seating.svg")}

      <!-- Zig-Zag Bottom -->
      <div class="absolute -bottom-5 left-0 w-full overflow-hidden">
        <svg class="w-full h-5" viewBox="0 0 100 6" preserveAspectRatio="none">
          <path 
            d="M0 0 L5 6 L10 0 L15 6 L20 0 L25 6 L30 0 L35 6 L40 0 L45 6 
               L50 0 L55 6 L60 0 L65 6 L70 0 L75 6 L80 0 L85 6 L90 0 L95 6 L100 0"
            fill="white" stroke="#e5e7eb" stroke-width="0.4" />
        </svg>
      </div>
    </div>
  `;
}


/**
 * Render one row (Two columns, Two icons)
 * LEFT column → NEW (orange)
 * RIGHT column → OLD (faded)
 */
function renderRow(label, newValue, oldValue, iconSrc) {
  return /*html*/`
    <div class="w-full grid grid-cols-2 gap-6 mb-8">

      <!-- LEFT COLUMN (NEW) -->
      <div class="flex flex-col items-center text-center">
        <!-- New Icon -->
        <img src="${iconSrc}" 
             class="w-6 h-6 mb-1"
             style="filter: saturate(1.7) brightness(1.2);" />
        <p class="text-[12px] text-gray-700">${label}</p>
        <p class="text-primary text-[14px] font-semibold mt-1">${newValue}</p>
      </div>

      <!-- RIGHT COLUMN (OLD) -->
      <div class="flex flex-col items-center text-center opacity-40">
        <!-- Old (Faded) Icon -->
        <img src="${iconSrc}" class="w-6 h-6 mb-1" style="opacity:0.4;" />
        <p class="text-[12px] text-gray-500">${label}</p>
        <p class="text-[14px] text-gray-500 mt-1">${oldValue}</p>
      </div>

    </div>
  `;
}
