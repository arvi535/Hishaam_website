// script.js: draws the cards, favorites, filters, menu and forms.
// properties-data.js (the list) and lang.js (Arabic/English) load before this file.
const labels = { rent: "For Rent", sale: "For Sale", airbnb: "Airbnb" };
let favs = JSON.parse(localStorage.getItem("favs") || "[]");   // saved hearts
let activeFilter = "all";                                       // current filter button

// Show "/mo" and "/night" in Arabic too
const showPrice = price => lang === "ar" ? price.replace("/mo", " / شهر").replace("/night", " / ليلة") : price;

// ===== 1. DRAW THE CARDS =====
function renderCards(list, target) {
  target.innerHTML = list.map(p => `
    <a class="card" href="contact.html" style="background-image:${p.bg}">
      <span class="price">${showPrice(p.price)}</span>
      <span class="badge">${t(labels[p.type])}</span>
      <button class="fav ${favs.includes(p.id) ? "on" : ""}" data-id="${p.id}" aria-label="${t("Save to favorites")}">${favs.includes(p.id) ? "♥" : "♡"}</button>
      <span class="place">📍 ${lang === "ar" && p.ar ? p.ar : p.title}</span>
    </a>`).join("");
}

// Home page shows the first 6, Properties page shows all (or the filtered ones)
const featured = document.getElementById("featured");
const grid = document.getElementById("grid");
function refreshCards() {
  if (featured) renderCards(properties.slice(0, 6), featured);
  if (grid) renderCards(activeFilter === "all" ? properties : properties.filter(p => p.type === activeFilter), grid);
}

// ===== 2. HEART BUTTON =====
document.addEventListener("click", e => {
  const heart = e.target.closest(".fav");
  if (!heart) return;
  e.preventDefault();                       // stop the card link from opening
  const id = Number(heart.dataset.id);
  favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
  localStorage.setItem("favs", JSON.stringify(favs));
  heart.classList.toggle("on");
  heart.textContent = favs.includes(id) ? "♥" : "♡";
});

// ===== 3. FILTER BUTTONS (Properties page) =====
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    activeFilter = btn.dataset.filter;
    refreshCards();
  });
});

// ===== 4. MOBILE MENU =====
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) menuBtn.addEventListener("click", () => document.querySelector(".menu").classList.toggle("open"));

// ===== 5. FORMS THAT SEND AN EMAIL =====
// Any <form data-endpoint="..."> is sent to that address (a Formspree form) without reloading the page.
document.querySelectorAll("form[data-endpoint]").forEach(form => {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const note = form.querySelector(".note");
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = t("Sending...");
    try {
      const res = await fetch(form.dataset.endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      note.textContent = t("Thank you! We received your message and will contact you soon.");
      note.className = "note ok";
    } catch (err) {
      note.textContent = t("Something went wrong. Please try again or message us on WhatsApp.");
      note.className = "note err";
    }
    btn.disabled = false; btn.textContent = label;
  });
});

// ===== 6. START: draw the cards and apply the saved language (Arabic first) =====
applyLang();
