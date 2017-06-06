$(function () {
    if (localStorage.getItem('hasAccount') === 'true') {
        var firstName = localStorage.getItem('firstName');
        var middleName = localStorage.getItem('middleName');
        var lastName = localStorage.getItem('lastName');
        var nickName = localStorage.getItem('nickName');
        var backColor = localStorage.getItem('backgroundColor');
        var betaTester = localStorage.getItem('betaTester');
        var music = localStorage.getItem('music');
        $('#firstName').val(firstName);
        $('#middleName').val(middleName);
        $('#lastName').val(lastName);
        $('#nickName').val(nickName);
        $('#backgroundColor').val(backColor);
        if (betaTester === 'yes') {
            $("#betayes").prop("checked", true);
        } else if (betaTester === 'no') {
            $("betano").prop("checked", true);
        }
        if (music === 'astley') {
            $("#astley").prop("checked", true);
        } else if (music === 'wham') {
            $("#wham").prop("checked", true);
        }
        $("#light").prop('checked', true)
    }
});
