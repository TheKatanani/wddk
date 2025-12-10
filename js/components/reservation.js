import { ReservationState, updateState } from "../state.js";
import { loadPage, supLoadPage } from "../router.js";

export default function Reservation() {
  return `
  <div class="w-full flex flex-col gap-10">

    <!-- ====================== DROPDOWNS ====================== -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

      <!-- Guests -->
      <div class="relative">
        <div 
          class="border border-gray-300 rounded-xl p-4 flex flex-col text-[13px] cursor-pointer"
          data-dropdown="guests"
        >
          <label class="text-gray-600 mb-1">Guests</label>
          <div class="flex justify-between items-center text-[15px] font-medium">
            <span id="guests-value">2</span>
            <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
          </div>
        </div>

        <!-- Guests Popup -->
        <div 
          class="dropdown-panel mt-2"
          data-panel="guests"
        >
          <div class="flex justify-between items-center mb-3">
            <span class="text-[13px] text-gray-700">Guests</span>
            <div class="flex items-center gap-2">
              <button class="qty-btn" data-action="dec-guests">-</button>
              <span id="guests-count" class="w-6 text-center text-[14px]">2</span>
              <button class="qty-btn" data-action="inc-guests">+</button>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[13px] text-gray-700">Child</span>
            <div class="flex items-center gap-2">
              <button class="qty-btn" data-action="dec-children">-</button>
              <span id="children-count" class="w-6 text-center text-[14px]">0</span>
              <button class="qty-btn" data-action="inc-children">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Time -->
      <div class="relative">
        <div 
          class="border border-gray-300 rounded-xl p-4 flex flex-col text-[13px] cursor-pointer"
          data-dropdown="time"
        >
          <label class="text-gray-600 mb-1">Time</label>
          <div class="flex justify-between items-center text-[15px] font-medium">
            <span id="time-value">3:00 PM</span>
            <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
          </div>
        </div>

        <!-- TIME PICKER POPUP -->
        <div 
          class="dropdown-panel mt-2 min-w-[260px] p-4 flex justify-center"
          data-panel="time"
        >
          <div class="flex items-center justify-between w-full text-[20px] font-medium select-none">

            <!-- Hours -->
            <div class="flex flex-col items-center mx-2" data-time-col="hour">
              <button class="time-arrow" data-time-up="hour">▲</button>
              <span id="time-hour">3</span>
              <button class="time-arrow" data-time-down="hour">▼</button>
            </div>

            <!-- Colon -->
            <span class="text-[#FF7A00] mx-1 text-[22px]">:</span>

            <!-- Minutes -->
            <div class="flex flex-col items-center mx-2" data-time-col="minute">
              <button class="time-arrow" data-time-up="minute">▲</button>
              <span id="time-minute">00</span>
              <button class="time-arrow" data-time-down="minute">▼</button>
            </div>

            <!-- Period -->
            <div class="flex flex-col items-center mx-2" data-time-col="period">
              <button class="time-arrow" data-time-up="period">▲</button>
              <span id="time-period">PM</span>
              <button class="time-arrow" data-time-down="period">▼</button>
            </div>

          </div>
        </div>
      </div>

      <!-- Date -->
      <div class="relative">
        <div 
          class="border border-gray-300 rounded-xl p-4 flex flex-col text-[13px] cursor-pointer"
          data-dropdown="date"
        >
          <label class="text-gray-600 mb-1">Date</label>
          <div class="flex justify-between items-center text-[15px] font-medium">
            <span id="date-value"></span>
            <img src="./assets/icons/chevron-down.svg" class="w-4 h-4" />
          </div>
        </div>

        <!-- Calendar Popup -->
        <div 
          class="dropdown-panel mt-2 min-w-[260px]"
          data-panel="date"
        >
          <div class="flex items-center justify-between mb-3 text-[14px]">
            <button class="px-1" data-cal-prev>&lt;</button>
            <span id="cal-month-label" class="font-medium"></span>
            <button class="px-1" data-cal-next>&gt;</button>
          </div>

          <div class="grid grid-cols-7 text-[11px] text-gray-500 mb-1">
            <span>Sun</span><span>Mon</span><span>Tue</span>
            <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>

          <div id="cal-grid" class="grid grid-cols-7 gap-1 text-[12px]"></div>
        </div>
      </div>
    </div>

    <!-- ====================== TIMESLOTS ====================== -->
    <div class="flex flex-col gap-3">

      <div class="flex flex-wrap gap-2">
        <button class="timeslot-btn" data-slot="1:30 PM">1:30 PM</button>
        <button class="timeslot-btn" data-slot="2:00 PM">2:00 PM</button>
        <button class="timeslot-btn" data-slot="2:30 PM">2:30 PM</button>
        <button class="timeslot-btn" data-slot="3:00 PM">3:00 PM</button>
        <button class="timeslot-btn" data-slot="3:30 PM">3:30 PM</button>
      </div>

      <div class="flex flex-wrap gap-2">
        <button class="timeslot-btn bg-[#FFBEAA] text-gray-700" data-disabled="true">
          Reserved
        </button>
        <button class="timeslot-btn bg-[#FFE8AA] text-gray-700" data-disabled="true">
          Next Day
        </button>
        <button class="timeslot-btn" data-slot="4:00 PM">4:00 PM</button>
        <button class="timeslot-btn" data-slot="4:30 PM">4:30 PM</button>
      </div>

      <div class="text-[13px] text-gray-600 mt-2 flex items-center gap-1">
        Lounge - 18 Years and above 
        <span class="text-red-500 text-[10px]">●</span>
      </div>

      <div class="flex flex-wrap gap-2">
        <button class="timeslot-btn" data-slot="5:00 PM">5:00 PM</button>
        <button class="timeslot-btn" data-slot="5:30 PM">5:30 PM</button>
        <button class="timeslot-btn" data-slot="6:00 PM">6:00 PM</button>
        <button class="timeslot-btn" data-slot="6:30 PM">6:30 PM</button>
        <button class="timeslot-btn" data-slot="7:00 PM">7:00 PM</button>
      </div>

      <div class="flex flex-wrap gap-2">
        <button class="timeslot-btn" data-slot="7:30 PM">7:30 PM</button>
        <button class="timeslot-btn" data-slot="8:00 PM">8:00 PM</button>
        <button class="timeslot-btn" data-slot="8:30 PM">8:30 PM</button>
        <button class="timeslot-btn" data-slot="9:00 PM">9:00 PM</button>
        <button class="timeslot-btn" data-slot="9:30 PM">9:30 PM</button>
      </div>
    </div>

    <!-- ====================== REVIEWS SECTION ====================== -->
    <div class="mt-10 flex flex-col gap-6">

      <div class="flex items-center gap-2 text-[15px] font-semibold text-gray-800">
        <img src="./assets/icons/review.svg" class="w-5 h-5" />
        Reviews
      </div>

      <div class="flex flex-col gap-2">
        <div class="h-2 rounded-full bg-gray-200"></div>
        <div class="h-2 rounded-full bg-gray-200 w-[80%]"></div>
      </div>

      ${renderReview("Mohammed", "2/5/24")}
      ${renderReview("Mohammed", "2/5/24")}
      ${renderReview("Mohammed", "2/5/24")}

    </div>

  </div>
  `;
}

