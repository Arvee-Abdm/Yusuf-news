
/* ================================
   NEWSROOM - JAVASCRIPT
================================ */

// Data berita
const newsData = [
    {
        id: 1,
        category: "Teknologi",
        title: "Kecerdasan Buatan Mengubah Masa Depan Dunia Kerja",
        description: "Perkembangan teknologi terbaru mengubah cara manusia bekerja, berkomunikasi, dan membangun karier.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        date: "19 November 2026",
        author: "Alex Morgan",
        readTime: "5 menit membaca"
    },
    {
        id: 2,
        category: "Dunia",
        title: "Kota-Kota Besar Mulai Beradaptasi dengan Perubahan Iklim",
        description: "Perencana kota mulai menerapkan berbagai solusi untuk meningkatkan ketahanan terhadap tantangan lingkungan.",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
        date: "18 November 2026",
        author: "Sarah Williams",
        readTime: "7 menit membaca"
    },
    {
        id: 3,
        category: "Bisnis",
        title: "Pertumbuhan Usaha Kecil dalam Ekonomi Digital",
        description: "Usaha mandiri menemukan peluang baru melalui platform daring dan inovasi digital.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        date: "18 November 2026",
        author: "James Carter",
        readTime: "4 menit membaca"
    },
    {
        id: 4,
        category: "Sains",
        title: "Ilmuwan Menjelajahi Penemuan Baru di Bidang Antariksa",
        description: "Penelitian terbaru membantu para ilmuwan memahami alam semesta dan berbagai kemungkinan di luar Bumi.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
        date: "17 November 2026",
        author: "Emily Chen",
        readTime: "6 menit membaca"
    },
    {
        id: 5,
        category: "Gaya Hidup",
        title: "Mengapa Gaya Hidup Sederhana Semakin Diminati?",
        description: "Semakin banyak orang memilih kesederhanaan, rutinitas yang terarah, dan hubungan yang lebih sehat dengan teknologi.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        date: "17 November 2026",
        author: "Daniel Lee",
        readTime: "3 menit membaca"
    },
    {
        id: 6,
        category: "Teknologi",
        title: "Perkembangan Generasi Baru Komputer",
        description: "Perangkat komputer semakin mudah diakses, efisien, dan terintegrasi dalam kehidupan sehari-hari.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        date: "16 November 2026",
        author: "Michael Brown",
        readTime: "5 menit membaca"
    },
    {
        id: 7,
        category: "Bisnis",
        title: "Transformasi Digital dan Perkembangan Ekonomi Modern",
        description: "Perusahaan mulai menyesuaikan strategi mereka seiring meningkatnya kebutuhan terhadap infrastruktur digital.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        date: "16 November 2026",
        author: "Olivia Smith",
        readTime: "8 menit membaca"
    },
    {
        id: 8,
        category: "Sains",
        title: "Teknologi di Balik Pengembangan Energi Terbarukan",
        description: "Inovasi dalam penyimpanan energi membuka peluang baru bagi pembangunan infrastruktur berkelanjutan.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
        date: "15 November 2026",
        author: "David Wilson",
        readTime: "6 menit membaca"
    },
    {
        id: 9,
        category: "Dunia",
        title: "Perubahan Kerja Sama Antarnegara di Era Modern",
        description: "Berbagai negara mencari cara baru untuk bekerja sama dalam menghadapi persoalan global.",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
        date: "15 November 2026",
        author: "Anna Johnson",
        readTime: "4 menit membaca"
    },
    {
        id: 10,
        category: "Gaya Hidup",
        title: "Membangun Lingkungan Digital yang Lebih Sehat",
        description: "Kebiasaan sederhana dapat membantu meningkatkan fokus, produktivitas, dan cara kita menggunakan teknologi.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        date: "14 November 2026",
        author: "Ryan Miller",
        readTime: "3 menit membaca"
    }
];


// ================================
// ELEMEN HTML
// ================================

const newsGrid = document.getElementById("newsGrid");
const categoryList = document.getElementById("categoryList");
const loadMoreButton = document.getElementById("loadMore");
const newsCount = document.getElementById("newsCount");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");


// ================================
// DATA DAN STATUS
// ================================

let activeCategory = "All";
let searchQuery = "";
let displayedNews = 6;

let savedArticles = JSON.parse(
    localStorage.getItem("savedArticles") || "[]"
);


// ================================
// FILTER BERITA
// ================================

function getFilteredNews() {

    return newsData.filter(news => {

        const matchesCategory =
            activeCategory === "All" ||
            news.category === activeCategory;

        const searchableText = `
            ${news.title}
            ${news.description}
            ${news.category}
            ${news.author}
        `.toLowerCase();

        const matchesSearch =
            searchableText.includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;

    });

}


