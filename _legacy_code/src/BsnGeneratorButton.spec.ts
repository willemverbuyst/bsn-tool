import { generateBSN } from "bsn-js";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import BsnGeneratorBtn from "./BsnGeneratorButton";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

vi.mock("bsn-js", () => ({
  generateBSN: vi.fn(),
}));

describe("BsnGeneratorBtn", () => {
  let feedback: Feedback;
  let copyButton: CopyButton;
  let bsnNumber: BsnNumber;
  let buttonElement: HTMLButtonElement;

  beforeEach(() => {
    document.body.innerHTML = '<button id="bsn-generator-btn"></button>';
    buttonElement = document.getElementById(
      "bsn-generator-btn",
    ) as HTMLButtonElement;
    feedback = {
      reset: vi.fn(),
    } as unknown as Feedback;
    copyButton = {
      display: vi.fn(),
    } as unknown as CopyButton;
    bsnNumber = {
      value: "",
    } as unknown as BsnNumber;
    new BsnGeneratorBtn(feedback, copyButton, bsnNumber);
  });

  it("should reset feedback, generate a new BSN, set bsnNumber value, and display copyButton on click", () => {
    const mockBSN = "123456789";
    (generateBSN as Mock).mockReturnValue(mockBSN);

    buttonElement.click();

    expect(feedback.reset).toHaveBeenCalled();
    expect(generateBSN).toHaveBeenCalled();
    expect(bsnNumber.value).toBe(mockBSN);
    expect(copyButton.display).toHaveBeenCalled();
  });
});
