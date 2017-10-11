$(function () {
    var targetTime;
    var timer;
    var undyne = 0;

    function randomInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function resetGame() {
        $("#start").off('click');
        undyne = 0;
        $("#targetTime").text('Press Button For Target Time');
        $('#start').text('Get Target Time');
        $('#start').on('click', getReady);
    }

    function timeCount() {
        undyne++;
        startTime();
    }

    function startTime() {
        timer = setTimeout(timeCount, 100);
    }

    function stopTime() {
        clearTimeout(timer);
        var finalTime = undyne / 10;
        $("#start").off('click');
        $("#targetTime").text('Target Time: ' + targetTime + ' Your Time: ' + finalTime);
        if (targetTime - .5 <= finalTime && targetTime + .5 >= finalTime) {
            $("#avatarStatusWord").text('VICTORIUS');
            $('#avatarPic').attr('src', 'pics/Victorycountgame.gif');
        } else {
            $('#avatarStatusWord').text('DEAD');
            $("#avatarPic").attr('src', 'pics/deadinlava.png');
        }
        $("#start").text('Play Again');
        $('#start').on('click', resetGame);
    }

    function startGame() {
        $('#start').off('click');
        startTime();
        $("#start").on('click', stopTime);
        $('#start').text('Stop Timer');
    }

    function getReady() {
        $('#start').off('click');
        targetTime = randomInc(1, 30);
        $('#targetTime').text('Target Time: ' + targetTime);
        $('#start').on('click', startGame);
        $("#start").text('Start Timer');
    }
    $('#start').on('click', getReady);
});
