$(function () {
    var dig1, dig2, dig3, dig4, dig5, dig6, dig7, dig8, dig9;
    var evilMessage = 'MWAHAHAHAHHAHA! WE KNOW YOUR SOCIAL SECURITY NUMBER!!!<br>';
    var laugh

    function randomInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function replay() {
        $('#securityYes').on('click', startGame);
        $('#securityNo').on('click', startGame);
        $('#ssNumber').text('Click the Button Below to Start');
        $("#securityYes").text("Click to start");
        $("#securityNo").text('Click to start');
    }

    function securityYes() {
        $('#ssNumber').html(evilMessage);
        evilMessage = evilMessage + evilMessage;
        setTimeout(securityYes, 100);
    }

    function floweyLaugh() {
        laugh.play();
        setTimeout(floweyLaugh, 6000);
    }

    function initsecurityYes() {
        laugh = new Audio('sound/floweylaughnotcropped.mp3');
        securityYes();
        floweyLaugh();
    }

    function securityNo() {
        $("#securityYes").off('click');
        $('#securityNo').off('click');
        $('#ssNumber').text('It appears that your Social Security Number is NOT ' + dig1 + dig2 + dig3 + '-' + dig4 + dig5 + '-' + dig6 + dig7 + dig8 + dig9 + '. Do you wish to play AGAIN?');
        $('#securityYes').on('click', replay);
        $('#securityNo').on('click', replay);
    }

    function continueGame() {
        $('#ssNumber').text('Is your Social Security Number ' + dig1 + dig2 + dig3 + '-' + dig4 + dig5 + '-' + dig6 + dig7 + dig8 + dig9 + '?');
        $("#securityYes").text("Yes");
        $("#securityNo").text('No');
        $('#securityYes').on('click', initsecurityYes);
        $('#securityNo').on('click', securityNo);
    }

    function ssgen() {
        dig1 = randomInc(1, 8);
        dig2 = randomInc(1, 9);
        dig3 = randomInc(1, 9);
        if (dig1 === 6 && dig2 === 6 && dig3 === 6) {
            ssgen();
            return;
        }
        dig4 = randomInc(1, 9);
        dig5 = randomInc(1, 9);
        dig6 = randomInc(1, 9);
        dig7 = randomInc(1, 9);
        dig8 = randomInc(1, 9);
        dig9 = randomInc(1, 9);
        setTimeout(continueGame, 2000);
    }

    function startGame() {
        $("#securityYes").off('click');
        $('#securityNo').off('click');
        $("#ssNumber").text('Generating Social Security Number:');
        $("#securityYes").text("Plz wait");
        $("#securityNo").text('Plz wait');
        setTimeout(ssgen, 1000);
    }
    $('#securityYes').on('click', startGame);
    $('#securityNo').on('click', startGame);
});
