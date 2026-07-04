
let step=0;
const btn=document.getElementById('btn');
btn.onclick=()=>{
step++;
if(step==1){btn.style.position='absolute';btn.style.left='70%';msg.innerText='Eits, belum bisa 🤭';}
else if(step==2){btn.style.left='20%';msg.innerText='Sebelum lanjut, nyalain musik dulu ya 🎵';document.getElementById('music').classList.remove('hidden');}
else if(step==3){btn.style.left='60%';msg.innerText='Hehehe sabar ya bestie 🤭';}
else{
document.getElementById('screen').classList.add('hidden');
document.getElementById('puzzle').classList.remove('hidden');
}
}
finishPuzzle.onclick=()=>{
document.getElementById('puzzle').classList.add('hidden');
document.getElementById('letter').classList.remove('hidden');
setTimeout(()=>{
document.getElementById('letter').classList.add('hidden');
document.getElementById('ending').classList.remove('hidden');
},8000);
}
for(let i=0;i<30;i++){
let p=document.createElement('div');
p.className='petal';p.innerHTML='🌸';
p.style.left=Math.random()*100+'vw';
p.style.animationDuration=(5+Math.random()*7)+'s';
document.body.appendChild(p);
}
