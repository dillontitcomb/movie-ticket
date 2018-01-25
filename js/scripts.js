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


// user interface logic
$(document).ready(function() {
  $("form#movie-details").submit(function(event) {
    event.preventDefault();
    ticketPrice = 10;
    gatherInfo();
    var newTicket = new Ticket(inputName, inputAge, inputTitle, inputTime);
    if (newTicket.userAge >= 60 || newTicket.movieTitle == "monster" || newTicket.movieTime == "morning") {
      ticketPrice -= 3;
    };
    if (newTicket.movieTime == "evening" || newTicket.movieTitle == "starwars") {
      ticketPrice += 3;
    };
    $("#user-name").text(newTicket.userName);
    $("#ticket-price").text(ticketPrice);
    $(".ticket-results").show();
    });
});
