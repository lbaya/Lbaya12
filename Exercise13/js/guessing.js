$(document).ready(function() {
    // run function on initial page load
    numberGuess();
});
 
function numberGuess() {
    var number = Math.floor(Math.random() * 20 + 1);
    /*console.log(20);*/
    $('#submit').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if (number == guess) {
            $('h1').text(number + ' is right!');
            $('input').val('');
        } else if (number < guess) {
            $('h1').text(guess + ' is too high');
            $('input').val('')
        } else {
            $('h1').text(guess + ' is too low');
            $('input').val('');
        }
    })
}