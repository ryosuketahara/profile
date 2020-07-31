'use script'
{

  const katudou = document.getElementById('katudou');
  const zisseki = document.getElementById('zisseki');
  const close = document.getElementById('close');
  const close2 = document.getElementById('close2');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const modal2 = document.getElementById('modal2');

  // 活動
  katudou.addEventListener('click',() =>{
    modal.classList.remove('hid');
    mask.classList.remove('hid');
  });
  // 活動

  // 実績
  zisseki.addEventListener('click',() =>{
    modal2.classList.remove('hid');
    mask.classList.remove('hid');
  });
  // 実績

  close.addEventListener('click',() =>{
    modal.classList.add('hid');
    mask.classList.add('hid');
  });

  close2.addEventListener('click',() =>{
    modal2.classList.add('hid');
    mask.classList.add('hid');
  });
  
  mask.addEventListener('click',() =>{
    modal.classList.add('hid');
    mask.classList.add('hid');
  });
  
  mask.addEventListener('click',() =>{
    modal2.classList.add('hid');
    mask.classList.add('hid');
  });












}









































































