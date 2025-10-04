document.addEventListener('DOMContentLoaded', function() {
    loadAnalytics();
    displayKnowledgeBase();
});

function loadAnalytics() {
    // Ambil data dari localStorage atau gunakan array kosong jika tidak ada
    const consultations = JSON.parse(localStorage.getItem('consultationHistory')) || [];
    const feedback = JSON.parse(localStorage.getItem('feedbackData')) || { helpful: 0, notHelpful: 0 };

    // Tampilkan Total Konsultasi
    document.getElementById('total-consultations').textContent = consultations.length;

    // Hitung dan Tampilkan Feedback
    const totalFeedback = feedback.helpful + feedback.notHelpful;
    if (totalFeedback > 0) {
        const satisfactionRate = ((feedback.helpful / totalFeedback) * 100).toFixed(1);
        document.getElementById('feedback-summary').textContent = `${satisfactionRate}% Puas (${totalFeedback} Suara)`;
    } else {
        document.getElementById('feedback-summary').textContent = 'Belum ada feedback';
    }

    if (consultations.length === 0) {
        document.getElementById('top-recommendation-popular').textContent = 'N/A';
        return;
    }
    
    // Proses data untuk analitik
    processConsultationData(consultations);
    displayHistoryLog(consultations);
}

function processConsultationData(consultations) {
    const factorCounts = {};
    const recommendationCounts = {};

    consultations.forEach(session => {
        // Hitung rekomendasi terpopuler
        const topRec = session.topRecommendation.name;
        recommendationCounts[topRec] = (recommendationCounts[topRec] || 0) + 1;

        // Hitung faktor/kondisi terpopuler
        session.selectedFactors.forEach(factor => {
            const factorText = allFactors[factor.code] || 'Unknown Factor';
            factorCounts[factorText] = (factorCounts[factorText] || 0) + 1;
        });
    });

    // Cari rekomendasi terpopuler
    const topRecommendation = Object.keys(recommendationCounts).reduce((a, b) => recommendationCounts[a] > recommendationCounts[b] ? a : b, 'N/A');
    document.getElementById('top-recommendation-popular').textContent = topRecommendation;

    // Urutkan faktor dan ambil 5 teratas
    const sortedFactors = Object.entries(factorCounts).sort(([,a],[,b]) => b-a).slice(0, 5);
    
    // Tampilkan dalam bentuk grafik
    const chartContainer = document.getElementById('top-factors-chart');
    chartContainer.innerHTML = '';
    sortedFactors.forEach(([text, count]) => {
        const bar = `
            <div class="chart-item">
                <div class="chart-label">${text} (${count}x)</div>
                <div class="chart-bar-container">
                    <div class="chart-bar" style="width: ${count / sortedFactors[0][1] * 100}%;"></div>
                </div>
            </div>`;
        chartContainer.innerHTML += bar;
    });
}

function displayKnowledgeBase() {
    const table = document.getElementById('tools-table');
    let tableHTML = `<thead><tr><th>ID</th><th>Nama Alat</th><th>Tipe</th><th>Jangka Waktu</th></tr></thead><tbody>`;
    for (const code in contraceptionTools) {
        const tool = contraceptionTools[code];
        tableHTML += `<tr><td>${code}</td><td>${tool.name}</td><td>${tool.type}</td><td>${tool.term}</td></tr>`;
    }
    tableHTML += `</tbody>`;
    table.innerHTML = tableHTML;
}

function displayHistoryLog(consultations) {
    const logContainer = document.getElementById('history-log');
    if (consultations.length === 0) {
        logContainer.innerHTML = '<p>Belum ada riwayat konsultasi.</p>';
        return;
    }

    // Tampilkan 5 riwayat terakhir
    let logHTML = consultations.slice(-5).reverse().map((session, index) => {
        const factors = session.selectedFactors.map(f => `<li>${allFactors[f.code]}</li>`).join('');
        return `
            <div class="history-item">
                <p><strong>Konsultasi #${consultations.length - index}</strong> - <span>${new Date(session.timestamp).toLocaleString()}</span></p>
                <p><strong>Rekomendasi Teratas:</strong> ${session.topRecommendation.name} (Skor: ${(session.topRecommendation.score * 100).toFixed(1)}%)</p>
                <strong>Kondisi yang Dipilih:</strong>
                <ul>${factors}</ul>
            </div>
        `;
    }).join('');
    logContainer.innerHTML = logHTML;
}


function showManagementNotice() {
    alert('Fitur Manajemen Basis Pengetahuan memerlukan koneksi ke database dan backend. Pada versi demo ini, data hanya bisa dibaca.');
}