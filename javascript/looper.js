$(function () {
    var continueSpam = false;

    function stopSpam() {
        continueSpam = false;
        $("#spambutton").off("click");
        $("#spambutton").on("click", startSpam);
        $("#spambutton").text("Start Spam");
    }

    function startSpam() {
        continueSpam = true;
        $("#spambutton").off("click");
        $("#spambutton").on("click", stopSpam);
        $("#spambutton").text("Stop Spam");
        spamCheck();
    }

    function spamCheck() {
        if (continueSpam === true) {
            var nicoliNet = new Audio('sound/Nicolinet Theme.m4a');
            nicoliNet.play();
            setTimeout(spamCheck, 100);
        }
    }
    $("#spambutton").on("click", startSpam);
})
