import { generateBSN, isValidBSN } from "bsn-js";

const BSNtool = () => {
  const bsnNumber = document.getElementById("bsn-number");
  const feedback = document.getElementById("feedback");
  const bsnGeneratorBtn = document.getElementById("bsn-generator-btn");
  const bsnValidatorBtn = document.getElementById("bsn-validator-btn");
  const copyButton = document.getElementById("bsn-number__copy-button");
  const copyIcon = document.getElementById("bsn-number__copy-icon");

  function updateStylesAfterValidation(inputValue, isValid) {
    if (inputValue !== "" && !isValid) {
      feedback.textContent = "this bsn is not valid";
      feedback.style.opacity = "100";
      feedback.style.color = "red";
      copyIcon.classList.replace("fa-check", "fa-copy");
      copyButton.style.display = "none";
    } else if (inputValue !== "" && isValid) {
      feedback.textContent = "this is a valid bsn";
      feedback.style.opacity = "100";
      feedback.style.color = "green";
      copyIcon.classList.replace("fa-check", "fa-copy");
      copyButton.style.display = "block";
    } else {
      feedback.textContent = "placeholder";
      feedback.style.opacity = "0";
      copyIcon.classList.replace("fa-check", "fa-copy");
      copyButton.style.display = "none";
    }
  }

  bsnGeneratorBtn.addEventListener("click", () => {
    const newBSN = generateBSN();

    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";
    bsnNumber.value = newBSN;
    copyIcon.classList.replace("fa-check", "fa-copy");
    copyButton.style.display = "block";
  });

  bsnValidatorBtn.addEventListener("click", () => {
    const inputValue = bsnNumber.value.trim();
    const isValid = isValidBSN(inputValue);
    updateStylesAfterValidation(inputValue, isValid);
  });

  bsnNumber.addEventListener("input", () => {
    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";
    copyButton.style.display = "none";
  });

  bsnNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputValue = bsnNumber.value.trim();
      const isValid = isValidBSN(inputValue);
      updateStylesAfterValidation(inputValue, isValid);
    }
  });

  copyButton.addEventListener("click", () => {
    copyIcon.classList.replace("fa-copy", "fa-check");
    navigator.clipboard.writeText(bsnNumber.value);
  });
};

BSNtool();
