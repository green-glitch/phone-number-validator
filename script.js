const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("result-div");

const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
}


checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value.trim();
    if (phoneNumber === "") {
        alert("Please provide a phone number");
    }
    else {
        const isValid = validatePhoneNumber(phoneNumber);
        resultDiv.textContent = isValid ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
    }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultDiv.textContent = "";
});