window.onload = function() {
    //Find buttons
    var buttons = document.getElementsByTagName('span');
    var result = document.querySelectorAll('.result p')[0];
    var clear = document.getElementsByClassName('clear')[0];

    //Add button listeners
    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i));
        } else {
            buttons[i].addEventListener("click", addValue(i));
        }
    }
    
    //addValue Function
    function addValue(i) {
        return function() {
            result.innerHTML += buttons[i].innerHTML;
        }
    }
    
    //calculate function using eval()
    function calculate(i) {
        return function () {
            var initialResult = result.innerHTML;
            var baseTen = initialResult.replace(/\d+/g, function(num) {
                return parseInt(num, 10);
            });
            result.innerHTML = eval(baseTen);
        };
    }
    
    //clear function
    clear.onclick = function() {
        result.innerHTML = '';
    }
}