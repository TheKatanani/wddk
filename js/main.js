// js/main.js
import { loadPage, supLoadPage } from "./router.js";
import { openModal, closeModal } from "./components/modal.js";
import { ReservationState, updateState } from "./state.js";

/* ---------- TAB NAVIGATION ---------- */

function initTabs() {
    const buttons = document.querySelectorAll("button[data-page]");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const page = btn.dataset.page;
            if (!page) return;
            loadPage(page);
        });
    });
}

/* ---------- GLOBAL MODAL TRIGGERS ---------- */
/**
 * Any element with data-modal="type" will open that popup.
 * Example:
 *   <button data-modal="review">Write a review</button>
 *   <a href="#" data-modal="paymentPolicy">View payment policy</a>
 */
function initModalTriggers() {
    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-modal]");
        if (!trigger) return;

        const type = trigger.dataset.modal;
        if (!type) return;

        e.preventDefault();
        openModal(type);
    });
}

/* ---------- BOOTSTRAP ---------- */

document.addEventListener("DOMContentLoaded", () => {
    // Make modal functions globally available for inline onclick handlers (if needed)
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Start with reservation page
    loadPage("reservation");

    // Handle browser back/forward
    window.addEventListener("popstate", (event) => {
        if (event.state) {
            const { page, type } = event.state;
            if (type === 'sub') {
                supLoadPage(page, false);
            } else {
                loadPage(page, false);
            }
        } else {
            // Default to reservation if no state (e.g. initial load popped)
            loadPage("reservation", false);
        }
    });

    // Set up global handlers
    initModalTriggers();
});

// Re-bind tabs after every page load
document.addEventListener("page-loaded", () => {
    initTabs();
});
