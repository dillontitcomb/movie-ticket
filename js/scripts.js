$(document).ready(function() {
  $("form#movie-details").submit(function(event) {
      alert("hi");
      event.preventDefault();
    });
});
