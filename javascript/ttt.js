$(function () {
    var canvas = document.getElementById('tttBoard');
    var ctx = canvas.getContext("2d");
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);
    ctx.stroke();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);
    ctx.stroke();
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();

    var turnNum;

    var p1tlc = document.getElementById('p1tlc');
    var p1tm = document.getElementById('p1tm');
    var p1trc = document.getElementById('p1trc');
    var p1ml = document.getElementById('p1ml');
    var p1m = document.getElementById('p1m');
    var p1mr = document.getElementById('p1mr');
    var p1bl = document.getElementById('p1bl');
    var p1bm = document.getElementById('p1bm');
    var p1br = document.getElementById('p1br');

    var p2tlc = document.getElementById('p2tlc');
    var p2tm = document.getElementById('p2tm');
    var p2trc = document.getElementById('p2trc');
    var p2ml = document.getElementById('p2ml');
    var p2m = document.getElementById('p2m');
    var p2mr = document.getElementById('p2mr');
    var p2bl = document.getElementById('p2bl');
    var p2bm = document.getElementById('p2bm');
    var p2br = document.getElementById('p2br');

    var tlc;
    var tm;
    var trc;
    var ml;
    var m;
    var mr;
    var bl;
    var bm;
    var br;

    var winner;

    function makeBoard() {
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 300);
        ctx.stroke();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 300);
        ctx.stroke();
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);
        ctx.stroke();
        ctx.moveTo(0, 200);
        ctx.lineTo(300, 200);
        ctx.stroke();
    }

    function playAgain() {
        $('#tttStart').off('click');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        makeBoard();
        tlc = undefined;
        tm = undefined;
        trc = undefined;
        ml = undefined;
        m = undefined;
        mr = undefined;
        bl = undefined;
        bm = undefined;
        br = undefined;
        $('#tttStart').hide(500);
        turnNum = 1;
        playerDetect();
    }

    function declareWin() {
        switch (winner) {
            case 'p1':
                $('#tttStatus').text('Player One Wins!');
                break;
            case 'p2':
                $('#tttStatus').text('Player Two Wins!');
                break;
        }
        $('#tttStart').text("Play Again?");
        $('#tttStart').show(500);
        $('#tttStart').on('click', playAgain);
    }

    function checkCombos() {
        if (turnNum >= 5) {
            if (ml === tlc && bl === tlc && ml != undefined) {
                winner = tlc;
                declareWin();
                return;
            }

            if (m === tm && bm === tm && m != undefined) {
                winner = tm;
                declareWin();
                return;
            }
            if (mr === trc && br === trc && mr != undefined) {
                winner = tm;
                declareWin();
                return;
            }
            if (tm === tlc && trc === tlc && tm != undefined) {
                winner = tlc;
                declareWin();
                return;
            }
            if (m === ml && mr === ml && m != undefined) {
                winner = ml;
                declareWin();
                return;
            }
            if (bm === bl && br === bl && bm != undefined) {
                winner = bl;
                declareWin();
                return;
            }
            if (m === tlc && br === tlc && m != undefined) {
                winner = tlc;
                declareWin();
                return;
            }
            if (m === bl && trc === bl && m != undefined) {
                winner = bl;
                declareWin();
                return;
            }
        }
        turnNum++;
        playerDetect();
    }

    function p2play(event) {
        $('.tttButton').off('click');
        switch (event.target) {
            case p2tlc:
                if (tlc !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(10, 10);
                    ctx.lineTo(90, 90);
                    ctx.stroke();
                    ctx.moveTo(90, 10);
                    ctx.lineTo(10, 90);
                    ctx.stroke();
                    tlc = 'p2';
                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2tm:
                if (tm !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(110, 10);
                    ctx.lineTo(190, 90);
                    ctx.stroke();
                    ctx.moveTo(190, 10);
                    ctx.lineTo(110, 90);
                    ctx.stroke();
                    tm = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2trc:
                if (trc !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(210, 10);
                    ctx.lineTo(290, 90);
                    ctx.stroke();
                    ctx.moveTo(290, 10);
                    ctx.lineTo(210, 90);
                    ctx.stroke();
                    trc = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2ml:
                if (ml !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(10, 110);
                    ctx.lineTo(90, 190);
                    ctx.stroke();
                    ctx.moveTo(90, 110);
                    ctx.lineTo(10, 190);
                    ctx.stroke();
                    ml = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2m:
                if (m !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(110, 110);
                    ctx.lineTo(190, 190);
                    ctx.stroke();
                    ctx.moveTo(190, 110);
                    ctx.lineTo(110, 190);
                    ctx.stroke();
                    m = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2mr:
                if (mr !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(210, 110);
                    ctx.lineTo(290, 190);
                    ctx.stroke();
                    ctx.moveTo(290, 110);
                    ctx.lineTo(210, 190);
                    ctx.stroke();
                    mr = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2bl:
                if (bl !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(10, 210);
                    ctx.lineTo(90, 290);
                    ctx.stroke();
                    ctx.moveTo(90, 210);
                    ctx.lineTo(10, 290);
                    ctx.stroke();
                    bl = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2bm:
                if (bm !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(110, 210);
                    ctx.lineTo(190, 290);
                    ctx.stroke();
                    ctx.moveTo(190, 210);
                    ctx.lineTo(110, 290);
                    ctx.stroke();
                    bm = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
            case p2br:
                if (br !== 'p1') {
                    ctx.beginPath();
                    ctx.moveTo(210, 210);
                    ctx.lineTo(290, 290);
                    ctx.stroke();
                    ctx.moveTo(290, 210);
                    ctx.lineTo(210, 290);
                    ctx.stroke();
                    br = 'p2';

                } else {
                    tryAgainP2();
                    return;
                }
                break;
        }
        checkCombos();
    }


    function p1play(event) {
        $('.tttButton').off('click');
        switch (event.target) {
            case p1tlc:
                if (tlc !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(50, 50, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    tlc = 'p1';
                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1tm:
                if (tm !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(150, 50, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    tm = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1trc:
                if (trc !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(250, 50, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    trc = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1ml:
                if (ml !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(50, 150, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    ml = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1m:
                if (m !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(150, 150, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    m = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1mr:
                if (mr !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(250, 150, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    mr = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1bl:
                if (bl !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(50, 250, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    bl = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1bm:
                if (bm !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(150, 250, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    bm = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
            case p1br:
                if (br !== 'p2') {
                    ctx.beginPath();
                    ctx.arc(250, 250, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    br = 'p1';

                } else {
                    tryAgainP1();
                    return;
                }
                break;
        }
        checkCombos();
    }

    function playerDetect() {
        if (turnNum > 9) {
            $('#tttStatus').text('Tie!');
            $('#tttStart').text("Play Again?");
            $('#tttStart').show(500);
            $('#tttStart').on('click', playAgain);
        } else if (turnNum % 2 === 1) {
            $("#tttStatus").text('Player 1 Turn:');
            $('.tttBp1').on('click', function () {
                p1play(event);
            });
        } else if (turnNum % 2 === 0) {
            $("#tttStatus").text('Player 2 Turn:');
            $('.tttBp2').on('click', function () {
                p2play(event);
            });
            return;
        }
    }

    function tryAgainP1() {
        $("#tttStatus").text('U can\'t go there lol!');
        $('.tttBp1').on('click', function () {
            p1play(event);
        });
    }

    function tryAgainP2() {
        $("#tttStatus").text('U can\'t go there lol!');
        $('.tttBp2').on('click', function () {
            p2play(event);
        });
    }

    function initGame() {
        $('#tttStart').off('click');
        $('#tttStart').hide(500);
        turnNum = 1;
        playerDetect();
    }
    $('#tttStart').on('click', initGame);
});
