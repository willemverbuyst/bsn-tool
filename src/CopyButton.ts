export default class CopyButton {
  button = <HTMLButtonElement>(
    document.getElementById("bsn-number__copy-button")
  );
  copyIcon = <HTMLSpanElement>document.getElementById("bsn-number__copy-icon");

  hide() {
    this.copyIcon.classList.replace("fa-check", "fa-copy");
    this.button.style.display = "none";
  }

  display() {
    this.copyIcon.classList.replace("fa-check", "fa-copy");
    this.button.style.display = "block";
  }

  displayCheckMark() {
    this.copyIcon.classList.replace("fa-copy", "fa-check");
    this.button.style.display = "block";
  }

  listen(bsnNumber: HTMLInputElement) {
    this.button.addEventListener("click", () => {
      this.displayCheckMark();
      navigator.clipboard.writeText(bsnNumber.value);
    });
  }
}
