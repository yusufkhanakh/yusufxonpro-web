:root {
    --bg-light: #f5f5f7;
    --card-bg: rgba(255, 255, 255, 0.75);
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --accent: #0071e3;
    --accent-glow: rgba(0, 113, 227, 0.15);
    --border-color: rgba(0, 0, 0, 0.08);
    --radius-xl: 22px;
    --radius-m: 14px;
    --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg-light);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    -webkit-font-smoothing: antialiased;
}

/* Glassmorphism Effect */
.glass {
    background: var(--card-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.04);
}

.header {
    width: 100%;
    max-width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--text-primary);
}

.brand svg {
    color: var(--accent);
}

.search-container {
    width: 100%;
    max-width: 760px;
    margin-bottom: 24px;
}

.search-box {
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 20px;
    border-radius: 40px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.search-box:focus-within {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-glow);
    transform: scale(1.01);
}

.search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.05rem;
    font-family: inherit;
    color: inherit;
    padding: 10px;
}

.search-btn {
    border: none;
    background: var(--accent);
    color: white;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.search-btn:hover {
    transform: scale(1.1);
}

.ai-overview {
    width: 100%;
    max-width: 760px;
    padding: 24px;
    margin-bottom: 24px;
    display: none;
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    background: linear-gradient(135deg, rgba(235,243,255,0.9) 0%, rgba(255,255,255,0.9) 100%);
    border: 1px solid rgba(0, 113, 227, 0.25);
}

.ai-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--accent);
    margin-bottom: 12px;
}

.ai-content {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-primary);
}

.results-section {
    width: 100%;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.nav-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
}

.tab-item {
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    background: rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
}

.tab-item.active {
    background: var(--accent);
    color: white;
}

.media-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 10px;
}

.media-card {
    min-width: 180px;
    height: 120px;
    border-radius: var(--radius-m);
    overflow: hidden;
    background-color: #e5e5ea;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.media-card:hover {
    transform: translateY(-4px);
}

.media-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.web-card {
    padding: 18px 22px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    animation: fadeIn 0.4s ease forwards;
}

.web-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.web-url {
    font-size: 0.78rem;
    color: var(--text-secondary);
    margin-bottom: 4px;
    word-break: break-all;
}

.web-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    display: inline-block;
    margin-bottom: 6px;
}

.web-title:hover {
    text-decoration: underline;
}

.web-snippet {
    font-size: 0.9rem;
    color: var(--text-primary);
    line-height: 1.5;
}

.loading {
    display: none;
    width: 100%;
    max-width: 760px;
    text-align: center;
    padding: 30px;
}

.spinner {
    width: 32px;
    height: 32px;
    border: 3px solid rgba(0, 113, 227, 0.15);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 0 auto 12px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}
