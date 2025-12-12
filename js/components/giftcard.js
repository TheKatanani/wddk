export default function GiftCard() {
  return /*html*/`
  <div class="w-full flex flex-col gap-10 pr-24">
  
    <!-- CARD + PRICE -->
    <div class="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-6 items-start ">

    <div class="relative w-full max-w-[460px] mx-auto h-[250px] rounded-[30px]  shadow-xl flex overflow-hidden">

  <!-- LEFT SIDE: black → grey → silver -->
  <div class="relative w-[40%] h-full"
       style="
         background: linear-gradient(
           90deg,
           #000000 0%,
           #2a2a2a 25%,
           #8a8a8a 45%,
           #d7d7d7 65%,
           #ffffff 80%
         );
       ">
    
    <!-- Ribbon -->
    <div class="absolute left-[42%] top-0 h-full w-[7px] bg-white/95"></div>

    <!-- Bow -->
    <img src='./assets/icons/bow.svg'
         class="absolute left-[19%] top-[34%] w-[85px] h-[85px] opacity-95" />
    
         </div>
         <!-- Powered by -->
         <div class="absolute bottom-5 left-1/2 -translate-x-[50%] text-[13px] text-black/60 z-20">
           Powered by Wddk
         </div>

  <!-- RIGHT SIDE: white → light orange → deep orange -->
  <div class="relative flex-1 h-full px-10 py-8"
       style="
         background: linear-gradient(
           90deg,
           #ffffff 0%,
           #ffe5cc 25%,
           #ffb873 55%,
           #ff7a00 100%
         );
       ">
    
    <!-- Gift Card label -->
    <div class="absolute top-6 right-8 text-white text-[18px] font-light drop-shadow-md">
      Gift Card
    </div>

    <!-- SUSHISAMBA Logo block -->
    <div class="absolute left-[20%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col items-center z-20">
      <img src="./assets/icons/logo.svg" class="h-12 mb-1" /> 
    </div>

    <!-- Price -->
    <div id="card-price-label"
         class="absolute bottom-7 right-10 text-white text-[30px] font-semibold drop-shadow-xl flex flex-row-reverse items-center gap-2">
      500 <img src="./assets/icons/ryal.svg" class="inline h-8 mb-1" />
    </div>
  </div>
</div>


      <!-- Price Selector -->
      <div class="flex flex-col gap-2" id="price-list">

        ${priceButton(100)}
        ${priceButton(200)}
        ${priceButton(300)}
        ${priceButton(400)}
        ${priceButton(500, true)}
        ${customButton()}

        <!-- Custom Price Input -->
        <input 
          id="custom-price-input" 
          type="number"
          class="input-field mt-2 hidden" 
          placeholder="Enter amount"
          min="1"
        />

      </div>
    </div>


    <!-- FORM -->
    <h3 class="text-[16px] font-semibold text-gray-800">Reservation Gift Recipient Details</h3>

    <div class="flex flex-col gap-3">
      <input id="fname" class="input-field" placeholder="First name" />
      <input id="lname" class="input-field" placeholder="Last name" />

      <div class="grid grid-cols-[90px_1fr] gap-3">
        <select id="phone-country" class="input-field">
          <option>+966</option>
        </select>
        <input id="phone" class="input-field" placeholder="Phone Number" />
      </div>

      <input id="email" class="input-field" placeholder="Email" />
    </div>


    <!-- NAME DISPLAY -->
    <h3 class="text-[15px] font-semibold text-gray-800 mt-6">Display your name in the message</h3>

    <div class="flex gap-3" id="name-toggle">
      <button class="toggle-btn" data-mode="yes">Yes, include my name</button>
      <button class="toggle-btn-active" data-mode="no">No, send anonymously</button>
    </div>


    <!-- MESSAGE -->
    <h3 class="text-[15px] font-semibold text-gray-800 mt-6">Customize your message</h3>

    <textarea id="message" class="input-field resize-none h-[110px]" placeholder="Express your thoughts...."></textarea>


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
      <!-- <button id="pay-btn" class="pay-now-btn opacity-50 cursor-not-allowed"> -->
      <button id="pay-btn" class="pay-now-btn">
        Pay now
      </button>
    </div>

  </div>
  `;
}

/* ---------- HTML HELPERS ---------- */

function priceButton(amount, active = false) {
  return /*html*/`
    <button
      class="price-btn ${active ? "price-btn-active" : ""} flex items-center justify-center gap-1"
      data-amount="${amount}"
    >
      <img src="./assets/icons/ryal.svg" class="w-3" /> ${amount}
    </button>
  `;
}

function customButton() {
  return /*html*/`
    <button class="price-btn" data-custom="true">Custom</button>
  `;
}

/* ============================================================
   INIT LOGIC FOR THE ENTIRE PAGE
=============================================================== */
export function init() {
  setupPriceSelector();
  setupNameToggle();
  setupValidation();
}

/* ============================================================
   PRICE SELECTOR LOGIC
=============================================================== */

function setupPriceSelector() {
  const buttons = document.querySelectorAll(".price-btn");
  const cardLabel = document.getElementById("card-price-label");
  const customInput = document.getElementById("custom-price-input");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("price-btn-active"));
      btn.classList.add("price-btn-active");

      const amount = btn.dataset.amount;
      const isCustom = btn.dataset.custom === "true";

      if (isCustom) {
        customInput.classList.remove("hidden");
        customInput.focus();
        cardLabel.innerHTML = "<img src='./assets/icons/ryal.svg' class='inline h-8 mb-1' /> --";
      } else {
        customInput.classList.add("hidden");
        cardLabel.innerHTML = `${amount} <img src='./assets/icons/ryal.svg' class='inline h-8 mb-1' />`;
      }
    });
  });

  // When typing custom price update card
  customInput.addEventListener("input", () => {
    const val = customInput.value || "--";
    cardLabel.innerHTML = `${val} <img src='./assets/icons/ryal.svg' class='inline h-8 mb-1' />`;
  });
}

/* ============================================================
   NAME TOGGLE LOGIC
=============================================================== */

function setupNameToggle() {
  const buttons = document.querySelectorAll("#name-toggle button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("toggle-btn-active"));
      buttons.forEach(b => b.classList.add("toggle-btn"));

      btn.classList.remove("toggle-btn");
      btn.classList.add("toggle-btn-active");
    });
  });
}

/* ============================================================
   FORM VALIDATION + PAY BUTTON ENABLE/DISABLE
=============================================================== */

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

      // Only show error if user has interacted (blur) or we could add a submitted flag
      // For now, let's keep it simple: Real-time validation visual feedback
      // We can add a 'touched' listener or just toggle validation classes
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

    return canPay;
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

  validate();
}
