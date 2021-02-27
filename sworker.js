self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(Cache=>{
            return Cache.addAll(["./","./style.css","./images/64nibin.png","./images/512nibin.png"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})