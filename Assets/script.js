// DOM Variables
var taskData = [];
var taskHour = [];

$(document).ready(function () {
    // Must have funtion that uses the current New date and displays on heading
    $("#currentDay").text(moment().format("dddd, MMM. Do YY"));
    // Obtaining saved task from DOM
    $("#1 .task").val(localStorage.getItem("1"));
    $("#2 .task").val(localStorage.getItem("2"));
    $("#3 .task").val(localStorage.getItem("3"));
    $("#4 .task").val(localStorage.getItem("4"));
    $("#5 .task").val(localStorage.getItem("5"));
    $("#6 .task").val(localStorage.getItem("6"));
    $("#7 .task").val(localStorage.getItem("7"));
    $("#8 .task").val(localStorage.getItem("8"));
})

    // Event for clicking the save button
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        console.log("ive been clicked");
        // saving user entry to variable
        var taskData = $(this).siblings("textarea").val();
        // // saving designated task hour
        var taskHour = $(this).parent("div").attr("id");
        console.log(taskHour);
        console.log(taskData);
        // // creating objects for each task in the DOM
        localStorage.setItem(taskHour, taskData);
        // // saving over new value 
    })


    // WHEN I click into a time block
    // THEN I can enter an event
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist
