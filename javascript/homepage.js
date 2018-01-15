$(function () {
    if (localStorage.getItem('hasAccount') === 'true') {
        var firstName = localStorage.getItem('firstName');
        var middleName = localStorage.getItem('middleName');
        var lastName = localStorage.getItem('lastName');
        var nickName = localStorage.getItem('nickName');
        var backColor = localStorage.getItem('backgroundColor');
        var betaTester = localStorage.getItem('betaTester');
        var music = localStorage.getItem('music');
        var sans = localStorage.getItem('sans');
        var vidTime = sessionStorage.getItem('vidTime');
        var isTime = sessionStorage.getItem('isTime');
        var tool = localStorage.getItem('tool');
        if (nickName === null || nickName === "") {
            $('#mydudes').text(firstName + ' ' + middleName + ' ' + lastName);
        } else if (nickName !== null && nickName !== "") {
            $('#mydudes').text(nickName);
        }
    }
})
