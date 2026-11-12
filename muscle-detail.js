/* Schema anatomico del Check-up: le attribuzioni sono euristiche e non misure EMG. */
export const REGIONS = [
 ['petto_clav','Pettorale alto','upper'],['petto_stern','Pettorale centrale','upper'],
 ['deltoide_ant','Deltoide anteriore','upper'],['deltoide_lat','Deltoide laterale','upper'],['deltoide_post','Deltoide posteriore','upper'],
 ['gran_dorsale','Gran dorsale','upper'],['upper_back','Upper back','upper'],
 ['trapezio_sup','Trapezio superiore','upper'],['trapezio_med','Trapezio medio','upper'],['trapezio_inf','Trapezio inferiore','upper'],['romboidi','Romboidi','upper'],
 ['bicipiti','Bicipiti','upper'],['brachiale','Brachiale','upper'],['tricipiti','Tricipiti','upper'],['avambracci','Avambracci','upper'],
 ['retto_addome','Retto addominale','core'],['obliqui','Obliqui','core'],['lombari','Erettori spinali','core'],
 ['quadricipiti','Quadricipiti','lower'],['adduttori','Adduttori','lower'],['femorali','Femorali','lower'],['glutei','Glutei','lower'],['polpacci','Polpacci','lower']
];
const lowered=(ex)=>String(ex?.name||'').toLowerCase();
export function regionFor(ex, muscle=ex?.primary){if(!ex)return null;if(ex.checkupRegion&&muscle===ex.primary&&REGIONS.some(r=>r[0]===ex.checkupRegion))return ex.checkupRegion;const n=lowered(ex);
switch(muscle){
 case 'petto':return /inclin|low cable|dal basso/i.test(n)?'petto_clav':'petto_stern';
 case 'spalle':return /laterali|lateral/i.test(n)?'deltoide_lat':/reverse|inverse|rear|face pull|posterior/i.test(n)?'deltoide_post':/scrollate|shrug/i.test(n)?'trapezio_sup':'deltoide_ant';
 case 'dorso':return /lat machine|pulldown|trazioni|pullup|chinup|pullover/i.test(n)?'gran_dorsale':/scrollat|shrug/i.test(n)?'trapezio_sup':/rematore|row|pulley/i.test(n)?'upper_back':'upper_back';
 case 'bicipiti':return /martello|hammer/i.test(n)?'brachiale':'bicipiti';
 case 'tricipiti':return 'tricipiti';
 case 'avambracci':return /martello|hammer|inverso|reverse/i.test(n)?'brachiale':'avambracci';
 case 'addome':return /pallof|russian|laterale|side plank/i.test(n)?'obliqui':'retto_addome';
 case 'quadricipiti':return /adductor|adduttori/i.test(n)?'adduttori':'quadricipiti';
 case 'femorali':return 'femorali';case 'glutei':return 'glutei';case 'polpacci':return 'polpacci';case 'lombari':return 'lombari';
 default:return REGIONS.some(x=>x[0]===muscle)?muscle:null;
}}
