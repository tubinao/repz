# REPz · Train. Track. Progress.

**REPz** è una PWA personale per registrare gli allenamenti su iPhone, senza account, abbonamenti o servizi a pagamento. Questa prima implementazione è **standalone, senza dipendenze esterne**: JavaScript moderno, HTML, CSS, SVG, IndexedDB e Service Worker. Non richiede npm o compilazione per essere pubblicata.

## Cosa contiene

- **Home:** palestra selezionabile, prossimo giorno secondo sequenza automatica, ultime sedute e riepilogo settimanale.
- **Palestre:** nomi modificabili (Palestra 1 e Palestra 2 iniziali), aggiunta di nuove sedi, giorni condivisi ma esercizi e carichi per sede separati; copia degli esercizi di un giorno da una sede all'altra.
- **Schede:** nessuna predefinita; crea più programmi e tutti i giorni che vuoi, configura esercizi, target reps/RIR, numero di serie, recupero, superserie e modalità unilaterale; archivia e ripristina programmi senza perdere lo storico.
- **Catalogo:** oltre 100 esercizi con muscoli principali, secondari, attrezzature e sinonimi (per esempio panca Scott con bilanciere ondulato); creazione e modifica di esercizi personalizzati; nomi visualizzati personalizzabili senza perdere l'identificativo.
- **Allenamento:** durata generale automatica (con pausa), serie con kg/reps/RIR e spunta, modalità SX/DX con carichi e RIR separati, feedback libero, tecniche normali/drop/rest-pause/superset/cedimento; ultimo allenamento dello stesso esercizio in quella palestra mostrato con tutte le serie e feedback, indipendente dal giorno della scheda.
- **Modifiche dal vivo:** aggiungi un esercizio ovunque, anche fra due esercizi e dopo l'ultimo; sostituisci e riordina; rendi permanente una sostituzione solo quando lo decidi; campi e storico completi anche per gli esercizi extra.
- **Timer di recupero:** avvio e arresto **manuali**. Spuntare una serie non avvia il recupero.
- **Fine seduta:** note finali, conferma con statistiche e record, salvataggio completo o parziale; avanzamento della sequenza dei giorni solo per allenamenti conclusi come completati.
- **Storico:** calendario, visualizzazione dettagliata di ogni seduta, data, durata, serie, feedback, extras e sostituzioni; nessuna cancellazione dello storico quando modifichi una scheda.
- **Progressi:** grafici di carichi, reps e volume, periodi e palestre filtrabili, record e confronto SX/DX; l'esercizio ripetuto martedì/giovedì aggiorna il riferimento alla seduta più recente senza sovrascrivere il passato.
- **Check-up muscolare:** anatomia anteriore/posteriore cliccabile con intensità per volume diretto; dettaglio di ciascun distretto, serie dirette, coinvolgimento secondario, frequenza, ultime sedute, RIR registrati, serie nell'ultima settimana, andamento su quattro settimane, distribuzione degli esercizi, bilanciamento upper/lower, analisi descrittive. Le soglie colore sono personalizzabili.
- **Persistenza:** IndexedDB per il database, backup temporaneo della seduta attiva in localStorage, recupero automatico dell'allenamento alla riapertura con esercizio aperto, campi e scroll. Backup JSON e CSV.

## Installare gratuitamente su iPhone

Per la **PWA completa** serve pubblicare i file su un sito HTTPS. Una possibilità gratuita è GitHub Pages.

1. Crea un account su GitHub, se non lo hai già.
2. Crea un nuovo repository, per esempio `REPz`, e impostalo come **Public** (su GitHub Free, Pages è normalmente disponibile per repository pubblici).
3. Estrai l'archivio `REPz_PWA_pronta.zip` e carica **i contenuti**, non l'archivio `.zip`, nella radice del repository: `index.html`, `app.js`, `styles.css`, `catalog.js`, `data.js`, `anatomy.js`, `sw.js`, `manifest.webmanifest`, cartella `icons/`.
4. Vai nelle impostazioni del repository → **Pages** → **Build and deployment** → Deploy from a branch → branch `main`, cartella `/(root)` → Save.
5. Apri su iPhone l'indirizzo HTTPS pubblicato da GitHub Pages, tipicamente `https://TUO-UTENTE.github.io/REPz/` (l'URL esatto sarà mostrato dalle impostazioni Pages).
6. Aprilo in **Safari**, tocca **Condividi** → **Aggiungi alla schermata Home**; scegli REPz e conferma.
7. Apri REPz dalla nuova icona. Per usare offline, visita l'app almeno una volta mentre sei connesso: i file verranno messi in cache dal Service Worker.

