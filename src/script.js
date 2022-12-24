import { generateBSN, isValidBSN } from "bsn-js";

const BSNtool = () => {
  const bsnNumber = document.getElementById("bsn-number");
  const feedback = document.getElementById("feedback");
  const bsnGeneratorBtn = document.getElementById("bsn-generator-btn");
  const bsnValidatorBtn = document.getElementById("bsn-validator-btn");

  const validateBSN = (inputValue) => {
    const isValid = isValidBSN(inputValue);

    if (inputValue !== "" && !isValid) {
      feedback.textContent = "this bsn is not valid";
      feedback.style.opacity = "100";
      feedback.style.color = "red";
    } else if (inputValue !== "" && isValid) {
      feedback.textContent = "this is a valid bsn";
      feedback.style.opacity = "100";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "placeholder";
      feedback.style.opacity = "0";
    }
  };

  bsnGeneratorBtn.addEventListener("click", () => {
    const newBSN = generateBSN();

    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";
    bsnNumber.value = newBSN;
  });

  bsnValidatorBtn.addEventListener("click", () => {
    const inputValue = bsnNumber.value.trim();
    validateBSN(inputValue);
  });

  bsnNumber.addEventListener("input", () => {
    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";
  });

  bsnNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputValue = bsnNumber.value.trim();
      validateBSN(inputValue);
    }
  });
};

BSNtool();
