$(function () {
    //if the terms of service have not been agreed to:
    if (localStorage.getItem('agreeToTerms') === null) {
        //create the terms of service popup
        var termsOfService = '<div id=\"termsmsg\"><div class=\"closecontain\"><p id=\"closeterms\">close(X)</p></div>';
        termsOfService += '<div class=\"mainterms\"><h2><span value="PLAY" onclick="play()">NicoliNet</span> Terms Of Service</h2>';
        termsOfService += '<p class=\"termsMsg\">By continuing to use this website and clicking the \"close\" button, you agree to the <a href=\"https://docs.google.com/document/d/17u8jDD4yA9rKGVJJOwuPl9kaItxWLDiuzDr9ZVq89so/edit?usp=sharing\"><span class=\"NicoliNet\" value=\"PLAY\" onclick=\"play()\">NicoliNet</span> Terms of Service</a>.</p></div></div>';
        //add terms popup to page
        $('.heading').after(termsOfService);
        //when the close button is clicked, remove the terms and mark the terms of service as agreed to
        $('#closeterms').on('click', function () {
            $('#termsmsg').remove();
            localStorage.setItem('agreeToTerms', 'true');
        });
    };
});
