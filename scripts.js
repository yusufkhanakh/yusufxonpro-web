function handleKey(event) {
    if (event.key === 'Enter') {
        qidiruvBoshlash();
    }
}

async function qidiruvBoshlash() {
    const query = document.getElementById('qidiruvInput').value.trim();
    if (!query) return;

    // Interface Reset
    document.getElementById('loading').style.display = 'block';
    document.getElementById('aiOverview').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';

    try {
        // OpenSearch API orqali qidiruv natijalarini olish
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&namespace=0&format=json&origin=*`);
        const data = await res.json();

        const titles = data[1] || [];
        const snippets = data[2] || [];
        const links = data[3] || [];

        // UI Elementlar
        const aiText = document.getElementById('aiText');
        const mediaContainer = document.getElementById('mediaContainer');
        const webResultsList = document.getElementById('webResultsList');

        // Shabloni tozalash
        mediaContainer.innerHTML = '';
        webResultsList.innerHTML = '';

        if (titles.length === 0) {
            aiText.innerHTML = `<strong>"${query}"</strong> bo'yicha aniq ma'lumot topilmadi. Qayta urinib ko'ring.`;
        } else {
            // AI Overview generatsiyasi
            aiText.innerHTML = `<strong>${titles[0]}</strong> bo'yicha AI xulosasi:<br>${snippets[0] || "Tahlil yakunlandi."} Ushbu mavzudagi asosiy manbalar quyida keltirilgan.`;

            // Rasmlar/Videolar karuseli (Simulyatsiya media kartalari)
            for (let i = 0; i < 4; i++) {
                const imgCard = document.createElement('div');
                imgCard.className = 'media-card';
                imgCard.innerHTML = `<img src="https://picsum.photos/300/200?random=${i + 1}" alt="Google Image Search">`;
                mediaContainer.appendChild(imgCard);
            }

            // Saytlar ro'yxatini chiqarish
            titles.forEach((title, index) => {
                const card = document.createElement('div');
                card.className = 'web-card glass';
                card.innerHTML = `
                    <div class="web-url">${links[index]}</div>
                    <a href="${links[index]}" target="_blank" class="web-title">${title}</a>
                    <div class="web-snippet">${snippets[index] || "Google qidiruv natijasi va qisqacha tavsifi."}</div>
                `;
                webResultsList.appendChild(card);
            });
        }

        // Ko'rsatish
        document.getElementById('loading').style.display = 'none';
        document.getElementById('aiOverview').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'flex';

    } catch (error) {
        console.error(error);
        document.getElementById('loading').style.display = 'none';
        alert("Xatolik yuz berdi. Internet aloqasini tekshiring.");
    }
}
