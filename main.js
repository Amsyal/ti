/* ===== Prodi S1 Teknik Industri UNTIDAR — interaksi halaman tunggal ===== */

/* ---------- DATA KURIKULUM (sumber: kurikulum resmi FT UNTIDAR) ---------- */
const KURIKULUM = {
  1: [
    { kode: "MKU200", mk: "Pendidikan Agama", sks: 2, pras: "—" },
    { kode: "TIN200", mk: "Pengantar Teknik Industri", sks: 2, pras: "—" },
    { kode: "TIN201", mk: "Kalkulus 1", sks: 3, pras: "—" },
    { kode: "TIN202", mk: "Fisika 1", sks: 3, pras: "—" },
    { kode: "TIN203", mk: "Material Teknik", sks: 2, pras: "—" },
    { kode: "TIN204", mk: "Menggambar Teknik", sks: 2, pras: "—" },
    { kode: "TIN205", mk: "Praktikum Menggambar Teknik", sks: 1, pras: "—" },
    { kode: "TIN206", mk: "Kimia", sks: 3, pras: "—" },
    { kode: "TIN207", mk: "Teori Probabilitas", sks: 2, pras: "—" },
  ],
  2: [
    { kode: "MKU203", mk: "Bahasa Indonesia", sks: 2, pras: "—" },
    { kode: "MKU208", mk: "Bahasa Inggris", sks: 2, pras: "—" },
    { kode: "TIN250", mk: "Mekanika Teknik", sks: 2, pras: "Menggambar Teknik, Fisika 1" },
    { kode: "TIN251", mk: "Biologi Anatomi dan Fisiologi", sks: 3, pras: "—" },
    { kode: "TIN252", mk: "Statistika 1", sks: 3, pras: "Teori Probabilitas" },
    { kode: "TIN253", mk: "Kalkulus 2", sks: 3, pras: "Kalkulus 1" },
    { kode: "TIN254", mk: "Fisika 2", sks: 2, pras: "Fisika 1" },
    { kode: "TIN255", mk: "Praktikum Fisika", sks: 1, pras: "Fisika 1" },
    { kode: "TIN256", mk: "Pemrograman Komputer", sks: 2, pras: "—" },
  ],
  3: [
    { kode: "TIN300", mk: "Ekologi Industri", sks: 2, pras: "—" },
    { kode: "TIN301", mk: "Aljabar Linear", sks: 3, pras: "Kalkulus 2" },
    { kode: "TIN302", mk: "Statistika 2", sks: 3, pras: "Statistika 1" },
    { kode: "TIN303", mk: "Proses Manufaktur", sks: 3, pras: "Material Teknik, Mekanika Teknik" },
    { kode: "TIN304", mk: "Perilaku Organisasi", sks: 2, pras: "—" },
    { kode: "TIN305", mk: "Ergonomi dan Perancangan Sistem Kerja", sks: 4, pras: "Biologi Anatomi dan Fisiologi" },
    { kode: "TIN306", mk: "Analitika Data", sks: 3, pras: "—" },
  ],
  4: [
    { kode: "MKU204", mk: "Dasar-Dasar Kewirausahaan", sks: 2, pras: "—" },
    { kode: "TIN350", mk: "Riset Operasi 1", sks: 3, pras: "Aljabar Linear" },
    { kode: "TIN351", mk: "Perencanaan dan Pengendalian Produksi", sks: 3, pras: "Proses Manufaktur" },
    { kode: "TIN352", mk: "Ekonomika dan Ekonomi Teknik", sks: 4, pras: "—" },
    { kode: "TIN353", mk: "Keselamatan dan Kesehatan Kerja", sks: 2, pras: "Ergonomi dan Perancangan Sistem Kerja" },
    { kode: "TIN354", mk: "Proses Manufaktur Lanjut", sks: 2, pras: "Kimia, Proses Manufaktur" },
    { kode: "TIN355", mk: "Praktikum Proses Manufaktur", sks: 1, pras: "Proses Manufaktur" },
    { kode: "TIN356", mk: "Perancangan dan Manajemen Organisasi Industri", sks: 3, pras: "Perilaku Organisasi" },
  ],
  5: [
    { kode: "MKU201", mk: "Pendidikan Pancasila", sks: 2, pras: "—" },
    { kode: "MKU205", mk: "Praktik Kewirausahaan", sks: 2, pras: "Dasar-Dasar Kewirausahaan" },
    { kode: "TIN400", mk: "Riset Operasi 2", sks: 3, pras: "Riset Operasi 1, Statistika 2" },
    { kode: "TIN401", mk: "Pengendalian dan Penjaminan Mutu", sks: 3, pras: "Perencanaan dan Pengendalian Produksi, Statistika 2" },
    { kode: "TIN402", mk: "Analisis dan Perancangan Sistem Informasi", sks: 2, pras: "Pemrograman Komputer" },
    { kode: "TIN403", mk: "Praktikum Analisis dan Perancangan Sistem Informasi", sks: 1, pras: "—" },
    { kode: "TIN404", mk: "Sistem Rantai Pasok", sks: 3, pras: "Perencanaan dan Pengendalian Produksi" },
    { kode: "TIN405", mk: "Analisis dan Pengendalian Biaya", sks: 2, pras: "Perencanaan dan Pengendalian Produksi" },
    { kode: "TIN406", mk: "Pemodelan Sistem", sks: 2, pras: "Statistika 2" },
  ],
  6: [
    { kode: "MKU202", mk: "Pendidikan Kewarganegaraan", sks: 2, pras: "—" },
    { kode: "TIN450", mk: "Riset Sosial", sks: 2, pras: "Analitika Data" },
    { kode: "TIN451", mk: "Simulasi Sistem", sks: 3, pras: "Pemodelan Sistem" },
    { kode: "TIN452", mk: "Perancangan Fasilitas", sks: 2, pras: "Sistem Rantai Pasok, Pemodelan Sistem" },
    { kode: "TIN453", mk: "Praktikum Perancangan Fasilitas", sks: 1, pras: "—" },
    { kode: "TIN454", mk: "Perancangan dan Pengembangan Produk", sks: 3, pras: "Pengendalian dan Penjaminan Mutu, Ekonomika dan Ekonomi Teknik" },
    { kode: "TIN455", mk: "Rekayasa Kualitas", sks: 3, pras: "Pengendalian dan Penjaminan Mutu" },
    { kode: "TIN456", mk: "Praktikum Terintegrasi", sks: 2, pras: "MK Inti Semester 3–5" },
    { kode: "TIN457", mk: "Metodologi Penelitian", sks: 2, pras: "Statistika 2" },
  ],
  7: [
    { kode: "MKU206", mk: "Kerja Praktik", sks: 2, pras: "Minimal 100 SKS" },
    { kode: "MKU207", mk: "Kuliah Kerja Nyata", sks: 3, pras: "Minimal 110 SKS" },
    { kode: "TIN500", mk: "Perancangan Sistem Terpadu (Capstone Project)", sks: 3, pras: "Praktikum Terintegrasi + MK Inti Semester 4–5" },
    { kode: "TIN5xx", mk: "Mata Kuliah Pilihan A", sks: 3, pras: "—" },
    { kode: "TIN5xx", mk: "Mata Kuliah Pilihan B", sks: 3, pras: "—" },
    { kode: "TIN5xx", mk: "Mata Kuliah Pilihan C", sks: 3, pras: "—" },
    { kode: "TIN5xx", mk: "Mata Kuliah Pilihan D", sks: 3, pras: "—" },
  ],
  8: [
    { kode: "MKU209", mk: "Tugas Akhir", sks: 4, pras: "Minimal 125 SKS" },
  ],
};