Una volta installata, l'app salva i dati del tuo allenamento **sull'iPhone**, non su GitHub. Il codice caricato sul repository pubblico è visibile; i tuoi dati locali non vengono caricati automaticamente nel repository.

## Utilizzo rapido

1. Prima apertura: **Crea scheda** → nome → **Aggiungi giorno**.
2. In **Schede**, scegli la palestra e aggiungi esercizi tramite catalogo. Usa **Configura** per impostare serie, target, RIR, recupero, superserie e nome visualizzato.
3. Se utilizzi una seconda palestra, selezionala e usa **Copia da altra palestra** per il giorno, poi sostituisci gli esercizi non disponibili in sede.
4. Premi **Inizia allenamento**. Il cronometro generale parte automaticamente. La card di ciascun esercizio mostra l'ultima esecuzione reale nella palestra corrente.
5. Scrivi kg, ripetizioni, RIR e feedback; segna le serie completate. Il recupero si avvia solo con **Avvia timer**.
6. Usa **Aggiungi esercizio** tra due card o dopo l'ultima; usa **Sostituisci** per le varianti e le frecce per l'ordine. Usa **Modalità unilaterale** per SX/DX.
7. Premi **Termina allenamento**, controlla il riepilogo e salva. Se alcune serie sono incomplete puoi salvare la seduta come parziale o confermare comunque il completamento.
8. Consulta **Storico**, **Progressi**, **Check-up**.
9. Effettua regolarmente **Impostazioni → Scarica backup completo (.json)**.

## Salvataggio e privacy

- Il database è locale in **IndexedDB**. Non esistono login, server applicativi, tracciamento o pubblicità.
- La sessione in corso viene salvata periodicamente e duplicata in un piccolo backup locale per il ripristino anche quando Safari chiude la pagina.
- Un backup JSON contiene l'intera configurazione. L'importazione **sostituisce** i dati correnti, previo avviso.
- Il CSV esporta le **serie completate** e include palestra, giorno, esercizio, carichi, reps, RIR e note.
- **Importante:** non esiste una garanzia assoluta in caso di eliminazione dei dati di Safari, malfunzionamento del dispositivo o rimozione forzata dell'archivio da parte di iOS. Conserva backup JSON fuori dall'app, per esempio in File/iCloud Drive.

## Cosa è volutamente escluso

- Schede precompilate.
- Inizio automatico del timer recupero quando spunti una serie.
- Categoria speciale per le serie di riscaldamento.
- Diario del peso corporeo.
- Copia automatica dei kg/reps precedenti nei nuovi campi.
- Sincronizzazione cloud e controllo del timer da Apple Watch. Quest'ultimo richiederebbe una componente nativa watchOS.

## Precisazioni sull'analisi

- Il **volume** è il prodotto kg × reps per ogni serie completata; per le serie unilaterali si sommano correttamente i valori dei due lati. Non è una misura diretta di stimolo ipertrofico.
- Il Check-up attribuisce una serie al distretto **principale** dell'esercizio e segnala i distretti **secondari** separatamente, senza considerarli altrettante serie dirette complete.
- Le categorie colore "Basso", "Medio", "Alto" sono **relative a soglie impostabili**, non prescrizioni universali né indicazioni certe del recupero fisiologico.
- Il calcolo della durata usa gli orari reali e sottrae le pause manuali; funziona anche se la PWA è stata sospesa da iOS.
- Su iPhone le notifiche e i suoni allo scadere del recupero a schermo bloccato **non sono garantiti** da questa PWA.
- I carichi di macchine differenti in palestre diverse possono non essere confrontabili.

## File tecnici

- `index.html`: contenitore della PWA.
- `styles.css`: layout e design.
- `app.js`: logica dell'app e interfaccia.
- `catalog.js`: catalogo esercizi + classificazione muscolare.
- `data.js`: database, salvataggi, storico e CSV.
- `anatomy.js`: anatomia SVG interattiva.
- `sw.js`: cache offline.
- `manifest.webmanifest`: installazione e metadati.
- `icons/`: icone REPz.

Non è richiesto `npm install`. Per testarla su computer, nella cartella di REPz avvia `python3 -m http.server 8765` e apri `http://localhost:8765` in un browser locale.

## Test

La distribuzione include test automatici di logica e persistenza eseguibili dalla versione sorgente con `npm test` (Node.js >= 20), senza pacchetti da installare. I test coprono creazione scheda, giorni, palestre, catalogo, serie, feedback, inserimento esercizi, scrittura/lettura IndexedDB, storico per esercizio, Check-up e CSV. **Rimane necessario un collaudo manuale sul tuo iPhone** prima di affidare a REPz settimane di allenamenti reali.
