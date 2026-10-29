function handleKey(event) {
    if (event.key === 'Enter') {
        qidiruvBoshlash();
    }
}

async function qidiruvBoshlash() {
    const query = document.getElementById('qidiruvInput').value.trim();
    if (!query) return;

    // UI tozalash va Loading ko'rsatish
    document.getElementById('loading').style.display = 'block';
    document.getElementById('aiOverview').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';

    try {
        // CORS xatosiz rasmiy Wikipedia Search API orqali qidiruv
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        const searchResults = data.query ? data.query.search : [];

        const aiText = document.getElementById('aiText');
        const mediaContainer = document.getElementById('mediaContainer');
        const webResultsList = document.getElementById('webResultsList');

        mediaContainer.innerHTML = '';
        webResultsList.innerHTML = '';

        if (searchResults.length === 0) {
            aiText.innerHTML = `<strong>"${query}"</strong> bo'yicha hech qanday natija topilmadi.`;
        } else {
            // Birinchi natija bo'yicha AI Overview
            const firstSnippet = searchResults[0].snippet.replace(/<\/?[^>]+(>|$)/g, "");
            aiText.innerHTML = `<strong>${searchResults[0].title}</strong> haqida qisqacha xulosa:<br>${firstSnippet}...`;

            // Rasmlar kartasi (Unsplash API simulyatsiyasi)
            for (let i = 1; i <= 4; i++) {
                const imgCard = document.createElement('div');
                imgCard.className = 'media-card';
                imgCard.innerHTML = `<img src="https://picsum.photos/300/200?random=${i}&query=${encodeURIComponent(query)}" alt="Media image">`;
                mediaContainer.appendChild(imgCard);
            }

            // Saytlar va qidiruv natijalari kartasi
            searchResults.forEach(item => {
                const cleanSnippet = item.snippet.replace(/<\/?[^>]+(>|$)/g, "");
                const pageUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}`;
                
                const card = document.createElement('div');
                card.className = 'web-card glass';
                card.innerHTML = `
                    <div class="web-url">${pageUrl}</div>
                    <a href="${pageUrl}" target="_blank" class="web-title">${item.title}</a>
                    <div class="web-snippet">${cleanSnippet}...</div>
                `;
                webResultsList.appendChild(card);
            });
        }

        document.getElementById('loading').style.display = 'none';
        document.getElementById('aiOverview').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'flex';

    } catch (error) {
        console.error("Search Error:", error);
        document.getElementById('loading').style.display = 'none';
        alert("Natijalarni olishda xatolik yuz berdi. Konsolni tekshiring.");
    }
}
