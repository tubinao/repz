# REPz 2.0 — Carbon Pulse Dark

App personale per la palestra, PWA per iPhone, gratuita e senza account. Il progetto contiene tutti i file necessari per ospitarla tramite GitHub Pages. Non servono Node, NPM o build sul computer dell'utente.

## Aggiornamento dalla v1.0

**Effettua prima un backup JSON dalla REPz installata sul tuo iPhone.** Poi carica/sovrascrivi sul repository GitHub tutti i file e le due cartelle `icons/` e `images/`. Mantieni invariato l'URL GitHub Pages e **non eliminare né reinstallare la PWA** per aggiornare l'app. Il database IndexedDB conserva il nome `repz_database_v1` e il formato `schema:1` per mantenere compatibilità con i dati precedenti. La cache offline, invece, usa una nuova versione per far scaricare i file aggiornati.

Il sito attuale dell'utente è `https://tubinao.github.io/repz/`. Guida passo passo in `INSTALLAZIONE_RAPIDA.txt`.

## Funzioni principali

- Home completamente riprogettata in Carbon Pulse Dark con palestra attiva, prossimo allenamento, statistiche e accessi rapidi.
- Elenco programmi in pagina autonoma e editor scheda in una **seconda pagina**. Schede e giorni da creare liberamente, senza piani predefiniti.
- Palestre personalizzabili con esercizi, serie e carichi separati; copia del giorno da un'altra palestra.
- Allenamento con **un solo esercizio per schermata**, navigazione laterale (swipe orizzontale o frecce), serie, KG, ripetizioni, RIR, checkbox e feedback.
- Ultima esecuzione dello stesso esercizio **nella stessa palestra**, indipendentemente dal giorno, con carichi, reps e feedback.
- Esercizi extra prima o dopo quello corrente, sostituzioni temporanee/permanenti, riordino e tecniche: superserie, drop set, rest-pause, cedimento.
- Modalità unilaterale con KG, reps e RIR separati per lato SX/DX.
- Cronometro sessione automatico; recupero **esclusivamente manuale nel menu** (mai avviato dalla spunta serie).
- **Abbandona senza salvare**, con conferma e possibilità di salvare invece una seduta parziale.
- Ripristino di una seduta attiva dopo la chiusura dell'app, inclusi esercizio visualizzato e campi registrati.
- Storico, calendario, volume, grafici, record personali, confronto prestazioni e andamento unilaterale.
- Check-up con immagini anatomiche originali anteriore/posteriore, zone selezionabili e più di 20 regioni muscolari, incluse differenze tra deltoidi, dorso e trapezi. Le attribuzioni ai singoli capi muscolari sono **indicative e basate sul tipo di esercizio**, non una misurazione fisiologica.
- Riepilogo finale: tonnellaggio, ripetizioni, durata, densità, RIR medio, PR, 1RM teorico, mini Check-up, calorie MET stimate (con peso corporeo indicativo e difficoltà percepita), feedback e card PNG condivisibile.
- Backup completo JSON, esportazione CSV e ripristino.
- **Anti-autozoom Safari:** input, select e textarea hanno font-size mobile effettivo almeno 16px. Lo zoom manuale di accessibilità non viene disabilitato.

## Cosa non viene incluso

- Nessuna modalità chiara: **solo Carbon Pulse Dark**.
- Nessuna scheda predefinita.
- Nessun monitoraggio continuativo del peso corporeo. È disponibile solo un peso indicativo facoltativo per la stima delle calorie.
- Nessuna categoria separata per le serie di riscaldamento e nessuna precompilazione automatica delle serie precedenti.
- Nessun timer recupero automatico allo spuntare una serie.
- La sincronizzazione Apple Watch non è realizzabile nella sola PWA iniziale.
- Potenza in watt ed energia meccanica in joule non sono calcolate dalla sola coppia KG/reps: servono dati di spostamento e tempi di esecuzione.

## Architettura

L'interfaccia usa HTML, CSS e moduli JavaScript ES nativi, senza dipendenze runtime. Dati: `IndexedDB`; supporto aggiuntivo `localStorage` per recuperare una sessione attiva. Offline: service worker e manifest. Le immagini WebP anatomiche sono incluse localmente in `images/`, non caricate da servizi esterni.

Il sito può essere pubblicato tramite GitHub Pages su un repository pubblico. Il **codice** del repository sarà pubblico, ma gli allenamenti sono nel database privato del dispositivo, non nel repository. Con le normali impostazioni di privacy e sicurezza, l'app non invia dati a un backend esterno.

## Sviluppo e test

`node tests/smoke.mjs` per i test di logica principali. Il file di package abilita `npm test`. I test includono creazione programmi e giorni, configurazione palestre, cronologia esercizio, salvataggio dati, esercizio extra, grafici e Check-up, navigazione della seduta, abbandono senza salvataggio, salvataggio IndexedDB e backup CSV.

**Nota sui test:** non equivalgono a un collaudo su Safari iOS reale. Prima di usare REPz come archivio principale dei tuoi allenamenti, verifica direttamente su iPhone salvataggio, blocco dello schermo, ripristino e backup.

## Versioning e conservazione dati

- `repz_database_v1`: invariato.
- `repz_active_safety_v1`: invariato.
- Schema salvato `1`: invariato; nuovi campi facoltativi sono compatibili.
- Cache PWA `repz-offline-v2-20261112`: aggiornata.

## Limitazioni scientifiche

Le calorie derivano da una stima MET sulla durata dell'intera seduta e sono molto incerte. Tonnellaggio equivale alla somma dei carichi registrati moltiplicati per le ripetizioni; non è lavoro meccanico (joule). Una serie di un esercizio composto coinvolge più distretti, ma non è sommata integralmente come serie diretta di ciascun muscolo. Le mappe anatomiche sono illustrative, non diagnosi o misure di recupero.
