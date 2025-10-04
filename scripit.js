// ======== KNOWLEDGE BASE ========
const contraceptionTools = {
    "P001": { name: "Kondom", definition: "Sarung karet yang dipasang pada penis untuk mencegah pertemuan sperma dan sel telur.", type: "Non-Hormonal", term: "Jangka Pendek", effectiveness: "85-98%", reversibility: "Sangat Reversibel" },
    "P002": { name: "Senggama Terputus", definition: "Metode penarikan penis dari vagina sebelum ejakulasi.", type: "Non-Hormonal", term: "Jangka Pendek", effectiveness: "78-96%", reversibility: "Sangat Reversibel" },
    "P003": { name: "Pil Progestin", definition: "Pil KB yang hanya mengandung hormon progestin, cocok untuk ibu menyui.", type: "Hormonal", term: "Jangka Pendek", effectiveness: "91-99%", reversibility: "Sangat Reversibel" },
    "P004": { name: "Pil Kombinasi & Suntik Kombinasi", definition: "Mengandung hormon estrogen dan progestin untuk mencegah ovulasi.", type: "Hormonal", term: "Jangka Pendek", effectiveness: "91-99%", reversibility: "Sangat Reversibel" },
    "P005": { name: "Implan", definition: "Batang kecil fleksibel yang dimasukkan di bawah kulit lengan atas dan melepaskan hormon progestin.", type: "Hormonal", term: "Jangka Panjang", effectiveness: ">99%", reversibility: "Sangat Reversibel" },
    "P006": { name: "DMPA NET-EN", definition: "Kontrasepsi suntik jangka panjang yang diberikan setiap 2 atau 3 bulan.", type: "Hormonal", term: "Jangka Panjang", effectiveness: "94-99%", reversibility: "Sangat Reversibel" },
    "P007": { name: "AKDR Copper T", definition: "Alat berbentuk T dengan lilitan tembaga yang dimasukkan ke dalam rahim.", type: "Non-Hormonal", term: "Jangka Panjang", effectiveness: ">99%", reversibility: "Sangat Reversibel" },
    "P008": { name: "AKDR LNG", definition: "Alat berbentuk T yang melepaskan hormon levonorgestrel (turunan progestin) di dalam rahim.", type: "Hormonal", term: "Jangka Panjang", effectiveness: ">99%", reversibility: "Sangat Reversibel" },
    "P009": { name: "Vasektomi", definition: "Prosedur bedah untuk menghentikan kapasitas reproduksi pada pria secara permanen.", type: "Non-Hormonal", term: "Jangka Panjang", effectiveness: ">99%", reversibility: "Permanen" },
    "P010": { name: "Tubektomi", definition: "Prosedur bedah untuk menghentikan fertilitas pada wanita secara permanen.", type: "Non-Hormonal", term: "Jangka Panjang", effectiveness: ">99%", reversibility: "Permanen" }
};
const factorGroups = {
    "Data Diri & Tujuan": { "G001": "Usia < 35 tahun", "G002": "Usia > 35 tahun", "G005": "Ingin berpartisipasi dalam Program KB" },
    "Gaya Hidup & Preferensi": { "G011": "Merokok", "G007": "Kurang dapat saling berkomunikasi dengan pasangan", "G009": "Alergi terhadap bahan dasar kondom", "G010": "Memiliki pengalaman ejakulasi dini", "G013": "Obesitas" },
    "Kondisi Medis Umum": { "G006": "Beresiko tinggi apabila terjadi kehamilan", "G008": "Memiliki kelainan fisik/psikologis", "G012": "Interaksi dengan obat-obatan tertentu (anti kejang/antibiotik)", "G014": "Mengalami pendarahan per vagina (di luar haid)", "G015": "Memiliki riwayat Hipertensi", "G023": "Postpartum (menyusui 6 minggu - 6 bulan ASI)", "G028": "Memiliki riwayat Diabetes", "G027": "Memiliki Hernia" },
    "Kondisi Medis Spesifik (Penyakit)": { "G019": "Resiko tinggi tertular/menularkan Infeksi Menular Seksual (IMS)", "G025": "Mengidap HIV/AIDS", "G016": "Memiliki penyakit hati (Hepatitis, Sirosis, Tumor)", "G018": "Memiliki penyakit kardiovaskuler (lemak darah, stroke)", "G022": "Mengalami Trombosis Vena Dalam/Emboli Pulmonal", "G026": "Memiliki gangguan peredaran darah", "G032": "Memiliki penyakit Vaskuler", "G030": "Memiliki penyakit Jantung", "G024": "Memiliki riwayat Kanker Payudara", "G017": "Memiliki riwayat Kanker Serviks", "G020": "Memiliki riwayat radang panggul", "G021": "Mengalami Sepsis (Nifas atau Pasca Abortus)", "G029": "Mengalami Endometriosis", "G034": "Pernah mengalami Ruptus Uterus (pendarahan rahim)", "G031": "Memiliki penyakit Paru (Asma, Infeksi)", "G033": "Memiliki penyakit Tiroid (Hipotiroid)" }
};
const rules = { "P001": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G003": {mb: 0.9, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G005": {mb: 0.9, md: 0.1}, "G006": {mb: 0.8, md: 0.1}, "G007": {mb: 0.8, md: 0.1}, "G008": {mb: 0.9, md: 0.1}, "G010": {mb: 0.9, md: 0.1}, "G019": {mb: 0.9, md: 0.07}, "G025": {mb: 0.9, md: 0.08}}, "P002": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G003": {mb: 0.9, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G005": {mb: 0.8, md: 0.1}, "G006": {mb: 0.9, md: 0.1}, "G007": {mb: 0.9, md: 0.1}, "G009": {mb: 0.9, md: 0.05}}, "P003": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.9, md: 0.1}, "G012": {mb: 0.75, md: 0.1}, "G013": {mb: 0.9, md: 0.1}, "G014": {mb: 0.75, md: 0.1}, "G015": {mb: 0.8, md: 0.1}, "G016": {mb: 0.5, md: 0.05}, "G017": {mb: 0.9, md: 0.1}, "G018": {mb: 0.75, md: 0.05}, "G020": {mb: 0.9, md: 0.1}, "G021": {mb: 0.9, md: 0.1}, "G022": {mb: 0.75, md: 0.1}, "G023": {mb: 0.9, md: 0.08}}, "P004": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.75, md: 0.05}, "G012": {mb: 0.8, md: 0.05}, "G013": {mb: 0.7, md: 0.1}, "G014": {mb: 0.9, md: 0.1}, "G015": {mb: 0.5, md: 0.1}, "G017": {mb: 0.75, md: 0.1}, "G020": {mb: 0.9, md: 0.05}, "G021": {mb: 0.8, md: 0.1}, "G023": {mb: 0.5, md: 0.1}}, "P005": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.8, md: 0.1}, "G012": {mb: 0.9, md: 0.1}, "G013": {mb: 0.9, md: 0.05}, "G014": {mb: 0.5, md: 0.1}, "G015": {mb: 0.9, md: 0.1}, "G016": {mb: 0.5, md: 0.1}, "G017": {mb: 0.9, md: 0.05}, "G018": {mb: 0.75, md: 0.1}, "G020": {mb: 0.8, md: 0.1}, "G021": {mb: 0.9, md: 0.02}, "G022": {mb: 0.5, md: 0.1}, "G023": {mb: 0.9, md: 0.1}}, "P006": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.9, md: 0.05}, "G012": {mb: 0.5, md: 0.1}, "G013": {mb: 0.5, md: 0.1}, "G014": {mb: 0.5, md: 0.03}, "G015": {mb: 0.75, md: 0.1}, "G016": {mb: 0.9, md: 0.1}, "G017": {mb: 0.75, md: 0.02}, "G018": {mb: 0.5, md: 0.1}, "G020": {mb: 0.75, md: 0.1}, "G021": {mb: 0.8, md: 0.1}, "G022": {mb: 0.5, md: 0.02}, "G023": {mb: 0.8, md: 0.1}, "G024": {mb: 0.9, md: 0.1}}, "P007": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.8, md: 0.02}, "G012": {mb: 0.9, md: 0.05}, "G013": {mb: 0.8, md: 0.1}, "G015": {mb: 0.9, md: 0.05}, "G016": {mb: 0.8, md: 0.1}, "G018": {mb: 0.9, md: 0.1}, "G020": {mb: 0.5, md: 0.1}, "G022": {mb: 0.9, md: 0.02}, "G023": {mb: 0.75, md: 0.1}, "G024": {mb: 0.8, md: 0.1}}, "P008": { "G001": {mb: 0.5, md: 0.1}, "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.75, md: 0.1}, "G012": {mb: 0.8, md: 0.1}, "G013": {mb: 0.75, md: 0.1}, "G015": {mb: 0.8, md: 0.05}, "G016": {mb: 0.75, md: 0.1}, "G018": {mb: 0.8, md: 0.1}, "G020": {mb: 0.8, md: 0.05}, "G022": {mb: 0.9, md: 0.1}, "G023": {mb: 0.5, md: 0.02}}, "P009": { "G002": {mb: 0.5, md: 0.1}, "G003": {mb: 0.9, md: 0.1}, "G009": {mb: 0.8, md: 0.1}, "G011": {mb: 0.8, md: 0.05}, "G026": {mb: 0.9, md: 0.05}, "G027": {mb: 0.8, md: 0.1}, "G028": {mb: 0.9, md: 0.05}}, "P010": { "G002": {mb: 0.5, md: 0.1}, "G004": {mb: 0.9, md: 0.1}, "G011": {mb: 0.5, md: 0.1}, "G027": {mb: 0.9, md: 0.1}, "G028": {mb: 0.8, md: 0.1}, "G029": {mb: 0.9, md: 0.1}, "G030": {mb: 0.8, md: 0.1}, "G031": {mb: 0.9, md: 0.1}, "G032": {mb: 0.9, md: 0.05}, "G033": {mb: 0.8, md: 0.1}, "G034": {mb: 0.9, md: 0.1}} };

// ======== GLOBAL VARIABLES ========
let originalResults = [];
let allFactors = {};

// ======== CORE FUNCTIONS ========
function populateAllFactors() {
    for (const group in factorGroups) {
        for (const code in factorGroups[group]) {
            allFactors[code] = factorGroups[group][code];
        }
    }
}

function loadQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return;
    container.innerHTML = '';
    for (const groupName in factorGroups) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'question-group';
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = groupName;
        groupDiv.appendChild(groupTitle);
        const questionsGrid = document.createElement('div');
        questionsGrid.className = 'questions-grid';
        const factors = factorGroups[groupName];
        for (const code in factors) {
            const questionItem = document.createElement('div');
            if (groupName === "Data Diri & Tujuan") {
                questionItem.className = 'question-item checkbox-item';
                questionItem.innerHTML = `<input type="checkbox" id="${code}" name="factors" value="${code}"><label for="${code}">${factors[code]}</label>`;
            } else {
                questionItem.className = 'question-item select-item';
                let selectOptions = '<option value="0">0 - Tidak Yakin</option>';
                for (let i = 1; i <= 10; i++) {
                    const value = (i / 10).toFixed(1);
                    selectOptions += `<option value="${value}">${value}</option>`;
                }
                questionItem.innerHTML = `<label for="${code}">${factors[code]}</label><select id="${code}" name="factors-weighted" class="factor-select">${selectOptions}</select>`;
            }
            questionsGrid.appendChild(questionItem);
        }
        groupDiv.appendChild(questionsGrid);
        container.appendChild(groupDiv);
    }
}