function renderReview(name, date) {
  return `
    <div class="bg-[#F5F5F5] rounded-xl p-4 flex flex-col gap-1 text-[13px] text-gray-700">
      <div class="flex justify-between items-center mb-1">
        <span class="font-semibold">${name}</span>
        <span class="text-[12px] text-gray-500">${date}</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  `;
}

/* ========================= LOGIC ========================= */

export function init() {
  setupDropdowns();
  setupCalendar();
  setupTimeslots();
}

/* ---------- DROPDOWNS ---------- */

function setupDropdowns() {
  // Start from global state so returning users keep their selections
  const state = {
    guests: ReservationState.guests ?? 2,
    children: ReservationState.children ?? 0,
    time: ReservationState.time ?? "3:00 PM",
  };

  const dropdownTriggers = document.querySelectorAll("[data-dropdown]");
  const panels = document.querySelectorAll(".dropdown-panel");

  function closeAll() {
    panels.forEach((p) => p.classList.remove("show"));
  }

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = trigger.dataset.dropdown;
      const panel = document.querySelector(`[data-panel="${type}"]`);
      if (!panel) return;

      const isOpen = panel.classList.contains("show");
      closeAll();
      if (!isOpen) panel.classList.add("show");
    });
  });

  document.addEventListener("click", () => closeAll());

  // Guests logic
  const guestsValue = document.getElementById("guests-value");
  const guestsCount = document.getElementById("guests-count");
  const childrenCount = document.getElementById("children-count");

  function updateGuestsUI() {
    guestsCount.textContent = state.guests;
    childrenCount.textContent = state.children;
    guestsValue.textContent = state.guests;

    // UPDATE GLOBAL STATE
    updateState("guests", state.guests);
    updateState("children", state.children);
  }

  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      if (action === "inc-guests") state.guests++;
      if (action === "dec-guests") state.guests = Math.max(1, state.guests - 1);
      if (action === "inc-children") state.children++;
      if (action === "dec-children")
        state.children = Math.max(0, state.children - 1);

      updateGuestsUI();
    });
  });

  updateGuestsUI();

  /* ---------- TIME PICKER LOGIC ---------- */

  const hourEl = document.getElementById("time-hour");
  const minuteEl = document.getElementById("time-minute");
  const periodEl = document.getElementById("time-period");
  const timeValueEl = document.getElementById("time-value");

  function parseTimeString(value) {
    const match = value.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
    if (!match) {
      return { hour: 3, minute: 0, period: "PM" };
    }
    const [, h, m, p] = match;
    return {
      hour: Math.min(Math.max(parseInt(h, 10), 1), 12),
      minute: Math.min(Math.max(parseInt(m, 10), 0), 59),
      period: p.toUpperCase() === "AM" ? "AM" : "PM",
    };
  }

  const parsedTime = parseTimeString(state.time);
  let hour = parsedTime.hour;
  let minute = parsedTime.minute;
  let period = parsedTime.period;

  function updateTimeUI() {
    hourEl.textContent = hour;
    minuteEl.textContent = minute.toString().padStart(2, "0");
    periodEl.textContent = period;

    const finalTime = `${hour}:${minuteEl.textContent} ${period}`;
    state.time = finalTime;
    timeValueEl.textContent = finalTime;

    // UPDATE GLOBAL STATE
    updateState("time", finalTime);
  }

  // Increase/decrease logic
  document.querySelectorAll("[data-time-up]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.timeUp;

      if (type === "hour") {
        hour = hour === 12 ? 1 : hour + 1;
      }
      else if (type === "minute") {
        minute = (minute + 1) % 60;
      }
      else if (type === "period") {
        period = period === "AM" ? "PM" : "AM";
      }

      updateTimeUI();
    });
  });

  document.querySelectorAll("[data-time-down]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.timeDown;

      if (type === "hour") {
        hour = hour === 1 ? 12 : hour - 1;
      }
      else if (type === "minute") {
        minute = minute === 0 ? 59 : minute - 1;
      }
      else if (type === "period") {
        period = period === "AM" ? "PM" : "AM";
      }

      updateTimeUI();
    });
  });

  updateTimeUI();
}

