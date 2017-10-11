$('#submitCustomizeForm').on('click', function (event) {
    event.preventDefault();
    $('.required').remove();
    $('#accepted').remove();
    var firstName = $('#firstName').val();
    if (firstName.substr('0', '11') === "nicoli_1817") {
        firstName = firstName.substr('11');
        localStorage.setItem('tool', '1');
    }
    if (firstName === "") {
        $('#firstName').parent().after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var middleName = $('#middleName').val();
    if (middleName === "") {
        $('#middleName').parent().after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var lastName = $('#lastName').val();
    if (lastName === "") {
        $('#lastName').parent().after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var nickName = $('#nickName').val();
    var backgroundColor = $('#backgroundColor').val();
    if (backgroundColor === "") {
        $('#backgroundColor').parent().after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var beta = $('input[name=\"beta\"]:checked').val();
    if (beta === undefined) {
        $('#betaCase').after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var music = $('input[name=\"musicPref\"]:checked').val();
    if (music === undefined) {
        $('#musicCase').after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var comic = $('input[name=\"comic\"]:checked').val();
    if (comic === undefined) {
        $('#comicSans').after('<span class=\"required\">Yo, yo yo, the above field is required!</span>');
        return;
    }
    var backgroundcolor = $('#backgroundColor').val();
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('middleName', middleName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('nickName', nickName);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('betaTester', beta);
    localStorage.setItem('music', music);
    localStorage.setItem('sans', comic);
    localStorage.setItem('hasAccount', 'true');
    sessionStorage.setItem('vidtime', 'breh')
    document.getElementById('customizeForm').reset();
    $('#submitCustomizeForm').before('<p id=\"accepted\">Your response has been accepted! Refresh the page to see your very own NicoliNet!</p>');
});
