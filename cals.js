//displaying first question
document.getElementsByClassName('container1')[0].style.display = "block";

//defining the next function
function flip(id) {
    document.getElementsByClassName('container1')[id-1].style.display = "none";
    document.getElementsByClassName('container1')[id].style.display = "block";
}
    //answer
 function result() {
        var score = 0;
       if (document.getElementById('correct1').checked) {
        score++;
       } 
       if (document.getElementById('correct2').checked) {
        score++;
       } 
       if (document.getElementById('correct3').checked) {
        score++;
       } 
       if (document.getElementById('correct4').checked) {
        score++;
       } 
       if (document.getElementById('correct5').checked) {
        score++;
       } 
       if (document.getElementById('correct6').checked) {
        score++;
       } 
       if (document.getElementById('correct7').checked) {
        score++;
       } 
       if (document.getElementById('correct8').checked) {
        score++;
       } 
       if (document.getElementById('correct9').checked) {
        score++
       } if (document.getElementById('correct10').checked) {
        score++;
       } 
       if (document.getElementById('correct11').checked) {
        score++;
       } 
       if (document.getElementById('correct12').checked) {
        score++;
       } 
       alert("WOWWWWW! YOU HAD: " + score);
 }   

