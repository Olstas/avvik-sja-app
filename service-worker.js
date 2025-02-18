self.addEventListener('install', function(event) {
    console.log("Service Worker installert");
});

self.addEventListener('fetch', function(event) {
    console.log("Forespørsel:", event.request.url);
});
