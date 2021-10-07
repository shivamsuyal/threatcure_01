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

// new 2

function chgmode(evt){
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


