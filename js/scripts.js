inputName = "";
inputAge = "";
inputTitle = "";
inputTime = "";
ticketPrice = 10;

function gatherInfo() {
  inputName = $("input#name").val();
  inputAge = $("input#age").val();
  inputTitle = $("#movie-title").val();
  inputTime = $("#movie-time").val();
}

function Ticket(name, age, title, time) {
  this.userName = name;
  this.userAge = age;
  this.movieTitle = title;
  this.movieTime = time;
}


$(document).ready(function() {
  $("form#movie-details").submit(function(event) {
    event.preventDefault();
    gatherInfo();
    var newTicket = new Ticket(inputName, inputAge, inputTitle, inputTime);
    alert(newTicket.userName);
    });
});
