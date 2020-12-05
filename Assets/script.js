// DOM Variables
var currentDayEl = $("#currentDay");
var todoInput = $(".task");
var date = moment().format("dddd, MMM. Do YY");
var todos = [];


// THEN the current day is displayed at the top of the calendar
// Must have funtion that uses the current New date and displays on heading
$(document).ready(function() {
    $("#currentDay").text(date);
})

// Retrieve stored todos from local storage
function init() {
    // Parses JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos)
}

// Stores user todo tasks
function storeTodos() {
    // Stringify an set "todos" key in localStorage to todos
    localStorage.setItem("todos",JSON.stringify(todos));
}

// This allows user to save tasks to localStorage when the button is clicked
$(".saveBtn").on("click",function(event) {
    event.preventDefault();
    var todoText = todoInput.val();
    // Return if user leaves field empty
    if (todoText === "") {
        return;
    }
    // Sets value of "todoText" to "todos"
    todos.push(todoText);
    console.log(todoText);

storeTodos();
init();
})

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
