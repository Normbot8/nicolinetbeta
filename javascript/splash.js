$(function () {
    function randomInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var splashInt = randomInc(1, 33);
    //time to use a (NINTENDO) switch statement
    switch (splashInt) {
        case 1:
            $('#splash').text('Never Gonna Give You Up!');
            break;
        case 2:
            $('#splash').text('We don\'t call it money anymore, we call it MONEY.');
            break;
        case 3:
            $('#splash').text('There is a darkness in the light!');
            break;
        case 4:
            $('#splash').text('\"\'Cause! People like potatoes!\"');
            break;
        case 5:
            $('#splash').html('<p id=\'splash\'>&#x1F3f3 0 &#x1F308</p>');
        case 6:
            $('#splash').text('It is Wwwwwwwednesday my dudes.');
            break;
        case 7:
            $('#splash').text('We are truly genius!');
            break;
        case 8:
            $('#splash').text('Han Solo!');
            break;
        case 9:
            $('#splash').text('Moving all around, seeds, seeds!');
            break;
        case 10:
            $('#splash').text('Some people pronouce NicoliNet wrong! (its like \'E. coli\' but with an \'n\' at the beginning)');
            break;
        case 11:
            $('#splash').text('What could go wrong?');
            break;
        case 12:
            $('#splash').text('Better than Snapchat!');
            break;
        case 13:
            $('#splash').text('New features coming soon.');
            break;
        case 14:
            $('#splash').text('Interior Crocodile Alligator!');
            break;
        case 15:
            $('#splash').text('The NicoliNet team drives a Chevolet Movie Theatre!');
            break;
        case 16:
            $('#splash').text('We feel so unsure.');
            break;
        case 17:
            $('#splash').text('The highest peak in North America!');
            break;
        case 18:
            $('#splash').text('We have free fidget spinners!*');
            $(".footer").append('<p>*LOL. No we don\'t');
            break;
        case 19:
            $('#splash').text('Who wants to have fun fun fun fun fun fun fun?!?!?!?');
            break;
        case 20:
            $('#splash').text('A worldwide phenomenon!');
            break;
        case 21:
            $('#splash').text('Supporting Net Neutrality!');
            break;
        case 22:
            $('#splash').text('There is a lightness in the dark!');
            break;
        case 23:
            $('#splash').text('aksjdfhjlkablkjcnaskjldfnhiof');
            break;
        case 24:
            $('#splash').text('Spyder-rav!');
            break;
        case 25:
            $('#splash').text('Raising your gangsterity!');
            break;
        case 26:
            $('#splash').text('*Bundles GT730 with Oculus Rift*');
            break;
        case 27:
            $('#splash').text('Deleting C:/Windows/System32 is grate for your PC!');
            break;
        case 28:
            $('#splash').text('Qué tiempo hace hoy?');
            break;
        case 29:
            $('#splash').text('Snaily the Snail, Snaily the Snail');
            break;
        case 30:
            $('#splash').text('He can climb up the walls, he can climb down the walls!');
            break;
        case 31:
            $('#splash').text('Comic Sans is the best font!');
            $('#splash').css('font-family', 'Comic Sans MS');
            break;
        case 32:
            $('#splash').text('All the memes!');
            break;
        case 33:
            $('#splash').text('lol i think i actually deleted system32 on my ssd');
            break;
        default:
            break;
    }
});
