const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        barObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.5});

  if(reduceMotion){
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    document.querySelectorAll('.lang-fill').forEach(el => el.classList.add('in-view'));
  } else {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.lang-fill').forEach(el => barObserver.observe(el));
  }
