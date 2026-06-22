import { db } from "./firebase-init.js";
import {
    ref,
    set,
    remove,
    onDisconnect,
    onValue
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

let listenerId = null;

// =========================
// START LISTENING
// =========================
export function startListening() {
    listenerId = "listener_" + Math.random().toString(36).substring(2, 10);

    const listenerRef = ref(db, "listeners/" + listenerId);

    // Mark listener as active
    set(listenerRef, true);

    // Auto-remove if user closes tab or disconnects
    onDisconnect(listenerRef).remove();
}

// =========================
// STOP LISTENING
// =========================
export function stopListening() {
    if (!listenerId) return;

    const listenerRef = ref(db, "listeners/" + listenerId);

    // Remove listener entry
    remove(listenerRef);

    listenerId = null;
}

// =========================
// REAL-TIME LISTENER COUNT
// =========================
export function onListenerCount(callback) {
    const listenersRef = ref(db, "listeners");

    onValue(listenersRef, (snapshot) => {
        const data = snapshot.val() || {};
        const count = Object.keys(data).length;
        callback(count);
    });
}
