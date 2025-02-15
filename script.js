document.addEventListener("DOMContentLoaded", function () {
    const processButton = document.getElementById('processButton');
    const numberInput = document.getElementById('numberInput');
    const responseText = document.getElementById('responseText');
    if (processButton) {
        processButton.addEventListener('click', () => {
            const inputValue = numberInput.value;
            if (inputValue === "") {
                responseText.textContent = "Please enter a number.";
                return;
            }
            const number = parseInt(inputValue, 10);
            if (isNaN(number)) {
                responseText.textContent = "Invalid input. Please enter a valid number.";
                return;
            }
            // Fun fact logic
            if (number % 2 === 0) {
                responseText.textContent = `The number ${number} is even. F
    un fact: Did you know ${number * 2} is twice as much?`;
            } else {
                responseText.textContent = `The number ${number} is odd. Fu
    n fact: The next odd number is ${number + 2}!`;
            }
        });
    } else {
        console.error("Process button not found");
    }
});