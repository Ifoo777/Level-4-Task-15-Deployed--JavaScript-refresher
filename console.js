//jQuery run once document has loaded
$(document).ready(function () {


    /*Create a Console like console for the web page*/
    // Get elements by class
    const consoleInput = document.querySelector(".console-input");
    const historyContainer = document.querySelector(".console-history");

    // Function to render the input and output of the formula entered
    function addResult(inputAsString, output) {
        // Keep the array brackets
        const outputAsString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();

        // Create a div and add the class for the input formula
        const inputLogElement = document.createElement("div");
        inputLogElement.classList.add("console-input-log");

        // Create a div and add the class for the output result
        const outputLogElement = document.createElement("div");
        outputLogElement.classList.add("console-output-log");

        // Populate the input and output that have been created
        inputLogElement.textContent = `>${inputAsString}`;
        outputLogElement.textContent = outputAsString;

        // Append the child into the selected parent
        historyContainer.append(inputLogElement, outputLogElement);

    }

    // Add an event listener to the selected element consoleInput
    consoleInput.addEventListener("keyup", e => {

        // Get the value and trim it
        const code = consoleInput.value.trim();
        // For the calculation, remove "console.log" because we are already displaying in the console
        const newCode = code.replace("console.log", "")

        // If there is no input, return
        if (code.length === 0) {
            return;
        }
        /* 
        If there is an input, try to work out the result with eval
        If fail, then catch with displaying input and display error message
        */
        if (e.key === "Enter") {
            try {
                addResult(code, eval(newCode));
            } catch (error) {
                addResult(code, error);
            }
            // refresh the input to value to nothing so the user can enter a new input
            consoleInput.value = "";
        }
    })

});