const MINAT_MANUFAKTUR = [
  "Lean Six Sigma",
  "Manufaktur Berkelanjutan",
  "Ergonomika Desain Produk",
  "Material Maju",
  "Proses Produksi dengan CAD, CAM, CAE",
  "Otomasi Industri",
  "Perawatan Industri",
  "Sistem Manufaktur Terintegrasi Komputer",
];

const MINAT_MANAJEMEN = [
  "Manajemen Inovasi",
  "Kebijakan Industri",
  "Rekayasa Bisnis",
  "Kecerdasan Bisnis",
  "Perencanaan Sumberdaya Perusahaan",
  "Manajemen Pemasaran",
  "Manajemen Sumber Daya Manusia",
  "Manajemen Distribusi dan Persediaan",
];

const DOSEN = [
  { inisial: "AF", nama: "Ahmad Fauzi, S.T., M.T.", minat: ["Riset Operasi", "Optimasi"] },
  { inisial: "RS", nama: "Rina Setiawati, S.T., M.T.", minat: ["Ergonomi", "Sistem Kerja"] },
  { inisial: "DS", nama: "Dwi Santoso, S.T., M.T.", minat: ["Manufaktur", "Proses Produksi"] },
  { inisial: "NW", nama: "Nur Wahyuni, S.T., M.T.", minat: ["Mutu", "Statistika Terapan"] },
  { inisial: "HP", nama: "Hendra Prakoso, S.T., M.T.", minat: ["Rantai Pasok", "Perencanaan Produksi"] },
  { inisial: "IS", nama: "Indah Sulistiawati, S.T., M.T.", minat: ["Sistem Informasi", "Manajemen Industri"] },
];

