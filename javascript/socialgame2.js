$(function () {

    $('#submitSSguess').on('click', function (event) {
        var sspt1, sspt2, sspt3;
        event.preventDefault();
        $(".ssFormError").remove();
        $('#ssGuess').remove();
        sspt1 = $('#sspt1').val();
        if (sspt1.length !== 3) {
            $("#ss2input").after('<p class=\'ssFormError\'>The first input field must have 3 digits!</p>');
            return;
        }
        sspt2 = $('#sspt2').val();
        if (sspt2.length !== 2) {
            $("#ss2input").after('<p class=\'ssFormError\'>The second input field must have 2 digits!</p>');
            return;
        }
        sspt3 = $('#sspt3').val();
        if (sspt3.length !== 4) {
            $("#ss2input").after('<p class=\'ssFormError\'>The third input field must have 4 digits!</p>');
            return;
        }
        if (sspt1 === '666') {
            $("#ss2input").after('<p class=\'ssFormError\'>The first three digits of a Social Security Number CANNOT be 666!</p>');
            return;
        }
        if (parseInt(sspt1) > 899) {
            $("#ss2input").after('<p class=\'ssFormError\'>The first three digits of a Social Security Number CANNOT be 900 or greater!</p>');
            return;
        }
        if (sspt1 === "kno" && sspt2 === "wl" && sspt3 === "edge") {
            $('#securityGame2').append('<p id=\'ssGuess\'>Wow how gangster</p>');
        } else {
            $('#securityGame2').append('<p id=\'ssGuess\'>WRONG! HAHAHA, you\'ll never guess OUR Social Security Number!</p>');
        }
    });
});
