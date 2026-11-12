/* REPz 2.0. Nuovo identificativo cache: aggiorna in modo sicuro la PWA 1.x. */
const CACHE='repz-offline-v2-20261112';
const ASSETS=['./','./index.html','./styles.css','./app.js','./catalog.js','./data.js','./anatomy.js','./muscle-detail.js','./images/muscles-front.webp','./images/muscles-back.webp','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('repz-offline-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
const respond=async()=>{const cache=await caches.open(CACHE);if(request.mode==='navigate'){try{const fresh=await fetch(request);if(fresh.ok)cache.put(request,fresh.clone());return fresh;}catch{return (await cache.match(request))||(await cache.match('./index.html'))||Response.error();}}
const cached=await cache.match(request);return cached||fetch(request).then(res=>{if(res.ok)cache.put(request,res.clone());return res;});};event.respondWith(respond());});
