var saveBtn = $(".saveBtn")
var clearBtn = $(".clearBtn")
var nineBlockText = $("#nineBlock")
var tenBlockText = $("#tenBlock")
var elevenBlockText = $("#elevenBlock")
var twelveBlockText = $("#twelveBlock")
var oneBlockText = $("#oneBlock")
var twoBlockText = $("#twoBlock")
var threeBlockText = $("#threeBlock")
var fourBlockText = $("#fourBlock")
var fiveBlockText = $("#fiveBlock")
setInterval(textAreaColor, 1000)

// Changing text area color based on time of day//
function textAreaColor() {
    // Setting date and time for header using moment.js library //
    var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').text(today)
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

// Saving task text to local Storage on save button click//
saveBtn.on("click", function () {
    var textArea = $(this).siblings(".description").val()
    var savedTask = $(this).siblings(".description").attr("id")
    localStorage.setItem(savedTask, textArea)
})

// Clearing local Storage and saved text on click for end of day satisfaction//
clearBtn.on("click", function () {
    localStorage.setItem('nineBlock', "");
    localStorage.setItem('tenBlock', "");
    localStorage.setItem('elevenBlock', "");
    localStorage.setItem('twelveBlock', "");
    localStorage.setItem('oneBlock', "");
    localStorage.setItem('twoBlock', "");
    localStorage.setItem('threeBlock', "");
    localStorage.setItem('fourBlock', "");
    localStorage.setItem('fiveBlock', "");
    nineBlockText.val("")
    tenBlockText.val("")
    elevenBlockText.val("")
    twelveBlockText.val("")
    oneBlockText.val("")
    twoBlockText.val("")
    threeBlockText.val("")
    fourBlockText.val("")
    fiveBlockText.val("")
}
)

// Adding saved text to corresponding time block//
function renderText() {
    nineBlockText.val(localStorage.getItem('nineBlock'))
    tenBlockText.val(localStorage.getItem('tenBlock'))
    elevenBlockText.val(localStorage.getItem('elevenBlock'))
    twelveBlockText.val(localStorage.getItem('twelveBlock'))
    oneBlockText.val(localStorage.getItem('oneBlock'))
    twoBlockText.val(localStorage.getItem('twoBlock'))
    threeBlockText.val(localStorage.getItem('threeBlock'))
    fourBlockText.val(localStorage.getItem('fourBlock'))
    fiveBlockText.val(localStorage.getItem('fiveBlock'))
}

renderText()
textAreaColor()