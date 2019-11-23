const cacheName = 'restaurant-reviews-cache';

// List of resources to cache
const cachedResources = [
  './css/styles.css',
  './data/restaurants.json',
  './img/1_400w.jpg',
  './img/1_800w.jpg',
  './img/2_400w.jpg',
  './img/2_800w.jpg',
  './img/3_400w.jpg',
  './img/3_800w.jpg',
  './img/4_400w.jpg',
  './img/4_800w.jpg',
  './img/5_400w.jpg',
  './img/5_800w.jpg',
  './img/6_400w.jpg',
  './img/6_800w.jpg',
  './img/7_400w.jpg',
  './img/7_800w.jpg',
  './img/8_400w.jpg',
  './img/8_800w.jpg',
  './img/9_400w.jpg',
  './img/9_800w.jpg',
  './img/10_400w.jpg',
  './img/10_800w.jpg',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './index.html',
  './restaurant.html',

];

// Service worker examples taken from https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker

// Add the install event listener
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(cachedResources);
      })
      .catch((err) => {
        console.log('Install failed: ' + err);
      })
  );
});

// Add the fetch event listener
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});