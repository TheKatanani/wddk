import { supLoadPage } from "../router.js";
import { ReservationState } from "../state.js";
import { BookingDetailsComparisonCard } from "./bookingDetailsComparison.js";

export default function ModifyCheckoutPage() {
  // Format date as "15 Oct"
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  };

  const oldData = {
    guests: ReservationState.oldReservation?.guests || 2,
    date: formatDate(ReservationState.oldReservation?.date),
    timeSlot: ReservationState.oldReservation?.timeSlot || "N/A",
    area: "Restaurant",
    seating: "2 hr"
  };

  const newData = {
    guests: ReservationState.guests || 2,
    date: formatDate(ReservationState.date),
    timeSlot: ReservationState.timeSlot || "N/A",
    area: "Restaurant",
    seating: "2 hr"
  };

  return /*html*/`
    <div class="w-full flex flex-col gap-10 px-6">

      <!-- HEADER -->
      <div class="flex items-center gap-3 mt-4">
        <img src="./assets/icons/back.svg" onclick="navigate('modify')" class="w-7 h-7 cursor-pointer  rounded-full border border-gray-400" />
        <h1 class="text-xl font-semibold">Review Changes</h1>
      </div>

      <!-- TWO COLUMN LAYOUT -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_330px] gap-8">

        <!-- LEFT: Guest Info Form -->
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-semibold">SUSHISAMBA</h2>

          <div class="flex flex-wrap items-center gap-3">
            <img src="./assets/icons/info-japanese.svg" class="w-4 h-4" /> Japanese
            <img src="./assets/icons/info-available.svg" class="w-4 h-4" /> Available
            <img src="./assets/icons/info-formal.svg" class="w-4 h-4" /> Formal
            <img src="./assets/icons/info-price.svg" class="w-4 h-4" /> $$$
          </div>

          <!-- INPUTS (same as checkout) -->
          <input id="fname" class="input-field" placeholder="First name" />
          <input id="lname" class="input-field" placeholder="Last name" />

          <div class="flex gap-2">
            <select id="phone-country" class="input-field w-[110px]">
              <option>+966</option>
            </select>
            <input id="phone" class="input-field flex-1" placeholder="Phone Number" />
          </div>

          <input id="email" class="input-field" placeholder="Email" />

            <!-- PAYMENT SUMMARY -->
        <div class="mt-6 bg-white rounded-2xl p-4 shadow-sm">
          <h3 class="font-semibold text-lg mb-4">
            Payment Summary
          </h3>

          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Deposit Payment</span>
            <span><img src="./assets/icons/ryal.svg" class="inline h-4 mb-1" /> 150</span>
          </div>

          <div class="flex justify-between text-sm text-gray-600 mb-3">
            <span>Gift Service Fee (VAT Included)</span>
            <span><img src="./assets/icons/ryal.svg" class="inline h-4 mb-1" /> 150</span>
          </div>

          <div class="flex justify-between font-semibold text-base border-t pt-3">
            <span>Total Payment</span>
            <span><img src="./assets/icons/ryal.svg" class="inline h-4 mb-1" /> 150</span>
          </div>
        </div>
 
  <!-- POLICIES -->
    <div class="flex flex-col gap-3 mt-3 text-[14px] text-gray-700">
      <label class="flex items-center gap-2">
        <input id="policy1" type="checkbox" class="checkbox">
        <span class="text-primary underline cursor-pointer" data-modal="usagePolicy">Accept Usage Policy</span> 
      </label>

      <label class="flex items-center gap-2">
        <input id="policy2" type="checkbox" class="checkbox">
        <span class="text-primary underline cursor-pointer" data-modal="paymentPolicy">Accept Payment Policy</span> 
      </label>
    </div>


        <!-- PAYMENT OPTIONS -->
        <div class="flex flex-col gap-4" id="payment-select">

          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="payment" value="apple" />
            <img src="./assets/icons/applePay.svg" class="h-6" />
          </label>

          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="payment" value="cards" />
            <img src="./assets/icons/mada_visa_masterCard.svg" class="h-5" />
          </label>

        </div>


        <!-- PAY BUTTON -->
        <div class="flex justify-center mt-4">
          <button id="pay-btn" class="pay-now-btn opacity-50 cursor-not-allowed">
            Pay now
          </button>
        </div>
        </div>

        <!-- RIGHT: Booking Details Comparison -->
        ${BookingDetailsComparisonCard(oldData, newData)}
      </div>
    </div>
  `;
}

// ---------------- Timer Logic (same as checkout) ----------------

export function initModifyCheckoutTimer() {
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

// ---------------- Bind + Buttons ----------------

export function init() {
  initModifyCheckoutTimer();
  setupValidation();
}

function setupValidation() {
  const requiredFields = [
    document.getElementById("fname"),
    document.getElementById("lname"),
    document.getElementById("phone"),
    document.getElementById("email"),
  ];

  const policy1 = document.getElementById("policy1");
  const policy2 = document.getElementById("policy2");

  const paymentRadios = document.querySelectorAll("input[name='payment']");
  const payBtn = document.getElementById("pay-btn");

  function validate() {
    // Check fields and apply error styling if empty and previously touched/submitted
    let allValid = true;

    requiredFields.forEach(field => {
      const isValid = field.value.trim() !== "";
      if (!isValid) allValid = false;

      // Only show error if user has interacted (blur)
      if (field.value.trim() === "" && field.classList.contains("touched")) {
        field.classList.add("input-error");
      } else {
        field.classList.remove("input-error");
      }
    });

    const policiesOK = policy1.checked && policy2.checked;
    const paymentOK = [...paymentRadios].some(r => r.checked);

    const canPay = allValid && policiesOK && paymentOK;

    if (canPay) {
      payBtn.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      payBtn.classList.add("opacity-50", "cursor-not-allowed");
    }
  }

  // Add 'touched' class on blur to trigger visual error
  requiredFields.forEach(el => {
    el.addEventListener("blur", () => {
      el.classList.add("touched");
      validate();
    });

    el.addEventListener("input", validate);
  });

  [policy1, policy2, ...paymentRadios].forEach(el => {
    el.addEventListener("change", validate);
  });

  // Confirm Change
  if (payBtn) {
    payBtn.addEventListener("click", () => {
      if (!payBtn.classList.contains("cursor-not-allowed")) {
        // Navigate to confirmation page with NEW data
        supLoadPage('confirmation');
      }
    });
  }

  validate();
}
