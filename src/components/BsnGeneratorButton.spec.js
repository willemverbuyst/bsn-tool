import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

vi.mock("../store", () => ({
  store: {
    generateBsn: vi.fn(),
  },
}));

import BsnGeneratorButton from "../components/BsnGeneratorButton.vue";
import { store } from "../store";

describe("BsnGeneratorButton.vue", () => {
  it("renders the button with correct caption", () => {
    const wrapper = mount(BsnGeneratorButton);
    expect(wrapper.text()).toContain("generate BSN");
  });

  it("calls store.generateBsn when button is clicked", async () => {
    const wrapper = mount(BsnGeneratorButton);
    await wrapper.find("button").trigger("click");
    expect(store.generateBsn).toHaveBeenCalled();
  });
});
