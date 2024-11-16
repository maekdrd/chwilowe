self.addEventListener('install', event => {
event.waitUntil(
  caches.open('app-cache').then(cache => {
    return cache.addAll([
      '/',
      '/index.html',
      '/script.js',
      '/chwilowe/manifest.json',  // Zmieniona ścieżka do manifestu
      '/chwilowe/dow.png',         // Ścieżki do plików w folderze chwilowe
      '/chwilowe/flaga.gif',
	  '/chwilowe/start.html',
      '/chwilowe/thing1.png',
	  '/chwilowe/uslugi.png',
	  '/chwilowe/zak.png',
      '/chwilowe/thing2.png',
      '/chwilowe/thing3.png'
    ]);
  })
);

  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
