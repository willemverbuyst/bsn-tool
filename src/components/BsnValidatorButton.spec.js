import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

// Mock the store
vi.mock("../store", () => ({
  store: {
    validateBsn: vi.fn(),
  },
}));

import BsnValidatorButton from "../components/BsnValidatorButton.vue";
import { store } from "../store";

describe("BsnValidatorButton.vue", () => {
  it("renders the button with correct caption", () => {
    const wrapper = mount(BsnValidatorButton);
    expect(wrapper.text()).toContain("validate BSN");
  });

  it("calls store.generateBsn when button is clicked", async () => {
    const wrapper = mount(BsnValidatorButton);
    await wrapper.find("button").trigger("click");
    expect(store.validateBsn).toHaveBeenCalled();
  });
});
