var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
$("#currentDay").text(time);


var now = parseInt(moment().format('HH'));
console.log(now)

var input9am = $("#9AM")
var input10am = $("#10AM")
var input11am = $("#11AM")
var input12pm = $("#12PM")
var input1pm = $("#1PM")
var input2pm = $("#2PM")
var input3pm = $("#3PM")
var input4pm = $("#4PM")

// var button = ("#saveBtn")

// var inputArray = []


$("button").on("click", function(event) {
    event.preventDefault();
    localStorage.setItem("9AM", input9am.val());
    localStorage.setItem("10AM", input10am.val());
    localStorage.setItem("11AM", input11am.val());
    localStorage.setItem("12PM", input12pm.val());
    localStorage.setItem("1PM", input1pm.val());
    localStorage.setItem("2PM", input2pm.val());
    localStorage.setItem("3PM", input3pm.val());
    localStorage.setItem("4PM", input4pm.val());

});


   
   
$.each($('textarea'), function(){
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i))
   if (this.id == localStorage.key(i)){
       $(this).val(localStorage.getItem(localStorage.key(i)))
   }
}})


// input9am.text(localStorage.getItem("9AM"));
// input10am.text(localStorage.getItem("10AM"));
// input11am.append(localStorage.getItem("11AM"));
// $("#12PM").append(localStorage.getItem("12PM"))
// (input1pm).append(localStorage.getItem("1PM"))
// (input2pm).append(localStorage.getItem("2PM"))
// (input3pm).append(localStorage.getItem("3PM"))
// (input4pm).append(localStorage.getItem("4PM"))

















$("input").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < now) {
        $(this).addClass("past");
    }


    if (name > now) {
        $(this).addClass("future")
    }

    if (name === now) {
        $(this).addClass("present")
    }



})

