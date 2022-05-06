

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
var mainNavLinks = document.querySelectorAll(".sidenav2 div a");
let mainSections = document.querySelectorAll("main section div");
    // console.log(mainNavLinks)
  let fromTop = window.scrollY;
//   console.log(fromTop);

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    // console.log(section)

    if (
      section.offsetTop <= (fromTop+(0.9*getViewport()[1])) &&
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

// window.onload = function(){
//   console.log('abcde');
//   // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
//   var tl = gsap.timeline();
//   tl.to('header h1',{duration: 1,opacity:1})
// };


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

 window.onload = ()=>{
  console.log('abcde');
  navbar();
  hover();
  // window.scrollTo(0, 0);
  // document.querySelector('.sec1').addEventListener('wheel', findScrollDirectionOtherBrowsers);
  var tl = gsap.timeline();
  tl.to('.part23',{duration: 1,y:'-100vh'})
  tl.to('.mega',{duration: 1,y:'-100vh'},'-=1')
  tl.to('header h1',{duration: 1,opacity:1},'-=1')
    .call(over)

};
var over = ()=>{
  document.querySelector('body').style.overflow = 'visible';
  // console.log(window.location.hostname)
  if(window.location.hostname){
    var a = window.location.pathname;
    var b = a.split('.')[0];
    var c = b.split('/')[1];
    var query = document.querySelectorAll('.sidenav2 div a')
    var query2 = document.querySelectorAll('#myDropdown ul li a');
    query.forEach(element => {
      // console.log(element)
      var d = element.getAttribute('key')
      // console.log(d)
      if(d === c) element.classList.add('current');
      else{
        switch(d){
          case 'film':element.addEventListener('click',()=>{
            trans('film','#FECC47')
          })
          break;
          case 'hh':element.addEventListener('click', () => {
            trans('hh', '#ffd600')
          })
          break;
          case 'ELS':element.addEventListener('click',()=>{
            trans('ELS','#B1FF3A')
          })
          break;
          case 'Dance':element.addEventListener('click',()=>{
            trans('Dance','#979DAD')
          })
          break;
          case 'music':element.addEventListener('click',()=>{
            trans('music','#73F6C4')
          })
          break;
          case 'DNA':element.addEventListener('click',()=>{
            trans('DNA','#F296BB')
          })
          break;
          case 'book':element.addEventListener('click',()=>{
            trans('book','#CB997E')
          })
          break;                              
          case 'quiz':element.addEventListener('click',()=>{
            trans('quiz','#7BC1FF')
          })
          break;
          case 'DebSoc':element.addEventListener('click',()=>{
            trans('DebSoc','#FFAEAD')
          })
          break;
          case 'sos':element.addEventListener('click',()=>{
            trans('sos','#FFD6BA')
          })
          break;
          case 'sfs':element.addEventListener('click',()=>{
            trans('sfs','#BDB2FF')
          })
          break;
          case 'photo':element.addEventListener('click',()=>{
            trans('photo','#A7D7CB')
          })
          break;
          case 'fac':element.addEventListener('click',()=>{
            trans('FAC','#FEF552')
          })
          break;
          case 'Dramatics':element.addEventListener('click',()=>{
            trans('Dramatics','#CF79FF')
          })
          break;
          case 'HSS':element.addEventListener('click',()=>{
            trans('HSS','#CF79FF')
          })
          break;
          case 'Anime':element.addEventListener('click',()=>{
            trans('Anime','#DAAB65')
          })
          break;

        }
      }
      
    });
    query2.forEach(element => {
      // console.log(element)
      var d = element.getAttribute('key')
      // console.log(d)
      // console.log(c)

      if(d === c) element.classList.add('current');
      else{
        switch(d){
          case 'film':element.addEventListener('click',()=>{
            trans('film','#FECC47')
          })
          break;
          case 'hh':element.addEventListener('click', () => {
            trans('hh', '#ffd600')
          })
          break;
          case 'ELS':element.addEventListener('click',()=>{
            trans('ELS','#B1FF3A')
          })
          break;
          case 'Dance':element.addEventListener('click',()=>{
            trans('Dance','#979DAD')
          })
          break;
          case 'music':element.addEventListener('click',()=>{
            trans('music','#73F6C4')
          })
          break;
          case 'DNA':element.addEventListener('click',()=>{
            trans('DNA','#F296BB')
          })
          break;
          case 'book':element.addEventListener('click',()=>{
            trans('book','#CB997E')
          })
          break;                              
          case 'quiz':element.addEventListener('click',()=>{
            trans('quiz','#7BC1FF')
          })
          break;
          case 'DebSoc':element.addEventListener('click',()=>{
            trans('DebSoc','#FFAEAD')
          })
          break;
          case 'sos':element.addEventListener('click',()=>{
            trans('sos','#FFD6BA')
          })
          break;
          case 'sfs':element.addEventListener('click',()=>{
            trans('sfs','#BDB2FF')
          })
          break;
          case 'photo':element.addEventListener('click',()=>{
            trans('photo','#A7D7CB')
          })
          break;
          case 'fac':element.addEventListener('click',()=>{
            trans('FAC','#FEF552')
          })
          break;
          case 'Dramatics':element.addEventListener('click',()=>{
            trans('Dramatics','#CF79FF')
          })
          break;
          case 'HSS':element.addEventListener('click',()=>{
            trans('HSS','#CF79FF')
          })
          break;
          case 'Anime':element.addEventListener('click',()=>{
            trans('Anime','#DAAB65')
          })
          break;

        }
      }
      
    });
    // console.log(b)
  }else{
    var a = window.location.pathname;
    var b = a.split('.')[0];
    var c = b.split('/')[7];
    // console.log(c)
    var query = document.querySelectorAll('.sidenav2 div a')
    var query2 = document.querySelectorAll('#myDropdown ul li a');
    query.forEach(element => {
      // console.log(element)
      var d = element.getAttribute('key')
      // console.log(d)
      if(d === c) element.classList.add('current');
      else{
        switch(d){
          case 'film':element.addEventListener('click',()=>{
            trans('film','#FECC47')
          })
          break;
          case 'hh':element.addEventListener('click', () => {
            trans('hh', '#ffd600')
          })
          break;
          case 'ELS':element.addEventListener('click',()=>{
            trans('ELS','#B1FF3A')
          })
          break;
          case 'Dance':element.addEventListener('click',()=>{
            trans('Dance','#979DAD')
          })
          break;
          case 'music':element.addEventListener('click',()=>{
            trans('music','#73F6C4')
          })
          break;
          case 'DNA':element.addEventListener('click',()=>{
            trans('DNA','#F296BB')
          })
          break;
          case 'book':element.addEventListener('click',()=>{
            trans('book','#CB997E')
          })
          break;                              
          case 'quiz':element.addEventListener('click',()=>{
            trans('quiz','#7BC1FF')
          })
          break;
          case 'DebSoc':element.addEventListener('click',()=>{
            trans('DebSoc','#FFAEAD')
          })
          break;
          case 'sos':element.addEventListener('click',()=>{
            trans('sos','#FFD6BA')
          })
          break;
          case 'sfs':element.addEventListener('click',()=>{
            trans('sfs','#BDB2FF')
          })
          break;
          case 'photo':element.addEventListener('click',()=>{
            trans('photo','#A7D7CB')
          })
          break;
          case 'fac':element.addEventListener('click',()=>{
            trans('FAC','#FEF552')
          })
          break;
          case 'Dramatics':element.addEventListener('click',()=>{
            trans('Dramatics','#CF79FF')
          })
          break;
          case 'HSS':element.addEventListener('click',()=>{
            trans('HSS','#CF79FF')
          })
          break;
          case 'Anime':element.addEventListener('click',()=>{
            trans('Anime','#DAAB65')
          })
          break;

        }
      }
      
    });
    query2.forEach(element => {
      // console.log(element)
      var d = element.getAttribute('key')
      console.log(d)
      console.log(c)

      if(d === c) element.classList.add('current');
      else{
        switch(d){
          case 'film':element.addEventListener('click',()=>{
            trans('film','#FECC47')
          })
          break;
          case 'hh':element.addEventListener('click', () => {
            trans('hh', '#ffd600')
          })
          break;
          case 'ELS':element.addEventListener('click',()=>{
            trans('ELS','#B1FF3A')
          })
          break;
          case 'Dance':element.addEventListener('click',()=>{
            trans('Dance','#979DAD')
          })
          break;
          case 'music':element.addEventListener('click',()=>{
            trans('music','#73F6C4')
          })
          break;
          case 'DNA':element.addEventListener('click',()=>{
            trans('DNA','#F296BB')
          })
          break;
          case 'book':element.addEventListener('click',()=>{
            trans('book','#CB997E')
          })
          break;                              
          case 'quiz':element.addEventListener('click',()=>{
            trans('quiz','#7BC1FF')
          })
          break;
          case 'DebSoc':element.addEventListener('click',()=>{
            trans('DebSoc','#FFAEAD')
          })
          break;
          case 'sos':element.addEventListener('click',()=>{
            trans('sos','#FFD6BA')
          })
          break;
          case 'sfs':element.addEventListener('click',()=>{
            trans('sfs','#BDB2FF')
          })
          break;
          case 'photo':element.addEventListener('click',()=>{
            trans('photo','#A7D7CB')
          })
          break;
          case 'fac':element.addEventListener('click',()=>{
            trans('FAC','#FEF552')
          })
          break;
          case 'Dramatics':element.addEventListener('click',()=>{
            trans('Dramatics','#CF79FF')
          })
          break;
          case 'HSS':element.addEventListener('click',()=>{
            trans('HSS','#CF79FF')
          })
          break;
          case 'Anime':element.addEventListener('click',()=>{
            trans('Anime','#DAAB65')
          })
          break;

        }
      }
      
    });
  }


}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  var a = document.querySelector('main');
  a.addEventListener('click',closeNav)
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  var a = document.querySelector('main');
  a.removeEventListener('click',closeNav)
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
var check = 0;
var ah= 0;

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