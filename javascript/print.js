function printElement() {
    var cardWidth = document.getElementById('cardwidth').value + 'in';
    var cardHeight = document.getElementById('cardheight').value + 'in';
    var fontSize = document.getElementById('fontsize').value;
    if (cardHeight === 'in') {
        cardHeight = '150px';
    }
    if (cardWidth === 'in') {
        cardWidth = '300px';
    }
    if (fontSize === '') {
        fontSize = '13';
    }
    var style = 'width: ' + cardWidth + '; height: ' + cardHeight + '; font-size: ' + fontSize + 'px; border-width: 0px; resize: none;';
    var textArea = '<textarea style=\'' + style + '\'>';
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    var message = textArea + msg + '</textarea>';
    pri.document.open();
    pri.document.write(message);
    pri.document.close();
    pri.focus();
    pri.print();
}
