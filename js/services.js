const { response } = require("express");

function openform() {
    document.getElementById("mySidenav2").style.width = "100vw";
    // var a = document.querySelector('main');
    // a.addEventListener('click',closeNav)
  }
  
  function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    // var a = document.querySelector('main');
    // a.removeEventListener('click',closeNav)
  }


  function openform2() {
    document.getElementById("mySidenav3").style.width = "100vw";
    // var a = document.querySelector('main');
    // a.addEventListener('click',closeNav)
  }
  
  function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
    var a = document.querySelector('main');
    a.removeEventListener('click',closeNav)
  }
// var equip = document.getElementById('equip')
//  var equi.onsubmit=(e)=>{
//   console.log('aa')
//   e.preventDefault();

//   console.log(new FormData(equip))
// }


function form(e){
  e.preventDefault();
  var elements = document.getElementById("equip").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }

  var item1 = elements.item(5);
  var item2 = elements.item(6);
  if(item2.value > item1.value){
    document.querySelector('.equipman').style.display = 'none';
    document.querySelector('.loader-wrapper').style.display='block';
    document.querySelector('.loader-wrapper').style.top='100vh';
    document.querySelector('body').style.height='100vh';
    document.querySelector('body').style.overflow='hidden';
    axios.post('https://mncweb.herokuapp.com/equipment',obj)
      .then((res)=>{
        document.querySelector('.loader-wrapper').style.display='none';
        document.querySelector('.equipwarn').style.display = 'none';
        document.querySelector('.loader-wrapper').style.top='0';
        document.querySelector('body').style.height='auto';
        document.querySelector('body').style.overflow='visible';
        closeNav2();
        document.querySelector('.sucess').style.display='block';
        setTimeout(() => {
        document.querySelector('.sucess').style.display='none';
        }, 3000);
      })
      .catch(()=>{
          document.querySelector('.equipwarn').style.display = 'block';
          document.querySelector('.equipwarn').style.display = 'none';
          document.querySelector('.loader-wrapper').style.top='0';
          document.querySelector('body').style.height='auto';
          document.querySelector('body').style.overflow='visible';

      })
  }else{
    document.querySelector('.equipman').style.display = 'block';
    document.querySelector('.equipwarn').style.display = 'none';
  } 
  // console.log(obj)

}


function form2(e){
  e.preventDefault();
  var elements = document.getElementById("equip2").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }
  var pos = window.pageYOffset ||  document.documentElement.scrollTop;
  console.log(pos)
    document.querySelector('.equipman').style.display = 'none';
    document.querySelector('.loader-wrapper').style.display='block';
    document.querySelector('.loader-wrapper').style.top= pos + 'px';
    document.querySelector('body').style.height='100vh';
    document.querySelector('body').style.overflow='hidden';
    axios.post('https://mncweb.herokuapp.com/movie',obj)
      .then((res)=>{
        document.querySelector('.loader-wrapper').style.display='none';
        document.querySelector('.equipwarn').style.display = 'none';
        document.querySelector('.loader-wrapper').style.top='0';
        document.querySelector('body').style.height='auto';
        document.querySelector('body').style.overflow='visible';
        closeNav3();
        document.querySelector('.sucess').style.display='block';
        setTimeout(() => {
        document.querySelector('.sucess').style.display='none';
        }, 3000);
      })
      .catch(()=>{
          document.querySelector('.equipwarn').style.display = 'block';
          document.querySelector('.equipwarn').style.display = 'none';
          document.querySelector('.loader-wrapper').style.top='0';
          document.querySelector('body').style.height='auto';
          document.querySelector('body').style.overflow='visible';

      })
  // console.log(obj)

}