/* ---------- CALENDAR ---------- */

function setupCalendar() {
  const dateSpan = document.getElementById("date-value");
  const monthLabel = document.getElementById("cal-month-label");
  const grid = document.getElementById("cal-grid");
  if (!dateSpan || !monthLabel || !grid) return;

  const today = new Date();
  const savedDate = ReservationState.date ? new Date(ReservationState.date) : null;
  const initialDate = savedDate && !isNaN(savedDate) ? savedDate : today;

  let current = new Date(initialDate);
  let selected = new Date(initialDate);

  function formatDisplayDate(date) {
    const opts = { month: "short", day: "numeric", year: "2-digit" };
    return date.toLocaleDateString("en-US", opts).replace(",", "");
  }

  function renderCalendar() {
    const year = current.getFullYear();
    const month = current.getMonth();

    const monthName = current.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    monthLabel.textContent = monthName;

    // First day of month (0-6 for Sun-Sat)
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    grid.innerHTML = "";

    // Blank cells
    for (let i = 0; i < firstDay; i++) {
      grid.innerHTML += `<span></span>`;
    }

    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const isSelected =
        dateObj.toDateString() === selected.toDateString();

      grid.innerHTML += `
        <button 
          class="h-7 w-7 rounded-full text-[12px] ${isSelected ? "bg-[#FF7A00] text-white" : "hover:bg-gray-100"
        }"
          data-day="${d}"
        >
          ${d}
        </button>
      `;
    }

    // Attach day listeners
    grid.querySelectorAll("button[data-day]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const day = parseInt(btn.dataset.day, 10);
        selected = new Date(year, month, day);
        dateSpan.textContent = formatDisplayDate(selected);

        // UPDATE GLOBAL STATE
        updateState("date", selected.toISOString());

        renderCalendar(); // re-render to highlight selection
        // close only date panel
        const panel = document.querySelector('[data-panel="date"]');
        panel && panel.classList.remove("show");
      });
    });
  }

  // Initial date display
  dateSpan.textContent = formatDisplayDate(selected);
  updateState("date", selected.toISOString());
  renderCalendar();

  // Month navigation
  const prevBtn = document.querySelector("[data-cal-prev]");
  const nextBtn = document.querySelector("[data-cal-next]");

  prevBtn &&
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      current.setMonth(current.getMonth() - 1);
      renderCalendar();
    });

  nextBtn &&
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      current.setMonth(current.getMonth() + 1);
      renderCalendar();
    });
}

/* ---------- TIMESLOTS ---------- */

function setupTimeslots() {
  const slots = document.querySelectorAll(".timeslot-btn");
  let activeButton = null;

  slots.forEach((btn) => {
    const disabled = btn.dataset.disabled === "true";
    if (disabled) {
      btn.classList.add("cursor-not-allowed", "opacity-80");
      return;
    }

    // Restore previously selected slot, if any
    if (ReservationState.timeSlot && ReservationState.timeSlot === btn.dataset.slot) {
      btn.classList.add("timeslot-active");
      activeButton = btn;
    }

    btn.addEventListener("click", () => {
      if (activeButton) {
        activeButton.classList.remove("timeslot-active");
      }

      activeButton = btn;
      btn.classList.add("timeslot-active");

      const slot = btn.dataset.slot;

      console.log("button clicked!")
      // UPDATE GLOBAL STATE
      updateState("timeSlot", slot);

      // Redirect to checkout page
      supLoadPage("checkout");
    });

  });
}
