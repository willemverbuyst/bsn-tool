import { isValidBSN } from "bsn-js";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

export default class BsnValidatorBtn {
  bsnValidatorBtn = <HTMLButtonElement>(
    document.getElementById("bsn-validator-btn")
  );

  constructor(
    private feedback: Feedback,
    private copyButton: CopyButton,
    private bsnNumber: BsnNumber,
  ) {
    this.bsnValidatorBtn.addEventListener("click", () => {
      const inputValue = this.bsnNumber?.value.trim();
      const isValid = isValidBSN(inputValue);

      this.feedback.update(inputValue, isValid);

      if (isValid) {
        this.copyButton.display();
      }
    });
  }
}
