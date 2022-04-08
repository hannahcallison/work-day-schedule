var saveBtn = $("#saveBtn")
var nineBlockText = $("#nineBlock")
// Setting date and time for header using moment.js library //
var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
$('#currentDay').text(today)

// Changing text area color based on time of day//
function textAreaColor() {
    // Pulling current hour of the day to compare to timeblocks//
    var currentHour = new Date().getHours()

    // When currentHour is equal to time slot hour, style class is set to "present", when the hour is greater than time slot hour the text area changes to the "past" class or when the hour is less than time block, block style is changed to "future" style class//

    // 9 am block//
    if (currentHour === 9) {
        $("#nineBlock").addClass("present")
    } else if (currentHour > 9) {
        $("#nineBlock").addClass("past")
    } else if (currentHour < 9) {
        $("#nineBlock").addClass("future")
    }
    // 10 am block//
    if (currentHour === 10) {
        $("#tenBlock").addClass("present")
    } else if (currentHour > 10) {
        $("#tenBlock").addClass("past")
    } else if (currentHour < 10) {
        $("#tenBlock").addClass("future")
    }
    // 11 am block//
    if (currentHour === 11) {
        $("#elevenBlock").addClass("present")
    } else if (currentHour > 11) {
        $("#elevenBlock").addClass("past")
    } else if (currentHour < 11) {
        $("#elevenBlock").addClass("future")
    }
    // 12 pm block//
    if (currentHour === 12) {
        $("#twelveBlock").addClass("present")
    } else if (currentHour > 12) {
        $("#twelveBlock").addClass("past")
    } else if (currentHour < 12) {
        $("#twelveBlock").addClass("future")
    }
    // 1 pm block//
    if (currentHour === 13) {
        $("#oneBlock").addClass("present")
    } else if (currentHour > 13) {
        $("#oneBlock").addClass("past")
    } else if (currentHour < 13) {
        $("#oneBlock").addClass("future")
    }
    // 2 pm block//
    if (currentHour === 14) {
        $("#twoBlock").addClass("present")
    } else if (currentHour > 14) {
        $("#twoBlock").addClass("past")
    } else if (currentHour < 14) {
        $("#twoBlock").addClass("future")
    }
    // 3 pm block//
    if (currentHour === 15) {
        $("#threeBlock").addClass("present")
    } else if (currentHour > 15) {
        $("#threeBlock").addClass("past")
    } else if (currentHour < 15) {
        $("#threeBlock").addClass("future")
    }
    // 4 pm block//
    if (currentHour === 16) {
        $("#fourBlock").addClass("present")
    } else if (currentHour > 16) {
        $("#fourBlock").addClass("past")
    } else if (currentHour < 16) {
        $("#fourBlock").addClass("future")
    }
    // 5 pm block//
    if (currentHour === 17) {
        $("#fiveBlock").addClass("present")
    } else if (currentHour > 17) {
        $("#fiveBlock").addClass("past")
    } else if (currentHour < 17) {
        $("#fiveBlock").addClass("future")
    }
}


saveBtn.on("click", function(){
    console.log("success")
    var textArea = nineBlockText.value
    localStorage.setItem("savedTask", JSON.stringify(textArea));
})



// var nineText = []
// // Store saved data//
// function renderSavedTasks() {
//     nineBlockText.innerHTML = "";
//     for (var i = 0; i < nineBlockText.length; i++) {
//         var nineBlock = nineText[i];
//         var p = document.createElement('p')
//         p.text = nineBlock;
//         p.setAttribute("data-index", i);

//         nineBlockText.appendchild(p)
//     }
// }

// function init() {
//     var storedTasks = JSON.parse(localStorage.getItem("nineText"))
//     if (storedTasks !== null) {
//         nineText = storedTasks
//     }
//     renderSavedTasks()
// }

// function storeTasks() {
//     localStorage.setItem("tasks", JSON.stringify(nineText))
// }

// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     var pText = nineBlockText.value.trim();
//     if (pText === ""){
//         return;
//     }
//     nineText.push(pText);
//     storeTasks();
//     renderSavedTasks();
// })

// init()

// Pseudo Code//
// Basically on submit/click text from that specific text area is "saved" via local storage and appended to that specific text area//Are you able to keep typing after that?? I guess local storage needs to throw it back up as a string??/this parent $(this.parent.index)???//

textAreaColor()