import { generateBSN, isValidBSN } from "bsn-js";

const BSNtool = () => {
  const bsnNumber = document.getElementById("bsn-number");
  const feedback = document.getElementById("feedback");
  const bsnGeneratorBtn = document.getElementById("bsn-generator-btn");
  const bsnValidatorBtn = document.getElementById("bsn-validator-btn");
  const copyButton = document.getElementById("bsn-number__copy-button");
  const copyIcon = document.getElementById("bsn-number__copy-icon");

  function displayCopyButton() {
    copyIcon.classList.replace("fa-check", "fa-copy");
    copyButton.style.display = "block";
  }

  function hideCopyButton() {
    copyIcon.classList.replace("fa-check", "fa-copy");
    copyButton.style.display = "none";
  }

  function displayCheckMark() {
    copyIcon.classList.replace("fa-copy", "fa-check");
    copyButton.style.display = "block";
  }

  function updateFeedbackStylesAfterValidation(inputValue, isValid) {
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
  }

  bsnGeneratorBtn.addEventListener("click", () => {
    const newBSN = generateBSN();

    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";
    bsnNumber.value = newBSN;

    displayCopyButton();
  });

  bsnValidatorBtn.addEventListener("click", () => {
    const inputValue = bsnNumber.value.trim();
    const isValid = isValidBSN(inputValue);
    updateFeedbackStylesAfterValidation(inputValue, isValid);

    if (isValid) {
      displayCopyButton();
    }
  });

  bsnNumber.addEventListener("input", () => {
    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";

    hideCopyButton();
  });

  bsnNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputValue = bsnNumber.value.trim();
      const isValid = isValidBSN(inputValue);
      updateFeedbackStylesAfterValidation(inputValue, isValid);

      if (isValid) {
        displayCopyButton();
      }
    }
  });

  copyButton.addEventListener("click", () => {
    displayCheckMark();
    navigator.clipboard.writeText(bsnNumber.value);
  });
};

BSNtool();
