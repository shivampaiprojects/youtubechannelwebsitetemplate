function mail() {
    window.location = "mailto:name@email.com"
  }
  var i = 0;
var txt = 'Welcome To My Website . Do not forget to checkout my Youtube Channel!'; /* The text */
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}