// $(document).ready(function(){
//     var controls = {
//         video: $("#myvideo"),
//         playpause: $("#playpause")
//     };
//
//     var video = controls.video[0];
//
//     controls.playpause.click(function(){
//         if (video.paused) {
//             video.play();
//             $(this).text("Pause");
//         } else {
//             video.pause();
//             $(this).text("Play");
//         }
//
//         $(this).toggleClass("paused");
//     });
//
//     controls.video.click(function() {
//     controls.togglePlayback();
// });
// });
// $(document).ready(function(){
// var video = document.getElementById('video1');
//        var playbutton = document.getElementById("play");
//
//        document.getElementById("controls").addEventListener("click", function (e) {
//          // Set controls to true or false based on their current state
//
//          if (video.controls == true) {
//            // Controls are binary, true if there, false if not
//            video.removeAttribute("controls");
//            e.target.innerHTML = "Show controls";
//          } else {
//            // Controls are binary, true if there, false if not
//            video.setAttribute("controls", true);
//            e.target.innerHTML = "Hide controls";
//          }
//        }, false);
//
//        playbutton.addEventListener("click", function (e) {
//          //  Toggle between play and pause based on the paused property
//          if (video.paused) {
//            var input = document.getElementById('videoFile');   //text box
//            if (input.value) {
//              //  Only load a video file when the text field changes
//              if (input.value != video.src) {
//                video.src = input.value;
//              }
//              video.play();
//            }
//
//          } else {
//            video.pause();
//          }
//        }, false);
//
//        video.addEventListener("play", function () {
//          playbutton.innerHTML = "Pause";
//        }, false);
//
//        video.addEventListener("pause", function () {
//          playbutton.innerHTML = "Play";
//        }, false);
//
// });
// $(document).ready(function(){
// var vid = document.getElementById("video1");
//
// function playVid() {
//     vid.play();
// }
//
// function pauseVid() {
//     vid.pause();
// }
