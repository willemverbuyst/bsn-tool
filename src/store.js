import { generateBSN, isValidBSN } from "bsn-js";
import { reactive } from "vue";

export const store = reactive({
  bsn: "",
  bsnIsValid: false,
  bsnHasBeenValidated: false,
  generateBsn() {
    this.bsn = generateBSN();
  },
  validateBsn() {
    this.bsnIsValid = isValidBSN(this.bsn.trim());
    this.bsnHasBeenValidated = true;
  },
  resetValidation() {
    this.bsnIsValid = false;
    this.bsnHasBeenValidated = false;
  },
});
