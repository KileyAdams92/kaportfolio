document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".sidenav").sidenav();
});

new TypeIt("#name", {
  strings: ["Kiley Adams"],
  speed: 100,
  autoStart: false
});

$(document).ready(function() {
  TypeIt();
});
