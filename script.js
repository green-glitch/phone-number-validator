const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validatePhoneNumber = (phoneNumber) => {
  // Regular expression to match US phone numbers
  const phoneRegex = /^1?\s*(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
}


checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value.trim();
    if (phoneNumber === "") {
        alert("Please provide a phone number");
    }
    else {
        const isValid = validatePhoneNumber(phoneNumber);
        resultsDiv.textContent = isValid ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
    }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});