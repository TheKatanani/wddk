// js/components/modal.js

/**
 * Opens the global modal with specified content type
 * @param {string} type - The type of modal content to display
 */
export function openModal(type) {
  const modal = document.getElementById("global-modal");
  const content = document.getElementById("modal-content");

  // Apply animations
  modal.classList.remove("hidden");
  modal.classList.add("flex", "modal-fade");
  content.classList.add("modal-popup");

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Load content based on type
  switch (type) {
    case "paymentPolicy":
      content.innerHTML = paymentPolicyContent();
      break;

    case "review":
      content.innerHTML = reviewPopupContent();
      break;

    case "dayUnavailable":
      content.innerHTML = dayUnavailableContent();
      break;

    case "waitlist":
      content.innerHTML = waitlistContent();
      break;

    case "report":
      content.innerHTML = reportContent();
      break;

    case "confirmReservation":
      content.innerHTML = confirmReservationContent();
      break;

    case "login":
      content.innerHTML = loginPopupContent();
      break;

    case "notify":
      content.innerHTML = notifyPopupContent();
      break;

    case "specialNotes":
      content.innerHTML = specialNotesPopupContent();
      break;

    default:
      content.innerHTML = `<p>Unknown popup: ${type}</p>`;
  }
}

/**
 * Closes the global modal
 */
export function closeModal() {
  const modal = document.getElementById("global-modal");

  modal.classList.add("hidden");
  modal.classList.remove("flex", "modal-fade");

  // Restore body scroll
  document.body.style.overflow = "auto";
}

// Add backdrop click-to-close functionality
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("global-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target.id === "global-modal") {
          closeModal();
        }
      });
    }
  });
}

// ====================== MODAL CONTENT TEMPLATES ======================

/**
 * Payment Policy popup content
 */
function paymentPolicyContent() {
  return `
    <h2 class="text-[20px] font-semibold text-primary mb-4">Payment Policy</h2>
    <p class="text-[15px] text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
    </p>
  `;
}

/**
 * Review popup content with rating system and photo upload
 */
function reviewPopupContent() {
  return `
    <h2 class="text-[20px] font-semibold mb-4">Review</h2>

    ${ratingRow("Food")}
    ${ratingRow("Service")}
    ${ratingRow("Ambience")}
    ${ratingRow("Value")}

    <textarea class="input-field w-full h-[100px] mt-4 border border-border rounded-xl p-3 focus:outline-none focus:border-primary"
              placeholder="Share details of your experience"></textarea>

    <h3 class="text-[15px] font-medium mt-5 mb-2">Add Photo</h3>

    <div class="flex gap-3">
      <label class="w-[90px] h-[90px] border border-border rounded-xl flex items-center justify-center text-3xl text-gray-500 cursor-pointer hover:border-primary transition-colors">
        +
        <input type="file" class="hidden" accept="image/*">
      </label>

      <img src="./assets/images/sample-dish.jpg" class="w-[90px] h-[90px] rounded-xl object-cover">
    </div>

    <button class="w-full bg-primary text-white py-2 rounded-xl mt-6 hover:bg-primary/90 transition-colors">Submit</button>
  `;
}

/**
 * Helper function to create a rating row
 */
function ratingRow(label) {
  return `
    <div class="flex items-center gap-4 my-2">
      <span class="w-[80px] text-[15px]">${label}</span>
      <div class="flex gap-1 text-[22px] text-primary cursor-pointer">
        ★ ★ ★ ★ ★
      </div>
    </div>
  `;
}

/**
 * Day unavailable popup content
 */
function dayUnavailableContent() {
  return `
    <h2 class="text-[18px] font-medium mb-4">
      Today is unavailable. Would you like to find the nearest available day?
    </h2>

    <div class="flex gap-4 mt-4">
      <button class="btn-primary w-full">Yes</button>
      <button class="btn-secondary w-full">No</button>
    </div>

    <button class="w-full mt-4 text-primary border border-primary py-2 rounded-xl hover:bg-primary hover:text-white transition-colors">
      Notify Me
    </button>
  `;
}

/**
 * Waitlist popup content
 */
function waitlistContent() {
  return `
    <h2 class="text-[18px] font-medium mb-4">Booking to waitlist</h2>

    <p class="text-[14px] text-gray-700 leading-relaxed">
      Selected time is not available. Would you like to add your name to the waitlist?
      We will notify you as soon as reservations become available.
    </p>

    <div class="flex gap-4 mt-4">
      <button class="btn-primary w-full">Yes</button>
      <button class="btn-secondary w-full">No</button>
    </div>
  `;
}

/**
 * Report popup content
 */