// ================================
// MENAMPILKAN BERITA
// ================================

function renderNews() {

    const filteredNews = getFilteredNews();

    const visibleNews = filteredNews.slice(0, displayedNews);

    newsGrid.innerHTML = "";


    // Jika berita tidak ditemukan
    if (visibleNews.length === 0) {

        newsGrid.innerHTML = `
            <div class="empty-state">
                <h3>Berita tidak ditemukan</h3>
                <p>
                    Coba gunakan kata kunci atau kategori lainnya.
                </p>
            </div>
        `;

        loadMoreButton.style.display = "none";

        newsCount.textContent = "0 berita";

        return;

    }


    // Membuat kartu berita
    visibleNews.forEach((news, index) => {

        const isSaved = savedArticles.includes(news.id);

        const card = document.createElement("article");

        card.className = "news-card";

        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `

            <div class="news-image">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                    loading="lazy"
                >

                <span class="news-category">
                    ${news.category.toUpperCase()}
                </span>

            </div>


            <div class="news-content">

                <div class="news-meta">
                    <span>${news.date}</span>
                    <span>•</span>
                    <span>${news.readTime}</span>
                </div>

                <h3>${news.title}</h3>

                <p>${news.description}</p>

                <div class="news-footer">

                    <a href="#" class="read-more">
                        Baca selengkapnya →
                    </a>

                    <button
                        class="bookmark-button ${isSaved ? "saved" : ""}"
                        data-id="${news.id}"
                        aria-label="Simpan berita"
                        title="Simpan berita"
                    >

                        <svg viewBox="0 0 24 24">
                            <path d="M6 3h12v18l-6-4-6 4z"></path>
                        </svg>

                    </button>

                </div>

            </div>

        `;

        newsGrid.appendChild(card);

    });


    // Menghitung berita
    newsCount.textContent = `${filteredNews.length} berita`;


    // Tombol berita lainnya
    if (displayedNews >= filteredNews.length) {

        loadMoreButton.style.display = "none";

    } else {

        loadMoreButton.style.display = "flex";

    }

}


// ================================
// FILTER KATEGORI
// ================================

categoryList.addEventListener("click", (event) => {

    const button = event.target.closest(".category-button");

    if (!button) return;


    // Menghapus kategori aktif sebelumnya
    document.querySelectorAll(".category-button")
        .forEach(btn => btn.classList.remove("active"));


    // Mengaktifkan kategori baru
    button.classList.add("active");

    activeCategory = button.dataset.category;

    displayedNews = 6;

    renderNews();

});


// ================================
// PENCARIAN BERITA
// ================================

searchToggle.addEventListener("click", () => {

    searchPanel.classList.toggle("open");


    if (searchPanel.classList.contains("open")) {

        searchInput.focus();

    } else {

        searchInput.value = "";

        searchQuery = "";

        renderNews();

    }

});


searchInput.addEventListener("input", () => {

    searchQuery = searchInput.value.trim();

    displayedNews = 6;

    renderNews();

});


// ================================
// MUAT BERITA LAINNYA
// ================================

loadMoreButton.addEventListener("click", () => {

    displayedNews += 4;

    renderNews();

});


// ================================
// BOOKMARK BERITA
// ================================

newsGrid.addEventListener("click", (event) => {

    const bookmark = event.target.closest(".bookmark-button");

    if (!bookmark) return;

    const id = Number(bookmark.dataset.id);


    if (savedArticles.includes(id)) {

        savedArticles = savedArticles.filter(
            articleId => articleId !== id
        );

        bookmark.classList.remove("saved");

    } else {

        savedArticles.push(id);

        bookmark.classList.add("saved");

    }


    // Menyimpan bookmark ke browser
    localStorage.setItem(
        "savedArticles",
        JSON.stringify(savedArticles)
    );

});


// ================================
// MODE GELAP
// ================================

function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    localStorage.setItem("theme", theme);

}


// Mengambil tema yang tersimpan
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    setTheme(savedTheme);

}


themeToggle.addEventListener("click", () => {

    const isDark = document.body.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");

});


// ================================
// MENU MOBILE
// ================================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


// ================================
// EFEK NAVBAR SAAT SCROLL
// ================================

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================================
// ANIMASI SCROLL
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ================================
// NEWSLETTER
// ================================

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    newsletterMessage.textContent =
        `Terima kasih! ${email} berhasil didaftarkan.`;

    newsletterMessage.style.color = "#4ade80";

    newsletterForm.reset();

});


// ================================
// INISIALISASI
// ================================

renderNews();
