import { beforeEach, describe, expect, it, vi } from "vitest";
import BsnNumber from "./BsnNumber";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

describe("CopyButton", () => {
  let copyButton: CopyButton;
  let button: HTMLButtonElement;
  let copyIcon: HTMLSpanElement;
  let bsnNumber: BsnNumber;
  let feedback: Feedback;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input
          type="text"
          name="bsn-number"
          id="bsn-number"
          aria-label="bsn-number"
        />
        <button id="bsn-number__copy-button" type="button">
          <i class="fa fa-copy" id="bsn-number__copy-icon"></i>
        </button>
      </div>
    `;

    button = <HTMLButtonElement>(
      document.getElementById("bsn-number__copy-button")
    );
    copyIcon = <HTMLSpanElement>(
      document.getElementById("bsn-number__copy-icon")
    );

    copyButton = new CopyButton();
    feedback = new Feedback();
    bsnNumber = new BsnNumber(feedback, copyButton);
  });

  it("should hide the button and set the correct icon class", () => {
    copyButton.hide();
    expect(copyIcon.classList.contains("fa-check")).toBe(false);
    expect(copyIcon.classList.contains("fa-copy")).toBe(true);
    expect(button.style.display).toBe("none");
  });

  it("should display the button and set the correct icon class", () => {
    copyButton.display();
    expect(copyIcon.classList.contains("fa-check")).toBe(false);
    expect(copyIcon.classList.contains("fa-copy")).toBe(true);
    expect(button.style.display).toBe("block");
  });

  it("should display the button and set the check mark icon class", () => {
    copyButton.displayCheckMark();
    expect(copyIcon.classList.contains("fa-copy")).toBe(false);
    expect(copyIcon.classList.contains("fa-check")).toBe(true);
    expect(button.style.display).toBe("block");
  });

  it("should set up the click event listener and copy text to clipboard", () => {
    const writeTextMock = vi.fn();
    vi.spyOn(navigator.clipboard, "writeText").mockImplementation(
      writeTextMock,
    );

    bsnNumber.value = "123456789";

    copyButton.listen(bsnNumber);
    button.click();

    expect(writeTextMock).toHaveBeenCalledWith("123456789");
    expect(copyIcon.classList.contains("fa-copy")).toBe(false);
    expect(copyIcon.classList.contains("fa-check")).toBe(true);
    expect(button.style.display).toBe("block");
  });
});