function combineCF(cf1, cf2) {
    if (cf1 >= 0 && cf2 >= 0) { return cf1 + cf2 * (1 - cf1); }
    if (cf1 < 0 && cf2 < 0) { return cf1 + cf2 * (1 + cf1); }
    return (cf1 + cf2) / (1 - Math.min(Math.abs(cf1), Math.abs(cf2)));
}

// ======== NAVIGATION & FLOW FUNCTIONS ========
function showPanel(panelName) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(p => p.style.display = 'none');
    const activePanel = document.getElementById(panelName + '-panel');
    if (activePanel) {
        activePanel.style.display = 'block';
    }
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById('nav-' + panelName);
    if(activeLink) {
        activeLink.classList.add('active');
    }
}

function startConsultation() {
    const nama = document.getElementById("nama").value.trim();
    const umur = document.getElementById("umur").value;
    if (!nama || !umur) {
        alert("Harap isi Nama dan Umur sebelum lanjut.");
        return;
    }
    showPanel('kuesioner');
}

function calculateResult() {
    populateAllFactors();
    const checkedFactors = Array.from(document.querySelectorAll('input[name="factors"]:checked')).map(cb => ({ code: cb.value, weight: 1.0 }));
    const weightedFactors = Array.from(document.querySelectorAll('select[name="factors-weighted"]')).map(select => ({ code: select.id, weight: parseFloat(select.value) })).filter(factor => factor.weight > 0);
    const selectedFactors = [...checkedFactors, ...weightedFactors];

    if (selectedFactors.length === 0) {
        alert("Silakan pilih minimal satu kondisi yang sesuai.");
        return;
    }

    let results = [];
    for (const toolCode in contraceptionTools) {
        let cfOld = 0;
        let affectingFactors = [];
        for (const factor of selectedFactors) {
            if (rules[toolCode] && rules[toolCode][factor.code]) {
                const rule = rules[toolCode][factor.code];
                const cfRule = rule.mb - rule.md;
                const cfEvidence = cfRule * factor.weight;
                cfOld = combineCF(cfOld, cfEvidence);
                affectingFactors.push({ text: allFactors[factor.code], impact: cfEvidence });
            }
        }
        const toolData = contraceptionTools[toolCode];
        results.push({
            code: toolCode, name: toolData.name, definition: toolData.definition, type: toolData.type,
            term: toolData.term, effectiveness: toolData.effectiveness, reversibility: toolData.reversibility,
            score: cfOld, affectingFactors: affectingFactors
        });
    }

    results.sort((a, b) => b.score - a.score);
    originalResults = results;
    saveConsultation(selectedFactors, results[0]);
    displayDashboard(results, selectedFactors);
    showPanel('rekomendasi');
}

