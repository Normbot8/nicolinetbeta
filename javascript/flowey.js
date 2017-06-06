$(function () {
    function randomInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var floweyTime = randomInc(1, 100);
    if (floweyTime === 99) {
        $('.heading h2').text('FloweyNet');
        $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/flowey.png\" alt=\"The Grate Nicoli\"></div>');
        $('p').text('Howdy! I\'m FLOWEY! FLOWEY the FLOWER!');
    }
})
