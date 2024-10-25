import { generateBSN, isValidBSN } from "bsn-js";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

const BSNtool = () => {
  const bsnGeneratorBtn = <HTMLButtonElement>(
    document.getElementById("bsn-generator-btn")
  );
  const bsnValidatorBtn = <HTMLButtonElement>(
    document.getElementById("bsn-validator-btn")
  );
  const copyButton = new CopyButton();
  const feedback = new Feedback();
  const bsnNumber = new BsnNumber(feedback, copyButton);

  bsnGeneratorBtn.addEventListener("click", () => {
    feedback.reset();

    const newBSN = generateBSN();
    bsnNumber.value = newBSN;

    copyButton.display();
  });

  bsnValidatorBtn.addEventListener("click", () => {
    const inputValue = bsnNumber && bsnNumber?.value.trim();
    const isValid = isValidBSN(inputValue);

    feedback.update(inputValue, isValid);

    if (isValid) {
      copyButton.display();
    }
  });

  copyButton.listen(bsnNumber);
};

BSNtool();
