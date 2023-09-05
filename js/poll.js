
//Handles when yes button is selected.
function yes_button_click_handler(){
    // No button is found and not shown here.
    var form = $(this).parent().parent()
    var submit = form.find('.radio-submit')
    var no = form.find('#no-button')

    submit.show();  // Submit button is shown when clicked.
    no.prop("checked", false);
} 

//Handles when no button is selected.
function no_button_click_handler(){
    // Yes button is found and not shown here.
    var form = $(this).parent().parent()
    var submit = form.find('.radio-submit')
    var yes = form.find('#yes-button')

    submit.show();  // Submit button is shown when clicked.
    yes.prop("checked", false);
}

//Handles when submit button is selected.
function submit_button_click_handler(ev){
    ev.preventDefault();    // Makes it so the page doesn't go up to top as if submitting form.
    var form = $(this).parent();
    var yes = form.find('#yes-button')
    var no = form.find('#no-button')

    if(no.is(":checked")){ 
        
        //Displays specific message and hides button.
        //Will also disable both buttons so that they can't be selcted
        var message = "<p>We're sorry you feel that way!</p>"

        form.append(message);

        $(no).prop("disabled", true);
        $(yes).prop("disabled", true);
        $(this).hide();
    }
    else if(yes.is(":checked")){
        var message = "<p>That's right, we are the best around!</p>"
        var no = form.find('#no-button')

        form.append(message);

        $(yes).prop("disabled", true);
        $(no).prop("disabled", true);
        $(this).hide();
    }
}

//Loads these functions in order when page is loaded.
$(document).on("ready", function(){
    $('#yes-button').on("click", yes_button_click_handler);
    $('#no-button').on("click", no_button_click_handler);
    $('.radio-submit').on("click", submit_button_click_handler);  
    $('#status').hide();    
});