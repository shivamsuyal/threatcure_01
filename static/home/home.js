(function () {
  const cursor = document.getElementById('cursor');
  const circle = document.getElementById('cur-circle');
  const links = document.querySelectorAll('.liquid');
  const editPosCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
  }
  const animateit = function(e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
      
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      circle.classList.add('hover');
      if (e.type === 'mouseleave') {
          circle.classList.remove('hover');
          span.style.transform = '';
      }
  }
  window.addEventListener('mousemove', editPosCursor);
  links.forEach(link => link.addEventListener('mousemove', animateit));
  links.forEach(link => link.addEventListener('mouseleave', animateit));
})();

document.addEventListener("mousedown",()=>{
  cursor.style.backgroundColor="red"
})
document.addEventListener("mouseup",()=>{
  cursor.style.backgroundColor="white"
})



// Navbar
var big_circle_top=$("#big_circle").offset().top-20;

$(document).scroll(function(){
  if($(this).scrollTop() > big_circle_top){   
        $('#navbar').css({"background":"#192024"});
    } else {
        $('#navbar').css({"background":"none"});
    }
})

// lightslider
$('#lightslider').lightSlider({
  controls: false,
  // mode:'fade',
  item: 5,
  loop: true,
  pager: false,
  auto:true,
  speed:1000,
  slideMargin:10,
  pause:3500,
  // pauseOnHover:true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        item: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        item: 2
      }
    }
  ]
});

//  THIS IS FOR SHOWING POPUP MENU
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("list-icon");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// THIS FOR DARK/LIGHT MODE BUTTON
  function chgmode(){
    sun=document.querySelector('.sun')
    moon=document.getElementsByClassName('moon')
    mode=document.getElementById('mode')
    
    if (getComputedStyle(sun)['visibility'] =="visible"){
      sun.style="visibility:hidden;transform: translateY(2rem);"
      moon[0].style="visibility:visible;transform: translateY(0);"
      mode.style="background-color:#8B86D3";
      // moon[1].style="visibility:visible;transform: translateY(0);"
    }else{
      sun.style="visibility:visible;transform: translateY(0rem);"
      moon[0].style="visibility:hidden;transform: translateY(-2rem);"
      mode.style="background-color:#0584C3";
      // moon[1].style="visibility:hidden;transform: translateY(-2rem);"
    }
  }

//  LOGO
const navLogo= document.getElementById("logo");
const logo = document.getElementById('text-anim');
const options1={
  rootMargin:"-12% 0px 0px 0px"
}
const callback1_logo= function(entries){
  // console.log(entries[0])
  if(entries[0].isIntersecting){
    // navLogo.style.visibility="hidden"
    navLogo.style.transition="opacity 100ms ease-out"
    navLogo.style.opacity="0"
    navLogo.style.transition="opacity 500ms ease-out"
    // logo.style.visibility="visible"
  }else{
    // navLogo.style.visibility="visible"
    navLogo.style.opacity="1"
    // logo.style.visibility="hidden"
  }
}
var observer1 = new IntersectionObserver(callback1_logo, options1);
observer1.observe(logo)


// circle and text animation

  const circle = document.getElementById('circle');
  const text = document.getElementById('text');
  // let inc=0;

  const options2={
    rootMargin:"0px 0px -8% 0px"
  }
  const options3={
    rootMargin:"0px 0px -30% 0px"
  }

  const callback2_circle=function(entries){
    // console.log(entries[0])  
    if(entries[0].isIntersecting){
      circle.style.width="150vw"
      circle.style.height="100%"
      text.style.visibility="hidden"
      circle.style.borderBottomLeftRadius="0px";
      circle.style.borderBottomRightRadius="0px";
      text.style.transition="none" //text bug check
      text.style.opacity="0" //text bug check
    }
    else{
      if(entries[0].boundingClientRect.bottom > 0){
        circle.style.width="25vw"
        circle.style.height="25vw"
        circle.style.borderBottomLeftRadius="50%";
        circle.style.borderBottomRightRadius="50%";
        text.style.transition="none" //text bug check
        text.style.visibility="hidden" //text bug check
        text.style.opacity="0" //text bug check
        text.style.transform="translateY(0px)" //text bug check
        text.style.transition="all 2s ease-out" //text bug check
      }
    }
  }

  const callback3_text=function(entries){
    // console.log(entries[0])
    if(entries[0].isIntersecting){
      text.style.transition="all 2s ease-out"
      text.style.visibility="visible"
      text.style.opacity="1"
      text.style.transform="translateY(-20px)"
    }
  }


  var observer2= new IntersectionObserver(callback2_circle,options2);
  observer2.observe(circle)

  var observer3= new IntersectionObserver(callback3_text,options3);
  observer3.observe(text)



  const servicetext=document.getElementById("up1")
  const customertext=document.getElementById("customers")
  const about1=document.getElementById("about1")
  
