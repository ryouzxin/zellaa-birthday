
const text=`Nggak kerasa amzay sudah 3 tahun kita bersama.
Jujur aku agak bingung mau ngetik apa, tapi aku Ica yang kiyowo berharap semoga kamu dijauhkan dari hal buruk, dilancarkan rezekinya, disehatkan jasmaninya dan menjadi anak baiq kayak aku ❤

Semoga dilancarkan jodohnya sama Ederik dan Immo 🤭💕

Happy Birthday Zella 🌸✨`;

function openLetter(){
 document.getElementById('cover').style.display='none';
 document.getElementById('letter').classList.remove('hidden');
 let i=0;
 const box=document.getElementById('typing');
 const timer=setInterval(()=>{
   box.innerHTML += text.charAt(i).replace('\n','<br>');
   i++;
   if(i>=text.length) clearInterval(timer);
 },35);
}

for(let i=0;i<35;i++){
 const p=document.createElement('div');
 p.className='petal';
 p.innerHTML='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(5+Math.random()*10)+'s';
 document.body.appendChild(p);
}
