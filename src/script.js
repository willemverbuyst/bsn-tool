import { generateBSN, isValidBSN } from "bsn-js";

class CopyButton {
  button = document.getElementById("bsn-number__copy-button");

  copyIcon = document.getElementById("bsn-number__copy-icon");

  hide() {
    this.copyIcon.classList.replace("fa-check", "fa-copy");
    this.button.style.display = "none";
  }

  display() {
    this.copyIcon.classList.replace("fa-check", "fa-copy");
    this.button.style.display = "block";
  }

  displayCheckMark() {
    this.copyIcon.classList.replace("fa-copy", "fa-check");
    this.button.style.display = "block";
  }

  listen(bsnNumber) {
    this.button.addEventListener("click", () => {
      this.displayCheckMark();
      navigator.clipboard.writeText(bsnNumber.value);
    });
  }
}

const BSNtool = () => {
  const bsnNumber = document.getElementById("bsn-number");
  const feedback = document.getElementById("feedback");
  const bsnGeneratorBtn = document.getElementById("bsn-generator-btn");
  const bsnValidatorBtn = document.getElementById("bsn-validator-btn");
  const copyButton = new CopyButton();

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

    copyButton.display();
  });

  bsnValidatorBtn.addEventListener("click", () => {
    const inputValue = bsnNumber.value.trim();
    const isValid = isValidBSN(inputValue);
    updateFeedbackStylesAfterValidation(inputValue, isValid);

    if (isValid) {
      copyButton.display();
    }
  });

  bsnNumber.addEventListener("input", () => {
    feedback.textContent = "placeholder";
    feedback.style.opacity = "0";

    copyButton.hide();
  });

  bsnNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputValue = bsnNumber.value.trim();
      const isValid = isValidBSN(inputValue);
      updateFeedbackStylesAfterValidation(inputValue, isValid);

      if (isValid) {
        copyButton.display();
      }
    }
  });

  copyButton.listen(bsnNumber);
};

BSNtool();
