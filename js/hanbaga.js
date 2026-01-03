//ハンバーガーボタン
document.addEventListener('DOMContentLoaded',()=>
{const btn=document.querySelector('.hanbaga');
console.log('btn:',btn);
if(!btn){console.log('hanbaga 見つからない');
return;}
btn.addEventListener('click',()=>
{console.log('クリックされた');
btn.classList.toggle('active');
});});

const btn=document.querySelector('.hanbaga');
const menu=document.querySelector('.sp_menu');
btn.addEventListener('click',()=>
{btn.classList.toggle('active');
menu.classList.toggle('active');
});

btn.addEventListener('click',()=>
{btn.classList.toggle('active');
menubar.classList.toggle('active');});