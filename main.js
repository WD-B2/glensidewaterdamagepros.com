(function(){
  document.documentElement.className+=' js';
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  function open(){d.classList.add('open');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');d.setAttribute('aria-hidden','false');document.documentElement.style.overflow='hidden';}
  function close(){d.classList.remove('open');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');d.setAttribute('aria-hidden','true');document.documentElement.style.overflow='';}
  if(t&&d&&o){
    t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?close():open();});
    if(c)c.addEventListener('click',close);
    o.addEventListener('click',close);
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
    window.addEventListener('resize',function(){if(window.innerWidth>900)close();});
  }
  document.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var it=b.parentNode,isOpen=it.classList.toggle('open');
      b.setAttribute('aria-expanded',isOpen?'true':'false');
    });
  });
})();
