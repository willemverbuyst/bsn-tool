import { describe, expect, it, vi } from "vitest";
import BsnGeneratorBtn from "./BsnGeneratorButton";
import BsnNumber from "./BsnNumber";
import BsnValidatorBtn from "./BsnValidatorButton";
import CopyButton from "./CopyButton";
import Feedback from "./Feedback";
import { startBsnTool } from "./script";

vi.mock("./CopyButton");
vi.mock("./Feedback");
vi.mock("./BsnNumber");
vi.mock("./BsnGeneratorButton");
vi.mock("./BsnValidatorButton");

describe("startBsnTool", () => {
  it("should initialize and set up the BSN tool components correctly", () => {
    startBsnTool();

    expect(CopyButton).toHaveBeenCalled();
    expect(Feedback).toHaveBeenCalled();
    expect(BsnNumber).toHaveBeenCalledWith(
      expect.any(Feedback),
      expect.any(CopyButton),
    );
    expect(BsnGeneratorBtn).toHaveBeenCalledWith(
      expect.any(Feedback),
      expect.any(CopyButton),
      expect.any(BsnNumber),
    );
    expect(BsnValidatorBtn).toHaveBeenCalledWith(
      expect.any(Feedback),
      expect.any(CopyButton),
      expect.any(BsnNumber),
    );
    expect(CopyButton.prototype.listen).toHaveBeenCalledWith(
      expect.any(BsnNumber),
    );
  });
});
