import { generateBSN, isValidBSN } from "bsn-js";
import { reactive } from "vue";

export const store = reactive({
  bsn: "",
  generateBsn() {
    this.bsn = generateBSN();
  },
  validateBsn() {
    return isValidBSN(this.bsn);
  },
});
