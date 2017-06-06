var msg

function generateNote(event) {
    var giver = document.getElementById('giver').value;
    var recipent = document.getElementById('recipent').value;
    var prez = document.getElementById('prez').value;
    var quantity = document.getElementById('quantity').value;
    var quantitySub = 'it',
        quantitySubCaps = 'It',
        quantitySubThing = 'is',
        quantityPred = 'it',
        quantityPredFar = 'that',
        giftNumber = 'gift';
    var adj1 = document.getElementById('adj1').value;
    var adj2 = document.getElementById('adj2').value;
    var giveradj = document.getElementById('giveradj').value;
    var starting = document.getElementById('starting').value;
    var closing = document.getElementById('closing').value;
    var custom = document.getElementById('custom').value;


    if (quantity === 'Multiple') {
        quantitySub = 'they';
        quantitySubCaps = 'They';
        quantitySubThing = 'are';
        quantityPred = 'them';
        quantityPredFar = 'those';
        giftNumber = 'gifts';
    }


    msg = 'Dear ' + giver + ", \n\n" + starting + ' ' + adj1 + ' ' + prez + ' you gave me! ' + quantitySubCaps + ' ' + quantitySubThing + ' really ' + adj2 + '. ' + ' ' + 'It was so ' + giveradj + ' of you to get me ' + quantityPredFar + ' ' + giftNumber + '. ' + custom + '\n\n' + closing + '\n\n' + recipent;

    event.preventDefault();


    var output = document.getElementById('output');

    output.textContent = msg;
}

var elForm = document.getElementById('form');

elForm.addEventListener('submit', generateNote, false);
