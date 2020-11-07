//Get date containers
var daysContainer = $(".container");

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


 for(var i =0 ; i<timeStrings.length;i++){

    var form = $("<form class='row'></form>");

    var timeBox=$("<p>");

    timeBox.text(timeStrings[i]);
    timeBox.attr("class","col-1 hour");

    var inputField = $("<input>");

    inputField.attr("class","col-10 past");
    inputField.attr("id","input-"+(i));
    inputField.val(storedVals[i]);

    var submitButton = $("<button>");

    submitButton.attr("id","submit-"+(i));
    submitButton.attr("class","saveBtn col-1");

    form.append(timeBox);
    form.append(inputField);
    form.append(submitButton);

    daysContainer.append(form);

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
