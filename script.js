document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const id=link.getAttribute('href');
    if(id && id!=="#"){
      const el=document.querySelector(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
    }
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:.08});

document.querySelectorAll(".skill-card,.project-card,.credential-card,.experience-card,.portrait-card").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
