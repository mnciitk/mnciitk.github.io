

let lastId;
let cur = [];

// var film = '#e6837e',
//     photo = '#aaaaaa';

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
    var mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
    // console.log(mainNavLinks)
  let fromTop = window.scrollY;
//   console.log(fromTop);

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    // console.log(section)

    if (
      section.offsetTop/1.10 <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
      var tl = gsap.timeline();
              // console.log(entry)
              tl.to(section,{duration: 2,opacity:1,y:-30})

    } else {
      link.classList.remove("current");
    }
  });


  
});

window.onload = function(){
  console.log('abcde');
  navbar();
  hover();
  // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
  var tl = gsap.timeline();
  tl.to('header h1',{duration: 1,opacity:1})
};

function trans(a,b){
  console.log('trans')
  document.querySelector('.part23').style.backgroundColor = b;
  var pos = window.pageYOffset ||  document.documentElement.scrollTop;
  var final = pos + getViewport()[1];
  // console.log(pos);
  // console.log(final)
  document.querySelector('body').style.height = "100vh";
  document.querySelector('body').style.overflow = "hidden";
  var tl = gsap.timeline();
  tl.set('.part23',{display:'grid'});
  tl.set(`.part23`, { transformOrigin: "bottom",y:final});
  tl.to('.part23',{duration:0.8,y:pos})
  .call(trans1,[a])
}
function trans1(a){
  window.location = `./${a}.html`
}


function getViewport() {

  var viewPortWidth;
  var viewPortHeight;
 
  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth,
    viewPortHeight = window.innerHeight
  }
 
 // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (typeof document.documentElement != 'undefined'
  && typeof document.documentElement.clientWidth !=
  'undefined' && document.documentElement.clientWidth != 0) {
     viewPortWidth = document.documentElement.clientWidth,
     viewPortHeight = document.documentElement.clientHeight
  }
 
  // older versions of IE
  else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  }
  return [viewPortWidth, viewPortHeight];
 }

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

  }

}

var after = (a)=>{
  tra=0;
}