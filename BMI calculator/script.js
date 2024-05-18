const form = document.querySelector('form')

// This will give empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Show the results div
    document.querySelector('#results').style.display = 'block';

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === ' ' || height < 0 || isNaN(height) || height === 0) {
        results.innerHTML = "Please give a valid height"
    } else if (weight === ' ' || weight < 0 || isNaN(weight) || weight === 0) {
        results.innerHTML = "Please give a valid weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;

        // Display a message based on the BMI value
        if (bmi < 18.6) {
            results.innerHTML += '<br>You are underweight.';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML += '<br>You have a normal weight.';
        } else {
            results.innerHTML += '<br>You are overweight.';
        }
    }

})