const options4={
  rootMargin:"10% 0px -10% 0px"
}
const callback4_up = function (entries){
  // console.log(entries[0])
  if(entries[0].isIntersecting){
    entries[0].target.style.opacity="1"
    entries[0].target.style.transform="translateY(0px)"
  }else{
    entries[0].target.style.opacity="0"
    entries[0].target.style.transform="translateY(20px)"
  }
}
  var observer4= new IntersectionObserver(callback4_up,options4);
  observer4.observe(servicetext)
  observer4.observe(customertext)
  observer4.observe(about1)



const about2=document.getElementById("about2")
const about3=document.getElementById("about3")
const options5={
  rootMargin:"0px 0px -5% 0px"
}
const callback5_about=function (entries){
  // console.log("hello")
  if(entries[0].isIntersecting){
    about2.style.height="fit-content"
    about2.style.height="-moz-fit-content"
    about2.style.padding="2rem 0px 2rem 0px"
    about3.style.height="fit-content"
    about3.style.height="-moz-fit-content"
    about3.style.padding="2rem 0px 2rem 0px"
    if(about1.style.opacity==""){
      about1.style.opacity="1"
      about1.style.transform="translateY(0px)"
    }
  }else{
    if(entries[0].boundingClientRect.bottom > 0){
      about2.style.height="";
      about3.style.height="";
      about2.style.padding="";
      about3.style.padding="";
    }
  }
}
var observer5= new IntersectionObserver(callback5_about,options5)
// observer5.observe(about2)

// new observer
var service_img=document.getElementById("service_img")
const options6={
  rootMargin:"0px 0px -10% 0px"
}
const callback6_service_img=function (entries){
  // console.log(entries[0])
  if(entries[0].isIntersecting){
    entries[0].target.style.transition="all 1s ease-out"
    entries[0].target.style.opacity=1;
    if(document.documentElement.clientWidth > 500){
      entries[0].target.style.transform="translate(-100%,0)"
      entries[0].target.style.animation="service_img_ani_desktop 800ms  infinite alternate"
    }else{
      entries[0].target.style.transform="translate(0,0)"
      entries[0].target.style.animation="service_img_ani_mobile 800ms  infinite alternate"
    }
    
  }else{
    entries[0].target.style.transition="none"
    entries[0].target.style.opacity=0;
    
    if(document.documentElement.clientWidth > 500){
      entries[0].target.style.transform="translate(-150%,0)"
    }else{
      entries[0].target.style.transform="translate(-50%,0)"
    }
    // entries[0].target.style.animation="none"
  }
}
var observer6= new IntersectionObserver(callback6_service_img,options6)
observer6.observe(service_img)

// new obeserver
var c_map=document.getElementById("c_map")
const options7={
  threshold:0.3
}

const callback7_c_map= function(entries){
  // alert("f")
  if(entries[0].isIntersecting){
    entries[0].target.style.transition="all 2500ms ease-out"
    entries[0].target.style.opacity=1;
  }else{
    entries[0].target.style.opacity=0;
  }
}

var observer7= new IntersectionObserver(callback7_c_map,options7)
observer7.observe(c_map)

function inc_after(elem){
  // window.getComputedStyle(elem,':after')['width']="100%"
}