function reportContent() {
  return `
    <h2 class="text-[20px] font-semibold mb-4">Report</h2>

    <textarea class="input-field w-full h-[120px] border border-border rounded-xl p-3 focus:outline-none focus:border-primary"
              placeholder="Describe the issue you experienced"></textarea>

    <button class="w-full bg-primary text-white py-2 rounded-xl mt-6 hover:bg-primary/90 transition-colors">Submit</button>
  `;
}

/**
 * Confirm reservation popup content
 */
function confirmReservationContent() {
  return `
    <h2 class="text-[18px] font-semibold text-primary mb-2">
      By confirming this reservation, I acknowledge that I have read and accepted the Special Notes
    </h2>

    <p class="text-[14px] text-gray-700 leading-relaxed mb-4">
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note<br>
    </p>

    <div class="flex gap-4 mt-4">
      <button onclick="closeModal()" class="w-full bg-gray-300 text-black py-2 rounded-xl hover:bg-gray-400 transition-colors">Cancel</button>
      <button class="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition-colors">Accept</button>
    </div>
  `;
}

/**
 * Login account popup content
 */
function loginPopupContent() {
  return `
    <h2 class="text-[18px] font-semibold mb-1">Login Account</h2>
    <p class="text-[14px] text-gray-500 mb-4">
      Please enter your phone number to proceed with updating your reservation
    </p>

    <div class="flex gap-3 mb-4">
      <select class="input-field w-[100px]">
        <option>+966</option>
      </select>
      <input type="text" placeholder="Phone Number" class="input-field flex-1" />
    </div>

    <button class="w-full bg-black text-white py-2 rounded-xl">
      Sign In
    </button>
  `;
}

/**
 * Notify availability popup content
 */
function notifyPopupContent() {
  return `
    <h2 class="text-[18px] font-semibold mb-1">Notify Availability</h2>
    <p class="text-[13px] text-gray-500 mb-4">
      We'll notify you when times matching your choices become available.
    </p>

    <!-- Date -->
    <div class="flex items-center gap-2 text-[14px] mb-3">
      <img src="./assets/icons/calendar-orange.svg" class="w-4 h-4" />
      <span>16 Oct 2025</span>
    </div>

    <!-- Guests -->
    <div class="flex items-center gap-2 text-[14px] mb-3">
      <img src="./assets/icons/user-orange.svg" class="w-4 h-4" />
      <span>1</span>
    </div>

    <!-- Area dropdown -->
    <div class="mb-3">
      <button class="input-field w-full flex justify-between items-center">
        Any area
        <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
      </button>
    </div>

    <!-- Time range -->
    <div class="grid grid-cols-2 gap-3 mb-4">
      <button class="input-field flex justify-between items-center">
        From
        <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
      </button>

      <button class="input-field flex justify-between items-center">
        to
        <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
      </button>
    </div>

    <!-- Checkbox -->
    <label class="flex items-center gap-2 mb-4 cursor-pointer">
      <input type="checkbox" class="checkbox">
      <span class="text-[14px] text-gray-600">Notify for all restaurants</span>
    </label>

    <!-- Form -->
    <div class="grid grid-cols-1 gap-3 mb-2">
      <input type="text" placeholder="First name" class="input-field" />
      <input type="text" placeholder="Last name" class="input-field" />
    </div>

    <!-- Phone -->
    <div class="grid grid-cols-[90px_1fr] gap-3 mb-4">
      <select class="input-field"><option>+966</option></select>
      <input type="text" placeholder="Phone Number" class="input-field">
    </div>

    <!-- Email -->
    <input type="text" placeholder="Email" class="input-field mb-5" />

    <button class="w-full bg-primary text-white py-2 rounded-xl">
      🔔 Notify me
    </button>
  `;
}

/**
 * Special notes confirmation popup content (full version)
 */
function specialNotesPopupContent() {
  return `
    <h2 class="text-[18px] font-semibold text-primary mb-2">Special Notes</h2>

    <p class="text-[15px] text-gray-700 leading-relaxed mb-4">
      By confirming this reservation, I acknowledge that I have read and accepted the Special Notes
    </p>

    <div class="text-[14px] text-gray-800 leading-relaxed mb-6 max-h-[300px] overflow-y-auto">
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note<br>
      This is the restaurant note This is the restaurant note This is the restaurant note<br>
      This is the restaurant note This is the restaurant note This is the restaurant note<br>
      This is the restaurant note This is the restaurant note<br>
    </div>

    <div class="flex gap-3">
      <button class="w-full bg-gray-300 text-black py-2 rounded-xl">No</button>
      <button class="w-full bg-primary text-white py-2 rounded-xl">Yes</button>
    </div>
  `;
}
