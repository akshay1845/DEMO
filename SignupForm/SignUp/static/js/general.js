//Main Function
$(document).ready(function () {
    //Function For enable/disable submit button 
    $('#submitBtn').mouseenter(function(){
        var green = $('#msg').css('border-color');
        var email_border_color = $('#email').css('border-color');
        var fname_border_color = $('#fname').css('border-color');
        var lname_border_color = $('#lname').css('border-color');
        var password_border_color = $('#password').css('border-color');
        var zip_border_color = $('#zip').css('border-color');
        var address_border_color = $('#address').css('border-color');
        //submit button will going  enabled and success message will be displayed 
        if(email_border_color==green && fname_border_color==green && lname_border_color==green && password_border_color==green && address_border_color==green && zip_border_color==green)
        {
            $('#submit').removeAttr('disabled');
            $('#submit').click(function(){
                $('#success').html('Data Inserted successfully!!!').delay(1000).fadeIn('slow');
            });
        }
        //submit button will going  disabled(if enabled) and warning message will be displayed
        else
        {
            $('#submit').attr('disabled','disabled');
            $('#warning').html('Warning : Please Fill all details properly before submitting!').fadeIn('slow');
            $('#warning').delay(1000).fadeOut('slow');
        }

    });//end of function

    //Function for validations of the fields
    $(':input').blur(function () {
        $(this).each(function () {
            var input_value = $(this).val();
            var input_type = $(this).attr('name');
            var output_div = '#' + input_type + '-valid';
            //requrired fields validation
            if (input_value.length == 0) {      
                $(this).css('border', '1px solid red');
                $(output_div).html(input_type + ' is required');
            }
            //email validation
            else if (input_type == 'email') {       
                var emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                if (!emailPattern.test(input_value)) {
                    $('#email').css('border', '1px solid red');
                    $(output_div).html('Enter valid ' + input_type);
                }
                else {
                    $('#email').css('border', '2px solid green');
                    $(output_div).html('');
                    var cssProp = $('#email').css('border-color');
                    
                }
            }
            //Fname validation
            else if (input_type == 'fname') {
                if (!input_value.match('^[a-zA-Z]{3,16}$')) {
                    $('#' + input_type).css('border', '1px solid red');
                    $(output_div).html('Enter valid ' + input_type);
                }
                else {
                    $('#' + input_type).css('border', '2px solid green');
                    $(output_div).html('');

                }
            }
            //Lname validation
            else if (input_type == 'lname') {
                if (!input_value.match('^[a-zA-Z]{3,16}$')) {
                    $('#' + input_type).css('border', '1px solid red');
                    $(output_div).html('Enter valid ' + input_type);

                }
                else {
                    $('#' + input_type).css('border', '2px solid green');
                    $(output_div).html('');
                }
            }
            //Password validation
            else if (input_type == 'password') {
                var passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
                if (!passwordPattern.test(input_value)) {
                    $('#' + input_type).css('border', '1px solid red');
                    $(output_div).html('Enter Valid ' + input_type + ' ' + '(Note: Minimum 6 characters required, Atleast 1 Capital letter[A-Z], 1 Small letter[a-z], 1 Numeric Value[0-9], 1 Special character(!@#$%&*) )' );
                }
                else {
                    $('#' + input_type).css('border', '2px solid green');
                    $(output_div).html('');
                }
            }
            ////Address validation
            else if (input_type == 'address') {
                if (input_value.length <= 5) {
                    $('#' + input_type).css('border', '1px solid red');
                    $(output_div).html('Enter valid ' + input_type);
                }
                else {
                    $('#' + input_type).css('border', '2px solid green');
                    $(output_div).html('');
                }
            }
            //ZipCode validation
            else if (input_type == 'zip') {
                if (input_value.length != 6) {
                    $('#' + input_type).css('border', '1px solid red');
                    $(output_div).html('Enter valid ' + input_type + '(eg.380001)');
                }
                else {
                    $('#' + input_type).css('border', '2px solid green');
                    $(output_div).html('');
                }   
            }
        }); //end of loop
    }); //end of function

    //show password toggling
    $('#show').click(function(){
        if($('#show').is(':checked'))
        {
            $('#password').attr('type','text');
        }
        else{
            $('#password').attr('type','password');
        }
    });
});

