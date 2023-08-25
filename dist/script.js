const radius = 200,
      invert = 1.5, // 0.5 - 2.5 for best results
      max = 15;

let n = 10;

function setPts(){  
  let pts = [];
  
  ( n > max ) ? n=8 : n+=2;
  
  for (let i = 0; i < n+1; i++){
    const angle = (i/n * Math.PI *2)- Math.PI/2;
    const x = Math.cos(angle)*(radius/(invert+i%2));
    const y = Math.sin(angle)*(radius/(invert+i%2));
    pts.push( x + ',' + y + ' ');
  }

  gsap.set('.p', {x:250, y:250, attr:{points:pts}});
}

window.onclick = window.onload = setPts;

gsap.set('.p', {
  scale:(i)=>1.5-i*0.3,
  fill:(i)=>(i%2==0)?'#fff':'#000'
})

gsap.timeline({defaults:{rotation:180, ease:'power3.inOut'}, repeat:-1})
    .to('.p5', {duration:2.5}, 0)
    .to('.p4', {duration:2.4}, 0)
    .to('.p3', {duration:2.3}, 0)
    .to('.p2', {duration:2.2}, 0)
    .to('.p1', {duration:2.1}, 0)
    .to('.p5', {duration:2.5, rotation:0}, 2.5)
    .to('.p4', {duration:2.4, rotation:0}, 2.5)
    .to('.p3', {duration:2.3, rotation:0}, 2.5)
    .to('.p2', {duration:2.2, rotation:0}, 2.5)
    .to('.p1', {duration:2.1, rotation:0}, 2.5)