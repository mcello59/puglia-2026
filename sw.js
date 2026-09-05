const CACHE='puglia-2026-v24';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];

// Foto della galleria: vengono scaricate una volta e salvate nella cache del PWA.
const PHOTOS=[
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Trani_-_Cattedrale_di_Trani_-.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Castel_del_Monte,_Italy_01.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Basilica_San_Nicola_Bari.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Il_Monachile.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Il_porto_antico_di_Monopoli.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Martina_Franca_-_Comune_di_Martina_Franca_-_2023-09-25_16-14-26_001.jpg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Locorotondo_-_Comune_di_Locorotondo_-_2024-09-21_17-47-02_001.jpeg',
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cisternino_-_Comune_di_Cisternino_-_2023-09-25_16-56-33_014.jpg'
];

self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(ASSETS);
  await Promise.allSettled(PHOTOS.map(async url=>{
    try{
      const response=await fetch(url,{mode:'no-cors',cache:'no-store'});
      if(response && (response.ok || response.type==='opaque')) await cache.put(url,response.clone());
    }catch(e){}
  }));
  await self.skipWaiting();
})()));

self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached) return cached;
    try{
      const response=await fetch(event.request);
      if(response && (response.ok || response.type==='opaque')){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone()).catch(()=>{});
      }
      return response;
    }catch(e){
      return cached || new Response('',{status:503,statusText:'Offline'});
    }
  })());
});
