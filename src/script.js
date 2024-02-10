/* eslint-disable max-classes-per-file */
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

class Feedback {
  feedback = document.getElementById("feedback");

  displayNotValid() {
    this.feedback.textContent = "this bsn is not valid";
    this.feedback.style.opacity = "100";
    this.feedback.style.color = "red";
  }

  displayValid() {
    this.feedback.textContent = "this is a valid bsn";
    this.feedback.style.opacity = "100";
    this.feedback.style.color = "green";
  }

  reset() {
    this.feedback.textContent = "placeholder";
    this.feedback.style.opacity = "0";
  }
}

const BSNtool = () => {
  const bsnNumber = document.getElementById("bsn-number");
  const bsnGeneratorBtn = document.getElementById("bsn-generator-btn");
  const bsnValidatorBtn = document.getElementById("bsn-validator-btn");
  const copyButton = new CopyButton();
  const feedback = new Feedback();

  function updateFeedbackStylesAfterValidation(inputValue, isValid) {
    if (inputValue !== "" && !isValid) {
      feedback.displayNotValid();
    } else if (inputValue !== "" && isValid) {
      feedback.displayValid();
    } else {
      feedback.reset();
    }
  }

  bsnGeneratorBtn.addEventListener("click", () => {
    feedback.reset();

    const newBSN = generateBSN();
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
    feedback.reset();
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
