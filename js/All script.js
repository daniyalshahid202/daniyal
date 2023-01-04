

		//For scroll to top//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

if (document.documentElement.scrollTop > 20) {
	document.getElementById("myBtn").style.display = "block";}
  
else {
    document.getElementById("myBtn").style.display = "none";
   }}
   
function topFunction() {
  	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	}





			// <!-- For 3-11 -->

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}

			// <!--For 12 +-->
				
function up1(max) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) + 1;
    if (document.getElementById("myNumber1").value >= parseInt(max)) {
        document.getElementById("myNumber1").value = max;
    }
}
function down1(min) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) - 1;
    if (document.getElementById("myNumber1").value <= parseInt(min)) {
        document.getElementById("myNumber1").value = min;
    }
}
	


			//Sign in//


$(document).ready(function(){
  $("#myBtn5").click(function(){
    $("#myModal").modal();
  });
});


//Sign up
$(document).ready(function(){
  $("#myBtn6").click(function(){
    $("#modal-signup").modal();
  });
});

// Sign in > Sign up

$(document).ready(function(){
    $("#myBtn7").click(function(){
      $("#modal-signup").modal();
    });
  });


			//Video

function evideo1(){
var video1 = document.getElementById('video1')
video1.addEventListener('mouseover', function evideo() { video1.play() });
video1.addEventListener('mouseout', function evideo() { video1.pause() });
}

function evideo2(){
var video2 = document.getElementById('video2')
video2.addEventListener('mouseover', function evideo() { video2.play() });
video2.addEventListener('mouseout', function evideo() { video2.pause() });
}

function evideo3(){
var video3 = document.getElementById('video3')
video3.addEventListener('mouseover', function evideo() { video3.play() });
video3.addEventListener('mouseout', function evideo() { video3.pause() });
}

function evideo4(){
var video1 = document.getElementById('video4')
video4.addEventListener('mouseover', function evideo() { video4.play() });
video4.addEventListener('mouseout', function evideo() { video4.pause() });
}

function evideo5(){
var video5 = document.getElementById('video5')
video5.addEventListener('mouseover', function evideo() { video5.play() });
video5.addEventListener('mouseout', function evideo() { video5.pause() });
}

function evideo6(){
var video6 = document.getElementById('video6')
video6.addEventListener('mouseover', function evideo() { video6.play() });
video6.addEventListener('mouseout', function evideo() { video6.pause() });
}
