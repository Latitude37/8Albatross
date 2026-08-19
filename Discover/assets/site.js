
const header=document.querySelector('#header');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.13,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal,.reveal-media').forEach(el=>observer.observe(el));
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>window.innerHeight*.78);
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
const modal=document.querySelector('#plan-modal'),modalImage=document.querySelector('#modal-image'),modalTitle=document.querySelector('#modal-title');
document.querySelectorAll('.plan-button').forEach(button=>button.addEventListener('click',()=>{modalImage.src=button.dataset.plan;modalImage.alt=button.dataset.title;modalTitle.textContent=button.dataset.title;modal.showModal()}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
