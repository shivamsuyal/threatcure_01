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
  let inc=0;

  const options2={
    rootMargin:"0px 0px -8% 0px"
  }
  const options3={
    rootMargin:"0px 0px -40% 0px"
  }

  const callback2_circle=function(entries){
    // console.log(entries[0])  
    if(entries[0].isIntersecting){
      circle.style.width="150vw"
      circle.style.height="100%"
      text.style.visibility="hidden"
      circle.style.borderBottomLeftRadius="0px";
      circle.style.borderBottomRightRadius="0px";
      text.style.transition="none"
      text.style.opacity="0"
    }
    else{
      if(entries[0].boundingClientRect.bottom > 0){
        circle.style.width="25vw"
        circle.style.height="25vw"
        circle.style.borderBottomLeftRadius="50%";
        circle.style.borderBottomRightRadius="50%";
        text.style.transition="none"
        text.style.opacity="0"
        // text.style.transition="all 2s ease-out"
      }
    }
  }

  const callback3_text=function(entries){
    // console.log(entries[0])
    if(entries[0].isIntersecting){
      text.style.transition="opacity 2s ease-out"
      text.style.visibility="visible"
      text.style.opacity="1"
    }else{
      if(entries[0].boundingClientRect.bottom > 0){
        text.style.opacity="0"
      }
    }
  }


  var observer2= new IntersectionObserver(callback2_circle,options2);
  observer2.observe(circle)

  var observer3= new IntersectionObserver(callback3_text,options3);
  observer3.observe(text)




