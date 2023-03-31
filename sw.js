// Mendaftarkan file untuk di-cache
var CACHE_NAME = 'portfolio-cache';
const cacheFiles = [
    './',
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
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.getmdl.io/1.3.0/material.grey-pink.min.css',
    'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en',
    'https://code.getmdl.io/1.3.0/material.min.js'
  ];
  
  // Menginstall service worker
  self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(cacheFiles).catch(error => {
          console.error('Failed to cache files:', error);
        });
      })
    );
  });
  
  // Memuat dari cache terlebih dahulu, jika tidak tersedia maka memuat dari jaringan
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
  
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest)
            .then(function(response) {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
     
              var responseToCache = response.clone();
     
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
     
              return response;
            })
            .catch(function(error) {
              console.error('Error fetching from network:', error);
            });
          })
      );
    });
  