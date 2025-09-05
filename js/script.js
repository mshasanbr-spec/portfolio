  // Theme toggle with localStorage
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const body = document.body;

  function applyTheme(t) {
    if (t === 'dark') {
      body.classList.add('dark-mode');
      toggle.checked = true;
    } else {
      body.classList.remove('dark-mode');
      toggle.checked = false;
    }
  }

  // Read saved theme
  const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);

  toggle.addEventListener('change', () => {
    const t = toggle.checked ? 'dark' : 'light';
    applyTheme(t);
    localStorage.setItem('theme', t);
  });

  // set year
  document.getElementById('year').textContent = new Date().getFullYear();