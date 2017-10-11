function testSettings() {
    var cardWidth = document.getElementById('cardwidth').value;
    var cardHeight = document.getElementById('cardheight').value;
    var fontSize = document.getElementById('fontsize').value;
    var style = 'width: ' + cardWidth + 'in; height: ' + cardHeight + 'in; font-size: ' + fontSize + 'px;'
    var testBox = document.getElementById('output');
    testBox.setAttribute('style', style);
}
