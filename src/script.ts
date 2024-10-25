import { isValidBSN } from "bsn-js";
import BsnGeneratorBtn from "./BsnGeneratorButton";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

const BSNtool = () => {
  const bsnValidatorBtn = <HTMLButtonElement>(
    document.getElementById("bsn-validator-btn")
  );
  const copyButton = new CopyButton();
  const feedback = new Feedback();
  const bsnNumber = new BsnNumber(feedback, copyButton);

  const bsnGeneratorBtn = new BsnGeneratorBtn(feedback, copyButton, bsnNumber);

  bsnGeneratorBtn.onClick();

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
