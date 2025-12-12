// js/state.js

// GLOBAL RESERVATION STATE
export const ReservationState = {
    guests: 2,
    children: 0,
    date: null,      // example "2025-07-13"
    formattedDate: null, // formatted date like "15 Oct"
    time: null,      // user selected base time ("7:00 PM")
    timeSlot: null,
    slot: null,      // actual timeslot chosen ("7:15 PM")
    area: null,      // terrace / dining room / lounge
    specialNotesAccepted: false,

    // Store original values when modifying a booking
    oldReservation: null,

    contact: {
        fname: "",
        lname: "",
        phone: "",
        email: ""
    }
};

// Utility to update the state safely
export function updateState(key, value) {
    ReservationState[key] = value;
    console.log("ReservationState updated:", ReservationState);
}

// Update nested fields (contact, etc.)
export function updateContact(key, value) {
    ReservationState.contact[key] = value;
    console.log("ReservationState updated:", ReservationState);
}

// Save current reservation as old reservation for modification comparison
export function saveAsOldReservation() {
    ReservationState.oldReservation = {
        guests: ReservationState.guests,
        children: ReservationState.children,
        date: ReservationState.date,
        time: ReservationState.time,
        timeSlot: ReservationState.timeSlot
    };
    console.log("Old reservation saved:", ReservationState.oldReservation);
}

// Clear old reservation after modification is complete
export function clearOldReservation() {
    ReservationState.oldReservation = null;
}
