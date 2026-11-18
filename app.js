let photos=[], visible=[], current=0;
const grid=document.getElementById('gallery-grid');
console.log("Gallery script loaded");
console.log("Gallery grid:", grid);
console.log("Photo count:", photos.length);
const count=document.getElementById('photo-count');
const empty=document.getElementById('empty-note');
async function loadData(){
  try {
    const r = await fetch('./photos.json?v=3');
    if (!r.ok) throw new Error('Photos JSON not found');
    photos = await r.json();
    console.log('Photos loaded:', photos.length);
  } catch(e) {
    console.error('Photo loading error:', e);
    photos = [];
  }

  visible = photos;
  render();

  try {
    const r = await fetch('./videos.json?v=3');
    const videos = await r.json();
    renderVideos(videos);
  } catch(e) {
    console.error('Video loading error:', e);
  }
}
  try{const r=await fetch('photos.json');photos=await r.json()}catch(e){photos=[]}
  visible=photos;render();
  try{const r=await fetch('videos.json');const videos=await r.json();renderVideos(videos)}catch(e){}
}
function render(){
  grid.innerHTML='';
  count.textContent=`${visible.length} PHOTO${visible.length===1?'':'S'}`;
  empty.style.display=visible.length?'none':'block';
  visible.forEach((p,i)=>{
    const b=document.createElement('button');b.className='photo-card';b.innerHTML=`<img loading="lazy" src="${safe(p.src)}" alt="${safe(p.title||'Farewell photograph')}"><span>${safe(p.title||p.category||'Farewell memory')}</span>`;
    b.addEventListener('click',()=>openLightbox(i));grid.appendChild(b);
  });
}
function safe(v){return String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('button[data-category]');if(!b)return;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));visible=b.dataset.category==='All'?photos:photos.filter(p=>p.category===b.dataset.category);render()});
function openLightbox(i){current=i;showLightbox();document.getElementById('lightbox').classList.add('open');document.getElementById('lightbox').setAttribute('aria-hidden','false')}
function showLightbox(){const p=visible[current];document.getElementById('lightbox-image').src=p.src;document.getElementById('lightbox-caption').textContent=p.title||p.category||''}
function move(n){if(!visible.length)return;current=(current+n+visible.length)%visible.length;showLightbox()}
document.getElementById('prev-photo').onclick=()=>move(-1);document.getElementById('next-photo').onclick=()=>move(1);
function closeBox(){document.getElementById('lightbox').classList.remove('open');document.getElementById('lightbox').setAttribute('aria-hidden','true')}
document.getElementById('close-lightbox').onclick=closeBox;
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
function renderVideos(videos){
  const box=document.getElementById('video-grid');
  const note=document.getElementById('video-empty');

  box.innerHTML='';
  note.style.display=videos.length?'none':'block';

  videos.forEach(v=>{
    const d=document.createElement('article');
    d.className='video-card';

    d.innerHTML=`
      <video controls playsinline preload="metadata" style="width:100%;border-radius:12px;">
        <source src="${safe(v.src)}" type="video/mp4">
        Your browser does not support video playback.
      </video>
      <h3>${safe(v.title)}</h3>
    `;

    box.appendChild(d);
  });
  }
