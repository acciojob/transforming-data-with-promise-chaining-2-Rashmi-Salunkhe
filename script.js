//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const output = document.getElementById('output');
    output.textContent = '';

    // Create a function that returns a promise which resolves after a given time
    function delayOperation(value, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, time);
        });
    }

    // Step 1: Start by resolving the input after 2 seconds
    delayOperation(Number(input), 2000)
        .then(result => {
            output.textContent = `Result: ${result}`; // Display initial input value
            return delayOperation(result * 2, 1000);   // Step 2: Multiply by 2
        })
        .then(result => {
            output.textContent = `Result: ${result}`; // Display after multiplying by 2
            return delayOperation(result - 3, 1000);  // Step 3: Subtract 3
        })
        .then(result => {
            output.textContent = `Result: ${result}`; // Display after subtracting 3
            return delayOperation(result / 2, 1000);  // Step 4: Divide by 2
        })
        .then(result => {
            output.textContent = `Result: ${result}`; // Display after dividing by 2
            return delayOperation(result + 10, 1000); // Step 5: Add 10
        })
        .then(result => {
            output.textContent = `Final Result: ${result}`; // Display final result
        })
        .catch(error => {
            output.textContent = `Error: ${error}`; // Handle any error
        });
});
