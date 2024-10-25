import { isValidBSN } from "bsn-js";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

export default class BsnNumber {
  bsnNumber = <HTMLInputElement>document.getElementById("bsn-number");

  constructor(
    private feedback: Feedback,
    private copyButton: CopyButton,
  ) {}

  onInput() {
    this.bsnNumber.addEventListener("input", () => {
      this.feedback.reset();
      this.copyButton.hide();
    });
  }

  onKeyPress() {
    this.bsnNumber.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const inputValue = this.bsnNumber.value.trim();
        const isValid = isValidBSN(inputValue);
        this.feedback.update(inputValue, isValid);

        if (isValid) {
          this.copyButton.display();
        }
      }
    });
  }

  get value() {
    return this.bsnNumber.value;
  }

  set value(value: string) {
    this.bsnNumber.value = value;
  }
}
