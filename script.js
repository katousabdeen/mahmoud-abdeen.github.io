
function handleContact(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Opening your email app...';
  const form = e.target;
  const name = form[0].value;
  const email = form[1].value;
  const body = form[2].value;
  const mailto = `mailto:katousabdeen@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  setTimeout(()=> msg.textContent='If email app did not open, please email katousabdeen@gmail.com directly', 1200);
  return false;
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const id = this.getAttribute('href');
    if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
  })
})

function handlePhoneClick(){
  document.getElementById('phoneModal').classList.add('active');
}
function closePhoneModal(){
  document.getElementById('phoneModal').classList.remove('active');
}
function closePhoneModalAndScroll(){
  closePhoneModal();
  document.querySelector('#contact .contact-form')?.scrollIntoView({behavior:'smooth'});
  document.querySelector('#contact .contact-form input')?.focus();
}
document.getElementById('phoneModal')?.addEventListener('click', function(e){
  if(e.target===this) closePhoneModal();
});
