const translations = {
    id: {
        nav_home: "Beranda",
        nav_map: "Persebaran",
        nav_loris: "Kukang",
        nav_program: "Program",
        nav_gallery: "Galeri",
        nav_partners: "Partners",
        nav_lapor: "Lapor!",
        nav_lapor_mobile: "Lapor Kukang Sekarang",
        
        hero_title: 'Lindungi Kukang Sumatera<br class="hidden md:block" /> di Habitat Riau',
        hero_desc: "Kukang ada karena hutan, hutan lestari karena kita.",
        btn_report: "Laporkan Temuan",
        btn_learn: "Pelajari Lebih Lanjut",
        
        map_title: '7 Spesies Kukang <span class="text-gradient">Asli Indonesia</span>',
        map_desc: 'Peta persebaran ilmiah genus <span class="italic font-medium">Nycticebus</span> di berbagai wilayah Indonesia. Klik penanda untuk detail spesies dan status konservasinya.',
        map_legend: 'Status IUCN Red List',
        iucn_cr: 'Critically Endangered (Kritis)',
        iucn_en: 'Endangered (Terancam)',
        iucn_vu: 'Vulnerable (Rentan)',
        
        edu_badge: 'Kenali Mereka',
        edu_title: 'Profil Spesies: <span class="text-gradient">Kukang Sunda</span>',
        edu_content: '<p>Kukang Sunda, yang lazim dikenal oleh masyarakat lokal Sumatera dan Kepulauan Riau dengan sebutan <strong>Malu-malu</strong>, merupakan primata endemik nokturnal yang sangat unik. Primata bermata besar ini beradaptasi sempurna untuk aktivitas di malam hari, bergerak secara lambat dan hening menyusuri dahan kanopi hutan tropis untuk mencari makan sembari menghindari deteksi para predator alaminya.</p><p>Di balik perawakannya yang menggemaskan, kukang menyimpan keunikan biologis yang langka: ia adalah <strong>satu-satunya primata berbisa di dunia</strong>. Racun pertahanan ini diproduksi melalui kelenjar khusus yang berada di bagian sikunya, yang kemudian dicampur dengan air liur. Gigitan kukang dapat memicu syok anafilaksis yang berbahaya bagi manusia. Di alam liar, satwa pemakan nektar, getah, dan serangga ini memegang peranan krusial sebagai penyerbuk bunga alami di malam hari serta agen penyebar benih yang merawat ekosistem hutan Riau.</p><p>Sayangnya, keberadaan primata eksotis ini kian kritis. Kukang Sunda kini berstatus <em>Endangered</em> (Terancam Punah) dalam daftar merah IUCN dan masuk perlindungan ketat CITES Apendiks I. Secara yurisdiksi nasional, satwa ini dilindungi penuh oleh <strong>Undang-Undang No. 5 Tahun 1990</strong>. Ancaman terbesar yang mendesak populasi mereka saat ini adalah maraknya perburuan liar untuk dijadikan hewan peliharaan, eksploitasi untuk mitos pengobatan tradisional, serta deforestasi yang terus merampas habitat alami mereka.</p>',
        
        prog_badge: 'Program Kami',
        prog_title: 'Melindungi Kukang Melalui <span class="text-gradient">Edukasi Masyarakat</span>',
        prog_desc: 'Inisiatif utama Akasia Riau dan DierenPark Amersfoort Wildlife Fund dalam melindungi populasi satwa liar.',
        prog_c1_title: 'Apa yang Dikerjakan',
        prog_c1_list: '<li><strong>Edukasi Masyarakat:</strong> Pendekatan komprehensif ke 3 desa.</li><li><strong>Edukasi Sekolah:</strong> Menggunakan metode interaktif & storytelling.</li><li><strong>Pemantauan:</strong> Pelatihan relawan berbasis masyarakat sekitar.</li><li><strong>Materi Edukasi:</strong> Pembuatan poster, leaflet & panduan.</li>',
        prog_c2_title: 'Target & Alur Pelaksanaan',
        prog_c2_list: '<p><strong>Target Sasaran:</strong> Warga desa, pelajar, relawan, pusat komunitas, & pemimpin lokal.</p><p><strong>Alur Program:</strong></p><ol class="list-decimal list-outside ml-4 marker:text-brand-500 space-y-1"><li>Tahap Persiapan & Koordinasi</li><li>Pelaksanaan Edukasi</li><li>Pelatihan Relawan</li><li>Pemantauan & Evaluasi</li></ol>',
        prog_c3_title: 'Dampak & Tujuan',
        prog_c3_list: '<li>Mengurangi tingkat perdagangan dan perburuan ilegal secara signifikan.</li><li>Melindungi dan merawat habitat kukang yang tersisa.</li><li>Membangun jaringan konservasi lokal yang mandiri dan berkelanjutan.</li>',
        
        doc_badge: 'Edukasi Sekolah',
        doc_date: '<i class="fa-regular fa-calendar mr-1.5"></i> 7 Sep 2026',
        doc_title: 'Mengenal Satwa Liar Sejak Dini: Edukasi Kukang bersama Siswa SDN 017 Sungai Guntung Hilir',
        doc_p1: 'Mengenal satwa liar sejak dini menjadi salah satu langkah untuk menumbuhkan kepedulian terhadap keberadaannya di alam.',
        doc_p2: 'Pada 7 September 2026, edukasi mengenai kukang dilaksanakan bersama 10 siswa SDN 017 Sungai Guntung Hilir. Siswa diajak mengenal kukang, habitatnya, serta alasan penting mengapa kukang perlu dilindungi.',
        doc_quote: '"Jangan menangkap, memelihara, atau memperjualbelikan kukang. Mari bersama menjaga kukang tetap hidup aman di habitat alaminya."',
        
        doc2_badge: 'Edukasi Masyarakat',
        doc2_label: '<i class="fa-solid fa-users mr-1.5"></i> Pelestarian Komunitas',
        doc2_title: 'Edukasi Kukang Bersama Masyarakat',
        doc2_p1: 'Melalui kegiatan ini, masyarakat diajak mengenal kukang lebih dekat, mulai dari karakteristik, perilaku, hingga ancaman yang dapat membahayakan keberadaannya di alam.',
        doc2_p2: 'Kegiatan edukasi menjadi salah satu langkah untuk meningkatkan kepedulian dan mendorong upaya penyelamatan kukang bersama.',
        doc2_quote: '"Kenali kukangnya, peduli, dan ikut menjaganya tetap di alam."',

        doc3_badge: 'Edukasi Konservasi',
        doc3_date: '<i class="fa-regular fa-calendar mr-1.5"></i> 21 Okt 2026',
        doc3_title: 'Edukasi Konservasi Kukang Sumatera di Kelurahan Muka Kuning, Batam',
        doc3_p1: 'Dilaksanakan di Kelurahan Muka Kuning, Kec. Sei Beduk, Kota Batam bersama pemateri Ibu Karla Amelia, S.Pd., M.Sc., perangkat kelurahan, serta 65 peserta dari kader PKK, Posyandu, dan Pokdarwis.',
        doc3_p2: 'Melalui edukasi ini, peserta diajak memahami pentingnya konservasi Kukang Sumatera, mengenali ancaman kelestariannya, serta mendorong keterlibatan masyarakat menjaga keanekaragaman hayati dan habitat alaminya.',
        doc3_quote: '"Kenali, Sayangi, Lindungi." — Akasia Indonesia',

        doc4_badge: 'Literasi & Konservasi',
        doc4_date: '<i class="fa-regular fa-calendar mr-1.5"></i> 25 Okt 2026',
        doc4_title: 'Kolaborasi Literasi & Edukasi Pelestarian Kukang Bersama FLP Batam',
        doc4_p1: 'Memadukan semangat literasi dan kepedulian lingkungan, FLP Batam bersama Akasia Indonesia menggelar kegiatan inspiratif pengenalan Kukang Sumatera dan penjagaan habitat alaminya di Masjid Agung Batam Center.',
        doc4_p2: 'Melalui kegiatan edukasi interaktif ini, peserta diajak untuk memahami pentingnya konservasi satwa liar serta aktif menyuarakan perlindungan keanekaragaman hayati.',
        doc4_quote: '"Kepedulian terhadap literasi dan kelestarian alam harus terus disuarakan."',
        
        gal_badge: 'Media Sosial',
        gal_title: 'Galeri <span class="text-gradient">Instagram</span>',
        gal_desc: 'Update aksi konservasi dan kegiatan lapangan dari akun Instagram @akasia.riau.',
        btn_ig: 'Ikuti @akasia.riau di Instagram',
        
        lapor_title: 'Lapor <span class="text-gradient">Penampakan</span>',
        lapor_desc: 'Bantu kami menyelamatkan kukang. Data pelapor dijamin kerahasiaannya.',
        
        partners_badge: 'Kolaborasi',
        partners_title: 'Mitra <span class="text-gradient">Konservasi</span>',
        partners_desc: 'Bekerja sama dengan institusi pemerintah dan perguruan tinggi dalam mendukung edukasi, riset, serta pelestarian kukang di Kepulauan Riau.',
        partner1_badge: 'Pemerintah Daerah',
        partner1_name: 'Pemerintah Kota Batam',
        partner1_desc: 'Sinergi kebijakan daerah dan instansi pemerintahan dalam sosialisasi perlindungan satwa liar, pengawasan habitat, dan pelestarian lingkungan di Kota Batam.',
        partner2_badge: 'Perguruan Tinggi & Riset',
        partner2_name: 'Universitas Maritim Raja Ali Haji (UMRAH)',
        partner2_desc: 'Kolaborasi riset ilmiah keanekaragaman hayati pesisir, kajian ekologi, serta pelibatan mahasiswa dalam aksi edukasi dan konservasi kukang berkelanjutan.',
        
        footer_desc: 'Platform kolaborasi antara Akasia Riau dan DierenPark Amersfoort Wildlife Fund yang didedikasikan untuk perlindungan, edukasi, dan pelaporan satwa Kukang di Provinsi Riau.',
        footer_nav: 'NAVIGASI',
        footer_contact: 'KONTAK',
        footer_address: 'Sekretariat: Bumi Indah, Blok D-11, Air Raja, Kec. Tanjung Pinang Timur, Kota Tanjung Pinang, Kepulauan Riau, Indonesia 29125',
        footer_phone: '+62 822-8589-8726 (Rescue Hotline)',
        footer_email: '<a href="mailto:officeakasia@gmail.com" class="hover:text-brand-400 transition">officeakasia@gmail.com</a>'
    },
    en: {
        nav_home: "Home",
        nav_map: "Distribution Map",
        nav_loris: "Slow Loris",
        nav_program: "Program",
        nav_gallery: "Gallery",
        nav_partners: "Partners",
        nav_lapor: "Report!",
        nav_lapor_mobile: "Report a Slow Loris Now",
        
        hero_title: 'Protect Sumatran Slow Lorises<br class="hidden md:block" /> in Riau Habitat',
        hero_desc: "Lorises exist because of the forest, the forest remains because of us.",
        btn_report: "Report Sighting",
        btn_learn: "Learn More",
        
        map_title: '7 Slow Loris Species <span class="text-gradient">Native to Indonesia</span>',
        map_desc: 'Scientific distribution map of the genus <span class="italic font-medium">Nycticebus</span> across Indonesia. Click markers for species details and conservation status.',
        map_legend: 'IUCN Red List Status',
        iucn_cr: 'Critically Endangered',
        iucn_en: 'Endangered',
        iucn_vu: 'Vulnerable',
        
        edu_badge: 'Get to Know Them',
        edu_title: 'Species Profile: <span class="text-gradient">Sunda Slow Loris</span>',
        edu_content: '<p>The Sunda Slow Loris, commonly known by local communities in Sumatra and the Riau Islands as <strong>Malu-malu</strong> (the shy one), is a highly unique nocturnal endemic primate. This large-eyed primate is perfectly adapted for nighttime activity, moving slowly and silently along the branches of the tropical forest canopy to forage while avoiding detection by natural predators.</p><p>Behind its adorable appearance, the slow loris harbors a rare biological trait: it is the <strong>only venomous primate in the world</strong>. This defensive venom is produced by a special gland on its elbow, which is then mixed with saliva. A loris bite can trigger dangerous anaphylactic shock in humans. In the wild, this nectar, sap, and insect-eating animal plays a crucial role as a natural nocturnal pollinator and seed disperser, maintaining the Riau forest ecosystem.</p><p>Unfortunately, the existence of this exotic primate is increasingly critical. The Sunda Slow Loris is now classified as <em>Endangered</em> on the IUCN Red List and receives strict protection under CITES Appendix I. Under national jurisdiction, this animal is fully protected by <strong>Law No. 5 of 1990</strong>. The most pressing threats to their population today are rampant illegal poaching for the pet trade, exploitation for traditional medicine myths, and ongoing deforestation that continues to strip away their natural habitat.</p>',
        
        prog_badge: 'Our Program',
        prog_title: 'Protecting Slow Lorises Through <span class="text-gradient">Community Education</span>',
        prog_desc: 'The main initiative of Akasia Riau and DierenPark Amersfoort Wildlife Fund in protecting wildlife populations.',
        prog_c1_title: 'What We Do',
        prog_c1_list: '<li><strong>Community Education:</strong> Comprehensive approach to 3 villages.</li><li><strong>School Education:</strong> Interactive & storytelling methods.</li><li><strong>Monitoring:</strong> Training for community-based volunteers.</li><li><strong>Educational Materials:</strong> Production of posters, leaflets & guides.</li>',
        prog_c2_title: 'Target & Implementation',
        prog_c2_list: '<p><strong>Target Audience:</strong> Villagers, students, volunteers, community centers, & local leaders.</p><p><strong>Program Workflow:</strong></p><ol class="list-decimal list-outside ml-4 marker:text-brand-500 space-y-1"><li>Preparation & Coordination</li><li>Education Implementation</li><li>Volunteer Training</li><li>Monitoring & Evaluation</li></ol>',
        prog_c3_title: 'Impact & Goals',
        prog_c3_list: '<li>Significantly reduce illegal trade and poaching rates.</li><li>Protect and care for remaining slow loris habitats.</li><li>Build an independent and sustainable local conservation network.</li>',
        
        doc_badge: 'School Education',
        doc_date: '<i class="fa-regular fa-calendar mr-1.5"></i> Sep 7, 2026',
        doc_title: 'Getting to Know Wildlife Early On: Slow Loris Education with Students of SDN 017 Sungai Guntung Hilir',
        doc_p1: 'Introducing wildlife at an early age is a key step in cultivating care for their existence in nature.',
        doc_p2: 'On September 7, 2026, slow loris education was carried out with 10 students of SDN 017 Sungai Guntung Hilir. Students were introduced to the slow loris, its habitat, and the important reasons why it needs to be protected.',
        doc_quote: '"Do not capture, keep, or trade slow lorises. Let\'s work together to keep slow lorises alive and safe in their natural habitat."',
        
        doc2_badge: 'Community Education',
        doc2_label: '<i class="fa-solid fa-users mr-1.5"></i> Community Conservation',
        doc2_title: 'Slow Loris Education with the Community',
        doc2_p1: 'Through this activity, the community is invited to get to know the slow loris more closely, starting from its characteristics, behavior, to the threats that can endanger its existence in nature.',
        doc2_p2: 'Educational activities are one of the steps to increase awareness and encourage joint efforts to save the slow loris.',
        doc2_quote: '"Know the slow loris, care for it, and help keep it in nature."',

        doc3_badge: 'Conservation Education',
        doc3_date: '<i class="fa-regular fa-calendar mr-1.5"></i> Oct 21, 2026',
        doc3_title: 'Sumatran Slow Loris Conservation Education in Muka Kuning, Batam',
        doc3_p1: 'Held in Muka Kuning Subdistrict, Sei Beduk District, Batam City with speaker Ms. Karla Amelia, S.Pd., M.Sc., local subdistrict officials, and 65 participants from PKK, Posyandu, and Pokdarwis cadres.',
        doc3_p2: 'Through this educational session, participants learned the importance of Sumatran Slow Loris conservation, threats to its survival, and active community involvement in protecting biodiversity and natural habitats.',
        doc3_quote: '"Know It, Love It, Protect It." — Akasia Indonesia',

        doc4_badge: 'Literacy & Conservation',
        doc4_date: '<i class="fa-regular fa-calendar mr-1.5"></i> Oct 25, 2026',
        doc4_title: 'Literacy & Slow Loris Conservation Education Collaboration with FLP Batam',
        doc4_p1: 'Combining the spirit of literacy and environmental care, FLP Batam together with Akasia Indonesia held an inspiring educational session on Sumatran Slow Lorises and habitat protection at the Grand Mosque of Batam Center.',
        doc4_p2: 'Through this interactive educational activity, participants were invited to understand the importance of wildlife conservation and actively advocate for biodiversity protection.',
        doc4_quote: '"Care for literacy and nature conservation must continue to be voiced."',

        gal_badge: 'Social Media',
        gal_title: 'Instagram <span class="text-gradient">Gallery</span>',
        gal_desc: 'Conservation action and field activity updates from the @akasia.riau Instagram account.',
        btn_ig: 'Follow @akasia.riau on Instagram',
        
        lapor_title: 'Report <span class="text-gradient">Sighting</span>',
        lapor_desc: 'Help us save slow lorises. Reporter data is guaranteed confidential.',
        
        partners_badge: 'Collaboration',
        partners_title: 'Conservation <span class="text-gradient">Partners</span>',
        partners_desc: 'Collaborating with government institutions and universities to support education, research, and slow loris conservation in the Riau Islands.',
        partner1_badge: 'Local Government',
        partner1_name: 'Pemerintah Kota Batam',
        partner1_desc: 'Regional policy synergy and government agency collaboration in wildlife protection outreach, habitat monitoring, and environmental conservation in Batam City.',
        partner2_badge: 'Higher Education & Research',
        partner2_name: 'Universitas Maritim Raja Ali Haji (UMRAH)',
        partner2_desc: 'Collaboration in coastal biodiversity research, ecological studies, and student involvement in sustainable slow loris conservation and education initiatives.',
        
        footer_desc: 'A collaborative platform between Akasia Riau and DierenPark Amersfoort Wildlife Fund dedicated to the protection, education, and reporting of Slow Lorises in Riau Province.',
        footer_nav: 'NAVIGATION',
        footer_contact: 'CONTACT',
        footer_address: 'Secretariat: Bumi Indah, Blok D-11, Air Raja, Kec. Tanjung Pinang Timur, Kota Tanjung Pinang, Kepulauan Riau, Indonesia 29125',
        footer_phone: '+62 822-8589-8726 (Rescue Hotline)',
        footer_email: '<a href="mailto:officeakasia@gmail.com" class="hover:text-brand-400 transition">officeakasia@gmail.com</a>'
    }
};

