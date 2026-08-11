const toggle=document.getElementById("mobileToggle"),sidebar=document.getElementById("sidebar");
toggle.addEventListener("click",()=>sidebar.classList.toggle("open"));
document.querySelectorAll(".sidebar nav a").forEach(a=>a.addEventListener("click",()=>sidebar.classList.remove("open")));
const links=[...document.querySelectorAll(".sidebar nav a")], sections=[...document.querySelectorAll("section[id]")];
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+e.target.id))}}),{threshold:.3});
sections.forEach(s=>obs.observe(s));
