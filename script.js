function calculateAge() {
    let humanAge = document.getElementById("ageInput").value;
    let resultText = document.getElementById("resultText");

    if (humanAge === "" || humanAge < 0) {
        resultText.innerHTML = "Please enter a valid age!";
        return;
    }

    let dogAge = 0;
    if (humanAge == 1) {
        dogAge = 15;
    } else if (humanAge == 2) {
        dogAge = 24;
    } else {
        // First 2 years = 21 dog years, remaining years = 4 dog years each
        dogAge = 24 + (humanAge - 2) * 4;
    }

    resultText.innerHTML = `Your dog is roughly <strong>${dogAge}</strong> years old in dog years!`;
}
