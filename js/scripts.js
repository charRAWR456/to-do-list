Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
}) //Gets time, modifies time by timezone.
function toDo(dueItem, dueDate, dueTime) {
  this.item = dueItem;
  this.date = dueDate;
  this.time = dueTime;
}
toDo.prototype.dueOutput = function() {
  return this.item + " is due on " + this.date + " by " + this.time + ".";
}
var listElement = {

}

$(document).ready(function() {
  $('#due-date').val(new Date().toDateInputValue());
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var dueItem = $("input#new-item").val();
    var dueDate = $("input#due-date").val();
    var dueTime = $("input#due-time").val();
    toDoItem = (new toDo(dueItem, dueDate, dueTime));
    $("tr:last").after("<tr class='table-row'><td>" +"<span id='item'>" + toDoItem.item + "</span>" + "</td><td>" + "<span id='date'>" + toDoItem.date + "</span>" + "</td><td>" + "<span id='time'>" + toDoItem.time + "</span>" + "</td></tr>");
    });
    $("#item").last().click(function() {

      // $("#show-contact").show();
      // $("#show-contact h2").text(newContact.firstName);
      // $(".full-name").text(newContact.fullName());
    });
    $("#date").last().click(function() {

    });
    $("#time").last().click(function() {

    });
  });