// ======== DATA PERSISTENCE & FEEDBACK ========
function saveConsultation(selectedFactors, topRecommendation) {
    if (!topRecommendation) return; // Jangan simpan jika tidak ada hasil
    const history = JSON.parse(localStorage.getItem('consultationHistory')) || [];
    const newEntry = {
        timestamp: new Date().toISOString(),
        selectedFactors: selectedFactors,
        topRecommendation: {
            name: topRecommendation.name,
            score: topRecommendation.score
        }
    };
    history.push(newEntry);
    localStorage.setItem('consultationHistory', JSON.stringify(history));
}

function giveFeedback(isHelpful) {
    const feedback = JSON.parse(localStorage.getItem('feedbackData')) || { helpful: 0, notHelpful: 0 };
    if (isHelpful) {
        feedback.helpful++;
    } else {
        feedback.notHelpful++;
    }
    localStorage.setItem('feedbackData', JSON.stringify(feedback));
    const feedbackSection = document.getElementById('feedback-section');
    if(feedbackSection) {
        feedbackSection.innerHTML = '<p><strong>Terima kasih atas masukan Anda!</strong></p>';
    }
}

// ======== DASHBOARD DISPLAY FUNCTIONS ========
function displayDashboard(results, selectedFactors) {
    const resultContainer = document.getElementById('result-container');
    const userInputSummary = document.getElementById('user-input-summary');
    if (!userInputSummary || !resultContainer) return;
    
    userInputSummary.innerHTML = '<h3>Ringkasan Jawaban Anda:</h3>';
    const summaryList = selectedFactors.map(f => `<li>${allFactors[f.code]} <span class="weight-tag">${f.weight < 1 ? `(Bobot: ${f.weight})` : ''}</span></li>`).join('');
    userInputSummary.innerHTML += `<ul>${summaryList}</ul>`;

    applyFilters();
}

