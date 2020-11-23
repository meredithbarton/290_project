//-------SLideshow script-------//
var slideIndex = 1;
//start slider on load
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3500);
})

// Next/previous controls
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1);
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3500);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3500);
  }
}

// Thumbnail image controls
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3500);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //edge cases
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  //no image but the current should be showing
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //no dot but the current should be showing
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//-------POST Request Script-------//
var postForm = document.getElementById("form");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = new FormData(postForm);
  var req = new XMLHttpRequest();
  req.open("POST", "http://httpbin.org/post", false);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(formData));
  var post_response = JSON.parse(req.responseText);
});


postForm.addEventListener('formdata', (e) => {
  console.log("fired");
  let data = e.formData;
  /*
  for (var value of data.values()) {
    var post_data = document.createTextNode(`${value}`);
    document.getElementById("post_output").appendChild(post_data);
  }
  */
  document.getElementById("Submit").style.display = "none";
  var thanks = document.createTextNode("Thank you! We'll get back to you as soon as possible!");
  document.getElementById("confirm").appendChild(thanks);
  document.getElementById("contact").style.paddingBottom = "15px"
});
