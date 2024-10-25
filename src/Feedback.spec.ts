import { beforeEach, describe, expect, it } from "vitest";
import Feedback from "./Feedback";

describe("Feedback", () => {
  let feedback: Feedback;
  let feedbackElement: HTMLParagraphElement;

  beforeEach(() => {
    document.body.innerHTML = '<p id="feedback"></p>';
    feedbackElement = <HTMLParagraphElement>document.getElementById("feedback");
    feedback = new Feedback();
  });

  it('should display "this bsn is not valid" with red color when displayNotValid is called', () => {
    feedback.displayNotValid();
    expect(feedbackElement.textContent).toBe("this bsn is not valid");
    expect(feedbackElement.style.opacity).toBe("100");
    expect(feedbackElement.style.color).toBe("red");
  });

  it('should display "this is a valid bsn" with green color when displayValid is called', () => {
    feedback.displayValid();
    expect(feedbackElement.textContent).toBe("this is a valid bsn");
    expect(feedbackElement.style.opacity).toBe("100");
    expect(feedbackElement.style.color).toBe("green");
  });

  it("should reset the feedback element when reset is called", () => {
    feedback.reset();
    expect(feedbackElement.textContent).toBe("placeholder");
    expect(feedbackElement.style.opacity).toBe("0");
  });
});
