# Puglia 2026 — Il nostro viaggio

Questa cartella contiene una Progressive Web App (PWA) statica.

## Cosa contiene
- guida completa per 3–7 ottobre 2026
- programma giorno per giorno
- storia, arte e curiosità
- ristoranti e alternative
- pulsanti per aprire i percorsi in Google Maps
- modalità offline per i contenuti dell'app
- manifest + service worker per installazione come app

## IMPORTANTE
Per installare una PWA e usare il service worker in modo affidabile, l'app deve essere pubblicata su un indirizzo HTTPS (oppure eseguita su localhost durante i test).

## Metodo consigliato: GitHub Pages
1. Crea un account gratuito su GitHub.
2. Crea un nuovo repository, ad esempio `puglia-2026`.
3. Carica TUTTI i file e la cartella `icons`.
4. Nel repository apri Settings → Pages.
5. Come sorgente scegli la pubblicazione dal branch principale (`main`), dalla cartella root.
6. Attendi la pubblicazione.
7. Apri l'indirizzo HTTPS generato da GitHub Pages sul telefono.
8. Apri l'app una volta con Wi‑Fi.
9. Su Android/Chrome usa “Installa app” o “Aggiungi alla schermata Home”.
10. Su iPhone/iPad usa Safari → Condividi → “Aggiungi alla schermata Home”.
11. Ripeti il punto 8–10 per ogni compagno di viaggio.

## Navigazione offline
I contenuti dell'app sono offline. I pulsanti Google Maps sono collegamenti esterni e richiedono Internet.
Per la navigazione vera e propria scaricate prima le mappe offline in Google Maps oppure usate un'app di mappe offline come Organic Maps.

## Aggiornare la guida
Se modifichi `index.html`, cambia il valore CACHE in `sw.js` da `puglia-2026-v1` a `puglia-2026-v2` e ripubblica. Questo forza il browser a scaricare la nuova versione.

## Test locale
Non aprire semplicemente `index.html` con doppio clic se vuoi verificare l'installazione PWA: i service worker richiedono HTTPS o localhost.
