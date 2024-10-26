import { isValidBSN } from "bsn-js";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import BsnNumber from "./BsnNumber";
import BsnValidatorBtn from "./BsnValidatorButton";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

vi.mock("bsn-js", () => ({
  isValidBSN: vi.fn(),
}));

describe("BsnValidatorBtn", () => {
  let feedback: Feedback;
  let copyButton: CopyButton;
  let bsnNumber: BsnNumber;
  let buttonElement: HTMLButtonElement;

  beforeEach(() => {
    document.body.innerHTML = '<button id="bsn-validator-btn"></button>';
    buttonElement = document.getElementById(
      "bsn-validator-btn",
    ) as HTMLButtonElement;

    feedback = { update: vi.fn() } as unknown as Feedback;

    copyButton = { display: vi.fn() } as unknown as CopyButton;

    bsnNumber = { value: "" } as unknown as BsnNumber;

    new BsnValidatorBtn(feedback, copyButton, bsnNumber);
  });

  it("should validate BSN and update feedback on button click", () => {
    (isValidBSN as Mock).mockReturnValue(true);
    bsnNumber.value = "123456789";
    buttonElement.click();

    expect(feedback.update).toHaveBeenCalledWith("123456789", true);
    expect(copyButton.display).toHaveBeenCalled();
  });

  it("should not display copy button if BSN is invalid", () => {
    (isValidBSN as Mock).mockReturnValue(false);
    bsnNumber.value = "123456789";
    buttonElement.click();

    expect(feedback.update).toHaveBeenCalledWith("123456789", false);
    expect(copyButton.display).not.toHaveBeenCalled();
  });
});
