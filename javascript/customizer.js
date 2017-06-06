$(function () {
    if (localStorage.getItem('hasAccount') === 'true') {
        var firstName = localStorage.getItem('firstName');
        var middleName = localStorage.getItem('middleName');
        var lastName = localStorage.getItem('lastName');
        var nickName = localStorage.getItem('nickName');
        var backColor = localStorage.getItem('backgroundColor');
        var betaTester = localStorage.getItem('betaTester');
        var music = localStorage.getItem('music');
        $('body').css('background-color', backColor);
        if (music === "astley") {
            $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/nicoliastley.png\" alt=\"The Grate Nicoli\"></div>');
            $('body').append('<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/k5pL79ywoTY\?autoplay=1&loop=1&playlist=k5pL79ywoTY\" frameborder=\"0\" allowfullscreen style=\'z-index:-10000; position:fixed\'></iframe>');
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $('.into-pic').replaceWith('<div class=\"into-pic\"><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/k5pL79ywoTY\?autoplay=1&loop=1&playlist=k5pL79ywoTY\" frameborder=\"0\" allowfullscreen style=\'display:block; margin: auto;\'></iframe></div>');
            }
        } else if (music === 'wham') {
            $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/nicoliwham.png\" alt=\"The Grate Nicoli\"></div>');
            $('body').append('<iframe width=\"100\" height=\"100\" src=\"https://www.youtube.com/embed/gpqmoBYkQfc\?autoplay=1&loop=1&playlist=gpqmoBYkQfc\" frameborder=\"0\" style=\'z-index:-10000; position:fixed\'></iframe>');
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $('.into-pic').replaceWith('<div class=\"into-pic\"><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/gpqmoBYkQfc\?autoplay=1&loop=1&playlist=gpqmoBYkQfc\" frameborder=\"0\" allowfullscreen style=\'display:block; margin: auto;\'></iframe></div>');
            }
        }
        if (nickName === "") {
            $('.heading h2').text(firstName + ' ' + middleName + ' ' + lastName + "\'s NicoliNet");
        } else if (nickName !== "") {
            $('.heading h2').text(nickName + '\'s NicoliNet');
        }
        var page = window.location.pathname;
        if (page === '/index.html') {
            if (nickName === "") {
                $('#mydudes').text(firstName + ' ' + middleName + ' ' + lastName);
            } else if (nickName !== "") {
                $('#mydudes').text(nickName);
            }
        }
        if (page === '/1h@nky0u.html') {
            if (nickName === "") {
                $('#recipent').val(firstName + ' ' + middleName + ' ' + lastName);
            } else if (nickName !== "") {
                $('#recipent').val(nickName);
            }
        }
        if (betaTester === 'yes') {
            window.location.replace('/beta' + page);
        }

    }
})
