import { isValidBSN } from "bsn-js";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

vi.mock("bsn-js", () => ({
  isValidBSN: vi.fn(),
}));

describe("BsnNumber", () => {
  let feedback: Feedback;
  let copyButton: CopyButton;
  let bsnNumber: BsnNumber;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    document.body.innerHTML = '<input id="bsn-number" />';
    inputElement = <HTMLInputElement>document.getElementById("bsn-number");
    feedback = {
      reset: vi.fn(),
      update: vi.fn(),
    } as unknown as Feedback;
    copyButton = {
      removeCheckMark: vi.fn(),
      display: vi.fn(),
    } as unknown as CopyButton;
    bsnNumber = new BsnNumber(feedback, copyButton);
  });

  it("should reset feedback and remove check mark on input", () => {
    const inputEvent = new Event("input");
    inputElement.dispatchEvent(inputEvent);

    expect(feedback.reset).toHaveBeenCalled();
    expect(copyButton.removeCheckMark).toHaveBeenCalled();
  });

  it("should update feedback and display copy button on valid BSN", () => {
    const keyPressEvent = new KeyboardEvent("keypress", { key: "Enter" });
    inputElement.value = "123456789";
    (isValidBSN as Mock).mockReturnValue(true);

    bsnNumber.onKeyPress();
    inputElement.dispatchEvent(keyPressEvent);

    expect(isValidBSN).toHaveBeenCalledWith("123456789");
    expect(feedback.update).toHaveBeenCalledWith("123456789", true);
    expect(copyButton.display).toHaveBeenCalled();
  });

  it("should update feedback and not display copy button on invalid BSN", () => {
    const keyPressEvent = new KeyboardEvent("keypress", { key: "Enter" });
    inputElement.value = "invalid";
    (isValidBSN as Mock).mockReturnValue(false);

    bsnNumber.onKeyPress();
    inputElement.dispatchEvent(keyPressEvent);

    expect(isValidBSN).toHaveBeenCalledWith("invalid");
    expect(feedback.update).toHaveBeenCalledWith("invalid", false);
    expect(copyButton.display).not.toHaveBeenCalled();
  });

  it("should get and set value correctly", () => {
    bsnNumber.value = "987654321";
    expect(bsnNumber.value).toBe("987654321");
  });
});
