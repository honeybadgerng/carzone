$(function () {
    
    "use strict";


    //Carzone - Best Car Repair HTML and CSS Website Template
    // init the validator
    $('#ajax-booking').validator();




    // when the form is submitted
    $('#ajax-booking').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "assets/phpscripts/booking.php";





            
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $( "#msgbookingSubmit" ).removeClass( "hidden" );
                    $('#ajax-booking')[0].reset();
                }
            });
            return false;
        }
    })
});