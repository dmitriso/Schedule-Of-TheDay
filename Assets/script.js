// DOM Variables
var taskData = [];
var taskHour = [];

// Event for clicking the save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    // Saving user entry to variable
    var taskData = $(this).siblings("textarea").val();
    // // Saving designated task hour
    var taskHour = $(this).parent("div").attr("id");
    // If the user leaves the field empty then the function is stopped.
    if (taskData === "") {
        return;
    }
    // // Creating objects for each task in the DOM
    localStorage.setItem(taskHour, taskData);
    // // Saving over new value 
})


// This function  affects each time block element and pulls each id
$("section").each(function (index) {
    console.log($(this).attr("id"));
    var timeSlots = parseInt($(this).attr("id"));
    if (timeSlots < moment().hour()) {
        $(this).children(".task").addClass("past");
    } else if (timeSlots === moment().hour()) {
        $(this).children(".task").removeClass("past");
        $(this).children(".task").addClass("present");
    } else {
        $(this).children(".task").removeClass("past");
        $(this).children(".task").removeClass("present");
        $(this).children(".task").addClass("future");
    }
});

$(document).ready(function () {
    // Must have funtion that uses the current New date and displays on heading
    $("#currentDay").text(moment().format("dddd, MMM. Do YY"));
    console.log(moment().hours())



    // Obtaining saved task from DOM
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));
})




