// Mendaftarkan file untuk di-cache
const cacheFiles = [
    './index.html',
    './about.html',
    './blog.html',
    './contact.html',
    './portfolio-example01.html',
    './style.css',
    './js/app.js',
    './images/about-header.jpg',
    './images/contact-image.jpg',
    './images/example-blog01.jpg',
    './images/example-blog02.jpg',
    './images/example-blog03.jpg',
    './images/example-blog04.jpg',
    './images/example-blog05.jpg',
    './images/example-blog06.jpg',
    './images/example-blog07.jpg',
    './images/example-work01.jpg',
    './images/example-work02.jpg',
    './images/example-work03.jpg',
    './images/example-work04.jpg',
    './images/example-work05.jpg',
    './images/example-work06.jpg',
    './images/example-work07.jpg',
    './images/example-work08.jpg',
    './images/example-work09.jpg',
    './images/footer-background.png',
    './images/header-bg.jpg',
    './images/logo.png',
    './images/photo-wide.jpg',
    './images/photo.jpg',
    './images/portfolio-example-01.jpg',
    './images/portfolio-example-02.jpg',
    './images/portfolio-example-03.jpg',
    './images/portfolio-example-04.jpg',
    './images/portfolio-example-05.jpg',
    './images/portfolio-example-06.jpg',
    './manifest.json',
    './favicon.ico'
  ];
  
  // Menginstall service worker
  self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('portfolio-cache').then(cache => {
        return cache.addAll(cacheFiles).catch(error => {
          console.error('Failed to cache files:', error);
        });
      })
    );
  });
  
  // Memuat dari cache terlebih dahulu, jika tidak tersedia maka memuat dari jaringan
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  