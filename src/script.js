import { generateBSN, isValidBSN } from "bsn-js";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

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
