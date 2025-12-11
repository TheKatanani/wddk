import { supLoadPage } from "../router.js";
import { ReservationState } from "../state.js";
import { BookingDetailsCard } from "./bookingDetails.js";

export default function CheckoutPage() {
    const { guests, children, date, time, timeSlot } = ReservationState;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short"
    });

    return `
    <div class="w-full flex flex-col gap-10 px-6">

      <!-- HEADER -->
      <div class="flex items-center gap-3 mt-4">
        <img src="./assets/icons/back.svg" onclick="navigate('reservation')" class="w-7 h-7 cursor-pointer" />
        <h1 class="text-xl font-semibold">Booking Details</h1>
      </div>

      <!-- TWO COLUMN LAYOUT -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_330px] gap-8">

        <!-- LEFT: Guest Info Form -->
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-semibold">SUSHISAMBA</h2>

          <div class="flex items-center gap-3">
            <img src="./assets/icons/info-japanese.svg" class="w-4 h-4" /> Japanese
            <img src="./assets/icons/info-available.svg" class="w-4 h-4" /> Available
            <img src="./assets/icons/info-formal.svg" class="w-4 h-4" /> Formal
            <img src="./assets/icons/info-price.svg" class="w-4 h-4" /> $$$
          </div>

          <!-- INPUTS -->
          <input class="input-field" placeholder="First name" />
          <input class="input-field" placeholder="Last name" />

          <div class="flex gap-2">
            <select class="input-field w-[110px]">
              <option>+966</option>
            </select>
            <input class="input-field flex-1" placeholder="Phone Number" />
          </div>

          <input class="input-field" placeholder="Email" />

          <!-- PAYMENT SUMMARY -->
          <div class="mt-4">
            <h3 class="font-semibold mb-2">Payment Summary</h3>

            <div class="flex justify-between text-[14px] mb-1">
              <span>Deposit Payment</span>
              <span>150 ﷼</span>
            </div>

            <div class="flex justify-between text-[14px] mb-1">
              <span>Gift Service Fee (VAT Included)</span>
              <span>150 ﷼</span>
            </div>

            <div class="flex justify-between font-semibold mt-2">
              <span>Total Payment</span>
              <span>150 ﷼</span>
            </div>
          </div>

          <button id="pay-now-btn" class="bg-primary text-white rounded-full py-3 mt-4 shadow">
            Pay Now
          </button>
        </div>

        <!-- RIGHT: Booking Summary -->
        ${BookingDetailsCard()}
      </div>
    </div>
  `;
}

// ⏱ Countdown Timer Logic
export function initCheckoutTimer() {
    let timeLeft = 180; // seconds (3:00)

    const el = document.getElementById("timer-countdown");
    if (!el) return;

    function update() {
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;

        el.textContent = `${min}:${sec.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {
            el.textContent = "Expired";
            el.classList.add("text-red-500");
            clearInterval(int);
            return;
        }

        timeLeft--;
    }

    update();
    const int = setInterval(update, 1000);
}

// 🔗 Bind data from ReservationState
export function populateBookingSummary() {
    const { guests, date, timeSlot } = ReservationState;

    // Format date
    let formattedDate = "15 Oct"; // default
    if (date) {
        const dateObj = new Date(date);
        formattedDate = dateObj.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short"
        });
    }

    // Update DOM elements
    const guestsEl = document.getElementById("summary-guests");
    const dateEl = document.getElementById("summary-date");
    const timeEl = document.getElementById("summary-time");

    if (guestsEl) guestsEl.textContent = guests || "2";
    if (dateEl) dateEl.textContent = formattedDate;
    if (timeEl) timeEl.textContent = timeSlot || "10:45 PM";
}

// Initialize checkout page
export function init() {
    initCheckoutTimer();
    populateBookingSummary();

    // Add Pay Now button click handler
    const payNowBtn = document.getElementById("pay-now-btn");
    if (payNowBtn) {
        payNowBtn.addEventListener("click", () => {
            // Navigate to confirmation page
            console.log("clicked-button!")
            supLoadPage('confirmation');
        });
    }
}
