
function eventfun(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=3;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(event1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
    var a=3;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(event1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }

}
function event1(a){
    window.location = "./events.html"
    
}

function club(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=4;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(club1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
    var a=4;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(club1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }

}
function club1(a){
  window.location = "./club.html"
}



function page(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=2;
    console.log('aaa');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(page1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
    var a=2;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(page1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }

}
function page1(a){
window.location = "./about.html"
}

function up(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=5;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(up1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
    var a=5;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(up1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }

}
function up1(a){
  window.location = "./UpEvents.html"
}


function serv(){
  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches){
    var a=6;
    console.log('mobile');
    var pos = window.pageYOffset ||  document.documentElement.scrollTop;
    var final = pos + getViewport()[1];
    // console.log(final)
    // console.log(pos)
    document.querySelector('body').style.height = "100vh";
    document.querySelector('body').style.overflow = "hidden";
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "bottom"});
    // tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,opacity:'0' });
    tl.set(`.part${a}3`, { transformOrigin: "bottom",y:final,display:'block'});
    tl.to(`.part${a}3`,{duration:0.8,y:pos})
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'})
    .call(serv1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }else{
    var a=6;
    console.log('aaa');
    var tl = gsap.timeline();
    tl.set(`.part${a}3`, { transformOrigin: "left"});
    tl.to(`.sidenav`, {duration:0.2, opacity:'0' });
    tl.to(`.part${a}1`, { duration: .5,y:'-30px',opacity:'0' });
    tl.to(`.part${a}3`, { duration: .01,display: 'initial' },"-=0.3");
    tl.from(`.part${a}3`,{duration: .5,x:'100%'},"-=0.31")
    tl.to(`.img${a}`, { duration: .3,opacity: '0' });
    tl.to(`.sec${a}`,{duration: .01,display:'none'},"-=0.2")
    .call(serv1,[a]);
    // tl.to(`.part${a}3`,{duration: .5,x:'-100%'},"-=0.2")
  }

}
function serv1(a){
  window.location = "./services.html"
}

window.addEventListener("scroll", event => {
  // var mainNavLinks = document.querySelectorAll(".sidenav2 div a");
  let mainSections = document.querySelectorAll(".parallax");
      // console.log(mainNavLinks)
    let fromTop = window.scrollY;
  //   console.log(fromTop);
  
  mainSections.forEach((link,i) => {
    // console.log(link)
      let section = link
      // console.log(section)
  
      if (
        section.offsetTop <= (fromTop+(0.9*getViewport()[1])) &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        // link.classList.add("current");
        var tl = gsap.timeline();
                // console.log(entry)
                tl.set(section,{opacity:1})
                tl.to(`.part${i+2}2`,{duration: 0.2,opacity:1})
                tl.to(`.head${i+2}`,{duration: 0.2,opacity:1,y:-10},'-=0.2')
                tl.to(`.content${i+2}`,{duration: 0.2,opacity:1,y:-10})
                tl.to(`.view${i+2}`,{duration: 0.2,opacity:1},'-=0.2')
                tl.to(`.img${i+2}`,{duration: 0.4,opacity:1,scale: '0.8',x:"10px"})



  
      }
    });    
  });

const navbar = ()=>{
  var items = document.querySelectorAll('.menu div div ul li')
  items[0].addEventListener('mouseover',()=>{imgtrans(1)})
  items[1].addEventListener('mouseover',()=>{imgtrans(2)})
  items[2].addEventListener('mouseover',()=>{imgtrans(3)})
  items[3].addEventListener('mouseover',()=>{imgtrans(4)})
  items[4].addEventListener('mouseover',()=>{imgtrans(5)})
  items[5].addEventListener('mouseover',()=>{imgtrans(6)})

  // items.forEach((element,index)=>{
  //   element.addEventListener('mouseover',imgtrans)
  // })
}
var active = 1;
var tra = 0;
var check = 0;
var ah= 0;
// var b = 0;
var imgtrans = (a)=>{
  var color = [];
  color[1] = '#fff';
  color[2] = '#e65f5c';
  color[3] = '#84dcc6';
  color[4] = '#91a7ee';
  color[5] = '#ff8c42';
  color[6] = '#faf6da'; 

  if(a!=active && tra === 0){
    console.log(a)
    var b=active;
    active = a;
    tra=1;
    var tl = gsap.timeline();
    tl.set(`.navt${a}`,{backgroundSize: '100%'})
    tl.set(`.navt${b}`,{backgroundSize: '0%'})
    tl.to(`.navimg${b}`,{duration:0.2,opacity:0,y:-150})
    tl.to(`.menu`,{duration:0.2,background:(color[a])})
    tl.fromTo(`.navimg${a}`,{opacity:0,y:150},{opacity:1,y:0,duration:0.2})
      .call(after,[a])

  }else{
    check = 1;
    ah=a;
  }

}

var after = (a)=>{
  tra=0;
  if(check === 1){
    // console.log('qqq')
    check =0;
    imgtrans(ah)
  }
}

var tra2 = 0;
var logobounce = (x1,y1)=>{
const tl2 = gsap.timeline();
  if(tra2 ==0){
    tra2 = 1;
    var x2 = x1-xpos;
    var y2 = y1 -ypos;
    // console.log(x2)
    // console.log(y2)
    var rat = y2/x2;
    var xmov = x2;
    var ymov = y2;
    tl2.to(`.img1`,{duration:0.6,y:ymov,x:xmov})
    tl2.to(`.img1`,{duration:0.6,y:0,x:0})
      .call(after1,[])
  }else{
    // console.log('here')
    // console.log(tl2.progress())
    tra2 = 0
  }

}

const after1 = ()=>{
  tra2=0;
}


var xpos = 0;
var ypos = 0;

var xx = (e)=>{
  xpos = e.clientX;
  ypos = e.clientY;
}