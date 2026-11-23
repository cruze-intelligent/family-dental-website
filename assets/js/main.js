// Family Dental Clinic — shared site script
(function () {
  // Clinic WhatsApp number in international format (no +)
  const WA = "256775412434";

  // footer year
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));

  // mark the current page in the menu
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a => {
    const target = a.getAttribute("href");
    const isBlog = here.startsWith("blog") && target === "blog.html";
    if (target === here || isBlog) a.setAttribute("aria-current", "page");
  });

  // mobile menu
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  // booking form → WhatsApp
  const form = document.getElementById("bookForm");
  if (form) {
    const d = form.querySelector('input[name="date"]');
    if (d) d.min = new Date().toISOString().split("T")[0];

    // preselect a service from ?service=...
    const pre = new URLSearchParams(location.search).get("service");
    const sel = form.querySelector('select[name="service"]');
    if (pre && sel) {
      const opt = [...sel.options].find(o => o.value.toLowerCase() === pre.toLowerCase());
      if (opt) sel.value = opt.value;
    }
    const br = new URLSearchParams(location.search).get("branch");
    const bsel = form.querySelector('select[name="branch"]');
    if (br && bsel) {
      const bopt = [...bsel.options].find(o => o.value.toLowerCase().startsWith(br.toLowerCase()));
      if (bopt) bsel.value = bopt.value;
    }

    form.addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(form);
      const branch = f.get("branch") ? `\nBranch: ${f.get("branch")}` : "";
      const text =
`Hello Family Dental Clinic, I'd like to book an appointment.
Name: ${f.get("name")}
Phone: ${f.get("phone")}${branch}
Service: ${f.get("service")}
Preferred date: ${f.get("date")} (${f.get("time")})${f.get("msg") ? "\nNote: " + f.get("msg") : ""}`;
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  }

  // reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add("in"));
  }
})();
