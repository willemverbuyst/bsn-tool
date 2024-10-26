import BsnGeneratorBtn from "./BsnGeneratorButton";
import BsnNumber from "./BsnNumber";
import BsnValidatorBtn from "./BsnValidatorButton";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

export const startBsnTool = () => {
  const copyButton = new CopyButton();
  const feedback = new Feedback();
  const bsnNumber = new BsnNumber(feedback, copyButton);

  new BsnGeneratorBtn(feedback, copyButton, bsnNumber);
  new BsnValidatorBtn(feedback, copyButton, bsnNumber);

  copyButton.listen(bsnNumber);
};

startBsnTool();
