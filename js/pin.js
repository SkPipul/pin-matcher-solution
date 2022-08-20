function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const generateInputField = document.getElementById('generate-input');
    generateInputField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const prevTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = prevTypedNumber.split('');
            digits.pop();
            const digitsNumber = digits.join('');
            typedNumberField.value = digitsNumber;
        }
    }
    else{
        const newTypedNumber = prevTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const generateInputField = document.getElementById('generate-input');
    const typedNumberField = document.getElementById('typed-number');

    const wrongPin = document.getElementById('wrong-pin');
    const matchedPin = document.getElementById('matched-pin')

    if(generateInputField.value === typedNumberField.value){
        // matchedPin.style.display = 'block'
        window.location.href = 'https://skpipul.github.io/baap-er-bank/'
        wrongPin.style.display = 'none'
    }
    else{
        matchedPin.style.display = 'none'
        wrongPin.style.display = 'block'
    }
})