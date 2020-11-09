//Get containers
var scheduleContainer = $(".container");



//format date with moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var storedVals =["","","","","","","","",""];
/**
 * Get local storage data
 */
var tempData= JSON.parse(localStorage.getItem("events"));

if(tempData != null){
    storedVals=tempData;
}


/**
 * Initialize date objects
 */
var timeStrings = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

var timeIndicator = moment().format("a");

var hourIndex = timeStrings.indexOf(moment().format("ha"));

 for(var i =0 ; i<timeStrings.length;i++){

    var form = $("<form class='row'></form>");

    var timeBox=$("<p>");

    timeBox.text(timeStrings[i]);
    timeBox.attr("class","col-1 hour");

    var inputField = $("<input>");

    inputField.attr("id","input-"+(i));
    inputField.val(storedVals[i]);

    var submitButton = $("<button>");

    submitButton.attr("id","submit-"+(i));
    submitButton.attr("class","col-1 saveBtn");


    //Determine input class based on hour
    if(hourIndex != -1){
        if(hourIndex<i){
            inputField.attr("class","col-10 future");
        }else if(hourIndex === i){
            inputField.attr("class","col-10 present");
        }else{
            inputField.attr("class","col-10 past");
        }  
    }else{
        if(timeIndicator==="am"){
            inputField.attr("class","col-10 future");
        }else{
            inputField.attr("class","col-10 past");
        }
    }
    

    form.append(timeBox);
    form.append(inputField);
    form.append(submitButton);

    scheduleContainer.append(form);

 }

 /**
  * Add event listeners
  */
 $(document).ready(function(){

    $(".saveBtn").on("click",function(event){
        event.preventDefault();

        var idNum= event.target.id.split("-")[1];

        storedVals[idNum] = $("#input-"+idNum).val();

        localStorage.setItem("events",JSON.stringify(storedVals));
     });

 });
