import BsnGeneratorBtn from "./BsnGeneratorButton";
import BsnNumber from "./BsnNumber";
import BsnValidatorBtn from "./BsnValidatorButton";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";

const BsnTool = () => {
  const copyButton = new CopyButton();
  const feedback = new Feedback();
  const bsnNumber = new BsnNumber(feedback, copyButton);
  const bsnGeneratorBtn = new BsnGeneratorBtn(feedback, copyButton, bsnNumber);
  const bsnValidatorBtn = new BsnValidatorBtn(feedback, copyButton, bsnNumber);

  bsnGeneratorBtn.onClick();
  bsnValidatorBtn.onClick();
  copyButton.listen(bsnNumber);
};

BsnTool();
