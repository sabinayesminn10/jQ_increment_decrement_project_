$(document).ready(function () {
   // 1st
   $("#heading").click(function () {
      var score = $("#score").text();
      var scoreOne = Number(score) + 1;
      //    console.log(scoreOne);
      $('#score').text(scoreOne);
      if (scoreOne > 10) {
         $('#score').text(10);

      }
      else {
         $('#score').text(scoreOne);
      }
   });


   // 2nd
   $("#heading-two").click(function () {
      var scoree = $("#score").text();
      var scoreTwo = Number(scoree) - 1;
      // console.log(scoreTwo);

      if (scoreTwo < 0) {
         $('#score').text(0);
      }
      else {
         $('#score').text(scoreTwo);
      }




   });





});
