// business logic

inputName = "";
inputAge = "";
inputTitle = "";
inputTime = "";

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

Ticket.prototype.output = function() {
  return this.userName + ", age " + this.userAge + ", your movie, " + this.movieTitle + ", will air this " + this.movieTime + " and will cost " + ticketPrice + " dollars.";
}

// user interface logic
$(document).ready(function() {
  $("form#movie-details").submit(function(event) {
    event.preventDefault();
    ticketPrice = 10;
    gatherInfo();
    var newTicket = new Ticket(inputName, inputAge, inputTitle, inputTime);
    if (newTicket.userAge >= 60 || newTicket.movieTitle == "Monster's Inc" || newTicket.movieTime == "morning") {
      ticketPrice -= 3;
    };
    if (newTicket.movieTime == "evening" || newTicket.movieTitle == "Star Wars") {
      ticketPrice += 3;
    };
    $("#ticket-output").text(newTicket.output());
    $(".ticket-results").show();
    });
});
