import { generateBSN } from "bsn-js";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

export default class BsnGeneratorBtn {
  bsnGeneratorBtn = <HTMLButtonElement>(
    document.getElementById("bsn-generator-btn")
  );

  constructor(
    private feedback: Feedback,
    private copyButton: CopyButton,
    private bsnNumber: BsnNumber,
  ) {
    this.bsnGeneratorBtn.addEventListener("click", () => {
      this.feedback.reset();

      const newBSN = generateBSN();
      this.bsnNumber.value = newBSN;

      this.copyButton.display();
    });
  }
}
