// African Genius Academy - Website JavaScript
// Al-Falah International School, Ile-Ife

// Drawer
function openDrawer(){document.getElementById('drawer').classList.add('open');document.body.style.overflow='hidden'}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.body.style.overflow=''}

// Navbar scroll
window.addEventListener('scroll',function(){
  var n=document.getElementById('navbar');
  var bt=document.getElementById('back-top');
  if(window.scrollY>80){
    n.style.boxShadow='0 4px 28px rgba(26,107,60,.15)';
    bt.classList.add('show');
  }else{
    n.style.boxShadow='0 2px 20px rgba(26,107,60,.1)';
    bt.classList.remove('show');
  }
});

// Lightbox
function openLightbox(src){
  document.getElementById('lightbox-img').src=src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightbox-img').src='';
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLightbox()});

// Form submit
document.getElementById('enquiryForm').addEventListener('submit',function(e){
  e.preventDefault();
  var inputs=this.querySelectorAll('[required]');
  var valid=true;
  inputs.forEach(function(i){if(!i.value.trim()){i.style.borderColor='#e74c3c';valid=false;}else{i.style.borderColor='';}  });
  if(valid){
    this.style.display='none';
    document.getElementById('successMsg').style.display='block';
  }
});

// Scroll reveal
var revealObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target)}
  })
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(function(el){revealObs.observe(el)});

// Active nav link highlight
var sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',function(){
  var scrollY=window.scrollY+100;
  sections.forEach(function(s){
    var top=s.offsetTop;var h=s.offsetHeight;var id=s.getAttribute('id');
    var link=document.querySelector('.nav-links a[href="#'+id+'"]');
    if(link){
      if(scrollY>=top&&scrollY<top+h){link.style.background='var(--green-light)';link.style.color='var(--green)';}
      else{link.style.background='';link.style.color='';}
    }
  })
});