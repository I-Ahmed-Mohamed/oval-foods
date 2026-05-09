const state = {
  query: "",
  filter: "all",
  opened: new Set(),
  favorites: new Set(JSON.parse(localStorage.getItem("oval_global_favorites") || "[]")),
  recent: JSON.parse(localStorage.getItem("oval_global_recent") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const companiesGrid = $("#companiesGrid");
const searchInput = $("#locationSearch");

function normalize(text){
  return String(text || "")
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .trim();
}

function branchKey(client, branch){
  return `${client}__${branch.code || ""}__${branch.name || ""}`;
}

function toast(message){
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

function saveFavorites(){
  localStorage.setItem("oval_global_favorites", JSON.stringify([...state.favorites]));
}

function saveRecent(item){
  state.recent = [item, ...state.recent.filter(x => x.key !== item.key)].slice(0, 18);
  localStorage.setItem("oval_global_recent", JSON.stringify(state.recent));
}

function highlight(text){
  if(!state.query) return text || "";
  const safe = state.query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return String(text || "").replace(new RegExp(safe, "gi"), match => `<mark>${match}</mark>`);
}

function renderProducts(){
  const grid = $("#productsGrid");
  grid.innerHTML = PRODUCTS_DATA.map(product => `
    <article class="product-card reveal">
      <div class="product-media">
        ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ""}
      </div>
      <div class="product-body">
        <span class="product-type">${product.type}</span>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
      </div>
    </article>
  `).join("");
}

function buildFilters(){
  const wrap = document.querySelector(".quick-actions");
  const reserved = new Set(["all", "favorites", "recent"]);
  LOCATIONS_DATA.forEach(company => {
    if(!company.type || reserved.has(company.type)) return;
    if(wrap.querySelector(`[data-filter="${company.type}"]`)) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.filter = company.type;
    btn.textContent = company.client;
    wrap.appendChild(btn);
  });
}

function getFilteredLocations(){
  const q = normalize(state.query);

  return LOCATIONS_DATA.map(company => {
    let branches = (company.branches || []).filter(branch => {
      const key = branchKey(company.client, branch);
      const haystack = normalize([company.client, company.type, branch.code, branch.name, branch.area, branch.address].join(" "));
      const matchesQuery = !q || haystack.includes(q);
      const matchesFilter =
        state.filter === "all" ||
        state.filter === company.type ||
        (state.filter === "favorites" && state.favorites.has(key)) ||
        (state.filter === "recent" && state.recent.some(item => item.key === key));

      return matchesQuery && matchesFilter;
    });

    const companyMatches = q && normalize(company.client).includes(q);
    if(companyMatches && (state.filter === "all" || state.filter === company.type)){
      branches = company.branches || [];
    }

    return { ...company, branches };
  }).filter(company => company.branches.length);
}

function renderLocations(){
  const data = getFilteredLocations();
  const branchCount = data.reduce((sum, company) => sum + company.branches.length, 0);

  $("#shownClients").textContent = data.length;
  $("#shownBranches").textContent = branchCount;
  $("#favoriteCount").textContent = state.favorites.size;
  $("#emptyState").hidden = data.length > 0;

  companiesGrid.innerHTML = data.map(company => {
    const isOpen = !!state.query || state.opened.has(company.client) || state.filter !== "all";
    const initial = (company.client || "?").trim().slice(0, 1);

    return `
      <article class="company-card ${isOpen ? "open" : ""}">
        <button class="company-head" type="button" data-toggle="${company.client}">
          <span class="company-title">
            <span class="company-icon">${initial}</span>
            <span>
              <strong>${highlight(company.client)}</strong>
              <small>${company.type === "amazon" ? "عميل أمازون" : "عميل توزيع"}</small>
            </span>
          </span>
          <span class="company-count">${company.branches.length} فرع ⌄</span>
        </button>

        <div class="branch-list">
          ${company.branches.map(branch => {
            const key = branchKey(company.client, branch);
            const isFav = state.favorites.has(key);
            const map = branch.map || branch.link || "#";
            const area = branch.area || branch.address || "غير محدد";
            const code = branch.code || "بدون كود";
            return `
              <div class="branch-item">
                <div class="branch-info">
                  <div class="branch-name">
                    <span>${highlight(branch.name)}</span>
                    <b class="branch-code">${highlight(code)}</b>
                  </div>
                  <div class="branch-meta">
                    <span>${highlight(area)}</span>
                    <span>${highlight(company.client)}</span>
                  </div>
                </div>

                <div class="branch-actions">
                  <a class="map-btn" href="${map}" target="_blank" rel="noopener"
                    data-map="1"
                    data-key="${key}"
                    data-client="${company.client}"
                    data-name="${branch.name}"
                    data-code="${code}"
                    data-area="${area}"
                    data-url="${map}">فتح اللوكيشن</a>
                  <button class="copy-btn" type="button" title="نسخ"
                    data-copy="${company.client} | ${branch.name} | ${code} | ${area} | ${map}">⧉</button>
                  <button class="fav-btn ${isFav ? "active" : ""}" type="button" title="مفضلة" data-fav="${key}">★</button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
}

searchInput.addEventListener("input", (e) => {
  state.query = e.target.value;
  renderLocations();
});

$("#clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  renderLocations();
  searchInput.focus();
});

document.addEventListener("click", async (e) => {
  const toggle = e.target.closest("[data-toggle]");
  if(toggle){
    const name = toggle.dataset.toggle;
    state.opened.has(name) ? state.opened.delete(name) : state.opened.add(name);
    renderLocations();
    return;
  }

  const fav = e.target.closest("[data-fav]");
  if(fav){
    const key = fav.dataset.fav;
    state.favorites.has(key) ? state.favorites.delete(key) : state.favorites.add(key);
    saveFavorites();
    renderLocations();
    toast(state.favorites.has(key) ? "اتضاف للمفضلة" : "اتشال من المفضلة");
    return;
  }

  const copy = e.target.closest("[data-copy]");
  if(copy){
    await navigator.clipboard.writeText(copy.dataset.copy);
    toast("تم نسخ بيانات الفرع");
    return;
  }

  const map = e.target.closest("[data-map]");
  if(map){
    saveRecent({
      key: map.dataset.key,
      client: map.dataset.client,
      name: map.dataset.name,
      code: map.dataset.code,
      area: map.dataset.area,
      url: map.dataset.url
    });
  }

  const filter = e.target.closest("[data-filter]");
  if(filter){
    document.querySelectorAll("[data-filter]").forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");
    state.filter = filter.dataset.filter;
    renderLocations();
  }
});

const savedTheme = localStorage.getItem("oval_global_theme") || "dark";
document.documentElement.dataset.theme = savedTheme;
$("#themeToggle").textContent = savedTheme === "light" ? "☀" : "☾";
$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("oval_global_theme", next);
  $("#themeToggle").textContent = next === "light" ? "☀" : "☾";
});

const backTop = $("#backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 520);
});
backTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

function revealOnScroll(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

renderProducts();
buildFilters();
renderLocations();
revealOnScroll();