function applyFilters() {
    const termFilterEl = document.getElementById('term-filter');
    const typeFilterEl = document.getElementById('type-filter');
    if (!termFilterEl || !typeFilterEl) return;
    
    const termFilter = termFilterEl.value;
    const typeFilter = typeFilterEl.value;

    const filteredResults = originalResults.filter(r => {
        const termMatch = termFilter === 'all' || r.term === termFilter;
        const typeMatch = typeFilter === 'all' || r.type === typeFilter;
        return termMatch && typeMatch;
    });
    renderResults(filteredResults);
}

function renderResults(results) {
    const topRecContainer = document.getElementById('top-recommendation');
    const otherRecContainer = document.getElementById('other-recommendations');
    const chartContainer = document.getElementById('chart');
    if (!topRecContainer || !otherRecContainer || !chartContainer) return;

    topRecContainer.innerHTML = '';
    otherRecContainer.innerHTML = '';
    chartContainer.innerHTML = '';

    const validResults = results.filter(r => r.score > 0.2);

    if (validResults.length === 0) {
        topRecContainer.innerHTML = '<p class="no-result">Tidak ada rekomendasi yang cocok berdasarkan pilihan dan filter Anda.</p>';
        document.getElementById('top-recommendation-container').style.display = 'block';
        document.getElementById('chart-container').style.display = 'none';
        document.getElementById('other-recommendations-container').style.display = 'none';
        return;
    }

    document.getElementById('top-recommendation-container').style.display = 'block';
    document.getElementById('chart-container').style.display = 'block';
    document.getElementById('other-recommendations-container').style.display = 'block';

    const topResult = validResults[0];
    topRecContainer.innerHTML = createResultCard(topResult, true);

    const otherResults = validResults.slice(1);
    if (otherResults.length > 0) {
        otherResults.forEach(result => { otherRecContainer.innerHTML += createResultCard(result, false); });
    } else {
        document.getElementById('other-recommendations-container').style.display = 'none';
    }

    const chartData = validResults.slice(0, 5);
    chartData.forEach(result => {
        const percentage = (result.score * 100).toFixed(1);
        chartContainer.innerHTML += `<div class="chart-item"><div class="chart-label">${result.name} (${percentage}%)</div><div class="chart-bar-container"><div class="chart-bar" style="width: ${percentage}%;"></div></div></div>`;
    });
}

