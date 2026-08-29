<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Aliya</title>
  <style>
    @font-face {
      font-family: "Drayton";
      src: url("./src/assets/fonts/drayton.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    :root { --ink:#9f315e; --ink2:#d86891; --paper:#fff9f3; --grid:#dfd3c8; }
    * { box-sizing: border-box; }
    html, body { margin:0; min-height:100%; }
    body {
      min-height:100vh;
      display:grid;
      place-items:center;
      overflow:hidden;
      color:#53233a;
      background:
        radial-gradient(circle at 18% 20%, rgba(239,168,193,.28), transparent 28%),
        radial-gradient(circle at 82% 78%, rgba(255,202,167,.30), transparent 25%),
        var(--paper);
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    }
    .hero { width:min(1100px, 96vw); text-align:center; position:relative; }
    .eyebrow { margin:0 0 .3rem; text-transform:uppercase; letter-spacing:.24em; font-size:clamp(.65rem,1.2vw,.82rem); opacity:.65; }
    h1 { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); }
    canvas {
      display:block;
      width:100%;
      height:min(50vw, 460px);
      min-height:250px;
      cursor:crosshair;
      touch-action:none;
      filter: drop-shadow(0 13px 16px rgba(86,31,56,.10));
    }
    .hint { margin:.2rem 0 0; font-size:clamp(.72rem,1.3vw,.9rem); opacity:.58; letter-spacing:.04em; }
    .pill {
      position:fixed; right:18px; top:18px; border:1px solid rgba(92,42,62,.16);
      background:rgba(255,255,255,.55); backdrop-filter:blur(10px); border-radius:999px;
      padding:.55rem .8rem; font-size:.72rem; letter-spacing:.05em; color:inherit;
    }
    @media (prefers-reduced-motion: reduce) { .hint::after { content:" — animasi dikurangi"; } }
  </style>
</head>
<body>
  <div class="pill">portfolio / 2026</div>
  <main class="hero">
    <p class="eyebrow">creative portfolio</p>
    <h1>Aliya</h1>
    <canvas id="stitch" aria-label="Tulisan Aliya bergaya sulam silang interaktif"></canvas>
    <p class="hint">gerakkan cursor untuk menyentuh benang · klik untuk ganti warna</p>
  </main>

<script>
const canvas = document.querySelector('#stitch');
const ctx = canvas.getContext('2d');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const palettes = [
  ['#84264d','#b83e69','#e0799f'],
  ['#75533b','#b17b56','#e2ad82'],
  ['#354c67','#537ca1','#8eb2ce'],
  ['#5b3f73','#8c67a8','#c39cda']
];
let paletteIndex = 0, stitches = [], pointer = {x:-9999,y:-9999,active:false}, t = 0;

function resize() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);
  build(rect.width, rect.height);
}

function build(w,h) {
  const off = document.createElement('canvas');
  const cell = Math.max(7, Math.min(12, w/92));
  off.width = Math.floor(w/cell);
  off.height = Math.floor(h/cell);
  const o = off.getContext('2d');
  o.clearRect(0,0,off.width,off.height);
  o.fillStyle = '#000';
  const size = Math.min(off.height*.76, off.width*.19);
  o.font = `${size}px "Drayton"`;
  o.textAlign = 'center';
  o.textBaseline = 'middle';
  o.fillText('Aliya', off.width/2, off.height/2.03);
  const data = o.getImageData(0,0,off.width,off.height).data;
  stitches = [];
  for(let y=0;y<off.height;y++) for(let x=0;x<off.width;x++) {
    const a = data[(y*off.width+x)*4+3];
    if(a > 70 && (x+y)%2===0) {
      stitches.push({
        x:(x+.5)*cell, y:(y+.5)*cell, ox:(x+.5)*cell, oy:(y+.5)*cell,
        size:cell*.69, phase:Math.random()*Math.PI*2, shade:Math.floor(Math.random()*3)
      });
    }
  }
}

function line(x1,y1,x2,y2,width,color,alpha=1) {
  ctx.globalAlpha=alpha; ctx.strokeStyle=color; ctx.lineWidth=width; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
}

function drawStitch(s, mx, my) {
  const dx=s.ox-mx, dy=s.oy-my, dist=Math.hypot(dx,dy), radius=74;
  let push=0;
  if(pointer.active && dist<radius) push=(1-dist/radius)*12;
  const wobble = reduced ? 0 : Math.sin(t*.002+s.phase)*.8;
  const nx = dist ? dx/dist : 0, ny = dist ? dy/dist : 0;
  s.x += ((s.ox + nx*push + wobble)-s.x)*.12;
  s.y += ((s.oy + ny*push)-s.y)*.12;
  const z=s.size*.48, c=palettes[paletteIndex][s.shade];
  line(s.x-z,s.y-z,s.x+z,s.y+z,Math.max(1.35,s.size*.20),'rgba(72,34,48,.15)',.65);
  line(s.x-z,s.y+z,s.x+z,s.y-z,Math.max(1.35,s.size*.20),'rgba(72,34,48,.15)',.65);
  line(s.x-z,s.y-z-1,s.x+z,s.y+z-1,Math.max(1.15,s.size*.15),c,.98);
  line(s.x-z,s.y+z-1,s.x+z,s.y-z-1,Math.max(1.15,s.size*.15),c,.98);
}

function render(time=0) {
  t=time;
  const w=canvas.clientWidth,h=canvas.clientHeight;
  ctx.clearRect(0,0,w,h);
  const cell=Math.max(12,Math.min(20,w/60));
  ctx.strokeStyle='rgba(120,91,76,.08)'; ctx.lineWidth=1;
  for(let x=cell/2;x<w;x+=cell){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=cell/2;y<h;y+=cell){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  stitches.forEach(s=>drawStitch(s,pointer.x,pointer.y));
  ctx.globalAlpha=1;
  requestAnimationFrame(render);
}

function point(e){ const r=canvas.getBoundingClientRect(); pointer.x=e.clientX-r.left; pointer.y=e.clientY-r.top; pointer.active=true; }
canvas.addEventListener('pointermove',point);
canvas.addEventListener('pointerenter',point);
canvas.addEventListener('pointerleave',()=>pointer.active=false);
canvas.addEventListener('pointerdown',e=>{ point(e); paletteIndex=(paletteIndex+1)%palettes.length; });
addEventListener('resize',resize);

document.fonts.load('16px "Drayton"').then(() => {
  resize();
  requestAnimationFrame(render);
});
</script>
</body>
</html>