/* ---------- RENDER TABEL SEMESTER ---------- */
const semesterBody = document.getElementById("semesterBody");
const semesterTotal = document.getElementById("semesterTotal");

function renderSemester(sem) {
  const rows = KURIKULUM[sem] || [];
  semesterBody.innerHTML = rows
    .map(
      (r, i) => `
      <tr>
        <td class="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-primary">${r.kode}</td>
        <td class="px-4 py-3 font-medium text-slate-700">${r.mk}</td>
        <td class="px-4 py-3 text-center"><span class="inline-block min-w-[2rem] rounded-md bg-accent/10 px-2 py-0.5 text-xs font-extrabold text-accent">${r.sks}</span></td>
        <td class="px-4 py-3 text-xs text-slate-500">${r.pras}</td>
      </tr>`
    )
    .join("");
  semesterTotal.textContent = rows.reduce((sum, r) => sum + r.sks, 0);
}

const tabButtons = document.querySelectorAll(".tab-btn");
function setActiveTab(sem) {
  tabButtons.forEach((btn) => {
    const active = btn.dataset.sem === String(sem);
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  renderSemester(sem);
}
tabButtons.forEach((btn) => btn.addEventListener("click", () => setActiveTab(btn.dataset.sem)));
setActiveTab(1);

/* ---------- RENDER MINAT & DOSEN ---------- */
function renderMinat(listId, items) {
  const el = document.getElementById(listId);
  el.innerHTML = items
    .map(
      (m) => `
      <li class="flex items-center justify-between gap-3 rounded-xl bg-tint px-4 py-2.5">
        <span class="text-sm font-medium text-slate-700">${m}</span>
        <span class="shrink-0 rounded-md bg-white px-2 py-0.5 text-[11px] font-extrabold text-primary shadow-sm">3 SKS</span>
      </li>`
    )
    .join("");
}
renderMinat("minatManufaktur", MINAT_MANUFAKTUR);
renderMinat("minatManajemen", MINAT_MANAJEMEN);

const dosenGrid = document.querySelector("#dosen .grid");
dosenGrid.innerHTML = DOSEN.map(
  (d) => `
  <article class="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-deep text-xl font-extrabold text-white ring-4 ring-tint">${d.inisial}</div>
    <p class="mt-4 text-sm font-extrabold leading-snug text-deep">${d.nama}</p>
    <span class="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent">Asisten Ahli</span>
    <div class="mt-4 flex flex-wrap justify-center gap-1.5">
      ${d.minat.map((m) => `<span class="rounded-md bg-tint px-2 py-1 text-[11px] font-semibold text-slate-600">${m}</span>`).join("")}
    </div>
    <a href="https://ft.untidar.ac.id/teknik-industri-s1-dosen-program-studi/" target="_blank" rel="noopener" class="mt-4 inline-block text-xs font-bold text-primary hover:text-deep">Lihat Profil →</a>
  </article>`
).join("");

/* ---------- DOT NAVIGATION (scroll-spy) ---------- */
const dotLinks = document.querySelectorAll(".dot-link");
const sections = [...document.querySelectorAll("section[id]")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      dotLinks.forEach((link) => {
        link.querySelector(".dot").classList.toggle("is-active", link.dataset.dot === id);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);
sections.forEach((s) => observer.observe(s));

/* ---------- BACK TO TOP ---------- */
const backToTop = document.getElementById("backToTop");
function toggleBackToTop() {
  const show = window.scrollY > window.innerHeight * 0.8;
  backToTop.classList.toggle("hidden", !show);
  backToTop.classList.toggle("flex", show);
}
window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- FORM KONTAK (demo, tanpa backend) ---------- */
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  formSuccess.classList.remove("hidden");
  contactForm.reset();
  setTimeout(() => formSuccess.classList.add("hidden"), 4000);
});

/* ---------- TAHUN FOOTER ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
