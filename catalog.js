export const MUSCLES = [
 ['petto','Petto','upper'],['dorso','Dorso','upper'],['spalle','Spalle','upper'],
 ['bicipiti','Bicipiti','upper'],['tricipiti','Tricipiti','upper'],['addome','Addome','core'],
 ['quadricipiti','Quadricipiti','lower'],['femorali','Femorali','lower'],
 ['glutei','Glutei','lower'],['polpacci','Polpacci','lower'],
 ['avambracci','Avambracci','upper'],['lombari','Lombari','core']
];
const raw = `
Panca piana bilanciere|petto|tricipiti,spalle|Bilanciere|panca piana,bench press
Panca piana manubri|petto|tricipiti,spalle|Manubri|dumbbell bench
Panca inclinata bilanciere|petto|tricipiti,spalle|Bilanciere|incline bench
Panca inclinata manubri|petto|tricipiti,spalle|Manubri|incline dumbbell
Incline chest press|petto|tricipiti,spalle|Macchina|chest press inclinata,press inclinata
Chest press orizzontale|petto|tricipiti,spalle|Macchina|chest press
Distensioni al multipower inclinato|petto|tricipiti,spalle|Multipower|smith inclinata,smith machine incline
Distensioni al multipower piano|petto|tricipiti,spalle|Multipower|smith piana
Croci manubri su panca|petto|spalle|Manubri|fly,flies
Croci ai cavi|petto|spalle|Cavi|cable fly,croci cavi
Croci ai cavi dal basso|petto|spalle|Cavi|low cable fly
Croci ai cavi dall'alto|petto|spalle|Cavi|high cable fly
Pec deck|petto||Macchina|butterfly
Piegamenti sulle braccia|petto|tricipiti,spalle|Corpo libero|push up,flessioni
Dip alle parallele petto|petto|tricipiti,spalle|Corpo libero|chest dip
Pullover manubrio|dorso|petto|Manubri|pullover
Lat machine presa larga|dorso|bicipiti,avambracci|Macchina|lat machine,lat pulldown
Lat machine presa stretta|dorso|bicipiti,avambracci|Macchina|lat machine stretta
Lat machine presa inversa|dorso|bicipiti,avambracci|Macchina|lat supina
Trazioni alla sbarra|dorso|bicipiti,avambracci|Corpo libero|pullup,pull up
Trazioni presa inversa|dorso|bicipiti,avambracci|Corpo libero|chinup,chin up
Pulley basso|dorso|bicipiti,avambracci|Cavi|pulley,low row,seated row
Pulley alto|dorso|bicipiti|Cavi|high row
Rematore bilanciere|dorso|bicipiti,lombari|Bilanciere|barbell row
Rematore manubrio|dorso|bicipiti|Manubri|one arm row
Rematore T-bar|dorso|bicipiti|Macchina|t bar row
Rematore al multipower|dorso|bicipiti|Multipower|smith row
Rematore macchina|dorso|bicipiti|Macchina|seated row machine
Low row macchina|dorso|bicipiti|Macchina|low row
High row macchina|dorso|bicipiti|Macchina|high row
Pulldown braccia tese|dorso|tricipiti|Cavi|straight arm pulldown
Stacco da terra|dorso|glutei,femorali,lombari|Bilanciere|deadlift
Iperestensioni lombari|lombari|glutei,femorali|Corpo libero|hyperextension
Military press bilanciere|spalle|tricipiti|Bilanciere|overhead press
Shoulder press manubri|spalle|tricipiti|Manubri|spinte spalle
Shoulder press macchina|spalle|tricipiti|Macchina|press spalle
Shoulder press multipower|spalle|tricipiti|Multipower|smith shoulder
Alzate laterali manubri|spalle||Manubri|lateral raise
Alzate laterali ai cavi|spalle||Cavi|cable lateral raise
Alzate laterali macchina|spalle||Macchina|lateral raise machine
Alzate frontali|spalle||Manubri|front raise
Reverse pec deck|spalle|dorso|Macchina|rear delt fly
Face pull ai cavi|spalle|dorso|Cavi|facepull
Croci inverse manubri|spalle|dorso|Manubri|rear delt
Scrollate manubri|spalle|dorso|Manubri|shrugs
Curl bilanciere dritto|bicipiti|avambracci|Bilanciere|barbell curl
Curl bilanciere EZ|bicipiti|avambracci|Bilanciere|curl bilanciere ondulato,curl ez
Curl manubri alternato|bicipiti|avambracci|Manubri|curl manubri
Curl manubri simultaneo|bicipiti|avambracci|Manubri|dumbbell curl
Curl alla panca Scott con bilanciere EZ|bicipiti|avambracci|Bilanciere|panca scott bilanciere ondulato,preacher curl,scott ez,panca scott
Curl alla panca Scott manubrio|bicipiti|avambracci|Manubri|preacher curl dumbbell
Curl alla panca Scott macchina|bicipiti|avambracci|Macchina|preacher curl machine
Curl al cavo basso|bicipiti|avambracci|Cavi|cable curl
Curl inclinato manubri|bicipiti|avambracci|Manubri|incline curl
Curl concentrato|bicipiti|avambracci|Manubri|concentration curl
Curl martello|bicipiti|avambracci|Manubri|hammer curl
Curl bayesian ai cavi|bicipiti|avambracci|Cavi|bayesian curl
Curl spider|bicipiti|avambracci|Bilanciere|spider curl
Curl inverso bilanciere|avambracci|bicipiti|Bilanciere|reverse curl
French press bilanciere EZ|tricipiti||Bilanciere|skull crusher,french press
French press manubri|tricipiti||Manubri|triceps extension
Pushdown ai cavi con corda|tricipiti||Cavi|push down,tricipiti corda
Pushdown ai cavi con barra|tricipiti||Cavi|pushdown barra
Estensioni tricipiti sopra testa|tricipiti||Cavi|overhead triceps extension
Kickback manubrio|tricipiti||Manubri|kick back
Dip tricipiti|tricipiti|petto,spalle|Corpo libero|dips
Panca presa stretta|tricipiti|petto,spalle|Bilanciere|close grip bench
Tricipiti alla macchina|tricipiti||Macchina|triceps machine
Squat bilanciere|quadricipiti|glutei,femorali,lombari|Bilanciere|squat
Front squat|quadricipiti|glutei|Bilanciere|frontsquat
Hack squat|quadricipiti|glutei|Macchina|hacksquat
Leg press 45 gradi|quadricipiti|glutei|Macchina|pressa,leg press
Leg press orizzontale|quadricipiti|glutei|Macchina|pressa orizzontale
Leg extension|quadricipiti||Macchina|leg extensions
Affondi manubri|quadricipiti|glutei,femorali|Manubri|lunges
Affondi bulgari|quadricipiti|glutei|Manubri|bulgarian split squat
Step up|quadricipiti|glutei|Manubri|step-up
Sissy squat|quadricipiti||Corpo libero|sissy
Squat multipower|quadricipiti|glutei|Multipower|smith squat
Leg curl sdraiato|femorali||Macchina|lying leg curl,leg curl
Leg curl seduto|femorali||Macchina|seated leg curl
Leg curl in piedi|femorali||Macchina|standing leg curl
Stacco rumeno bilanciere|femorali|glutei,lombari|Bilanciere|romanian deadlift,rdl
Stacco rumeno manubri|femorali|glutei,lombari|Manubri|dumbbell rdl
Good morning|femorali|glutei,lombari|Bilanciere|goodmorning
Glute bridge|glutei|femorali|Bilanciere|glute bridge
Hip thrust bilanciere|glutei|femorali|Bilanciere|hipthrust
Hip thrust macchina|glutei|femorali|Macchina|hip thrust
Abductor machine|glutei||Macchina|abduttori
Adductor machine|quadricipiti||Macchina|adduttori
Slanci glutei ai cavi|glutei|femorali|Cavi|kickback glutei
Calf raise in piedi|polpacci||Macchina|standing calf
Calf raise seduto|polpacci||Macchina|seated calf
Calf press alla leg press|polpacci||Macchina|calf press
Calf raise manubri|polpacci||Manubri|polpacci manubri
Crunch a terra|addome||Corpo libero|crunch
Crunch alla macchina|addome||Macchina|abdominal crunch
Crunch ai cavi|addome||Cavi|cable crunch
Plank|addome|lombari|Corpo libero|plank
Sollevamento gambe sospeso|addome||Corpo libero|hanging leg raise
Reverse crunch|addome||Corpo libero|crunch inverso
Russian twist|addome||Corpo libero|russian twists
Ab wheel|addome||Corpo libero|wheel rollout
Pallof press|addome||Cavi|pallof
Side plank|addome||Corpo libero|plank laterale
Wrist curl|avambracci||Manubri|curl polso
Farmer's walk|avambracci|dorso|Manubri|farmer walk
Estensioni lombari macchina|lombari|glutei|Macchina|lower back machine
`.trim();
export const BUILTIN=raw.split('\n').map((line,i)=>{
  const [name,primary,secondaries,equipment,aliases]=line.split('|');
  return {id:`b${i+1}`,name,primary,secondary:secondaries?secondaries.split(','):[],equipment,aliases:aliases?aliases.split(','):[],custom:false};
});
export const muscleName=id=>MUSCLES.find(m=>m[0]===id)?.[1]||id;
export const normalize=str=>(str||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
export function matchExercises(exercises,q){const query=normalize(q);if(!query)return exercises.slice(0,40);const parts=query.split(' ');return exercises.map(e=>{const name=normalize(e.name),all=normalize([e.name,...(e.aliases||[])].join(' '));let score=0;if(name===query)score+=100;if(all.includes(query))score+=45;if(parts.every(p=>all.includes(p)))score+=30;score+=parts.filter(p=>all.includes(p)).length*4;return {e,score};}).filter(x=>x.score>=Math.min(parts.length,2)*4).sort((a,b)=>b.score-a.score).slice(0,35).map(x=>x.e);}
