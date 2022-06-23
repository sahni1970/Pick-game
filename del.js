const model=document.querySelector(".model");
const btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{
    model.classList.toggle('open');
    document.querySelector(".backdrop").classList.toggle('backdrope');
    // document.body.style.opacity='.5';
});
