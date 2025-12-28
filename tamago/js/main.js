//アニメーション設定

//座り&お絵描き
function playLoopAnimation(selector,frames)
{const img=document.querySelector(selector);
if(!img)
{console.warn(selector+'が見つからない');
return;}
let currentFrame=0;
let direction=1;
function play()
{if(!frames[currentFrame])return;
img.src=frames[currentFrame].src;
setTimeout(()=>{if(currentFrame===frames.length-1)
{direction=-1;}
else if(currentFrame===0)
{direction=1}
currentFrame+=direction;
play();},
frames[currentFrame].duration);}
play();}

document.addEventListener('DOMContentLoaded',()=>{

//座りアニメーション
playLoopAnimation('.suwaru_t',
[{src:'img/sw_1.png',duration:800},
{src:'img/sw_2.png',duration:150},
{src:'img/sw_3.png',duration:150},
{src:'img/sw_4.png',duration:800},]);

//お絵描きアニメーション
playLoopAnimation('.oekaki_t',[
{src:'img/oe_1.png',duration:150},
{src:'img/oe_2.png',duration:150},
{src:'img/oe_3.png',duration:150},
{src:'img/oe_4.png',duration:150},
{src:'img/oe_5.png',duration:150},
{src:'img/oe_6.png',duration:150},]);

//本読みアニメーション
const honyomuImages
={1:'img/hp-1.png',
2:'img/hp-2.png',
3:'img/hp-3.png',
4:'img/hp-4.png',
5:'img/hp-5.png',
6:'img/hp-6.png',
7:'img/hp-7.png',};

const honyomuSequence
=[1,2,3,4,3,2,1,5,6,7,6,5]

function playSequenceAnimation(selector,images,sequence,duration=150)
{const img=document.querySelector(selector);
if(!img)return;
let index=0;
function play()
{img.src=images[sequence[index]];
setTimeout(()=>{index=(index+1)%sequence.length;
play();},duration);}
play();}
playSequenceAnimation('.honyomu_t',honyomuImages,honyomuSequence,150);

//ひょっこりアニメーション
const images
={1:'img/hk-1.png',
2:'img/hk-2.png',
3:'img/hk-3.png',
4:'img/hk-4.png',
5:'img/hk-5.png',
6:'img/hk-6.png',
7:'img/hk-7.png'};
const subImages
={6:'img/hkt-6.png',
7:'img/hkt-7.png'}

function playHyokkoriAnimation(mainSel,subSel,duration=150)
{const mainImg=document.querySelector(mainSel);
const subImg=document.querySelector(subSel);
if(!mainImg||!subImg) return;
const sequence
=[{main:1},
{main:2},
{main:3},
{main:4},
{main:5},
{main:6,sub:6},
{main:7,sub:7,stop:true}];

let index=0;
subImg.style.display='none';
function play(){const frame=sequence[index];
mainImg.src=images[frame.main];
if(frame.sub){subImg.src=subImages[frame.sub];
subImg.style.display='block';}
else{subImg.style.display='none';}
if(frame.stop)return;
setTimeout(()=>{index++;
play();},
duration);}
play(); }
playHyokkoriAnimation('.hyokkori_t','.hyokkori_p')
});

//ランダム表示設定
document.addEventListener('DOMContentLoaded',()=>
{const patterns=[{selector:'.nom_t',weight:5},
{selector:'.suwaru_t',weight:3},
{selector:'.oekaki_t',weight:3},
{selector:'.honyomu_t',weight:3},
{selector:'.huzai_t',weight:2},
{selector:'.hyokkori_tp',weight:1}];
patterns.forEach(p=>
{const el=document.querySelector(p.selector);
if(el)el.style.display='none';});
const weightedList=[];
patterns.forEach(p=>
{for(let i=0;
i<p.weight;i++)
{weightedList.push(p.selector);}});
const selected=weightedList[Math.floor(Math.random()*weightedList.length)];
const showEl=document.querySelector(selected);
if(showEl)showEl.style.display='block';});
