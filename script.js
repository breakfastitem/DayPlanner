//Get date containers
var daysContainer = $(".container");

/**
 * Initialize date objects
 */
var timeStrings = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];


 for(var i =0 ; i<timeStrings.length;i++){

    var div = $("<div class='row'></div>");
    var timeBox=$("<p class='col-2'></p>");
    timeBox.text(timeStrings[i]);
    var inputField = $("<input class='col-8'></input>");
    var submitButton = $("<button class='col-2'></button>");
    submitButton.attr("id","submit"+(i+1));

    div.append(timeBox);
    div.append(inputField);
    div.append(submitButton);

    daysContainer.append(div);
    
 }