function createResultCard(result, isTop) {
    const scorePercentage = (result.score * 100).toFixed(2);
    let recommendationText = '', cardClass = '';
    if (result.score > 0.6) { recommendationText = 'Sangat Direkomendasikan'; cardClass = 'recommended'; }
    else if (result.score > 0.2) { recommendationText = 'Pilihan Baik'; cardClass = 'good-option'; }
    else { recommendationText = 'Netral / Pertimbangkan'; cardClass = 'neutral'; }

    const positiveFactors = result.affectingFactors.filter(f => f.impact > 0).map(f => `<li>${f.text}</li>`).join('');
    const negativeFactors = result.affectingFactors.filter(f => f.impact < 0).map(f => `<li>${f.text}</li>`).join('');

    return `
        <div class="result-card ${cardClass} ${isTop ? 'top-card' : 'other-card'}">
            <div class="card-header">
                <h3>${result.name} <span class="rec-level">(${recommendationText})</span></h3>
                <div class="compare-action">
                    <input type="checkbox" class="compare-checkbox" data-code="${result.code}" id="compare-${result.code}">
                    <label for="compare-${result.code}">Bandingkan</label>
                </div>
            </div>
            <p><strong>Skor Kecocokan:</strong> ${scorePercentage}%</p>
            <p><strong>Definisi:</strong> ${result.definition}</p>
            ${positiveFactors ? `<div class="factors-details"><strong>Faktor Pendukung:</strong><ul class="positive-factors">${positiveFactors}</ul></div>` : ''}
            ${negativeFactors ? `<div class="factors-details"><strong>Faktor Pertimbangan:</strong><ul class="negative-factors">${negativeFactors}</ul></div>` : ''}
        </div>
    `;
}

function showComparison() {
    const checked = document.querySelectorAll('.compare-checkbox:checked');
    if (checked.length < 2 || checked.length > 3) {
        alert("Silakan pilih 2 atau 3 metode untuk dibandingkan.");
        return;
    }

    const codesToCompare = Array.from(checked).map(cb => cb.dataset.code);
    const itemsToCompare = originalResults.filter(r => codesToCompare.includes(r.code));
    
    const modal = document.getElementById('comparison-modal');
    const tableBody = document.getElementById('comparison-table-body');
    const tableHead = document.getElementById('comparison-table-head');
    if (!modal || !tableBody || !tableHead) return;

    let headerHTML = '<th>Fitur</th>';
    itemsToCompare.forEach(item => { headerHTML += `<th>${item.name}</th>`; });
    tableHead.innerHTML = `<tr>${headerHTML}</tr>`;

    let bodyHTML = '';
    const features = [
        { key: 'score', label: 'Skor Kecocokan' }, { key: 'effectiveness', label: 'Tingkat Efektivitas' },
        { key: 'type', label: 'Tipe' }, { key: 'term', label: 'Jangka Waktu' }, { key: 'reversibility', label: 'Reversibilitas' }
    ];

    features.forEach(feature => {
        let row = `<td><strong>${feature.label}</strong></td>`;
        itemsToCompare.forEach(item => {
            let value = item[feature.key];
            if (feature.key === 'score') value = `${(value * 100).toFixed(1)}%`;
            row += `<td>${value}</td>`;
        });
        bodyHTML += `<tr>${row}</tr>`;
    });

    tableBody.innerHTML = bodyHTML;
    modal.style.display = 'flex';
}

function closeComparison() {
    const modal = document.getElementById('comparison-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ======== INITIALIZATION ========
window.onload = () => {
    // Cek apakah kita di halaman dashboard, baru jalankan skrip utama
    if (document.getElementById('sidebar')) {
        loadQuestions();
        showPanel('data-diri');
    }
};