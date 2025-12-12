// js/components/bookingDetails.js

/**
 * Reusable Booking Details Card Component (returns HTML string)
 * Use this in template literals for server-side or string-based rendering
 */
export function BookingDetailsCard() {
  return /*html*/`
    <div id="booking-details"
      class="relative bg-white rounded-xl rounded-b-l-none border-b-r-none border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                w-full max-w-[280px] mx-auto pt-6 pb-10 px-6 flex flex-col items-center">

      <!-- Title -->
      <h2 class="text-[18px] font-semibold text-center tracking-wide">Booking Details</h2>
      <div class="w-12 mx-auto h-[1px] bg-gray-300/60 mt-2 mb-6"></div>

      <!-- Remaining Time -->
      <div class="text-center mb-10">
        <div id="timer-countdown" class="text-[26px] font-semibold text-gray-900">3:00</div>
        <div class="text-[12px] text-gray-500 mt-[2px]">Remaining Time</div>
      </div>

      <!-- Guests -->
      <div class="booking-item">
        <img src="./assets/icons/guests.svg" class="booking-icon" alt="Guests" />
        <p class="booking-label">Guests</p>
        <p id="summary-guests" class="booking-value">2</p>
      </div>

      <!-- Date -->
      <div class="booking-item">
        <img src="./assets/icons/date.svg" class="booking-icon" alt="Date" />
        <p class="booking-label">Date</p>
        <p id="summary-date" class="booking-value">15 Oct</p>
      </div>

      <!-- Time -->
      <div class="booking-item">
        <img src="./assets/icons/time.svg" class="booking-icon" alt="Time" />
        <p class="booking-label">Time</p>
        <p id="summary-time" class="booking-value">10:45 PM</p>
      </div>

      <!-- Area -->
      <div class="booking-item">
        <img src="./assets/icons/area.svg" class="booking-icon" alt="Area" />
        <p class="booking-label">Area</p>
        <p class="booking-value">Restaurant</p>
      </div>

      <!-- Seating -->
      <div class="booking-item">
        <img src="./assets/icons/seating.svg" class="booking-icon" alt="Seating" />
        <p class="booking-label">Seating</p>
        <p class="booking-value">2 hr</p>
      </div>

      <!-- Zig-Zag Bottom -->
      <div class="absolute -bottom-5 left-0 w-full overflow-hidden">
        <svg class="w-full h-5" viewBox="0 0 100 6" preserveAspectRatio="none">
          <path d="M0 0 L5 6 L10 0 L15 6 L20 0 L25 6 L30 0 L35 6 L40 0 L45 6 L50 0 L55 6 L60 0 L65 6 L70 0 L75 6 L80 0 L85 6 L90 0 L95 6 L100 0"
            fill="white" stroke="#e5e7eb" stroke-width="0.4" />
        </svg>
      </div>
    </div>
  `;
}

/**
 * Reusable Booking Details Card Component (returns DOM element)
 * Use this when you need to append to the DOM directly
 */
export function createBookingDetailsCard() {
  const card = document.createElement('div');
  card.id = 'booking-details';
  card.className = 'relative bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full max-w-[280px] mx-auto pt-6 pb-10 px-6 flex flex-col items-center';

  card.innerHTML = BookingDetailsCard().replace(/<div id="booking-details"[^>]*>/, '').replace(/<\/div>\s*$/, '');

  return card;
}

/**
 * Update booking details values
 */
export function updateBookingDetails(data) {
  const elements = {
    guests: document.getElementById('summary-guests'),
    date: document.getElementById('summary-date'),
    time: document.getElementById('summary-time')
  };

  if (data.guests && elements.guests) elements.guests.textContent = data.guests;
  if (data.date && elements.date) elements.date.textContent = data.date;
  if (data.time && elements.time) elements.time.textContent = data.time;
}