let currentLang = localStorage.getItem('lang') || 'id';

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langText = document.getElementById('lang-text');
    const langFlag = document.getElementById('lang-flag');
    const mobileLangText = document.getElementById('mobile-lang-text');
    const mobileLangFlag = document.getElementById('mobile-lang-flag');

    if (lang === 'en') {
        if(langText) langText.innerText = 'EN';
        if(langFlag) langFlag.src = 'https://flagcdn.com/w20/gb.png';
        if(mobileLangText) mobileLangText.innerText = 'EN';
        if(mobileLangFlag) mobileLangFlag.src = 'https://flagcdn.com/w20/gb.png';
    } else {
        if(langText) langText.innerText = 'ID';
        if(langFlag) langFlag.src = 'https://flagcdn.com/w20/id.png';
        if(mobileLangText) mobileLangText.innerText = 'ID';
        if(mobileLangFlag) mobileLangFlag.src = 'https://flagcdn.com/w20/id.png';
    }
    
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // 00. Initialize Language
    applyLanguage(currentLang);
    
    const langSwitcher = document.getElementById('lang-switcher');
    const mobileLangBtn = document.getElementById('mobile-lang-btn');
    
    function toggleLanguage() {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        applyLanguage(currentLang);
    }
    
    if(langSwitcher) langSwitcher.addEventListener('click', toggleLanguage);
    if(mobileLangBtn) mobileLangBtn.addEventListener('click', toggleLanguage);

    // 0. Scroll Reveal Animations
    const revealEls = document.querySelectorAll('.fade-up');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduceMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }
    // 1. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // 2. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(nav) {
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.add('shadow-sm');
                nav.classList.remove('shadow-md');
            }
        }
    });

    // 3. Init Leaflet Map
    const mapElement = document.getElementById('map');
    if(mapElement && typeof L !== 'undefined') {
        const map = L.map('map', {
            zoomControl: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            dragging: false,
            touchZoom: false,
            boxZoom: false
        }).setView([-2.5, 118.0], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Data: IUCN Red List'
        }).addTo(map);

        const kukangSpecies = [
            {
                name: "Kukang Sunda",
                scientific: "Nycticebus coucang",
                location: "Tanjung Pinang, Kepulauan Riau",
                coords: [0.8919, 104.4812],
                status: "Endangered",
                statusClass: "iucn-en",
                desc: "<b>Sekretariat Akasia Riau</b><br>Bumi Indah, Blok D-11, Air Raja, Kec. Tanjung Pinang Timur, Kota Tanjung Pinang, Kepulauan Riau, Indonesia 29125"
            },
            {
                name: "Kukang Jawa",
                scientific: "Nycticebus javanicus",
                location: "Jawa Barat, Jawa Tengah, Banten",
                coords: [-7.0, 107.5],
                status: "Critically Endangered",
                statusClass: "iucn-cr",
                desc: "Spesies paling terancam. Wajahnya memiliki pola garpu putih terang."
            },
            {
                name: "Kukang Kalamasan",
                scientific: "Nycticebus menagensis",
                location: "Kalimantan Utara & Timur",
                coords: [3.0, 116.0],
                status: "Vulnerable",
                statusClass: "iucn-vu",
                desc: "Berwarna pucat kemerahan tanpa penanda wajah yang kontras."
            },
            {
                name: "Kukang Sumatera Utara",
                scientific: "Nycticebus hilleri",
                location: "Sumatera Utara & Aceh",
                coords: [3.5, 98.5],
                status: "Endangered",
                statusClass: "iucn-en",
                desc: "Dulu subspesies N. coucang. Terancam pembalakan liar di ekosistem Leuser."
            },
            {
                name: "Kukang Kayan",
                scientific: "Nycticebus kayan",
                location: "Kalimantan Timur & Tengah",
                coords: [1.5, 115.0],
                status: "Vulnerable",
                statusClass: "iucn-vu",
                desc: "Memiliki pola wajah topeng yang gelap dan sangat kontras."
            },
            {
                name: "Kukang Bangka",
                scientific: "Nycticebus bancanus",
                location: "Pulau Bangka & Belitung",
                coords: [-2.5, 106.0],
                status: "Critically Endangered",
                statusClass: "iucn-cr",
                desc: "Populasi sangat terbatas di pulau kecil, habitat tergerus oleh pertambangan."
            },
            {
                name: "Kukang Borneo",
                scientific: "Nycticebus borneanus",
                location: "Kalimantan Barat & Selatan",
                coords: [-1.0, 112.0],
                status: "Vulnerable",
                statusClass: "iucn-vu",
                desc: "Berwajah lebih membulat dengan garis punggung yang agak samar."
            }
        ];

        kukangSpecies.forEach(sp => {
            const marker = L.marker(sp.coords).addTo(map);
            const popupContent = `
                <div class="min-w-[200px]">
                    <h3 class="font-bold text-slate-800 text-base mb-0">${sp.name}</h3>
                    <p class="text-slate-500 italic text-sm mb-2">${sp.scientific}</p>
                    <p class="text-sm text-slate-700 mb-2"><strong>Sebaran:</strong> ${sp.location}</p>
                    <p class="text-xs text-slate-600 mb-3 border-t pt-2">${sp.desc}</p>
                    <span class="iucn-badge ${sp.statusClass}">${sp.status}</span>
                </div>
            `;
            marker.bindPopup(popupContent);
        });
    }

    // 4. File Upload Logic
    const fileUpload = document.getElementById('file-upload');
    if(fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name;
            if(fileName) {
                const nameEl = document.getElementById('file-name');
                nameEl.textContent = "File terpilih: " + fileName;
                nameEl.classList.remove('hidden');
            }
        });
    }

    // 5. Geolocation API
    const btnLokasi = document.getElementById('btn-lokasi');
    if(btnLokasi) {
        btnLokasi.addEventListener('click', function() {
            const input = document.getElementById('koordinat');
            const btn = this;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Mencari...';
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude.toFixed(6);
                        const lng = position.coords.longitude.toFixed(6);
                        input.value = `${lat}, ${lng}`;
                        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Berhasil';
                        btn.classList.replace('bg-slate-800', 'bg-brand-600');
                        btn.classList.replace('hover:bg-slate-900', 'hover:bg-brand-700');
                    },
                    (error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal',
                            text: 'Gagal mendapatkan lokasi. Pastikan GPS aktif dan izin diberikan.',
                            confirmButtonColor: '#059669'
                        });
                        btn.innerHTML = '<i class="fa-solid fa-location-dot mr-2"></i> Coba Lagi';
                    }
                );
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Tidak Didukung',
                    text: 'Browser Anda tidak mendukung fitur lokasi.',
                    confirmButtonColor: '#059669'
                });
                btn.innerHTML = '<i class="fa-solid fa-location-dot mr-2"></i> Manual Saja';
            }
        });
    }

    // 6. Form Submit
    const laporForm = document.getElementById('laporForm');
    if(laporForm) {
        laporForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            Swal.fire({
                title: 'Mengirim Laporan...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Laporan Diterima!',
                    text: 'Terima kasih atas kepedulian Anda. Tim rescue kami akan segera menindaklanjuti laporan ini.',
                    confirmButtonColor: '#059669',
                    confirmButtonText: 'Tutup'
                }).then(() => {
                    this.reset();
                    document.getElementById('file-name').classList.add('hidden');
                    document.getElementById('koordinat').value = '';
                    if(btnLokasi) {
                        btnLokasi.innerHTML = '<i class="fa-solid fa-location-dot mr-2"></i> Deteksi Otomatis';
                        btnLokasi.classList.replace('bg-brand-600', 'bg-slate-800');
                        btnLokasi.classList.replace('hover:bg-brand-700', 'hover:bg-slate-900');
                    }
                });
            }, 1500);
        });
    }

    // 8. Process Instagram Embeds
    if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
    }

    // 9. Footer Modals
    const btnPrivasi = document.getElementById('btn-privasi');
    if (btnPrivasi) {
        btnPrivasi.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Kebijakan Privasi',
                html: `
                    <div class="text-left text-sm text-slate-600 space-y-4">
                        <p><strong>Perlindungan Data Pelapor:</strong> Seluruh informasi yang Anda kirimkan melalui Formulir Lapor Kukang (termasuk nama, nomor WhatsApp, dan lokasi GPS) akan dienkripsi dan dijaga kerahasiaannya secara ketat.</p>
                        <p><strong>Penggunaan Data:</strong> Data hanya akan diakses oleh tim rescue internal gabungan Akasia Riau dan Natural Aceh murni untuk tujuan evakuasi darurat, rehabilitasi, dan penegakan hukum konservasi satwa liar.</p>
                        <p><strong>Tidak Ada Pihak Ketiga:</strong> Kami tidak akan pernah menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga komersial manapun tanpa persetujuan tertulis Anda.</p>
                    </div>
                `,
                confirmButtonColor: '#059669',
                confirmButtonText: 'Saya Mengerti'
            });
        });
    }

    const btnSyarat = document.getElementById('btn-syarat');
    if (btnSyarat) {
        btnSyarat.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Syarat & Ketentuan',
                html: `
                    <div class="text-left text-sm text-slate-600 space-y-4">
                        <p><strong>Tujuan Platform:</strong> Platform Kukang Riau dibangun semata-mata sebagai sarana edukasi masyarakat dan wadah pelaporan cepat atas penemuan kukang dalam kondisi darurat.</p>
                        <p><strong>Validitas Laporan:</strong> Anda setuju untuk memberikan informasi pelaporan (termasuk foto bukti) yang jujur, akurat, dan dapat dipertanggungjawabkan.</p>
                        <p><strong>Batasan Tanggung Jawab:</strong> Tim rescue akan berupaya merespons setiap laporan dengan secepat mungkin. Namun, waktu respons di lapangan bergantung pada ketersediaan relawan, kondisi cuaca, dan tingkat urgensi.</p>
                        <p class="pt-2 border-t border-slate-100"><strong>Atribusi:</strong> Ikon favicon Kukang dibuat oleh Magnific dari Flaticon.</p>
                    </div>
                `,
                confirmButtonColor: '#059669',
                confirmButtonText: 'Saya Setuju'
            });
        });
    }

    // 10. Carousel Edukasi Muka Kuning
    const carousel = document.getElementById('kegiatan-carousel');
    if (carousel) {
        const inner = document.getElementById('carousel-inner');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        const totalSlides = 3;

        function updateSlide(index) {
            currentSlide = index;
            inner.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.remove('bg-white/50');
                    dot.classList.add('bg-white', 'scale-125');
                } else {
                    dot.classList.remove('bg-white', 'scale-125');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        prevBtn.addEventListener('click', () => {
            const index = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
            updateSlide(index);
        });

        nextBtn.addEventListener('click', () => {
            const index = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
            updateSlide(index);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateSlide(index));
        });
    }

    // 11. Carousel Edukasi FLP Batam
    const flpCarousel = document.getElementById('flp-carousel');
    if (flpCarousel) {
        const flpInner = document.getElementById('flp-carousel-inner');
        const flpPrevBtn = document.getElementById('flp-prev-slide');
        const flpNextBtn = document.getElementById('flp-next-slide');
        const flpDots = document.querySelectorAll('.flp-dot');
        let currentFlpSlide = 0;
        const totalFlpSlides = 3;

        function updateFlpSlide(index) {
            currentFlpSlide = index;
            flpInner.style.transform = `translateX(-${currentFlpSlide * 100}%)`;
            
            flpDots.forEach((dot, i) => {
                if (i === currentFlpSlide) {
                    dot.classList.remove('bg-white/50');
                    dot.classList.add('bg-white', 'scale-125');
                } else {
                    dot.classList.remove('bg-white', 'scale-125');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        flpPrevBtn.addEventListener('click', () => {
            const index = currentFlpSlide > 0 ? currentFlpSlide - 1 : totalFlpSlides - 1;
            updateFlpSlide(index);
        });

        flpNextBtn.addEventListener('click', () => {
            const index = currentFlpSlide < totalFlpSlides - 1 ? currentFlpSlide + 1 : 0;
            updateFlpSlide(index);
        });

        flpDots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateFlpSlide(index));
        });
    }
});
