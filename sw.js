self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('vendaja-v1').then(cache => {
      return cache.addAll([
        '/Vendas-aberta/',
        '/Vendas-aberta/index.html',
        '/Vendas-aberta/Stylus.css'
      ]);
    })
  );
});
