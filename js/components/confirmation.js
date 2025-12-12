// js/components/confirmation.js

import { BookingDetailsCard } from "./bookingDetails.js";
import { openModal } from "./modal.js";
import { saveAsOldReservation } from "../state.js";
import { loadPage, supLoadPage } from "../router.js";

export default function ConfirmationPage() {
  return /*html*/ `
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 md:gap-12 px-4 md:px-6 py-8 md:py-10">

    <!-- LEFT SIDE -->
    <div class="flex flex-col">

      <!-- Top Info -->
      <div class="mb-6">
        <h2 class="text-[22px] font-bold text-gray-900">SUSHISAMBA</h2>

        <div class="flex flex-wrap items-center gap-3 mt-2 text-[13px] text-gray-700">
          <img src="./assets/icons/info-japanese.svg" class="w-4 h-4" alt="" /> Japanese
          <img src="./assets/icons/info-available.svg" class="w-4 h-4" alt="" /> Available
          <img src="./assets/icons/info-formal.svg" class="w-4 h-4" alt="" /> Formal
          <img src="./assets/icons/info-price.svg" class="w-4 h-4" alt="" /> $$$
        </div>

        <div class="flex items-center gap-2 text-[12px] text-gray-500 mt-2">
          <img src="./assets/icons/location.svg" class="w-4 h-4 opacity-70" alt="" />
          13513 حي التعاون، الرياض
        </div>
      </div>

      <!-- Completed Status -->
      <div class="flex flex-col items-center mt-4">
        <p class="text-[18px] text-gray-900 font-medium mb-3">Completed</p>

        <div class="w-14 h-14 rounded-full bg-[#2BC48A] flex items-center justify-center mb-6">
          <img src="./assets/icons/check-white.svg" class="w-7 h-7" alt="Completed" />
        </div>

        <!-- Actions (Print, Share) -->
        <div class="flex items-center gap-6 mb-6">
          <img src="./assets/icons/print.svg" class="w-6 h-6 cursor-pointer hover:opacity-70" alt="Print" />
          <img src="./assets/icons/share.svg" class="w-6 h-6 cursor-pointer hover:opacity-70" alt="Share" />
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 justify-center">
          <button id="open-review"
            class="py-5 inline-flex items-center justify-center h-12 w-36 px-10 bg-primary text-white rounded-lg font-medium text-[14px] shadow hover:opacity-90">
            Review ★
        </button>
              <button id="open-report"
            class="py-5 inline-flex items-center justify-center h-12 w-36 px-10 bg-[#FF7A00] text-white rounded-lg font-medium text-[14px] shadow hover:opacity-90">
              Report
            </button>
            <button id="open-modify"
            class="py-5 inline-flex items-center justify-center h-12 w-36 px-10 bg-primary text-white rounded-lg font-medium text-[14px] shadow hover:opacity-90">
            Modify
          </button>
          <button id="open-cancel"
            class="py-5 inline-flex items-center justify-center h-12 w-36 px-10 bg-gray-500 text-white rounded-lg font-medium text-[14px] shadow hover:opacity-90">
          Cancel
        </button>
      </div> 
        <!-- QR Code -->
        <div class="w-full flex justify-center mb-6">
          <img src="./assets/images/qr.png" class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40" alt="QR code" />
      </div>
      </div>

      <!-- Special Notes -->
      <div class="mt-6 md:mt-10">
        <p class="text-[14px] font-semibold text-gray-900">Special Notes</p>
        <p class="text-[12px] text-gray-600 mt-2">
          The amount SR75/person paid to confirm the reservation does not include
        </p>
        <button id="read-more" class="text-primary text-[12px] mt-2">+ Read more</button>
    </div>
    </div>

    <!-- RIGHT SIDE: Booking Details -->
    <div>
      ${BookingDetailsCard()}
  </div>

  </div>
  `;
}

/**
 * Initialize confirmation page event listeners
 */
export function init() {
  // Review button
  const reviewBtn = document.getElementById("open-review");
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      openModal("review");
    });
  }

  // Report button
  const reportBtn = document.getElementById("open-report");
  if (reportBtn) {
    reportBtn.addEventListener("click", () => {
      openModal("report");
    });
  }

  // Read more button for special notes
  const readMoreBtn = document.getElementById("read-more");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      openModal("specialNotes");
    });
  }

  // Modify button - save current state and navigate to modify page
  const modifyBtn = document.getElementById("open-modify");
  if (modifyBtn) {
    modifyBtn.addEventListener("click", () => {
      // Save current reservation as old reservation for comparison
      saveAsOldReservation();
      // Navigate to modify page
      loadPage("modify");
    });
  }

  // Cancel button - open cancellation modal
  const cancelBtn = document.getElementById("open-cancel");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      openModal("cancel");
    });
  }
}
