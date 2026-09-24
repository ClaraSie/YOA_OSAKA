const currentPage = location.pathname.replace(/\/$/, '/index.html');
document.querySelectorAll('.navlinks a').forEach(link => {
  if (new URL(link.href).pathname === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
const tripStart = new Date('2026-10-23T00:00:00+09:00');
const tripEnd = new Date('2026-10-29T00:00:00+09:00');
const statusEl = document.querySelector('[data-trip-status]');
if (statusEl) {
  const now = new Date();
  statusEl.textContent = now < tripStart
    ? `還有 ${Math.ceil((tripStart - now) / 86400000)} 天`
    : now < tripEnd ? '旅程進行中' : '旅行回憶已收藏';
}
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.rel = 'noopener noreferrer';
});
