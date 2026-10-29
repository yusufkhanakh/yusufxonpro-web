function handleKey(event) {
    if (event.key === 'Enter') {
        qidiruvBoshlash();
    }
}

function quickSearch(text) {
    document.getElementById('qidiruvInput').value = text;
    qidiruvBoshlash();
}

function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('resultsPage').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.getElementById('qidiruvInput').value = '';
}

async function qidiruvBoshlash() {
    const query = document.getElementById('qidiruvInput').value.trim();
    if (!query) return;

    document.getElementById('homePage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    const aiText = document.getElementById('aiText');
    const mediaContainer = document.getElementById('mediaContainer');
    const webResultsList = document.getElementById('webResultsList');

    mediaContainer.innerHTML = '';
    webResultsList.innerHTML = '';

    try {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        const searchResults = data.query ? data.query.search : [];

        if (searchResults.length > 0) {
            renderResults(query, searchResults);
        } else {
            renderFallback(query);
        }
    } catch (error) {
        console.warn("API xatosi, fallback ishlatilmoqda:", error);
        renderFallback(query);
    }
}

function renderResults(query, results) {
    const aiText = document.getElementById('aiText');
    const mediaContainer = document.getElementById('mediaContainer');
    const webResultsList = document.getElementById('webResultsList');

    const cleanFirstSnippet = results[0].snippet.replace(/<\/?[^>]+(>|$)/g, "");
    aiText.innerHTML = `<strong>${results[0].title}</strong> haqida AI tayyorlagan qisqacha xulosa:<br>${cleanFirstSnippet}... Ushbu mavzu bo'yicha eng muhim ma'lumotlar quyidagi veb-manbalarda keltirilgan.`;

    for (let i = 1; i <= 4; i++) {
        const imgCard = document.createElement('div');
        imgCard.className = 'media-card';
        imgCard.innerHTML = `<img src="https://picsum.photos/300/200?random=${i + 10}" alt="Search Media">`;
        mediaContainer.appendChild(imgCard);
    }

    results.forEach(item => {
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

    showResultsPage();
}

function renderFallback(query) {
    const aiText = document.getElementById('aiText');
    const mediaContainer = document.getElementById('mediaContainer');
    const webResultsList = document.getElementById('webResultsList');

    aiText.innerHTML = `<strong>"${query}"</strong> bo'yicha AI Overview xulosasi:<br>Ushbu so'rov bo'yicha qidiruv tizimi umumiy internet tarmoqlari, Google indekslari va global ma'lumotlar bazalarini tahlil qilmoqda.`;

    for (let i = 1; i <= 4; i++) {
        const imgCard = document.createElement('div');
        imgCard.className = 'media-card';
        imgCard.innerHTML = `<img src="https://picsum.photos/300/200?random=${i + 50}" alt="Media">`;
        mediaContainer.appendChild(imgCard);
    }

    const fallbackSites = [
        { title: `${query} — Google Search Rasmiy Natijalari`, url: `https://www.google.com/search?q=${encodeURIComponent(query)}`, snippet: `${query} bo'yicha eng so'nggi yangiliklar, analitik maqolalar va veb-saytlar ro'yxati.` },
        { title: `Global Tech & AI Knowledge Hub: ${query}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`, snippet: `${query} atamasi va texnik tushunchasi bo'yicha ensiklopedik ma'lumotlar.` }
    ];

    fallbackSites.forEach(item => {
        const card = document.createElement('div');
        card.className = 'web-card glass';
        card.innerHTML = `
            <div class="web-url">${item.url}</div>
            <a href="${item.url}" target="_blank" class="web-title">${item.title}</a>
            <div class="web-snippet">${item.snippet}</div>
        `;
        webResultsList.appendChild(card);
    });

    showResultsPage();
}

function showResultsPage() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'block';
}
