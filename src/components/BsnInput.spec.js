import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../store", () => ({
  store: {
    bsn: "",
    bsnIsValid: false,
    resetValidation: vi.fn(),
  },
}));

import { store } from "../store";
import BsnInput from "./BsnInput.vue";

describe("BsnInput.vue", () => {
  beforeEach(() => {
    store.bsn = "";
    store.bsnIsValid = false;
    store.resetValidation.mockClear();
  });

  it("renders the input element with correct attributes", () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);
    expect(input.attributes("type")).toBe("text");
    expect(input.attributes("name")).toBe("bsn");
    expect(input.attributes("aria-label")).toBe("bsn");
    expect(input.attributes("placeholder")).toBe("enter bsn");
  });

  it("updates store.bsn when typing in the input (v-model)", async () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    await input.setValue("123456789");
    expect(store.bsn).toBe("123456789");
  });

  it("calls store.resetValidation() on input event", async () => {
    const wrapper = mount(BsnInput);
    const input = wrapper.find("input");

    await input.trigger("input");
    expect(store.resetValidation).toHaveBeenCalledTimes(1);
  });

  it("does not render copy button when store.bsnIsValid is false", () => {
    store.bsnIsValid = false;
    const wrapper = mount(BsnInput);
    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("renders copy button when store.bsnIsValid is true", () => {
    store.bsnIsValid = true;
    const wrapper = mount(BsnInput);

    const button = wrapper.find('button[aria-label="copy-button"]');
    expect(button.exists()).toBe(true);

    const icon = wrapper.find("#bsn__copy-icon");
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain("fa");
    expect(icon.classes()).toContain("fa-copy");
  });
});
