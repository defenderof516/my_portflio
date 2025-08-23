
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // close nav on link click (mobile)
  document.querySelectorAll('#nav a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); });
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var id = this.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
