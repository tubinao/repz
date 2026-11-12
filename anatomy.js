import {REGIONS} from './muscle-detail.js';
/* REPz 2.0 anatomical illustration: original generated anatomy, plus selectable SVG regions.
   Region overlays are interpretive (not EMG-derived maps). */
const FRONT=[
 ['deltoide_ant','M191 180 Q146 186 133 225 L164 257 199 226Z M351 180 Q396 186 409 225 L378 257 343 226Z'],
 ['deltoide_lat','M132 205 Q112 224 109 274 L136 295 162 248Z M410 205 Q430 224 433 274 L406 295 380 248Z'],
 ['petto_clav','M205 195 Q236 189 268 204 L269 243 Q227 240 190 228Z M337 195 Q306 189 274 204 L273 243 Q315 240 352 228Z'],
 ['petto_stern','M190 231 L270 244 268 296 Q217 299 178 267Z M352 231 L272 244 274 296 Q325 299 364 267Z'],
 ['bicipiti','M118 279 Q137 270 159 292 L149 343 122 355 113 324Z M424 279 Q405 270 383 292 L393 343 420 355 429 324Z'],
 ['brachiale','M119 348 L149 343 143 369 117 373Z M423 348 L393 343 399 369 425 373Z'],
 ['avambracci','M115 375 Q128 368 143 375 L126 431 106 490 80 477 92 423Z M427 375 Q414 368 399 375 L416 431 436 490 462 477 450 423Z'],
 ['retto_addome','M218 294 Q242 305 267 298 L266 431 230 435 210 384Z M276 298 Q301 305 325 294 L333 384 313 435 277 431Z'],
 ['obliqui','M192 286 L217 301 210 380 224 435 189 400 168 333Z M350 286 L325 301 332 380 318 435 353 400 374 333Z'],
 ['quadricipiti','M180 490 Q214 478 261 503 L252 598 235 669 191 682 171 600Z M362 490 Q328 478 281 503 L290 598 307 669 351 682 371 600Z'],
 ['adduttori','M259 500 L271 510 268 652 244 654 244 588Z M283 500 L271 510 274 652 298 654 298 588Z'],
 ['polpacci','M190 754 Q226 736 239 775 L227 852 206 894 191 853Z M352 754 Q316 736 303 775 L315 852 336 894 351 853Z']
];
const BACK=[
 ['trapezio_sup','M190 126 Q233 156 260 151 Q287 156 330 126 L339 184 260 207 181 184Z'],
 ['deltoide_post','M177 190 Q141 180 118 220 L139 263 193 236Z M343 190 Q379 180 402 220 L381 263 327 236Z'],
 ['trapezio_med','M201 202 L260 218 319 202 306 272 260 301 214 272Z'],
 ['romboidi','M209 227 L254 263 250 302 207 276Z M311 227 L266 263 270 302 313 276Z'],
 ['upper_back','M180 230 L216 259 210 335 154 337 135 279Z M340 230 L304 259 310 335 366 337 385 279Z'],
 ['trapezio_inf','M245 286 L260 269 275 286 285 352 260 396 235 352Z'],
 ['gran_dorsale','M159 294 L208 323 255 379 248 414 177 395 151 342Z M361 294 L312 323 265 379 272 414 343 395 369 342Z'],
 ['tricipiti','M121 278 Q145 264 159 291 L150 352 124 364 109 344Z M399 278 Q375 264 361 291 L370 352 396 364 411 344Z'],
 ['avambracci','M118 365 L151 369 128 463 105 478 86 467Z M402 365 L369 369 392 463 415 478 434 467Z'],
 ['lombari','M234 379 L260 405 286 379 301 443 260 461 219 443Z'],
 ['glutei','M181 421 Q221 405 259 433 L255 538 Q215 553 179 519Z M339 421 Q299 405 261 433 L265 538 Q305 553 341 519Z'],
 ['femorali','M188 528 Q225 543 255 537 L249 678 201 714 182 657Z M332 528 Q295 543 265 537 L271 678 319 714 338 657Z'],
 ['polpacci','M195 755 Q220 734 236 768 L228 851 203 885 187 845Z M325 755 Q300 734 284 768 L292 851 317 885 333 845Z']
];
const LABEL=Object.fromEntries(REGIONS.map(([id,name])=>[id,name]));
export function anatomySVG(counts={},low=6,high=12,side='front',selected=''){
 const paths=side==='back'?BACK:FRONT;
 const tones=id=>{const n=counts[id]||0;return n===0?'off':n<=low?'low':n<high?'medium':'high';};
 return `<div class="anatomy-figure" aria-label="Atlante anatomico ${side==='back'?'posteriore':'anteriore'}"><img src="./images/muscles-${side==='back'?'back':'front'}.webp" alt="Illustrazione anatomica dettagliata della muscolatura ${side==='back'?'posteriore':'anteriore'}" loading="lazy" width="520" height="1024"/><svg class="anatomy-overlay" viewBox="0 0 520 1024" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Tocca un muscolo per visualizzarne le statistiche">${paths.map(([id,d])=>`<path d="${d}" tabindex="0" role="button" data-muscle="${id}" aria-label="${LABEL[id]||id}, ${counts[id]||0} serie attribuite" class="atlas-zone zone-${tones(id)} ${selected===id?'zone-selected':''}"><title>${LABEL[id]||id} · ${counts[id]||0} serie</title></path>`).join('')}</svg></div>`;
}
