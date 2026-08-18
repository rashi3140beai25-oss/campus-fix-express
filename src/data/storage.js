// ============================================================
// Small localStorage helper functions (plain JavaScript)
// ============================================================

import {
  complaints as demoComplaints,
  lostFoundItems as demoLostFound,
  notificationsData as demoNotifications,
} from "./sampleData";

// Reading localStorage is only possible in the browser, so we always check it.
export function loadData(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }
  const saved = window.localStorage.getItem(key);
  if (!saved) {
    return fallback;
  }
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.log("Could not read " + key, error);
    return fallback;
  }
}

export function saveData(key, value) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getComplaints() {
  return loadData("cf_complaints", demoComplaints);
}

export function saveComplaints(list) {
  saveData("cf_complaints", list);
}

export function getLostFound() {
  return loadData("cf_lostfound", demoLostFound);
}

export function saveLostFound(list) {
  saveData("cf_lostfound", list);
}

export function getNotifications() {
  return loadData("cf_notifications", demoNotifications);
}

export function saveNotifications(list) {
  saveData("cf_notifications", list);
}

export function getUpvoted() {
  return loadData("cf_upvoted", []);
}

export function saveUpvoted(list) {
  saveData("cf_upvoted", list);
}

export function getUser() {
  return loadData("cf_user", null);
}

export function saveUser(user) {
  saveData("cf_user", user);
}

export function clearUser() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("cf_user");
  }
}

// Builds an ID like CF-2026-00125
export function makeComplaintId(existingList) {
  const year = new Date().getFullYear();
  const numbers = existingList.map(function (item) {
    return Number(item.id.split("-")[2]);
  });
  let biggest = 100;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  const next = biggest + 1;
  return "CF-" + year + "-" + String(next).padStart(5, "0");
}

export function formatDate(value) {
  const d = new Date(value);
  if (isNaN(d.getTime())) {
    return value;
  }
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
