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
        $('body').css('background-color', backColor);

        if (music === "astley" || music === "wham" || sans === "yes") {
            var tag = document.createElement('script');
            tag.src = 'javascript/music.js';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        if (nickName === null || nickName === "") {
            $('.heading h2').text(firstName + ' ' + middleName + ' ' + lastName + "\'s NicoliNet");
        } else if (nickName !== null && nickName !== "") {
            $('.heading h2').text(nickName + '\'s NicoliNet');
        }
        var pageSub = window.location.pathname;
        var page = pageSub.substr(11);
        if (page === '1h@nky0u.html') {
            if (nickName === null || nickName === "") {
                $('#recipent').val(firstName + ' ' + middleName + ' ' + lastName);
            } else if (nickName !== null && nickName !== "") {
                $('#recipent').val(nickName);
            }
        }
        var isBeta = false;
        if (betaTester === 'yes' && isBeta === true) {
            window.location.replace('/nicolinetbeta/' + page);
        }

        if (tool === '1') {
            $('.intro').after('<div id=\'secretzone\'><p>pssssst! hey, ur pretty cool! why dont u come on down to the <a href=\'s33crEtzx0n3.html\'>nicolinet official secret zone</a>?</div>');
            $('#secretzone').css({
                'border-bottom': '2px solid lightgrey',
                'padding': '10px',
                'font-size': '10px'
            });
        }
    }
});
