// DOM Variables
var currentDayEl = document.getElementById("currentDay");
var date = moment().format("dddd, MMM. Do YY");
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// Must have funtion that uses the current New date and displays on heading
$(document).ready(function() {
    $("#currentDay").text(date);
})


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// Must have a function changes block status through style attribute color coded for past,present, and future


// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
