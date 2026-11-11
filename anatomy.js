import {MUSCLES} from './catalog.js';
const front=[
 ['spalle','M74 74 Q56 70 49 91 L58 113 76 105Z M126 74 Q144 70 151 91 L142 113 124 105Z'],
 ['petto','M79 76 Q99 72 99 101 L95 112 70 109 67 94Z M101 76 Q121 72 133 94 L130 109 105 112 101 101Z'],
 ['bicipiti','M54 115 L67 116 63 147 50 145Z M133 116 L146 115 150 145 137 147Z'],
 ['tricipiti','M47 112 L53 117 48 147 42 142Z M147 117 L153 112 158 142 152 147Z'],
 ['avambracci','M49 150 L63 152 57 190 43 192Z M137 152 L151 150 157 192 143 190Z'],
 ['addome','M76 114 Q100 125 124 114 L121 174 79 174Z'],
 ['quadricipiti','M78 179 L99 181 97 259 71 255Z M101 181 L122 179 129 255 103 259Z'],
 ['polpacci','M75 265 L96 268 93 326 78 328Z M104 268 L125 265 122 328 107 326Z']
];
const back=[
 ['spalle','M73 74 Q56 72 49 91 L58 113 78 103Z M127 74 Q144 72 151 91 L142 113 122 103Z'],
 ['dorso','M77 77 L100 92 123 77 133 118 122 162 100 151 78 162 67 118Z'],
 ['tricipiti','M51 113 L65 115 61 146 47 145Z M135 115 L149 113 153 145 139 146Z'],
 ['bicipiti','M44 112 L50 115 47 145 40 140Z M150 115 L156 112 160 140 153 145Z'],
 ['avambracci','M49 151 L63 153 56 191 42 191Z M137 153 L151 151 158 191 144 191Z'],
 ['lombari','M82 161 L100 155 118 161 122 178 78 178Z'],
 ['glutei','M76 180 Q100 169 100 191 L95 206 72 198Z M100 191 Q100 169 124 180 L128 198 105 206Z'],
 ['femorali','M75 206 L98 210 95 262 71 260Z M102 210 L125 206 129 260 105 262Z'],
 ['polpacci','M74 265 L96 266 92 326 78 326Z M104 266 L126 265 122 326 108 326Z']
];
function figure(which,series,low,high){const backSide=which==='back';const paths=backSide?back:front;const count=id=>series[id]||0;const tone=id=>{const n=count(id);return n===0?'off':n<=low?'low':n<high?'medium':'high';};return `<g transform="translate(${backSide?195:0},0)">
  <g class="body-base"><circle cx="100" cy="42" r="22"/><path d="M88 62 L83 76 65 79 Q51 77 43 94 L36 145 42 194 60 194 69 150 72 172 69 216 68 264 73 334 96 334 100 269 104 334 127 334 132 264 131 216 128 172 131 150 140 194 158 194 164 145 157 94 Q149 77 135 79 L117 76 112 62Z"/></g>
  ${paths.map(([id,d])=>`<path role="button" tabindex="0" aria-label="${MUSCLES.find(m=>m[0]===id)?.[1||'']||id}" data-muscle="${id}" class="muscle-path tone-${tone(id)}" d="${d}" />`).join('')}
  <text x="100" y="350" text-anchor="middle" class="body-label">${backSide?'POSTERIORE':'ANTERIORE'}</text>
</g>`;}
export function anatomySVG(series,low=6,high=12){return `<svg class="anatomy" viewBox="0 0 400 358" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Mappa muscolare interattiva: scegli un distretto">${figure('front',series,low,high)}${figure('back',series,low,high)}</svg>`;}
