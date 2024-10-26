export default class Feedback {
  feedback = <HTMLParagraphElement>document.getElementById("feedback");

  displayNotValid() {
    this.feedback.textContent = "this bsn is not valid";
    this.feedback.style.opacity = "100";
    this.feedback.style.color = "red";
  }

  displayValid() {
    this.feedback.textContent = "this is a valid bsn";
    this.feedback.style.opacity = "100";
    this.feedback.style.color = "green";
  }

  reset() {
    this.feedback.textContent = "placeholder";
    this.feedback.style.opacity = "0";
  }

  update(inputValue: string, isValid: boolean) {
    if (inputValue !== "" && !isValid) {
      this.displayNotValid();
    } else if (inputValue !== "" && isValid) {
      this.displayValid();
    } else {
      this.reset();
    }
  }
}
